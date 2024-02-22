import { post } from "./api"

export const uploadImage = async (formId, formData) => {
  try {
    const response = await post(`/account/upload/image/${formId}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    return response.data
  } catch (error) {
    throw error
  }
}