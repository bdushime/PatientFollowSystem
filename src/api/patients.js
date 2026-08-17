import { api } from '../lib/apiClient'

export const listPatients = () => api.get('/patients')
export const getPatientDetail = (id) => api.get(`/patients/${id}`)
export const getPatientChatHistory = (id) => api.get(`/patients/${id}/chat-history`)
export const createPatient = (data) => api.post('/patients', data)
