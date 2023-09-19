import { get } from "./api"

export const publishArticle = async () => {
  try {
    const response = await post(`/dashboard/article/request`)
    return response.data
  } catch (error) {
    throw error
  }
}
