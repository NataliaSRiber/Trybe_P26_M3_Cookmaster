const ServicesUsers = require('../../services/login');

module.exports = async (req, res, _next) => {
  const user = req.body;
  const result = await ServicesUsers.login(user);

  return (result.message.length > 100
  ? res.status(result.status).json({
      token: result.message,
    })
  : res.status(result.status).json({
      message: result.message,
    })
  );
};