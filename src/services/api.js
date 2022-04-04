import axios from 'axios'

const api = axios.create({
  baseURL: 'https://yoga-api.herokuapp.com/',
})

export default api
