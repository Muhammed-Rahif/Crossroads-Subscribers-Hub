const mongoose = require("mongoose");

const introductionSchema = mongoose.Schema(
  {
    videoId: { type: String, required: true },
    mainTitle: { type: String, required: true },
    subTitle: { type: String, required: true },
    btnLink: { type: String, required: true },
    btnText: { type: String, required: true },
  },
  {
    versionKey: "versionKey",
  }
);

module.exports = mongoose.model(
  "Introduction",
  introductionSchema,
  "introduction"
);
