const mongoose = require("mongoose")

const { Schema, model } = mongoose

const FormSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    renovation: {
      type: String,
      required: true,
    },
    search: {
      type: String,
      required: true,
    },
    // documents: [
    //   {
    //     name: String,
    //     originalName: String,
    //     path: String,
    //   },
    // ],
    // photos: [
    //   {
    //     type: String,
    //     path: String,
    //   },
    // ],
    // inspirationPhoto: [
    //   {
    //     type: String,
    //     path: String,
    //   },
    // ],
    documents: {
      type: Boolean,
    },
    photos: {
      type: Boolean,
    },
    inspirationPhoto: {
      type: Boolean,
    },
    budget: {
      type: String,
      required: true,
    },
    when: {
      type: String,
    },
    profile: {
      firstname: String,
      lastname: String,
      email: String,
      phone: String,
    },
    adresse: {
      address: String,
      city: String,
      zip: String,
      country: String,
    },
    additionalInfo: Schema.Types.Mixed,
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

module.exports = model("Form", FormSchema)
