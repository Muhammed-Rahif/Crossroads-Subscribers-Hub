const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    clientId: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    location: { type: String, required: true },
    profileImageUrl: { type: String, required: false },
    phone: { type: String, required: false },
    personalWebsite: { type: String, required: false },
    github: { type: String, required: false },
    instagram: { type: String, required: false },
    badges: [{ type: String, required: false, unique: true }],
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    createdAt: { type: Date, required: true, default: new Date() },
  },
  {
    versionKey: "versionKey",
  }
);

module.exports = mongoose.model("User", usersSchema, "users");
