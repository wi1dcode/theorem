import { get, post } from "./api"

export const validateToken = async () => {
  try {
    const response = await get(`/account/session`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const refreshToken = async () => {
  try {
    const response = await get(`/account/refresh`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const logout = async () => {
  try {
    const response = await post(`/account/logout`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const login = async (userData) => {
  try {
    const response = await post(`/account/login`, userData)
    return response.data
  } catch (error) {
    throw error
  }
}

export const changePassword = async (oldPassword, newPassword) => {
  try {
    const response = await post("/account/change-password", {
      oldPassword,
      newPassword,
    })
    return response.data
  } catch (error) {
    throw error
  }
}

export const resetPasswordRequest = async (email) => {
  try {
    const response = await post(`/reset-request`, { email })
    return response.data
  } catch (error) {
    throw error
  }
}

export const setNewPassword = async (email, resetCode, newPassword) => {
  try {
    const response = await post(`/new-password`, {
      email,
      resetCode,
      newPassword,
    })
    return response.data
  } catch (error) {
    throw error
  }
}
