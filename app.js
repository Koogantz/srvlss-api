const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./src/controllers/load-data.controller")(app);
require("./src/controllers/crud-data.controller")(app);

module.exports.app = serverless(app);
