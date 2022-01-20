const ServicesRecipes = require('../../services/recipes');

module.exports = async (req, res, _next) => {
  const recipe = req.body;
  const { user } = req;
  const result = await ServicesRecipes.create(recipe, user);

  return (typeof result.message === 'object'
  ? res.status(result.status).json({
    recipe: result.message,
  })
  : res.status(result.status).json(
    {
      message: result.message,
    },
  ));
};