import { get, post } from "./api"

export const sendResponses = async (formData) => {
  try {
    const response = await post(`/pro-responses`, formData)
    return response.data
  } catch (error) {
    throw error
  }
}

export const getMe = async () => {
  try {
    const response = await get(`/pro/userinfo`)
    return response.data
  } catch (error) {
    throw error
  }
}
