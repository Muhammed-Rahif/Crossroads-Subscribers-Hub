const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
// Models
const UserModel = require("../db/models/user");

module.exports = {
  signUpUser: (userData) => {
    return new Promise((resolve, reject) => {
      if (userData.password === userData.confirmPassword) {
        delete userData.confirmPassword;
        UserModel.findOne({ email: userData.email }).then(async (userExist) => {
          if (userExist) {
            resolve({ statusCode: 409 });
          } else {
            userData.password = await bcrypt.hash(userData.password, 10);
            userData.clientId = uuidv4();
            let user = new UserModel(userData);
            user
              .save()
              .then((doc) => {
                resolve({ statusCode: 201, userData: doc });
              })
              .catch((err) => {
                reject(err);
                console.log(err);
              });
          }
        });
      } else {
        resolve({ statusCode: 401 });
      }
    });
  },
  getUserData: (userId, clientId) => {
    return new Promise((resolve, reject) => {
      UserModel.findOne({ _id: userId, clientId })
        .then((userData) => {
          console.log(userData);
          if (userData) {
            delete userData.password;
            delete userData._id;
            delete userData.versionKey;
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
};
