const express = require("express");
const router = express.Router();
const adminFunctions = require("../functions/adminFunctions");

const verifyAdminLogin = (req, res, next) => {
  if (req.session.adminData) {
    next();
  } else {
    res.redirect("/admin/login");
  }
};

// Home page
router.get("/", verifyAdminLogin, (req, res) => {
  adminFunctions.getAdminsDetails().then((adminDetails) => {
    res.render("pages/home", {
      adminEmails: adminDetails.adminEmails,
      adminNames: adminDetails.adminNames,
      loginCount: adminDetails.versionKey,
    });
  });
});

// Users page
router.get("/users", verifyAdminLogin, (req, res) => {
  adminFunctions.getUsers().then((usersArray) => {
    res.render("pages/users", { users: usersArray });
  });
});

// Events page
router.get("/events", verifyAdminLogin, (req, res) => {
  adminFunctions.getEvents().then((evenstsArray) => {
    res.render("pages/events", { events: evenstsArray });
  });
});

// Playists page
router.get("/playlists", verifyAdminLogin, (req, res) => {
  adminFunctions.getPlaylists().then((playlists) => {
    console.log(playlists);
    res.render("pages/playlists", { playlists });
  });
});

// Create event
router.get("/create/event", verifyAdminLogin, (req, res) => {
  res.render("pages/create-event");
});

router.post("/create/event", verifyAdminLogin, (req, res) => {
  adminFunctions.createEvent(req.body).then((response) => {
    if (response.status) {
      res.redirect("/admin/events");
    } else {
      res.redirect("/admin/create/event");
    }
  });
});

// Create playlist
router.get("/create/playlist", verifyAdminLogin, (req, res) => {
  res.render("pages/create-playlist");
});

router.post("/create/playlist", verifyAdminLogin, (req, res) => {
  console.log(req.body);
  adminFunctions.createPlaylist(req.body).then((response) => {
    res.json(response);
  });
});

// Edit event
router.get("/edit/event/:eventId", (req, res) => {
  adminFunctions.getEvent(req.params.eventId).then((eventData) => {
    res.render("pages/edit-event", { eventData });
  });
});

router.post("/edit/event/:eventId", (req, res) => {
  adminFunctions.updateEvent(req.params.eventId, req.body).then((response) => {
    if (response.status) {
      res.redirect("/admin/events");
    } else {
      res.redirect("/admin/event/edit/" + req.params.eventId);
    }
  });
});

// Edit playlist
router.get("/edit/playlist/:playlistId", (req, res) => {
  adminFunctions.getPlaylist(req.params.playlistId).then((playlistData) => {
    res.render("pages/edit-playlist", { playlistData });
  });
});

router.post("/edit/playlist/:playlistId", (req, res) => {
  adminFunctions
    .updatePlaylist(req.params.playlistId, req.body)
    .then((response) => {
      res.json(response);
    });
});

// Delete user
router.delete("/delete/user", verifyAdminLogin, (req, res) => {
  adminFunctions.deleteUser(req.body.userId).then((response) => {
    if (response.status) {
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  });
});

// Delete event
router.delete("/delete/event", verifyAdminLogin, (req, res) => {
  adminFunctions.deleteEvent(req.body.eventId).then((response) => {
    if (response.status) {
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  });
});

// Delete playlist
router.delete("/delete/playlist", verifyAdminLogin, (req, res) => {
  adminFunctions.deletePlaylist(req.body.playlistId).then((response) => {
    if (response.status) {
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  });
});

// Admin login
router.get("/login", (req, res) => {
  if (req.session.adminData) {
    res.redirect("/admin");
  } else {
    res.render("pages/login", { loginErr: req.session.adminLoginErr });
    req.session.adminLoginErr = false;
  }
});

router.post("/login", (req, res) => {
  adminFunctions.login(req.body).then((response) => {
    if (response.loginStatus) {
      req.session.adminData = response.adminData;
      res.redirect("/admin");
    } else {
      req.session.adminLoginErr = response.statusMsg;
      res.redirect("/admin/login");
    }
  });
});

module.exports = router;
