const connect = require('../connection');

module.exports = async (user) => {
  const db = await connect();
  const newUser = (await db.collection('users').insertOne({ ...user, role: 'user' })).ops[0];
  const { name, email, role, _id } = newUser;
  const newUserWpass = { name, email, role, _id };
  return newUserWpass;
};
