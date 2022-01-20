const { StatusCodes } = require('http-status-codes');
const ModelRecipes = require('../../models/recipes');

module.exports = async (_req, res, _next) => {
  const getRecipes = await ModelRecipes.find();
    
  return res.status(StatusCodes.OK).json(getRecipes);
};