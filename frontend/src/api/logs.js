import { get } from "./api"

export const getLogs = async (page, searchTerm) => {
  try {
    const response = await get(
      `/dashboard/logs?page=${page}&search=${searchTerm}`
    )
    return response.data
  } catch (error) {
    throw error
  }
}
