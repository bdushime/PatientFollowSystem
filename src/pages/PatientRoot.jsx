import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Dashboard from './Dashboard'
import AIChat from './AIChat'
import MedicineDetail from './MedicineDetail'
import { getPatientDetail } from '../api/patients'
import { getDoctorMe } from '../api/doctor'

function buildMedications(detail) {
  if (!detail.prescription || !detail.schedule?.length) return []
  const total = detail.schedule.length
  const taken = detail.schedule.filter((slot) => slot.status === 'taken').length

  return detail.schedule.map((slot, i) => ({
    drugName: detail.prescription.drugName,
    image: i % 2 === 0 ? '/tablet-amoxy.png' : '/tablet.png',
    dose: '1',
    doseUnit: 'dose',
    time: slot.time,
    timesTaken: taken,
    timesTotal: total,
  }))
}

export default function PatientRoot() {
  const { patientId } = useParams()
  const [detail, setDetail] = useState(null)
  const [doctor, setDoctor] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showChat, setShowChat] = useState(false)
  const [selectedMedicine, setSelectedMedicine] = useState(null)

  useEffect(() => {
    let ignore = false

    Promise.all([getPatientDetail(patientId), getDoctorMe()])
      .then(([detailRes, doctorRes]) => {
        if (ignore) return
        setDetail(detailRes)
        setDoctor(doctorRes)
      })
      .catch((err) => {
        if (!ignore) setError(err.message || 'Failed to load your data.')
      })
      .finally(() => {
        if (!ignore) setLoading(false)
      })

    return () => {
      ignore = true
    }
  }, [patientId])

  if (loading) {
    return (
      <div className="min-h-svh bg-bg flex items-center justify-center">
        <p className="text-text-secondary">Loading your dashboard…</p>
      </div>
    )
  }

  if (error || !detail) {
    return (
      <div className="min-h-svh bg-bg flex items-center justify-center px-5">
        <p className="text-warning text-center">{error || 'Patient not found.'}</p>
      </div>
    )
  }

  if (showChat) {
    return (
      <AIChat
        patientId={patientId}
        initialMessages={detail.aiResponses}
        onBack={() => setShowChat(false)}
      />
    )
  }

  if (selectedMedicine) {
    const rx = detail.prescription
    return (
      <div className="min-h-svh bg-bg flex items-center justify-center px-5">
        <MedicineDetail
          drugName={selectedMedicine.drugName}
          image={selectedMedicine.image}
          dosage={rx?.dosage}
          instructions={rx?.instructions}
          sideEffects="Not reported."
          doctorNotes={rx?.doctorNotes}
          onBack={() => setSelectedMedicine(null)}
        />
      </div>
    )
  }

  const medications = buildMedications(detail)
  const schedule = detail.schedule.map((slot, i) => ({ ...slot, medicine: medications[i] }))
  const prescriptions = detail.prescription ? [detail.prescription] : []
  const hospitals = [
    {
      name: detail.hospital,
      hospitalPatientId: detail.hospitalPatientId,
      doctorName: doctor?.name,
      status: 'approved',
    },
  ]

  return (
    <Dashboard
      patientName={detail.name}
      hospitalName={detail.hospital}
      doctorName={doctor?.name}
      hospitalPatientId={detail.hospitalPatientId}
      medications={medications}
      schedule={schedule}
      prescriptions={prescriptions}
      hospitals={hospitals}
      onTalkToAI={() => setShowChat(true)}
      onSelectMedicine={setSelectedMedicine}
    />
  )
}
