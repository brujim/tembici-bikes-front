import axios from 'axios'

const apiLegacy = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_LEGACY_RECOVER_PASSWORD,
  validateStatus: function (status) {

    return status >= 200 && status < 400
  }
})

export default apiLegacy
