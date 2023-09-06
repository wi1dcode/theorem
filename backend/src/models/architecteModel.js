const { Schema, model } = require("mongoose")

const Architecte = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    civil: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    prestations: {
      type: String,
      required: true,
    },
    diplome: {
      type: String,
      required: true,
    },
    manager: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    clients: {
      type: String,
      required: true,
    },
    channels: {
      type: String,
      required: true,
    },
    mobility: {
      type: String,
      required: true,
    },
    photos: [
      {
        name: String,
        url: String,
      },
    ],
    email: {
      type: String,
      required: true,
    },
    tel: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = model("Architecte", Architecte)
