const { StatusCodes } = require('http-status-codes');
const ModelRecipes = require('../../models/recipes');
const { invalidEntriesRecipes } = require('../../utilities/setErrors');
const { validateRecipe } = require('./validations');

module.exports = async (recipe, user) => {
  const validateError = validateRecipe(recipe).error;
  
  if (validateError) {
    return invalidEntriesRecipes;
  }
  
  const newRecipe = await ModelRecipes.create(recipe, user);
  
  return { status: StatusCodes.CREATED, message: newRecipe };
};