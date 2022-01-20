const { StatusCodes } = require('http-status-codes');
const ModelUsers = require('../../models/users');
const { invalidLogin, mustBefilled } = require('../../utilities/setErrors');
const { genToken } = require('../auth/auth');
const { validateLogin } = require('./validations');

module.exports = async (user) => {
  const findUser = await ModelUsers.find(user);
  
  const validateError = validateLogin(user).error;

  if (validateError) {
    return mustBefilled;
  }
  
  if (!findUser || user.password !== findUser.password) {
    return invalidLogin;
  }
  
  const { _id, email, role } = findUser;
  const userWPassword = { _id, email, role };

  const token = genToken(userWPassword);
  return { status: StatusCodes.OK, message: token };
};