// importa a camada de modelo
const { StatusCodes } = require('http-status-codes');
const ModelUsers = require('../../models/users');
const { alreadyExists, required } = require('../../utilities/setErrors');
const { validateUser } = require('./validations');

module.exports = async (user) => {
  const findUser = await ModelUsers.find(user);
  
  const validateError = validateUser(user).error;

  if (findUser) {
    return alreadyExists;
  }

  if (validateError) {
    return required;
  }

  const newUser = await ModelUsers.create(user);
  console.log(newUser);
  
  return { status: StatusCodes.CREATED, message: newUser };
};