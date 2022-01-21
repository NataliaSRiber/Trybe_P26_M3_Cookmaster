const ServiceRecipes = require('../../services/recipes');

module.exports = async (req, res, _next) => {
  const { id } = req.params;
  const result = await ServiceRecipes.getId(id);

  return (typeof result.message === 'object') 
  ? res.status(result.status).json(result.message)
  : res.status(result.status).json({ message: result.message });
};
