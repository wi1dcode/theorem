const jwt = require("jsonwebtoken")
require("dotenv").config()
module.exports = function () {
  return function (req, res, next) {
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
      const userRoles = jwt.verify(token, process.env.SECRET).roles
      let hasRole = false
      if (userRoles.includes("ADMIN")) {
        hasRole = true
      }
      if (!hasRole) {
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
