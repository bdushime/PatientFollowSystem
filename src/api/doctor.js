import { api } from '../lib/apiClient'

export const getDoctorMe = () => api.get('/doctor/me')
export const getDoctorPatients = () => api.get('/doctor/patients')
