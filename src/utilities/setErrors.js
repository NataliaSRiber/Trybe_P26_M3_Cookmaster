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

const invalidEntriesRecipes = {
  status: StatusCodes.BAD_REQUEST,
  message: 'Invalid entries. Try again.',
};

const invalidToken = {
  status: StatusCodes.UNAUTHORIZED,
  message: 'jwt malformed',
};

const wrongRecipeId = {
  status: StatusCodes.NOT_FOUND,
  message: 'recipe not found',
};

const missingToken = {
  status: StatusCodes.UNAUTHORIZED,
  message: 'missing auth token',
};

const notUserRecipe = {
  status: StatusCodes.UNAUTHORIZED,
  message: 'You cannot update this recipe',
};

module.exports = {
  alreadyExists,
  required,
  invalidLogin,
  mustBefilled,
  invalidEntriesRecipes,
  invalidToken,
  wrongRecipeId,
  missingToken,
  notUserRecipe,
};