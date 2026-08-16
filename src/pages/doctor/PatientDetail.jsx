import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { mockPatients } from '../../data/mockDoctorData'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import Calendar from '../../components/patient/Calendar'
import DoseScheduleItem from '../../components/patient/DoseScheduleItem'
import ChatBubble from '../../components/patient/ChatBubble'
import AlertBanner from '../../components/doctor/AlertBanner'
import WritePrescriptionForm from '../../components/doctor/WritePrescriptionForm'

export default function PatientDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const patient = mockPatients.find((p) => p.id === id)

  const [{ year, month }, setCursor] = useState({ year: 2026, month: 7 })
  const [selectedDay, setSelectedDay] = useState(16)
  const [showForm, setShowForm] = useState(false)

  const goPrevMonth = () =>
    setCursor((c) =>
      c.month === 0 ? { year: c.year - 1, month: 11 } : { year: c.year, month: c.month - 1 }
    )
  const goNextMonth = () =>
    setCursor((c) =>
      c.month === 11 ? { year: c.year + 1, month: 0 } : { year: c.year, month: c.month + 1 }
    )

  if (!patient) {
    return (
      <div className="min-h-svh bg-bg flex items-center justify-center">
        <p className="text-text-secondary">Patient not found.</p>
      </div>
    )
  }

  const { prescription } = patient

  return (
    <div className="bg-bg min-h-svh">
      {/* Header */}
      <div className="bg-surface border-b border-border px-5 md:px-10 lg:px-16 py-4 flex items-center gap-4">
        <button
          onClick={() => navigate('/doctor')}
          aria-label="Back to patients"
          className="w-9 h-9 rounded-full bg-accent-soft flex items-center justify-center text-text-secondary cursor-pointer hover:bg-accent/20"
        >
          ‹
        </button>
        <div>
          <p className="text-text-primary font-semibold">{patient.name}, {patient.age}</p>
          <p className="text-text-secondary text-xs">
            {patient.condition} · ID: {patient.hospitalPatientId}
          </p>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16 py-6 md:py-8">
        {/* Alert Banner */}
        {patient.hasAlert && (
          <div className="mb-6">
            <AlertBanner message={patient.alertMessage} />
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 md:gap-8">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6">

            {/* Current Prescription */}
            <Card>
              <div className="flex items-center justify-between mb-4">
                <p className="text-text-primary font-semibold text-lg">Current Prescription</p>
                <span className="text-xs font-semibold text-accent bg-accent-soft rounded-full px-2.5 py-1">
                  Active
                </span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent-soft flex items-center justify-center text-lg shrink-0">
                  💊
                </div>
                <div>
                  <p className="text-text-primary font-semibold">{prescription.drugName}</p>
                  <p className="text-text-secondary text-sm">{prescription.dosage}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 border-t border-border pt-4">
                <div>
                  <p className="text-text-muted text-xs uppercase tracking-wide">Frequency</p>
                  <p className="text-text-primary font-medium text-sm mt-0.5">{prescription.frequency}</p>
                </div>
                <div>
                  <p className="text-text-muted text-xs uppercase tracking-wide">Quantity</p>
                  <p className="text-text-primary font-medium text-sm mt-0.5">{prescription.quantity} units</p>
                </div>
                <div>
                  <p className="text-text-muted text-xs uppercase tracking-wide">Refills left</p>
                  <p className="text-text-primary font-medium text-sm mt-0.5">{prescription.refillsLeft}</p>
                </div>
                <div>
                  <p className="text-text-muted text-xs uppercase tracking-wide">Next pickup</p>
                  <p className="text-text-primary font-medium text-sm mt-0.5">{prescription.nextPickupDate}</p>
                </div>
              </div>

              <div className="border-t border-border mt-4 pt-4 flex flex-col gap-3">
                <div>
                  <p className="text-text-muted text-xs uppercase tracking-wide">Instructions</p>
                  <p className="text-text-primary text-sm mt-0.5">{prescription.instructions}</p>
                </div>
                <div>
                  <p className="text-text-muted text-xs uppercase tracking-wide">Doctor's notes</p>
                  <p className="text-text-primary text-sm mt-0.5">{prescription.doctorNotes}</p>
                </div>
              </div>
            </Card>

            {/* AI Follow-up Responses */}
            <Card>
              <p className="text-text-primary font-semibold text-lg mb-4">
                AI Follow-up Responses
              </p>
              <div className="flex flex-col gap-3">
                {patient.aiResponses.map((msg, i) => (
                  <ChatBubble
                    key={i}
                    sender={msg.sender}
                    text={msg.text}
                  />
                ))}
              </div>
            </Card>

            {/* Write Prescription */}
            {showForm ? (
              <WritePrescriptionForm
                patientId={patient.id}
                onCancel={() => setShowForm(false)}
                onSubmit={() => setShowForm(false)}
              />
            ) : (
              <Button variant="primary" className="w-full" onClick={() => setShowForm(true)}>
                + Write New Prescription
              </Button>
            )}
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-4">
            <Calendar
              year={year}
              month={month}
              selectedDay={selectedDay}
              onSelectDay={setSelectedDay}
              onPrevMonth={goPrevMonth}
              onNextMonth={goNextMonth}
              markedDays={patient.adherenceDays}
            />

            <Card>
              <p className="text-text-primary font-semibold mb-3">Today's Schedule</p>
              <div className="divide-y divide-border">
                {patient.schedule.map((item, i) => (
                  <DoseScheduleItem
                    key={i}
                    time={item.time}
                    drugName={item.drugName}
                    instructions={item.instructions}
                    status={item.status}
                  />
                ))}
              </div>
            </Card>
          </div>

        </div>
      </div>
    </div>
  )
}
