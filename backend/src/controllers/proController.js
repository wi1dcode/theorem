const User = require("../models/userModel")
const bcrypt = require("bcryptjs")
const Entrepreneur = require("../models/entrepreneurModel")
const Architecte = require("../models/architecteModel")
const { validationResult } = require("express-validator")

const createAccount = async (email, password) => {
  try {
    const hashPassword = bcrypt.hashSync(password, 7)
    const user = new User({
      email: email,
      password: hashPassword,
      roles: ["PRO"],
    })

    await user.save()

    return user
  } catch (error) {
    throw new Error("Error creating user: " + error)
  }
}

const createEntrepreneur = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: "Create entrepreneur error", errors })
    }
    const {
      author,
      civil,
      name,
      company,
      city,
      capital,
      lastYearTurnover,
      actualTurnover,
      staff,
      manager,
      channels,
      clients,
      job,
      mobility,
      email,
      tel,
      about,
      password,
    } = req.body

    const entrepreneur = new Entrepreneur({
      author,
      civil,
      name,
      company,
      city,
      capital,
      lastYearTurnover,
      actualTurnover,
      staff,
      manager,
      channels,
      clients,
      job,
      mobility,
      email,
      tel,
      about,
    })

    const user = await createAccount(email, password)

    entrepreneur.author = user.email

    await user.save()
    await entrepreneur.save()

    res.json({ message: "Entrepreneur account created successfully" })
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating Entrepreneur and user" + error })
  }
}

const createArchitecte = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: "Create architecte error", errors })
    }
    const {
      author,
      civil,
      name,
      status,
      type,
      prestations,
      diplome,
      manager,
      company,
      city,
      clients,
      channels,
      documents,
      mobility,
      tel,
      email,
      about,
      password,
    } = req.body

    const architecte = new Architecte({
      author,
      civil,
      name,
      status,
      type,
      prestations,
      diplome,
      manager,
      company,
      city,
      clients,
      channels,
      documents,
      mobility,
      tel,
      email,
      about,
      about,
    })

    const user = await createAccount(email, password)

    architecte.author = user.email

    await user.save()
    await architecte.save()

    res.json({ message: "Architecte account created successfully" })
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating Entrepreneur and user" + error })
  }
}

module.exports = { createEntrepreneur, createArchitecte }
