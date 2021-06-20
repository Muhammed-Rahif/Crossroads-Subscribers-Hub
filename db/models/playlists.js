const mongoose = require("mongoose");
const updateVersioningPlugin = require("mongoose-update-versioning");

const playlistsSchema = mongoose.Schema(
  {
    videoId: { type: String, required: true },
    title: { type: String, required: true },
    topicsCovered: [{ type: Array, required: true }],
    projects: [{ type: Array, required: true }],
    description: { type: String, required: true },
    btnLink: { type: String, required: true },
    btnText: { type: String, required: false },
    numOfVideos: { type: Number, required: false },
  },
  {
    versionKey: "versionKey",
  }
);

playlistsSchema.plugin(updateVersioningPlugin);

module.exports = mongoose.model("Playlist", playlistsSchema, "playlists");
