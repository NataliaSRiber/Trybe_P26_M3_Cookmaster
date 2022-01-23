const Joi = require('joi');

const createRecipe = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  ingredients: Joi.string().min(2).max(100).required(),
  preparation: Joi.string().min(4).max(200).required(),
});

// console.log(schema.validate({ name: "Eggnog", ingredients: "ovos, leite, creme de leite, acúcar", preparation: "coe os ovos, acrescente os ingredientes em uma panela e mexa" }).error);
const updateRecipe = Joi.object({
  name: Joi.string().min(2).max(100),
  ingredients: Joi.string().min(2).max(100),
  preparation: Joi.string().min(4).max(200),
});

module.exports = {
  validateRecipe: (recipe) => createRecipe.validate(recipe),
  validateUpdateRecipe: (recipe) => updateRecipe.validate(recipe),

};