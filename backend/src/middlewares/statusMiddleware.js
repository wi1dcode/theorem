const jwt = require("jsonwebtoken")
const authService = require("../services/authService")
require("dotenv").config()
module.exports = function (requiredStatus) {
  return (req, res, next) => {
    try {
      const authHeader = req.headers.authorization
      if (!authHeader) {
        return res
          .status(403)
          .json({ message: "Accès refusé, autorisation requise!" })
      }
      const token = req.headers.authorization.split(" ")[1]
      if (!token) {
        return res
          .status(403)
          .json({ message: "Accès refusé, autorisation requise!" })
      }
      const user = authService.validateAccessToken(token)

      if (user.status !== requiredStatus) {
        return res.status(403).json({ message: "Accès refusé!" })
      }

      next()
    } catch (e) {
      return res
        .status(403)
        .json({ message: "Accès refusé, autorisation requise!" })
    }
  }
}
