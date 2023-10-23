import { get, post } from "./api"

export const login = async (userData) => {
  try {
    const response = await post(`http://localhost:5000/account/login`, userData)
    return response.data
  } catch (error) {
    throw error
  }
}

export const getUsers = async (token) => {
  try {
    const response = await get(`/dashboard/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  } catch (error) {
    throw error
  }
}
