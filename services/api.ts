import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  validateStatus: function (status) {
    return status >= 200 && status < 400
  }
})

export default api
