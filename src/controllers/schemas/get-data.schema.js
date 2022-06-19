const Joi = require("joi");
const { resourcesName } = require("../../utils/constants");

module.exports = Joi.object().keys({
  name: Joi.string()
    .trim()
    .required()
    .valid(
      resourcesName.FILMS.toLowerCase(),
      resourcesName.PEOPLE.toLowerCase(),
      resourcesName.PLANETS.toLowerCase(),
      resourcesName.SPECIES.toLowerCase(),
      resourcesName.STARSHIPS.toLowerCase(),
      resourcesName.VEHICLES.toLowerCase()
    ),
});
