const User = require("../models/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { validationResult } = require("express-validator")
require("dotenv").config()

const generateAccessToken = (id, roles, email) => {
  const payload = {
    id,
    email,
    roles,
  }
  return jwt.sign(payload, process.env.SECRET, { expiresIn: "24h" })
}

const register = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: "Registration error", errors })
    }
    const { email, password } = req.body
    const candidate = await User.findOne({ email })
    if (candidate) {
      return res.status(400).json({ message: "Cet e-mail est déjà enregistré" })
    }
    const hashPassword = bcrypt.hashSync(password, 7)
    const user = new User({
      email,
      password: hashPassword,
      roles: ["USER"],
    })
    await user.save()
    return res.json({ message: "successful registration" })
  } catch (e) {
    res.status(400).json({ message: "Registration error" })
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      return res
        .status(400)
        .json({ message: `Utilisateur ${email} n'existe pas!` })
    }
    const validPassword = bcrypt.compareSync(password, user.password)
    if (!validPassword) {
      return res.status(400).json({ message: `Mot de passe incorrect!` })
    }
    const token = generateAccessToken(user._id, user.roles, user.email)
    return res.json({ token })
  } catch (e) {
    res.status(400).json({ message: "Login error" })
  }
}

module.exports = {
  register,
  login,
}
