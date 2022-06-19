
const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// const port = 5000;

require("./src/controllers/load-data.controller")(app);

// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });


module.exports.app = serverless(app);
