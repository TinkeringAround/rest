import axios from 'axios'

// ===============================================
const api = axios.create({
  baseURL: 'http://localhost:8080/servers',
  timeout: 10000
})

// ===============================================
export const getServers = () => api.get('')

export const addNewServer = (url: string) =>
  api.post('', {
    url: url
  })

export const deleteExistingServer = (id: string) => api.delete('/' + id)
