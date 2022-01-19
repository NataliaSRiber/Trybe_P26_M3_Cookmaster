const { StatusCodes } = require('http-status-codes');

const required = {
  status: StatusCodes.BAD_REQUEST,
  message: 'Invalid entries. Try again.',
};

const alreadyExists = {
  status: StatusCodes.CONFLICT,
  message: 'Email already registered',
};

module.exports = {
  alreadyExists,
  required,
};