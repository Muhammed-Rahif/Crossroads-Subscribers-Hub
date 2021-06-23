const bcrypt = require("bcryptjs");
// Models
const AdminModel = require("../db/models/admins");
const UserModel = require("../db/models/users");
const EventModel = require("../db/models/events");
const PlaylistModel = require("../db/models/playlists");
const ProjectModel = require("../db/models/projects");
const VideoModel = require("../db/models/videos");

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
                      $inc: { versionKey: 1 },
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
                      $inc: { versionKey: 1 },
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
  createEvent: (eventData) => {
    return new Promise((resolve, reject) => {
      EventModel.create(eventData)
        .then((doc) => {
          resolve({ status: true });
        })
        .catch((err) => {
          console.log(err);
          resolve({ status: false });
        });
    });
  },
  createPlaylist: (playlistData) => {
    return new Promise((resolve, reject) => {
      PlaylistModel.create(playlistData)
        .then((doc) => {
          resolve({ status: true });
        })
        .catch((err) => {
          console.log(err);
          resolve({ status: false });
        });
    });
  },
  createProject: (projectData) => {
    return new Promise((resolve, reject) => {
      ProjectModel.create(projectData)
        .then((doc) => {
          resolve({ status: true });
        })
        .catch((err) => {
          console.log(err);
          resolve({ status: false });
        });
    });
  },
  createVideo: (videoData) => {
    return new Promise((resolve, reject) => {
      VideoModel.create(videoData)
        .then((doc) => {
          resolve({ status: true });
        })
        .catch((err) => {
          console.log(err);
          resolve({ status: false });
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
  getUsers: () => {
    return new Promise((resolve, reject) => {
      UserModel.find(
        {},
        "createdAt fullName email location clientId versionKey"
      ).then((usersArray) => {
        resolve(usersArray);
      });
    });
  },
  getEvents: () => {
    return new Promise((resolve, reject) => {
      EventModel.find({}).then((eventsArray) => {
        resolve(eventsArray);
      });
    });
  },
  getPlaylists: () => {
    return new Promise((resolve, reject) => {
      PlaylistModel.find({})
        .then((playlistsArray) => {
          resolve(playlistsArray);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
  getProjects: () => {
    return new Promise((resolve, reject) => {
      ProjectModel.find({})
        .then((projectsArray) => {
          resolve(projectsArray);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
  getVideos: () => {
    return new Promise((resolve, reject) => {
      VideoModel.find({})
        .then((videosArray) => {
          resolve(videosArray);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
  getEvent: (eventId) => {
    return new Promise((resolve, reject) => {
      EventModel.findById(eventId)
        .then((eventData) => {
          resolve(eventData);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getPlaylist: (playlistId) => {
    return new Promise((resolve, reject) => {
      PlaylistModel.findById(playlistId)
        .then((playlistData) => {
          resolve(playlistData);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getProject: (projectId) => {
    return new Promise((resolve, reject) => {
      ProjectModel.findById(projectId)
        .then((projectData) => {
          resolve(projectData);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getVideo: (videoId) => {
    return new Promise((resolve, reject) => {
      VideoModel.findById(videoId)
        .then((videoData) => {
          resolve(videoData);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  updateEvent: (eventId, eventData) => {
    return new Promise((resolve, reject) => {
      EventModel.findByIdAndUpdate(eventId, {
        $set: { ...eventData },
        $inc: { versionKey: 1 },
      })
        .then(() => {
          resolve({ status: true });
        })
        .catch((err) => {
          console.log(err);
          resolve({ status: false });
        });
    });
  },
  updatePlaylist: (playlistId, playlistData) => {
    return new Promise((resolve, reject) => {
      PlaylistModel.findByIdAndUpdate(playlistId, {
        $set: { ...playlistData },
        $inc: { versionKey: 1 },
      })
        .then(() => {
          resolve({ status: true });
        })
        .catch((err) => {
          console.log(err);
          resolve({ status: false });
        });
    });
  },
  updateProject: (projectId, projectData) => {
    return new Promise((resolve, reject) => {
      ProjectModel.findByIdAndUpdate(projectId, {
        $set: { ...projectData },
        $inc: { versionKey: 1 },
      })
        .then(() => {
          resolve({ status: true });
        })
        .catch((err) => {
          console.log(err);
          resolve({ status: false });
        });
    });
  },
  updateVideo: (videoId, videoData) => {
    return new Promise((resolve, reject) => {
      VideoModel.findByIdAndUpdate(videoId, {
        $set: { ...videoData },
        $inc: { versionKey: 1 },
      })
        .then(() => {
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
  deletePlaylist: (playlistId) => {
    return new Promise((resolve, reject) => {
      PlaylistModel.findByIdAndDelete(playlistId)
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
  deleteProject: (projectId) => {
    return new Promise((resolve, reject) => {
      ProjectModel.findByIdAndDelete(projectId)
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
  deleteVideo: (videoId) => {
    return new Promise((resolve, reject) => {
      VideoModel.findByIdAndDelete(videoId)
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
