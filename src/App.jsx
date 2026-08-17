import { useState } from 'react'
import HospitalList from './pages/HospitalList'
import Dashboard from './pages/Dashboard'
import AIChat from './pages/AIChat'

const hospitals = [
  {
    name: 'City General Hospital',
    hospitalPatientId: 'CGH-4821',
    doctorName: 'Dr. Beni',
    status: 'approved',
    image: '/tablet.png',
  },
  {
    name: "St. Mary's Clinic",
    hospitalPatientId: 'SMC-1092',
    doctorName: 'Dr. Esther Howard',
    status: 'pending',
    image: '/tablet-amoxy.png',
  },
]

const medications = [
  {
    drugName: 'Amoxicillin',
    image: '/tablet-amoxy.png',
    dose: '1',
    doseUnit: 'capsule',
    time: '2:00 PM',
    timesTaken: 1,
    timesTotal: 3,
  },
  {
    drugName: 'Ibuprofen',
    image: '/tablet.png',
    dose: '1',
    doseUnit: 'capsule',
    time: '5:00 PM',
    timesTaken: 1,
    timesTotal: 3,
  },
]

const schedule = [
  {
    time: '8:00 AM',
    drugName: 'Amoxicillin 500mg',
    instructions: 'Taken with breakfast',
    status: 'taken',
    medicine: medications[0],
  },
]

function App() {
  const [activeNavItem, setActiveNavItem] = useState('Home')
  const [view, setView] = useState('hospitals') // 'hospitals' | 'dashboard' | 'chat'
  const [selectedHospital, setSelectedHospital] = useState(null)

  const handleNavSelect = (item) => {
    setActiveNavItem(item)
    if (item === 'Home' || item === 'Hospitals') setView('hospitals')
    if (item === 'MindSpace') setView('chat')
  }

  const handleSelectHospital = (hospital) => {
    setSelectedHospital(hospital)
    setActiveNavItem('Home')
    setView('dashboard')
  }

  if (view === 'chat') {
    return <AIChat onBack={() => setView(selectedHospital ? 'dashboard' : 'hospitals')} />
  }

  if (view === 'dashboard' && selectedHospital) {
    return (
      <Dashboard
        patientName="John"
        hospitalName={selectedHospital.name}
        doctorName={selectedHospital.doctorName}
        hospitalPatientId={selectedHospital.hospitalPatientId}
        medications={medications}
        schedule={schedule}
        activeNavItem={activeNavItem}
        onNavSelect={handleNavSelect}
        onTalkToAI={() => setView('chat')}
        onSelectMedicine={(medicine) => console.log('open detail for', medicine.drugName)}
      />
    )
  }

  return (
    <HospitalList
      patientName="John"
      hospitals={hospitals}
      activeNavItem={activeNavItem}
      onNavSelect={handleNavSelect}
      onSelectHospital={handleSelectHospital}
    />
  )
}

export default App
