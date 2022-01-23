const Joi = require('joi');

const createRecipe = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  ingredients: Joi.string().min(2).max(100).required(),
  preparation: Joi.string().min(4).max(200).required(),
});

const updateRecipe = Joi.object({
  name: Joi.string().min(2).max(100),
  ingredients: Joi.string().min(2).max(100),
  preparation: Joi.string().min(4).max(200),
});

module.exports = {
  validateRecipe: (recipe) => createRecipe.validate(recipe),
  validateUpdateRecipe: (recipe) => updateRecipe.validate(recipe),

};