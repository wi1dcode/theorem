import { get, remove, put } from "./api"

export const getUsers = async () => {
  try {
    const response = await get(`/dashboard/users`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteUser = async (email) => {
  try {
    const response = await remove(`/dashboard/users/remove/${email}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updateUser = async (id, userData) => {
  try {
    const response = await put(`/dashboard/users/update/${id}`, userData)
    return response.data
  } catch (error) {
    throw error
  }
}
