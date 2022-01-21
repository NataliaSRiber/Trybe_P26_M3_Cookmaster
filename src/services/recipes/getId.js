const { StatusCodes } = require('http-status-codes');
const ModelRecipes = require('../../models/recipes');
const { wrongRecipeId } = require('../../utilities/setErrors');

module.exports = async (id) => {
  if (id.length !== 24) {
    return wrongRecipeId;
  }

  const findRecipeById = await ModelRecipes.find(id);
    
  if (!findRecipeById) {
    return wrongRecipeId;
  }

  return { status: StatusCodes.OK, message: findRecipeById };
};