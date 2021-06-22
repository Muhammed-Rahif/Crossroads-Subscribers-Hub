const mongoose = require("mongoose");

const eventsSchema = new mongoose.Schema(
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

module.exports = mongoose.model("Event", eventsSchema, "events");
