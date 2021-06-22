const mongoose = require("mongoose");

const playlistsSchema = new mongoose.Schema(
  {
    createdAt: { type: Date, required: true, default: new Date() },
    videoId: { type: String, required: true },
    title: { type: String, required: true },
    topicsCovered: [{ type: String, required: true }],
    projects: [{ type: String, required: true }],
    description: { type: String, required: true },
    btnLink: { type: String, required: true },
    btnText: { type: String, required: false },
    numOfVideos: { type: Number, required: false },
  },
  {
    versionKey: "versionKey",
  }
);

module.exports = mongoose.model("Playlist", playlistsSchema, "playlists");
