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
      res.json({ introduction });
    });
});

// Get members data
router.post("/get-members", (req, res) => {
  userFunctions.getMembers().then((members) => {
    res.json({ members });
  });
});

// Get playlists data
router.post("/get-playlists", (req, res) => {
  userFunctions.getPlaylists().then((playlists) => {
    res.json({ playlists });
  });
});

// Get events data
router.post("/get-events", (req, res) => {
  userFunctions.getEvents().then((events) => {
    res.json({ events });
  });
});

// Get projects data
router.post("/get-projects", (req, res) => {
  userFunctions.getProjects().then((projects) => {
    res.json({ projects });
  });
});

// Update user profile details
router.post("/update-profile", (req, res) => {
  console.log(req.body);
  userFunctions
    .updateUserProfile(req.session.userData.userId, req.body.userData)
    .then((response) => {
      if (response.statusCode === 200) {
        res.status(response.statusCode).json({ response });
      } else {
        res.status(response.statusCode).json({ response });
      }
    });
});

module.exports = router;
