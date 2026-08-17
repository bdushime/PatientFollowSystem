import { useState } from 'react'
import Dashboard from './Dashboard'
import AIChat from './AIChat'

const medications = [
  {
    drugName: 'Metformin',
    image: '/tablet-amoxy.png',
    dose: '1',
    doseUnit: 'tablet',
    time: '8:00 AM',
    timesTaken: 1,
    timesTotal: 2,
  },
  {
    drugName: 'Metformin',
    image: '/tablet.png',
    dose: '1',
    doseUnit: 'tablet',
    time: '7:00 PM',
    timesTaken: 0,
    timesTotal: 2,
  },
]

const schedule = [
  {
    time: '8:00 AM',
    drugName: 'Metformin 500mg',
    instructions: 'With breakfast',
    status: 'taken',
    medicine: medications[0],
  },
  {
    time: '7:00 PM',
    drugName: 'Metformin 500mg',
    instructions: 'With dinner',
    status: 'upcoming',
    medicine: medications[1],
  },
]

// TODO: replace with GET /api/patients/:id/prescriptions
const prescriptions = [
  {
    drugName: 'Metformin',
    dosage: '500mg · 2x daily',
    refillsLeft: 2,
    quantity: 60,
    nextPickupDate: '2026-08-31',
  },
]

// TODO: replace with GET /api/patients/:id/hospitals
const hospitals = [
  {
    name: 'City General Hospital',
    hospitalPatientId: 'CGH-4821',
    status: 'approved',
  },
]

export default function PatientRoot() {
  const [showChat, setShowChat] = useState(false)

  if (showChat) {
    return <AIChat onBack={() => setShowChat(false)} />
  }

  return (
    <Dashboard
      patientName="John"
      hospitalName="City General Hospital"
      doctorName="Dr. Beni"
      hospitalPatientId="CGH-4821"
      medications={medications}
      schedule={schedule}
      prescriptions={prescriptions}
      hospitals={hospitals}
      onTalkToAI={() => setShowChat(true)}
      onSelectMedicine={() => console.log('open detail')}
    />
  )
}
