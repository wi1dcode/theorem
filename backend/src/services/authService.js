const jwt = require("jsonwebtoken")
const session = require("../models/sessionModel")

class AuthService {
  generateTokens(id, email, roles, status) {
    const payload = {
      id,
      email,
      roles,
      status,
    }
    console.log(payload)
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: "30s",
    })
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: "30d",
    })
    return {
      accessToken,
      refreshToken,
    }
  }

  generateAccessToken = (id, email, roles, status) => {
    const payload = {
      id,
      email,
      roles,
      status,
    }
    return jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: "30s",
    })
  }

  validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
      return userData
    } catch (e) {
      return null
    }
  }

  async validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET)
      return userData
    } catch (e) {
      return null
    }
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await session.findOne({ user: userId })
    if (tokenData) {
      tokenData.refreshToken = refreshToken
      return tokenData.save()
    }
    const token = await session.create({ user: userId, refreshToken })
    return token
  }

  async removeToken(refreshToken) {
    const tokenData = await session.deleteOne({ refreshToken })
    return tokenData
  }

  async findToken(refreshToken) {
    const tokenData = await session.findOne({ refreshToken })
    return tokenData
  }
}

module.exports = new AuthService()