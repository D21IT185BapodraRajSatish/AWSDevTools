const express = require("express");
const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("Hello Student");
});

module.exports = routes;
