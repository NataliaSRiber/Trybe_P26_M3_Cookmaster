const { StatusCodes } = require('http-status-codes');
const ModelRecipes = require('../../models/recipes');
const { wrongRecipeId, notUserRecipe } = require('../../utilities/setErrors');

module.exports = async (id, user) => {
  console.log(user);
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
  
  const deletedRecipe = await ModelRecipes.remove(id);
      
  return { status: StatusCodes.NO_CONTENT, message: deletedRecipe };
};