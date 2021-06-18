const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body);
  setTimeout(() => {
    res.sendStatus(200);
  }, 3000);
});

module.exports = router;
