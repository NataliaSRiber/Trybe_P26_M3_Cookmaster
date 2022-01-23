const { verifyToken } = require('../services/auth/auth');
const { invalidToken, missingToken } = require('../utilities/setErrors');

module.exports = (req, res, next) => {
  const { authorization: token } = req.headers;
  
  if (!token) {
    return res.status(invalidToken.status).json({ message: missingToken.message });
  }
   
  const user = verifyToken(token);

  if (!user) {
    return res.status(invalidToken.status).json({ message: invalidToken.message });
  }
  req.user = user; // informação armazenada no objeto req e será passada através da nova key criada

  next();
};