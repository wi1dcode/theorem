const { Schema, model } = require("mongoose")
const slugify = require("slugify")

const User = new Schema(
  {
    name: {
      type: String,
    },
    tel: {
      type: String,
    },
    city: {
      type: String,
    },
    type: {
      type: String,
      default: "CLIENT",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: [
      {
        type: String,
        default: "USER",
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
    username: {
      type: String,
      unique: true,
    },
    forms: [
      {
        type: Schema.Types.ObjectId,
        ref: "Form",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

User.pre("save", async function (next) {
  let username = slugify(this.email.split("@")[0], { lower: true })
  const existingUser = await this.constructor.findOne({ username })

  if (existingUser) {
    let suffix = 2
    while (true) {
      const newSlug = `${username}${suffix}`
      const checkExisting = await this.constructor.findOne({
        username: newSlug,
      })
      if (!checkExisting) {
        username = newSlug
        break
      }
      suffix++
    }
  }

  this.username = username
  next()
})

module.exports = model("User", User)
