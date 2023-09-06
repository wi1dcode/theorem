const { Schema, model } = require("mongoose")

const Entrepreneur = new Schema(
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
    company: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    capital: {
      type: String,
      required: true,
    },
    lastYearTurnover: {
      type: String,
      required: true,
    },
    actualTurnover: {
      type: String,
      required: true,
    },
    staff: {
      type: Number,
      required: true,
    },
    manager: {
      type: String,
      required: true,
    },
    channels: {
      type: String,
      required: true,
    },
    clients: {
      type: String,
      required: true,
    },
    job: {
      type: String,
      required: true,
    },
    mobility: {
      type: String,
      required: true,
    },
    documents: [
      {
        name: String,
        url: String,
      },
    ],
    email: {
      type: String,
      unique: true,
      required: true,
    },
    tel: {
      type: Number,
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

module.exports = model("Entrepreneur", Entrepreneur)
