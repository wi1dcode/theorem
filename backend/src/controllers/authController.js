const User = require("../models/userModel")
const bcrypt = require("bcryptjs")
const authService = require("../services/authService")
const mailService = require("../services/mailService")
const { validationResult } = require("express-validator")
require("dotenv").config()

const register = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: "Registration error", errors })
    }
    const { email, password, tel, name, type, city } = req.body
    const candidate = await User.findOne({ email })
    if (candidate) {
      return res.status(400).json({ message: "Cet e-mail est déjà enregistré" })
    }
    const hashPassword = bcrypt.hashSync(password, 7)
    const user = new User({
      email,
      password: hashPassword,
      roles: ["USER"],
      tel,
      name,
      type,
      city,
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

    const token = authService.generateAccessToken(
      user._id,
      user.email,
      user.roles,
      user.status
    )

    return res.json({ token })
  } catch (e) {
    res.status(400).json({ message: "Login error" })
  }
}

const validateToken = async (req, res) => {
  try {
    const token = req.headers.authorization
    if (!token) {
      return res.status(403).json({ message: "Token is missing" })
    }

    const userData = authService.validateAccessToken(token.split("Bearer ")[1])

    return res.status(200).json({ userData })
  } catch (e) {
    res.status(403).json({ message: "Token invalid" })
  }
}

const activate = async (req, res) => {
  try {
    const activationLink = req.params.link
    await authService.activate(activationLink)
    res.status(200).json({ message: "Account successfully activated" })
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ message: error.message || "Internal server error" })
  }
}

const resetPasswordRequest = async (req, res) => {
  const { email } = req.body
  const user = await User.findOne({ email })
  if (!user) {
    return res.status(404).json({ message: "Utilisateur non trouvé" })
  }

  const now = new Date()
  const activationLimit = user.activationLimit || new Date(0)

  // Vérifier si une demande de réinitialisation a été faite dans la dernière heure
  if (now - activationLimit < 3600000) {
    return res.status(429).json({
      message: "Réinitialisation déjà demandée. Veuillez réessayer plus tard.",
    })
  }

  const resetCode = Math.floor(10000 + Math.random() * 90000).toString()
  user.activationLink = resetCode
  user.activationLimit = new Date(now.getTime() + 10 * 60000) // 10 minutes validity
  await user.save()

  await mailService.sendPasswordResetCode(email, resetCode)
  res.json({ message: "Email de réinitialisation envoyé avec succès." })
}

const newPassword = async (req, res) => {
  const { email, resetCode, newPassword } = req.body
  const user = await User.findOne({ email })

  if (!user || user.activationLink !== resetCode) {
    return res.status(400).json({
      message: "Code de réinitialisation invalide ou utilisateur non trouvé",
    })
  }

  const now = new Date()
  if (user.activationLimit < now) {
    return res.status(403).json({ message: "Code de réinitialisation expiré" })
  }

  const hashedPassword = bcrypt.hashSync(newPassword, 7)
  user.password = hashedPassword
  user.activationLink = Math.floor(10000 + Math.random() * 90000).toString()
  await user.save()

  res.json({ message: "Mot de passe changé avec succès" })
}

// const refresh = async (req, res) => {
//   try {
//     const { refreshToken } = req.cookies
//     if (!refreshToken) {
//       return res.status(403).json({ message: "Refresh token is required" })
//     }

//     const userData = await authService.validateRefreshToken(refreshToken)
//     if (!userData) {
//       return res.status(403).json({ message: "Invalid refresh token" })
//     }

//     const newTokens = authService.generateAccessToken(
//       userData.id,
//       userData.email,
//       userData.roles,
//       userData.status
//     )

//     return res.json(newTokens)
//   } catch (e) {
//     res.status(500).json({ message: "Internal Server Error" })
//   }
// }

// const logout = async (req, res, next) => {
//   try {
//     const { refreshToken } = req.cookies
//     const token = await authService.removeToken(refreshToken)
//     res.clearCookie("refreshToken")
//     return res.json(token)
//   } catch (e) {
//     next(e)
//   }
// }

module.exports = {
  register,
  login,
  validateToken,
  activate,
  resetPasswordRequest,
  newPassword,
}
