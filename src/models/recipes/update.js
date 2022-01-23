const { ObjectId } = require('mongodb');
const connect = require('../connection');

module.exports = async (recipe, id) => {
  const conn = await connect();
  const updatedRecipe = await conn.collection('recipes').updateOne(
    { _id: ObjectId(id) },
    {
      $set: recipe,
    },
  );

  return updatedRecipe;
};