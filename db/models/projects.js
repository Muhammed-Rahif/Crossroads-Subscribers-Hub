const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    projectImageUrl: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    githubLink: { type: String, required: true },
    hostedIn: { type: String, required: true },
    contributors: [{ type: String, required: true }],
    usedTechnologies: [{ type: String, required: true }],
    usedLanguages: [{ type: String, required: true }],
    stableBranch: { type: String, required: true },
    createdAt: { type: Date, required: true, default: new Date() },
  },
  {
    versionKey: "versionKey",
  }
);

module.exports = mongoose.model("Project", projectSchema, "projects");
