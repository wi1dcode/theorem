import { get } from "./api"

export const getUsers = async () => {
  try {
    const response = await get(`/dashboard/users`)
    return response.data
  } catch (error) {
    throw error
  }
}
