import { get, remove, put } from "./api"

export const getUsers = async (page, searchTerm) => {
  try {
    const query = new URLSearchParams({
      page: page,
      search: searchTerm,
    }).toString()

    const response = await get(`/dashboard/users?${query}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const getUserByUsername = async (username) => {
  try {
    const response = await get(`/dashboard/users/${username}`)
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
