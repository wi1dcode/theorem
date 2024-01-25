const { Schema, model } = require("mongoose")

const Form = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    renovation: {
      type: String,
      required: true,
    },
    search: {
      type: String,
      required: true,
    },
    sizes: {
      type: Boolean,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    havePhoto: {
      type: Boolean,
      required: true,
    },
    photos: [
      {
        type: String,
        file_url: String,
      },
    ],
    help: {
      type: Boolean,
      required: true,
    },
    surface: {
      type: String,
      required: true,
    },
    products: {
      type: String,
      required: true,
    },
    budget: {
      type: String,
      required: true,
    },
    documents: [
      {
        name: String,
        originalName: String,
        path: String,
      },
    ],
    adresse: {
      type: String,
      required: true,
    },
    residence: {
      type: String,
      required: true,
    },
    when: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    tel: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "PENDING",
      enum: ["PENDING", "REFUSED", "APPROVED", "PROGRESS", "FINISH"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = model("Form", Form)
