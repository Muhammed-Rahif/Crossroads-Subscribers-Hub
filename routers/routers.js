const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json("Muhammed Rahif");
});

module.exports = router;
