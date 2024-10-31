const mongoose = require("mongoose");

const { Schema, model } = mongoose;

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
    documents: [
      {
        name: String,
        originalName: String,
        path: String,
      },
    ],
    photos: [
      {
        name: String,
        originalName: String,
        path: String,
      },
    ],
    inspirationPhoto: [
      {
        name: String,
        originalName: String,
        path: String,
      },
    ],
    budget: {
      type: String,
      required: true,
    },
    priceTotal: {
      type: Number,
      default: 0,
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
      enum: [
        "PENDING",
        "ANALYSE",
        "REFUSED",
        "APPROVED",
        "PROGRESS",
        "PAYMENT",
        "FINISH",
      ],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Form", FormSchema);
