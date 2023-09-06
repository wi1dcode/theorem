const { Schema, model } = require("mongoose")

const Renovation = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    search: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = model("Renovation", Renovation)
