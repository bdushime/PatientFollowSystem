import { useState } from 'react'
import Navbar from './components/ui/Navbar'
import Dashboard from './pages/Dashboard'

function App() {
  const [activeItem, setActiveItem] = useState('Home')

  const medications = [
    {
      drugName: '',
      image:'/tablet-amoxy.png',
      dose:'1',
      doseUnit:'capsule',
      time:'2:00 PM',
      timesTaken:1,
      timesTotal:3,
    }
  ]

  const schedule = [
    {
      time: '8:00 AM',
      drugName: 'Amoxicillin 500mg',
      instructions: 'Taken with breakfast',
      status:'taken',
      medecine: medications[0],
    }
  ]

  return (
    <div className=" bg-bg flex items-center justify-center p-8">
      {/* <Navbar
        items={['Home', 'Prescriptions' ,'Hospitals', 'MindSpace']}
        activeItem={activeItem}
        onSelect={setActiveItem}
      /> */}
      <Dashboard patientName="John" hospitalName="City General Hospital" doctorName="Dr. Beni" hospitalPatientId="CGH-4821" medications={medications} schedule={schedule} onTalkToAI={()=>console.log('Open Mind Space')} onSelectMedicine={(medecine)=>console.log('open detail')}/>
    </div>
  )
}

export default App
