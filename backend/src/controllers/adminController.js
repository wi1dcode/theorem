require("dotenv").config()
const User = require("../models/userModel")
const slugify = require("slugify")

const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (e) {
    res.status(400).json({ message: "Get users error" })
  }
}

const getUserBySlug = async (req, res) => {
  try {
    const { username } = req.params
    const user = await User.findOne({ username })

    if (!user) {
      return res.status(404).json({ message: "User not found!" })
    }

    res.json(user)
  } catch (e) {
    res.status(400).json({ message: "Get user error" })
  }
}

const deleteUser = async (req, res) => {
  try {
    const { email } = req.body
    const deletedUser = await User.findOneAndDelete({
      email: email,
    })

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found!" })
    }

    return res.json({ message: "User deleted successfully" })
  } catch (e) {
    return res.status(400).json({ message: "Error in delete user" })
  }
}

const giveAdmin = async (req, res) => {
  try {
    const { email } = req.body
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({ message: "User not found!" })
    }

    if (user.roles.includes("ADMIN")) {
      return res.status(400).json({ message: "User is already an admin!" })
    }
    user.roles.push("ADMIN")
    await user.save()
    return res.json({ message: "User granted admin role successfully" })
  } catch (e) {
    return res.status(400).json({ message: "Error in granting admin role" })
  }
}

const givePro = async (req, res) => {
  try {
    const { email } = req.body
    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({ message: "User not found!" })
    }

    if (user.roles.includes("PRO")) {
      return res.status(400).json({ message: "User is already PRO!" })
    }
    user.roles.push("PRO")
    await user.save()
    return res.json({ message: "User granted to PRO successfully" })
  } catch (e) {
    return res.status(400).json({ message: "Error in granting admin role" })
  }
}

module.exports = { getUsers, getUserBySlug, deleteUser, giveAdmin, givePro }
