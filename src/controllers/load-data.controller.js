const validator = require("express-joi-validation").createValidator({});
const loadByNameSchema = require("./schemas/load-by-name.schema");

module.exports = (app) => {
  const { loadByName } = require("../services/load-data.services");

  app.get(
    "/load-by-name/:name",
    validator.params(loadByNameSchema),
    async (req, res) => {
      const name = req.params.name;
      const { message, status } = await loadByName(name);
      res.status(status).json({ message });
    }
  );
};
