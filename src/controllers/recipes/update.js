const ServiceRecipes = require('../../services/recipes');

module.exports = async (req, res, _next) => {
  const { id } = req.params;
  const recipe = req.body;
  const { user } = req;
  
  const result = await ServiceRecipes.update(recipe, id, user);
  
  return (typeof result.message === 'object'
  ? res.status(result.status).json(result.message)
  : res.status(result.status).json({ message: result.message }));
};