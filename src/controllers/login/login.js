const ServicesUsers = require('../../services/login');

module.exports = async (req, res, _next) => {
  const user = req.body;
  const result = await ServicesUsers.login(user);

  return (typeof result.message === 'object'
  ? res.status(result.status).json({
    user: result.message,
  })
  : res.status(result.status).json(
    {
      message: result.message,
    },
  ));
};