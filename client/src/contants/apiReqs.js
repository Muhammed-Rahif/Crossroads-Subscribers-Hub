import axios from "axios";

const signUpUser = (userData) => {
  return new Promise((resolve, reject) => {
    userData.createdAt = new Date();
    axios
      .post("/api/", userData)
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { signUpUser };
