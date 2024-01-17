const { Schema, model } = require("mongoose")

const Log = new Schema(
  {
    eventType: {
      type: String,
    },
    description: {
      type: String,
    },
    author: {
      type: String,
    },
    ip: {
      type: String,
    },
    browser: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = model("Log", Log)
