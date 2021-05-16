const express = require("express");
const app = express();

app.get("/api/hi", (req, res) => {
  res.send("<h1>Hi there !</h1>");
});

module.exports = app;
