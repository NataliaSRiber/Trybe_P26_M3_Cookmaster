const { StatusCodes } = require('http-status-codes');

const required = {
  status: StatusCodes.BAD_REQUEST,
  message: 'Invalid entries. Try again.',
};

const alreadyExists = {
  status: StatusCodes.CONFLICT,
  message: 'Email already registered',
};

const mustBefilled = {
  status: StatusCodes.UNAUTHORIZED,
  message: 'All fields must be filled',
};

const invalidLogin = {
  status: StatusCodes.UNAUTHORIZED,
  message: 'Incorrect username or password',
};

module.exports = {
  alreadyExists,
  required,
  invalidLogin,
  mustBefilled,
};