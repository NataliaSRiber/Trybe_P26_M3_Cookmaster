const Joi = require('joi');

const schema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  // .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
  password: Joi.string().min(4).required(),
});

// console.log(schema.validate({ email: "MuriloRosa@gmail.br", password: "eu1234" }).error);

module.exports = {
  validateUser: (user) => schema.validate(user),
};
