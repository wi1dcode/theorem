import { get, post } from "./api"

export const getProjects = async (token) => {
  try {
    const response = await get(`/dashboard/projects`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (error) {
    throw error
  }
}

export const estimation = async (userData) => {
  try {
    const response = await post(`/estimation`, userData)
    return response.data
  } catch (error) {
    throw error
  }
}
