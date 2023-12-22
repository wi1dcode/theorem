const { Schema, model } = require("mongoose")

const Session = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    refreshToken: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = model("Session", Session)
