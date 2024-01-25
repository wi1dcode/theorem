import { post, get } from "./api"

export const uploadDocument = async (formId, formData) => {
  try {
    const response = await post(
      `/account/upload/document/${formId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    return response.data
  } catch (error) {
    throw error
  }
}

export const downloadDocument = async (formId, documentName) => {
  try {
    const response = await get(`/account/download/document/${formId}/${documentName}`, {
      responseType: "blob",
    })

    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", documentName)
    document.body.appendChild(link)
    link.click()

    link.parentNode.removeChild(link)
  } catch (error) {
    console.error("Ошибка при скачивании документа:", error)
  }
}
