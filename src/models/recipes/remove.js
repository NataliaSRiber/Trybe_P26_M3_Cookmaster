const { ObjectId } = require('mongodb');
const connect = require('../connection');

module.exports = async (id) => {
  const conn = await connect();
  const updatedRecipe = await conn.collection('recipes').deleteOne(
    { _id: ObjectId(id) },
  );

  return updatedRecipe;
};
