const Joi = require('joi');

const schemaRecipe = Joi.object({
  name: Joi.string().min(2).max(30).required(),
  ingredients: Joi.string().min(2).max(100).required(),
  preparation: Joi.string().min(4).max(200).required(),
});

// console.log(schema.validate({ name: "Eggnog", ingredients: "ovos, leite, creme de leite, acúcar", preparation: "coe os ovos, acrescente os ingredientes em uma panela e mexa" }).error);

module.exports = {
  validateRecipe: (recipe) => schemaRecipe.validate(recipe),
};