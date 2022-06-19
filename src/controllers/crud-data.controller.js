const validator = require("express-joi-validation").createValidator({});
const getDataSchema = require("./schemas/get-data.schema");
const createStudentSchema = require("./schemas/create-student.schema");

module.exports = (app) => {
  const { getData, createStudent } = require("../services/crud-data.services");

  app.get(
    "/get-data/:name",
    validator.params(getDataSchema),
    async (req, res) => {
      const name = req.params.name;
      const response = await getData(name);
      console.log("response", response);
      if (response.status === 200)
        res.status(response.status).json({ data: response.data });
      else res.status(response.status).json({ message: response.message });
    }
  );

  app.post(
    "/create-student",
    validator.body(createStudentSchema),
    async (req, res) => {
      const { message, status } = await createStudent(req.body);
      res.status(status).json({ message });
    }
  );
};
