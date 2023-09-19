import axios from "axios"

const API_BACKEND = "http://localhost:5000"

const api = axios.create({
  baseURL: API_BACKEND,
})

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
