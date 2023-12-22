import axios from "axios"

const API_BACKEND = "http://localhost:5000"

const api = axios.create({
  withCredentials: true,
  baseURL: API_BACKEND,
})

api.interceptors.request.use(function (config) {
  let token = localStorage.getItem("token")
  config.headers["Authorization"] = "Bearer " + token
  return config
})

api.interceptors.response.use(
  async (response) => {
    return response
  },
  async (error) => {
    const originalRequest = error.config
    console.log("Интерцептор работает    +" + JSON.stringify(originalRequest))

    if (
      (error.response.status === 401 || error.response.status === 403) &&
      !originalRequest._isRetry
    ) {
      originalRequest._isRetry = true
      try {
        const response = await api.get("/account/refresh")

        const newAccessToken = response.data
        console.log(newAccessToken)

        if (newAccessToken) {
          localStorage.setItem("token", newAccessToken)
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`
          return api(originalRequest)
        } else {
          console.log("Failed to refresh token")
          localStorage.removeItem("token")
          return Promise.reject(error)
        }
      } catch (e) {
        console.log("Failed to refresh token")
        if (e.response && e.response.status === 403) {
          console.log("No cookie found. Removing token from localStorage.")
          localStorage.removeItem("token")
        }
        return Promise.reject(error)
      }
    }
    return Promise.reject(error)
  }
)

export const get = (path, config = {}) => {
  return api.get(path, config)
}

export const post = (path, data, config = {}) => {
  return api.post(path, data, config)
}

export const put = (path, data, config = {}) => {
  return api.put(path, data, config)
}

export const remove = (path, config = {}) => {
  return api.delete(path, config)
}
