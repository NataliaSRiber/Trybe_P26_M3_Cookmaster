const connect = require('../connection');

module.exports = async (user) => {
  const db = await connect();

  if (user.email) {
    const foundUser = await db.collection('users').findOne({ email: user.email }); 
    return foundUser;
  }
};