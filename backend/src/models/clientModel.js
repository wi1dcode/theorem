const { Schema, model } = require("mongoose")

const Client = new Schema(
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
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    havePhoto: {
      type: String,
      required: true,
    },
    photos: [
      {
        name: String,
        url: String,
      },
    ],
    help: {
      type: String,
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
    information: {
      type: String,
    },
    documents: [
      {
        name: String,
        url: String,
      },
    ],
    adresse: {
      type: String,
      required: true,
    },
    status: {
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
      unique: true,
      required: true,
    },
    tel: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = model("Client", Client)
