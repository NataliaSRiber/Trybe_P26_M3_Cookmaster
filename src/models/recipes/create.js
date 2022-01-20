const connect = require('../connection');

module.exports = async (recipe, user) => {
  const db = await connect();
  const { _id } = user;
  const newRecipe = (await db.collection('recipes').insertOne({ ...recipe, userId: _id })).ops[0];
  
  return newRecipe;
};
