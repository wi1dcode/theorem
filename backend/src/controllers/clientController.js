const User = require("../models/userModel")
const bcrypt = require("bcryptjs")
const Client = require("../models/clientModel")
const { validationResult } = require("express-validator")

const createAccount = async (email, password, name, city, tel) => {
  try {
    const hashPassword = bcrypt.hashSync(password, 7)
    const user = new User({
      email: email,
      password: hashPassword,
      roles: ["USER"],
      name: name,
      city: city,
      tel: tel,
    })

    await user.save()

    return user
  } catch (error) {
    throw new Error("Error creating user: " + error)
  }
}

const createRequest = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: "Create request error", errors })
    }
    const {
      author,
      renovation,
      search,
      sizes,
      type,
      havePhoto,
      photos,
      help,
      surface,
      products,
      budget,
      information,
      documents,
      adresse,
      status,
      when,
      about,
      email,
      tel,
      name,
      city,
      password,
    } = req.body

    const client = new Client({
      author,
      renovation,
      search,
      sizes,
      type,
      havePhoto,
      photos,
      help,
      surface,
      products,
      budget,
      information,
      documents,
      adresse,
      status,
      when,
      about,
      email,
      tel,
      password,
    })

    const user = await createAccount(email, password, name, city, tel)

    client.author = user.email

    await user.save()
    await client.save()

    res.json({ message: "request created successfully" })
  } catch (error) {
    res.status(400).json({
      message: "Error creating request and user" + error,
    })
  }
}

module.exports = { createRequest }
