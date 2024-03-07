const { Schema, model } = require("mongoose")

const Pro = new Schema(
  {
    profile: {
      civility: String,
      firstname: String,
      lastname: String,
      email: String,
      phone: String,
      adresse: String,
      company: String,
      job: String,
    },
    type: {
      type: String,
      default: "PRO",
    },
    password: {
      type: String,
      required: true,
    },
    roles: [
      {
        type: String,
        default: "PRO",
      },
    ],
    documents: [
      {
        name: String,
        path: String,
      },
    ],
    isActivated: {
      type: Boolean,
      default: false,
    },
    activationLink: {
      type: String,
    },
    activationLimit: {
      type: Date,
    },
    additionalInfo: Schema.Types.Mixed,
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

module.exports = model("Pro", Pro)
