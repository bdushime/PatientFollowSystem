import { api } from '../lib/apiClient'

export const sendChatMessage = (patientId, message) =>
  api.post('/chat/message', { patientId, message })
