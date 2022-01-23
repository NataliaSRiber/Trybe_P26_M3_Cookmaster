const { ObjectId } = require('mongodb');
const connect = require('../connection');

module.exports = async (file, id) => {
  const conn = await connect();
  const updatedRecipe = await conn.collection('recipes').updateOne(
    { _id: ObjectId(id) },
    {
      $set: { image: `localhost:3000/${file.path}` },
    },
  );

  return updatedRecipe;
};