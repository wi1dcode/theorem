require("dotenv").config()
const User = require("../models/userModel")
const Form = require("../models/formModel")
const Entrepreneur = require("../models/entrepreneurModel")
const Architecte = require("../models/architecteModel")
const Manager = require("../models/managerModel")
const slugify = require("slugify")

const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (e) {
    res.status(400).json({ message: "Get users error" })
  }
}

const getProjects = async (req, res) => {
  try {
    const project = await Form.find()
    res.json(project)
  } catch (e) {
    res.status(400).json({ message: "Get project error" })
  }
}

const getProjectByEmail = async (req, res) => {
  try {
    const { email } = req.body
    const project = await Form.findOne({ email })

    if (!project) {
      return res.status(404).json({ message: "project not found!" })
    }

    res.json(project)
  } catch (e) {
    res.status(400).json({ message: "Get project error" })
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

const getUserByEmail = async (req, res) => {
  try {
    const { email } = req.body
    const user = await User.findOne({ email })

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

const getPendingProUsers = async (req, res) => {
  try {
    const users = await User.find({ roles: "PRO", status: "PENDING" })
    res.json(users)
  } catch (e) {
    res.status(400).json({ message: "Get pending PRO users error" })
  }
}

const getApprovedProUsers = async (req, res) => {
  try {
    const users = await User.find({ roles: "PRO", status: "APPROVED" })
    res.json(users)
  } catch (e) {
    res.status(400).json({ message: "Get pending PRO users error" })
  }
}

const getPendingUsers = async (req, res) => {
  try {
    const users = await User.find({ roles: "USER", status: "PENDING" })
    res.json(users)
  } catch (e) {
    res.status(400).json({ message: "Get pending USER users error" })
  }
}

const getApprovedUsers = async (req, res) => {
  try {
    const users = await User.find({ roles: "USER", status: "APPROVED" })
    res.json(users)
  } catch (e) {
    res.status(400).json({ message: "Get pending USERs error" })
  }
}

const Approve = async (req, res) => {
  try {
    const { username } = req.body
    const user = await User.findOne({ username })

    if (!user) {
      return res.status(404).json({ message: "User not found!" })
    }

    if (user.status === "APPROVED") {
      return res.status(400).json({ message: "User is already approved!" })
    }

    user.status = "APPROVED"
    await user.save()
    return res.json({ message: "User approved successfully" })
  } catch (e) {
    return res.status(400).json({ message: "Error in approving user" })
  }
}

const Pending = async (req, res) => {
  try {
    const { username } = req.body
    const user = await User.findOne({ username })

    if (!user) {
      return res.status(404).json({ message: "User not found!" })
    }

    if (user.status === "PENDING") {
      return res.status(400).json({ message: "User is already pending!" })
    }

    user.status = "PENDING"
    await user.save()
    return res.json({ message: "User set pending successfully" })
  } catch (e) {
    return res.status(400).json({ message: "Error in set pending user" })
  }
}

const getPendingCategories = async (req, res) => {
  try {
    const pendingUsers = await User.find({ status: "PENDING" })

    const results = []

    for (const user of pendingUsers) {
      let category = null
      let categoryName = null

      const architecte = await Architecte.findOne({ email: user.email })
      const entrepreneur = await Entrepreneur.findOne({ email: user.email })
      const manager = await Manager.findOne({ email: user.email })

      if (architecte) {
        category = architecte
        categoryName = "Architecte"
      } else if (entrepreneur) {
        category = entrepreneur
        categoryName = "Entrepreneur"
      } else if (manager) {
        category = manager
        categoryName = "Manager"
      }

      if (category) {
        results.push({
          user,
          [categoryName.toLowerCase()]: category,
        })
      }
    }

    res.json(results)
  } catch (e) {
    res.status(400).json({ message: "Get pending users and categories error" })
  }
}

const getPendingArchitecte = async (req, res) => {
  try {
    const pendingUsers = await User.find({ status: "PENDING" })
    const pendingEmails = pendingUsers.map((user) => user.email)

    const pendingArchitecte = await Architecte.find({
      email: { $in: pendingEmails },
    })

    const results = pendingUsers.map((user) => {
      const userArchitecte = pendingArchitecte.find(
        (architecte) => architecte.email === user.email
      )

      if (userArchitecte) {
        return {
          user,
          architecte: userArchitecte,
        }
      }

      return null
    })

    const filteredResults = results.filter((result) => result !== null)

    res.json(filteredResults)
  } catch (e) {
    res.status(400).json({ message: "Get pending architecte error" })
  }
}

const getPendingEntrepreneur = async (req, res) => {
  try {
    const pendingUsers = await User.find({ status: "PENDING" })
    const pendingEmails = pendingUsers.map((user) => user.email)

    const pendingEntrepreneur = await Entrepreneur.find({
      email: { $in: pendingEmails },
    })

    const results = pendingUsers.map((user) => {
      const userEntrepreneur = pendingEntrepreneur.find(
        (entrepreneur) => entrepreneur.email === user.email
      )

      if (userEntrepreneur) {
        return {
          user,
          entrepreneur: userEntrepreneur,
        }
      }

      return null
    })

    const filteredResults = results.filter((result) => result !== null)

    res.json(filteredResults)
  } catch (e) {
    res.status(400).json({ message: "Get pending entrepreneur error" })
  }
}

const getPendingManager = async (req, res) => {
  try {
    const pendingUsers = await User.find({ status: "PENDING" })
    const pendingEmails = pendingUsers.map((user) => user.email)

    const pendingManager = await Manager.find({
      email: { $in: pendingEmails },
    })

    const results = pendingUsers.map((user) => {
      const userManager = pendingManager.find(
        (manager) => manager.email === user.email
      )

      if (userManager) {
        return {
          user,
          manager: userManager,
        }
      }

      return null
    })

    const filteredResults = results.filter((result) => result !== null)

    res.json(filteredResults)
  } catch (e) {
    res.status(400).json({ message: "Get pending manager error" })
  }
}

module.exports = {
  getUsers,
  getUserBySlug,
  getUserByEmail,
  deleteUser,
  giveAdmin,
  givePro,
  getPendingProUsers,
  getApprovedProUsers,
  getPendingUsers,
  getApprovedUsers,
  Approve,
  Pending,
  getPendingCategories,
  getPendingArchitecte,
  getPendingEntrepreneur,
  getPendingManager,
  getProjects,
  getProjectByEmail,
}
