import { useState } from 'react'
import Button from './components/ui/Button'
import Card from './components/ui/Card'
import PrescriptionCard from './components/patient/PrescriptionCard'
import MedicationListItem from './components/patient/MedicationListItem'
import DoseChecklist from './components/patient/DoseChecklist'
import HospitalCard from './components/patient/HospitalCard'
import ChatBubble from './components/patient/ChatBubble'
import ChatInput from './components/patient/ChatInput'
import Calendar from './components/patient/Calendar'
import DoseScheduleItem from './components/patient/DoseScheduleItem'
import TalkToAIBadge from './components/patient/TalkToAIBadge'
import MedicineDetail from './pages/MedicineDetail'

function Section({ title, children }) {
  return (
    <div className="w-full max-w-sm">
      <p className="text-text-secondary text-xs font-semibold uppercase tracking-wide mb-2">
        {title}
      </p>
      <div className="flex flex-col gap-3 items-start w-full">{children}</div>
    </div>
  )
}

const initialChatMessages = [
  {
    sender: 'ai',
    text: 'Hello John. According to your prescription, you should be on Day 3. Have you taken your morning dose?',
    options: ['Yes', 'No'],
  },
]

function App() {
  const [messages, setMessages] = useState(initialChatMessages)
  const addMessage = (text) => setMessages((prev) => [...prev, { sender: 'patient', text }])

  const [{ year, month }, setCursor] = useState({ year: 2022, month: 4 })
  const [selectedDay, setSelectedDay] = useState(10)
  const goPrevMonth = () =>
    setCursor((c) => (c.month === 0 ? { year: c.year - 1, month: 11 } : { year: c.year, month: c.month - 1 }))
  const goNextMonth = () =>
    setCursor((c) => (c.month === 11 ? { year: c.year + 1, month: 0 } : { year: c.year, month: c.month + 1 }))

  return (
    <div className="min-h-svh bg-bg flex flex-col items-center gap-10 p-8">
      <Section title="Button">
        <div className="flex flex-col gap-2 w-64">
          <Button variant="primary">Request Refill</Button>
          <Button variant="secondary">View Chat</Button>
          <Button variant="ghost">Talk to your AI check-in</Button>
        </div>
      </Section>

      <Section title="Card">
        <Card>
          <p className="text-text-primary font-semibold">Medication Adherence</p>
        </Card>
        <Card tone="accent">
          <p className="text-white font-semibold">Enhance healthcare experience</p>
          <p className="text-white/80 text-sm mt-1">Get your medicine delivered fast.</p>
        </Card>
      </Section>

      <Section title="PrescriptionCard">
        <PrescriptionCard
          drugName="Lexapro"
          dosage="10mg tablets"
          refillsLeft={2}
          quantity={30}
          nextPickupDate="Friday, July 12"
        />
      </Section>

      <Section title="MedicationListItem">
        <MedicationListItem
          name="Ibuprofen 200mg"
          meta="1 tablet after meals"
          frequency="3x daily"
          image="/tablet.png"
        />
        <MedicationListItem
          name="Amoxicillin 500mg"
          meta="1 capsule, 4 more days"
          frequency="3x daily"
          image="/tablet-amoxy.png"
        />
      </Section>

      <Section title="DoseChecklist">
        <DoseChecklist
          drugName="Ibuprofen"
          image="/tablet.png"
          dose="1"
          doseUnit="tablet"
          time="2:00 PM"
          timesTaken={1}
          timesTotal={3}
        />
      </Section>

      <Section title="HospitalCard">
        <HospitalCard
          name="City General Hospital"
          hospitalPatientId="CGH-4821"
          status="approved"
          image="/tablet.png"
        />
        <HospitalCard
          name="St. Mary's Clinic"
          hospitalPatientId="SMC-1092"
          status="pending"
          image="/tablet-amoxy.png"
        />
      </Section>

      <Section title="ChatBubble + ChatInput">
        <div className="w-full flex flex-col gap-4">
          {messages.map((message, i) => (
            <ChatBubble
              key={i}
              sender={message.sender}
              text={message.text}
              options={message.options}
              onOptionClick={addMessage}
            />
          ))}
          <ChatInput onSend={addMessage} />
        </div>
      </Section>

      <Section title="Calendar + DoseScheduleItem">
        <Calendar
          year={year}
          month={month}
          selectedDay={selectedDay}
          onSelectDay={setSelectedDay}
          onPrevMonth={goPrevMonth}
          onNextMonth={goNextMonth}
        />
        <Card>
          <div className="divide-y divide-border">
            <DoseScheduleItem
              time="8:00 AM"
              drugName="Amoxicillin 500mg"
              instructions="Taken with breakfast"
              status="taken"
            />
            <DoseScheduleItem
              time="2:00 PM"
              drugName="Amoxicillin 500mg"
              instructions="Next dose due"
              status="next"
            />
            <DoseScheduleItem
              time="8:00 PM"
              drugName="Amoxicillin 500mg"
              instructions="Upcoming"
              status="upcoming"
            />
          </div>
        </Card>
      </Section>

      <Section title="TalkToAIBadge">
        <TalkToAIBadge />
      </Section>

      <Section title="MedicineDetail">
        <MedicineDetail
          drugName="Ibupar"
          image="/tablet.png"
          dosage="500mg capsules"
          instructions="Take 1 capsule 3 times daily after meals for 4 days."
          sideEffects="Nausea, mild rash, upset stomach. Contact your doctor if symptoms persist."
          doctorNotes="Complete the full course even if you feel better before day 4."
        />
      </Section>
    </div>
  )
}

export default App
