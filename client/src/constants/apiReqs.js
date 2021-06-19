import axios from "axios";
import { clientStorageKey } from "./constants";
import store from "store";

const signUpUser = (userData) => {
  return new Promise((resolve, reject) => {
    userData.createdAt = new Date();
    axios
      .post("/api/sign-up", userData)
      .then((response) => {
        store.set(clientStorageKey, response.data);
        resolve(response);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

const getUserData = () => {
  return new Promise((resolve, reject) => {
    if (typeof store.get(clientStorageKey) !== "undefined") {
      axios
        .post("/api/get-user-data", {
          clientId: store.get(clientStorageKey).clientId,
        })
        .then((response) => {
          delete response.data._id;
          resolve(response.data);
        })
        .catch((err) => {
          console.log(err);
          resolve(null);
        });
    } else {
      resolve(null);
    }
  });
};

export { signUpUser, getUserData };
