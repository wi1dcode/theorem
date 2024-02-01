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

export const downloadLogs = async (period) => {
  try {
    const response = await get(`/dashboard/logs/download/${period}`, {
      responseType: "blob",
    })
    // Проверка успешного статуса ответа
    if (response.status === 200) {
      const url = window.URL.createObjectURL(response.data)
      const link = document.createElement("a")
      link.href = url
      const date = new Date().toISOString().slice(0, 10)
      link.setAttribute("download", `logs-${period}-${date}.xlsx`)
      document.body.appendChild(link)
      link.click()
      link.parentNode.removeChild(link)
    } else {
      throw new Error("Server responded with an error")
    }
  } catch (error) {
    console.error("Error in downloading:", error)
  }
}
