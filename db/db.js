var mongoose = require("mongoose");

const server = "mongodb://localhost:27017";
const dbName = "CrossroadsSubscribersHub";
const dbURI = server + "/" + dbName;

function connect() {
  mongoose
    .connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connection successful.");
    })
    .catch((err) => {
      console.log("Database connection error : " + err);
    });
}

module.exports = { connect };
