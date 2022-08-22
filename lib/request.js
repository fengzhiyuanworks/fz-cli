const axios = require('axios')

const service = axios.create({
  baseUR:'',
  timeout:3*1000
})

service.interceptors.response.use( response => {
  return response.data
}, error => {
  return Promise.reject(error)
})

module.exports = service
