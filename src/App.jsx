import { useState } from 'react'
import Navbar from './components/ui/Navbar'
import Dashboard from './pages/Dashboard'
import AIChat from './pages/AIChat'

function App() {
  const [activeItem, setActiveItem] = useState('Home')
  const [showChat, setShowChat] = useState(false)

  const medications = [
    {
      drugName: '',
      image:'/tablet-amoxy.png',
      dose:'1',
      doseUnit:'capsule',
      time:'2:00 PM',
      timesTaken:1,
      timesTotal:3,
    },
    {
      drugName: '',
      image:'/tablet.png',
      dose:'1',
      doseUnit:'capsule',
      time:'5:00 PM',
      timesTaken:1,
      timesTotal:3,
    },
     {
      drugName: '',
      image:'/tablet.png',
      dose:'1',
      doseUnit:'capsule',
      time:'5:00 PM',
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

  if (showChat) {
    return <AIChat onBack={() => setShowChat(false)} />
  }

  return (
    <div className=" bg-bg flex items-center justify-center p-8">
      {/* <Navbar
        items={['Home', 'Prescriptions' ,'Hospitals', 'MindSpace']}
        activeItem={activeItem}
        onSelect={setActiveItem}
      /> */}
      <Dashboard patientName="John" hospitalName="City General Hospital" doctorName="Dr. Beni" hospitalPatientId="CGH-4821" medications={medications} schedule={schedule} onTalkToAI={()=>setShowChat(true)} onSelectMedicine={(medecine)=>console.log('open detail')}/>
    </div>
  )
}

export default App
