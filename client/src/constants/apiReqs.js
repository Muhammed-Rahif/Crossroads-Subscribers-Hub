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
        reject(err.response.data);
      });
  });
};

const loginUser = (userData) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/login", userData)
      .then((response) => {
        store.set(clientStorageKey, response.data);
        resolve(response);
      })
      .catch((err) => {
        console.log(err.response);
        reject(err.response.data);
      });
  });
};

const logoutUser = () => {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/logout")
      .then((response) => {
        store.remove(clientStorageKey);
        resolve(response);
      })
      .catch((err) => {
        reject(err.response.data);
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

const getIntroduction = () => {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/get-introduction")
      .then((response) => {
        resolve(response.data.introduction);
      })
      .catch((err) => {
        resolve(null);
      });
  });
};

const getMembers = () => {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/get-members")
      .then((response) => {
        resolve(response.data.members);
      })
      .catch((err) => {
        resolve([]);
      });
  });
};

const getPlaylists = () => {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/get-playlists")
      .then((response) => {
        resolve(response.data.playlists);
      })
      .catch((err) => {
        resolve([]);
      });
  });
};

const getProjects = () => {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/get-projects")
      .then((response) => {
        resolve(response.data.projects);
      })
      .catch((err) => {
        resolve([]);
      });
  });
};

const updateProfile = (userData) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/update-profile", { userData })
      .then((response) => {
        resolve(response.data.response);
      })
      .catch((err) => {
        resolve(err.response.data.response);
      });
  });
};

const getEvents = () => {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/get-events")
      .then((response) => {
        resolve(response.data.events);
      })
      .catch((err) => {
        resolve([]);
      });
  });
};

export {
  signUpUser,
  getUserData,
  loginUser,
  logoutUser,
  getIntroduction,
  getMembers,
  getPlaylists,
  getEvents,
  getProjects,
  updateProfile,
};
