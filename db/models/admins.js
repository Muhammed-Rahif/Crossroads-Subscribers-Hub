const mongoose = require("mongoose");
const updateVersioningPlugin = require("mongoose-update-versioning");

const adminsSchema = new mongoose.Schema(
  {
    adminNames: [{ type: String, required: true }],
    adminEmails: [{ type: String, required: true }],
    adminIds: [{ type: String, required: true, unique: true }],
    secretId: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
  },
  {
    versionKey: "versionKey",
  }
);

adminsSchema.plugin(updateVersioningPlugin);

// My Login data
//  Admin id : 2434
// Secret id : 4848
//  Password : 7534

module.exports = mongoose.model("Admin", adminsSchema, "admins");
