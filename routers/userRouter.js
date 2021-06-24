const express = require("express");
const router = express.Router();
const userFunctions = require("../functions/userFunctions");

// Sign up a user
router.post("/sign-up", (req, res) => {
  userFunctions
    .signUpUser(req.body)
    .then((response) => {
      if (response.statusCode === 201) {
        req.session.userData = { userId: response.userData._id };
        res
          .status(response.statusCode)
          .json({ clientId: response.userData.clientId });
      } else {
        res.status(response.statusCode).json({ message: response.message });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Something really went wrong!" });
    });
});

// Login a user
router.post("/login", (req, res) => {
  userFunctions
    .loginUser(req.body)
    .then((response) => {
      if (response.statusCode === 200) {
        req.session.userData = { userId: response.userData._id };
        res
          .status(response.statusCode)
          .json({ clientId: response.userData.clientId });
      } else {
        res.status(response.statusCode).json({ message: response.message });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Something really went wrong!" });
    });
});

// Get logged in user's data
router.post("/get-user-data", (req, res) => {
  if (req.session.userData) {
    userFunctions
      .getUserData(req.session.userData.userId, req.body.clientId)
      .then((response) => {
        if (response.statusCode === 200) {
          res.status(response.statusCode).json(response.userData);
        } else {
          res.sendStatus(404);
        }
      });
  } else {
    res.sendStatus(404);
  }
});

// Logout logged in user
router.post("/logout", (req, res) => {
  req.session.userData = {};
  res.status(200).json({ message: "User logout success!" });
});

// Get introduction content
router.post("/get-introduction", (req, res) => {
  userFunctions
    .getIntroduction(req.session.userData.userId)
    .then((introduction) => {
      console.log(introduction);
      res.json({ introduction });
    });
});

module.exports = router;
