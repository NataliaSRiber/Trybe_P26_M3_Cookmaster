const connect = require('../connection');

module.exports = async (noRecipe) => {
  const db = await connect();
      
  if (!noRecipe) {
    const allRecipes = await db.collection('recipes').find().toArray(); // lista todas as receitas
    return allRecipes;
  }
};
