import axios from 'axios'

const Request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 5000,
})

/**
 * 请求拦截器
 */
Request.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  }
)

/**
 * 响应拦截器
 */
Request.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return error
  }
)

export default Request
