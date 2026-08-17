import { api } from '../lib/apiClient'

export const createPrescription = (data) => api.post('/prescriptions', data)
