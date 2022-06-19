const validator = require("express-joi-validation").createValidator({});
const loadByNameSchema = require("./schemas/load-by-name.schema");

module.exports = (app) => {
  const { getData, createData } = require("../services/crud-data.services");

  app.get("/get-data/:name", (req, res) => {
    getData(req, res);
  });

  app.post("/create-data", createData);
};
