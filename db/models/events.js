const mongoose = require("mongoose");
const updateVersioningPlugin = require("mongoose-update-versioning");

const eventsSchema = mongoose.Schema(
  {
    createdAt: { type: Date, required: true, default: new Date() },
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    location: { type: String, required: true },
    imageSrc: { type: String, required: true },
    btnText: { type: String, required: false },
    btnLink: { type: String, required: false },
  },
  {
    versionKey: "versionKey",
  }
);

eventsSchema.plugin(updateVersioningPlugin);

module.exports = mongoose.model("Event", eventsSchema, "events");
