import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import EntryPage from './pages/EntryPage'
import PatientRoot from './pages/PatientRoot'
import DoctorDashboard from './pages/doctor/DoctorDashboard'
import PatientDetail from './pages/doctor/PatientDetail'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/patient/:patientId/*" element={<PatientRoot />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/doctor/patient/:id" element={<PatientDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
