const { StatusCodes } = require('http-status-codes');
const ModelRecipes = require('../../models/recipes');
const { wrongRecipeId, required, notUserRecipe } = require('../../utilities/setErrors');
const { validateUpdateRecipe } = require('./validations');

const recipeValidation = (recipe) => {
  const validateError = validateUpdateRecipe(recipe).error;
  if (validateError) {
    return required;
  }
};

module.exports = async (recipe, id, user) => {
  recipeValidation(recipe);
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
  
  await ModelRecipes.update(recipe, id);
  
  const updatedRecipe = await ModelRecipes.find(id);
    
  return { status: StatusCodes.OK, message: updatedRecipe };
};