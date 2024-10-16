const { Schema, model } = require("mongoose");
const Project = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    under_title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    full_desc: {
      type: String,
    },
    img: {
      type: String,
      required: true,
    },
    img_two: {
      type: String,
    },
    img_three: {
      type: String,
    },
    images: [
      {
        src: String,
        credit: String,
      },
    ],
    tags: [String],
    suggestion: [Number],
    category: {
      type: String,
      required: true,
    },
    work: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = model("Project", Project);
