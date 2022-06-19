const Joi = require("joi");

module.exports = Joi.object().keys({
  name: Joi.string().required(),
  age: Joi.number().required(),
  school: Joi.string().required(),
  courses: Joi.array().required().items(Joi.string()),
});
