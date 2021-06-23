const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    createdAt: { type: Date, required: true, default: new Date() },
    videoLink: { type: String, required: true },
    title: { type: String, required: true },
    madeFor: { type: String, required: true },
    uploadedBy: { type: String, required: true },
    topicsCovered: [{ type: String, required: true }],
    tags: [{ type: String, required: true }],
    description: { type: String, required: true },
    btnLink: { type: String, required: true },
    btnText: { type: String, required: false },
  },
  {
    versionKey: "versionKey",
  }
);

module.exports = mongoose.model("Video", videoSchema, "videos");
