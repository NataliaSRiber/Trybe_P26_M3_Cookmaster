const { ObjectId } = require('mongodb');
const connect = require('../connection');

module.exports = async (recipe) => {
  const db = await connect();
  
  if (recipe) {
    const getRecipeById = await db.collection('recipes').findOne({ _id: ObjectId(recipe) });
    return getRecipeById;
  }
      
  if (!recipe) {
    const allRecipes = await db.collection('recipes').find().toArray(); // lista todas as receitas
    return allRecipes;
  }
};
