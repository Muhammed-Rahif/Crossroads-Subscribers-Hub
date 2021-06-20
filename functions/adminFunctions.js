const bcrypt = require("bcryptjs");
// Models
const AdminModel = require("../db/models/admins");
const UserModel = require("../db/models/users");
const EventModel = require("../db/models/events");

module.exports = {
  login: (adminData) => {
    return new Promise((resolve, reject) => {
      AdminModel.findOne().then(async (admins) => {
        if (admins.adminIds.includes(adminData.adminId)) {
          if (await bcrypt.compare(adminData.secretId, admins.secretId)) {
            if (await bcrypt.compare(adminData.password, admins.password)) {
              delete adminData.secretId;
              delete adminData.password;
              AdminModel.findOne({
                adminEmails: { $in: [adminData.adminEmail] },
              }).then((doc) => {
                if (doc) {
                  AdminModel.findOneAndUpdate(
                    {},
                    {
                      $push: {
                        adminNames: adminData.adminName,
                      },
                    }
                  ).then((doc) => {
                    resolve({
                      loginStatus: true,
                      statusMsg: "Successfully logged in!",
                      adminData,
                    });
                  });
                } else {
                  AdminModel.findOneAndUpdate(
                    {},
                    {
                      $push: {
                        adminNames: adminData.adminName,
                        adminEmails: adminData.adminEmail,
                      },
                    }
                  ).then((doc) => {
                    resolve({
                      loginStatus: true,
                      statusMsg: "Successfully logged in!",
                      adminData,
                    });
                  });
                }
              });
            } else {
              resolve({
                loginStatus: false,
                statusMsg: "Password is not matching!",
              });
            }
          } else {
            resolve({
              loginStatus: false,
              statusMsg: "Secret id is not matching!",
            });
          }
        } else {
          resolve({ loginStatus: false, statusMsg: "Admin id is not found!" });
        }
      });
    });
  },
  getAdminsDetails: () => {
    return new Promise((resolve, reject) => {
      AdminModel.findOne({}, "adminNames adminEmails -_id versionKey").then(
        (adminDetails) => {
          resolve(adminDetails);
        }
      );
    });
  },
  getUsersDetails: () => {
    return new Promise((resolve, reject) => {
      UserModel.find(
        {},
        "createdAt fullName email location clientId versionKey"
      ).then((usersArray) => {
        resolve(usersArray);
      });
    });
  },
  getEventsDetails: () => {
    return new Promise((resolve, reject) => {
      EventModel.find({}).then((eventsArray) => {
        resolve(eventsArray);
      });
    });
  },
  createEvent: (eventData) => {
    return new Promise((resolve, reject) => {
      let event = new EventModel(eventData);
      event
        .save()
        .then((doc) => {
          resolve({ status: true });
        })
        .catch((err) => {
          console.log(err);
          resolve({ status: false });
        });
    });
  },
  deleteUser: (userId) => {
    return new Promise((resolve, reject) => {
      UserModel.findByIdAndDelete(userId)
        .then((doc) => {
          if (doc) {
            resolve({ status: true });
          } else {
            resolve({ status: false });
          }
        })
        .catch((err) => {
          console.log(err);
          resolve({ status: false });
        });
    });
  },
  deleteEvent: (eventId) => {
    return new Promise((resolve, reject) => {
      EventModel.findByIdAndDelete(eventId)
        .then((doc) => {
          if (doc) {
            resolve({ status: true });
          } else {
            resolve({ status: false });
          }
        })
        .catch((err) => {
          console.log(err);
          resolve({ status: false });
        });
    });
  },
};
