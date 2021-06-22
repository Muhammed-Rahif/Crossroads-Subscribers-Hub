const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    clientId: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    location: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    createdAt: { type: Date, required: true, default: new Date() },
  },
  {
    versionKey: "versionKey",
  }
);

module.exports = mongoose.model("User", usersSchema, "users");
