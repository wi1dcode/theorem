const authService = require("../services/authService")
require("dotenv").config()

module.exports = function (staticPath) {
  return function (req, res, next) {
    try {
      const authHeader = req.headers.authorization
      if (!authHeader) {
        return res
          .status(403)
          .json({ message: "Access denied, authorization required!" })
      }

      const token = authHeader.split(" ")[1]
      if (!token) {
        return res
          .status(403)
          .json({ message: "Access denied, authorization required!" })
      }

      const userData = authService.validateAccessToken(token)
      if (!userData) {
        return res
          .status(403)
          .json({ message: "Access denied, authorization required!" })
      }

      const requestedPath = req.originalUrl
      if (
        userData.roles.includes("ADMIN") ||
        requestedPath.includes(userData.email)
      ) {
        next()
      } else {
        return res
          .status(403)
          .json({ message: "Access denied, insufficient permissions!" })
      }
    } catch (e) {
      return res
        .status(403)
        .json({ message: "Access denied, authorization required!" })
    }
  }
}
