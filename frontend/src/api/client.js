import { get, post } from "./api"

export const getProjects = async () => {
  try {
    const response = await get(`/dashboard/projects`)
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
