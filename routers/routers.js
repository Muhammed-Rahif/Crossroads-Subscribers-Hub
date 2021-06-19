const express = require("express");
const router = express.Router();
const helperFunctions = require("../functions/helperFunctions");

router.post("/sign-up", (req, res) => {
  helperFunctions
    .signUpUser(req.body)
    .then((response) => {
      if (response.statusCode === 201) {
        req.session.userData = { userId: response.userData._id };
        res
          .status(response.statusCode)
          .json({ clientId: response.userData.clientId });
      } else {
        res.sendStatus(response.statusCode);
      }
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

router.post("/get-user-data", (req, res) => {
  helperFunctions
    .getUserData(req.session.userData.userId, req.body.clientId)
    .then((response) => {
      if (response.statusCode === 200) {
        res.status(response.statusCode).json(response.userData);
      } else {
        res.sendStatus(404);
      }
    });
});

module.exports = router;
