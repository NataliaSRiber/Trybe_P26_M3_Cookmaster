const express = require('express');
const users = require('./users/router');
const login = require('./login/router');
const recipes = require('./recipes/router');

const root = express.Router({ mergeParams: true });

root.use('/users', users);
root.use('/login', login);
root.use('/recipes', recipes);

module.exports = root;