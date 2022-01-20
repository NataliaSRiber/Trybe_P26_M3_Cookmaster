// passar as configurações do jwt
const jwt = require('jsonwebtoken');

const API_SECRET = 'myseçret#';

const JWT_CONFIG = {
  expiresIn: '20m',
  algorithm: 'HS256',
};

const genToken = (data) => {
  const token = jwt.sign({ data }, API_SECRET, JWT_CONFIG); // montando o token
  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, API_SECRET); // sem o segredo o token não é decodificado
    const user = decoded.data;
    return user;
  } catch (err) {
    return null;
  }
};

module.exports = {
  genToken,
  verifyToken,
};
