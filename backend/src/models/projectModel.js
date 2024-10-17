const mongoose = require("mongoose");
const { Schema, model, Types } = mongoose;

const generateSlug = (title) => {
  return title
    .toLowerCase() // Convert to lowercase
    .normalize("NFD") // Normalize to split accentuated characters into base + accent
    .replace(/[\u0300-\u036f]/g, "") // Remove combining diacritical marks (accents)
    .replace(/['’]/g, "") // Remove apostrophes (both straight and curly)
    .replace(/\s+/g, "_") // Replace spaces with underscores
    .replace(/[^\w\-]+/g, "") // Remove any remaining special characters
    .replace(/_+/g, "_") // Remove consecutive underscores
    .replace(/^_+|_+$/g, ""); // Remove leading or trailing underscores
};

const ProjectSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
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
    suggestion: [
      {
        type: Types.ObjectId,
        ref: "Project",
      },
    ],
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

ProjectSchema.pre("save", function (next) {
  if (!this.slug || this.isModified("title")) {
    this.slug = generateSlug(this.title);
  }
  next();
});

module.exports = model("Project", ProjectSchema);
