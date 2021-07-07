const mongoose = require("mongoose");

const questionsSchema = new mongoose.Schema(
  {
    createdAt: { type: Date, required: true, default: new Date() },
    question: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, required: false },
  },
  {
    versionKey: "versionKey",
  }
);

module.exports = mongoose.model("Question", questionsSchema, "questions");
