const { StatusCodes } = require('http-status-codes');
const ModelRecipes = require('../../models/recipes');
const { wrongRecipeId, notUserRecipe } = require('../../utilities/setErrors');

module.exports = async (file, id, user) => {
  const { _id: getUserId } = user;

  if (id.length !== 24) {
    return wrongRecipeId;
  }
  const findRecipeById = await ModelRecipes.find(id);
  
  if (!findRecipeById) {
    return wrongRecipeId;
  }
  
  if (getUserId !== findRecipeById.userId && user.role === 'user') {
    return notUserRecipe;
  }
  
  await ModelRecipes.upload(file, id);
  
  const updatedRecipe = await ModelRecipes.find(id);
      
  return { status: StatusCodes.OK, message: updatedRecipe };
};