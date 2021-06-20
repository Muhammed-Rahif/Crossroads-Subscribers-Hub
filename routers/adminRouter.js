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

router.get("/", verifyAdminLogin, (req, res) => {
  adminFunctions.getAdminsDetails().then((adminDetails) => {
    res.render("pages/home", {
      adminEmails: adminDetails.adminEmails,
      adminNames: adminDetails.adminNames,
      loginCount: adminDetails.versionKey,
    });
  });
});

router.get("/users", verifyAdminLogin, (req, res) => {
  adminFunctions.getUsersDetails().then((usersArray) => {
    res.render("pages/users", { users: usersArray });
  });
});

router.get("/events", verifyAdminLogin, (req, res) => {
  adminFunctions.getEventsDetails().then((evenstsArray) => {
    console.log(evenstsArray);
    res.render("pages/events", { events: evenstsArray });
  });
});

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

router.delete("/delete/user", verifyAdminLogin, (req, res) => {
  adminFunctions.deleteUser(req.body.userId).then((response) => {
    if (response.status) {
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  });
});

router.delete("/delete/event", verifyAdminLogin, (req, res) => {
  adminFunctions.deleteEvent(req.body.eventId).then((response) => {
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
