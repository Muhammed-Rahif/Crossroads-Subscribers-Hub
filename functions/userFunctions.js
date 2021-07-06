const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
// Models
const UserModel = require("../db/models/users");
const IntroductionModel = require("../db/models/introduction");
const PlaylistModel = require("../db/models/playlists");
const EventModel = require("../db/models/events");
const ProjectModel = require("../db/models/projects");
const VideoModel = require("../db/models/videos");

module.exports = {
  signUpUser: (userData) => {
    console.log(userData);
    return new Promise((resolve, reject) => {
      if (userData.password === userData.confirmPassword) {
        delete userData.confirmPassword;
        UserModel.findOne({ email: userData.email }).then(async (userExist) => {
          if (userExist) {
            resolve({
              statusCode: 409,
              message: "This user is already exist!",
            });
          } else {
            userData.password = await bcrypt.hash(userData.password, 10);
            userData.clientId = uuidv4();
            UserModel.create(userData)
              .then((doc) => {
                resolve({ statusCode: 201, userData: doc });
              })
              .catch((err) => {
                reject(err);
                console.log(err.message);
              });
          }
        });
      } else {
        resolve({ statusCode: 401, message: "Unauthorized activity!" });
      }
    });
  },
  loginUser: (userData) => {
    return new Promise((resolve, reject) => {
      UserModel.findOne({ email: userData.email }).then(async (user) => {
        if (user) {
          bcrypt.compare(userData.password, user.password).then((status) => {
            if (status) {
              resolve({ statusCode: 200, userData: user });
            } else {
              resolve({
                statusCode: 401,
                message: "Incorrect password typed!",
              });
            }
          });
        } else {
          resolve({
            statusCode: 404,
            message: "User not found.. Incorrect email typed!",
          });
        }
      });
    });
  },
  getUserData: (userId, clientId) => {
    return new Promise((resolve, reject) => {
      UserModel.findOne({ _id: userId, clientId }, "-password -_id")
        .then((userData) => {
          if (userData) {
            resolve({ userData, statusCode: 200 });
          } else {
            resolve({ statusCode: 404 });
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  getIntroduction: (userId) => {
    return new Promise((resolve, reject) => {
      if (userId) {
        IntroductionModel.findOne()
          .then((introductionData) => {
            resolve(introductionData);
          })
          .catch((err) => {
            resolve({
              videoId: "CJ-0NsEOzcg",
              mainTitle:
                "We will help you learn to code and make your future awesome...",
              subTitle: `No tech education requirements, No age restrictions. Everyone can..!
            Feel free to join with Crossroads...`,
              btnLink:
                "https://youtube.com/playlist?list=PLY-ecO2csVHeKaBI7lAM1jbIPU8K6fUxY",
              btnText: "Get started",
            });
          });
      } else {
        resolve({
          videoId: "CJ-0NsEOzcg",
          mainTitle:
            "We will help you learn to code and make your future awesome...",
          subTitle: `No tech education requirements, No age restrictions. Everyone can..!
          Feel free to join with Crossroads...`,
          btnLink:
            "https://youtube.com/playlist?list=PLY-ecO2csVHeKaBI7lAM1jbIPU8K6fUxY",
          btnText: "Get started",
        });
      }
    });
  },
  getMembers: () => {
    return new Promise((resolve, reject) => {
      UserModel.find({}, "badges fullName email location profileImageUrl").then(
        (members) => {
          resolve(members);
        }
      );
    });
  },
  getPlaylists: () => {
    return new Promise((resolve, reject) => {
      PlaylistModel.find(
        {},
        "topicsCovered projects title description videoId numOfVideos btnLink btnText"
      ).then((playlists) => {
        resolve(playlists);
      });
    });
  },
  getEvents: () => {
    return new Promise((resolve, reject) => {
      EventModel.find(
        {},
        "date time imageSrc title description btnLink btnText location"
      ).then((events) => {
        resolve(events);
      });
    });
  },
  getProjects: () => {
    return new Promise((resolve, reject) => {
      ProjectModel.find({}, "-id").then((projects) => {
        resolve(projects);
      });
    });
  },
  getVideos: () => {
    return new Promise((resolve, reject) => {
      VideoModel.find({}, "-id").then((videos) => {
        resolve(videos);
      });
    });
  },
  updateUserProfile: (userId, userData) => {
    return new Promise((resolve, reject) => {
      UserModel.findByIdAndUpdate(userId, {
        $set: { ...userData },
        $inc: { versionKey: 1 },
      })
        .then((doc) => {
          resolve({
            statusCode: 200,
            message: "Successfully updated user profile!",
          });
        })
        .catch((err) => {
          switch (err.code) {
            case 11000:
              if (userData.hasOwnProperty("email")) {
                resolve({
                  statusCode: 409,
                  message: "This email is already exist with another account!",
                });
              } else {
                resolve({
                  statusCode: 409,
                  message: "This entry is already exist with another account!",
                });
              }
              break;
            default:
              resolve({ statusCode: 400, message: "Something went wrong!" });
              break;
          }
        });
    });
  },
};
