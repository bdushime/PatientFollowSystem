import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/ui/Navbar'
import MobileNav from '../../components/ui/MobileNav'
import PatternBackground from '../../components/ui/PatternBackground'
import PatientCard from '../../components/doctor/PatientCard'
import Calendar from '../../components/patient/Calendar'
import { getDoctorMe, getDoctorPatients } from '../../api/doctor'

const NAV_ITEMS = ['Patients', 'Alerts', 'Schedule']

export default function DoctorDashboard() {
  const [activeNavItem, setActiveNavItem] = useState('Patients')
  const [{ year, month }, setCursor] = useState({ year: 2026, month: 7 })
  const [selectedDay, setSelectedDay] = useState(16)
  const [doctor, setDoctor] = useState(null)
  const [patients, setPatients] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    let ignore = false
    Promise.all([getDoctorMe(), getDoctorPatients()])
      .then(([doctorRes, patientsRes]) => {
        if (ignore) return
        setDoctor(doctorRes)
        setPatients(patientsRes)
      })
      .catch((err) => {
        if (!ignore) setError(err.message || 'Failed to load your dashboard.')
      })
      .finally(() => {
        if (!ignore) setLoading(false)
      })
    return () => {
      ignore = true
    }
  }, [])

  const alertPatients = patients.filter((p) => p.hasAlert)
  const alertCount = alertPatients.length

  const goPrevMonth = () =>
    setCursor((c) =>
      c.month === 0 ? { year: c.year - 1, month: 11 } : { year: c.year, month: c.month - 1 }
    )
  const goNextMonth = () =>
    setCursor((c) =>
      c.month === 11 ? { year: c.year + 1, month: 0 } : { year: c.year, month: c.month + 1 }
    )

  if (loading) {
    return (
      <div className="min-h-svh bg-bg flex items-center justify-center">
        <p className="text-text-secondary">Loading your dashboard…</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-svh bg-bg flex items-center justify-center px-5">
        <p className="text-warning text-center">{error}</p>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden bg-bg min-h-svh">
      <PatternBackground color="accent" className="opacity-10" />

      {/* Navbar */}
      <div className="px-5 md:px-10 lg:px-16 pt-4 flex justify-between items-center">
        <button
          onClick={() => navigate('/')}
          aria-label="Back"
          className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-accent-soft flex items-center justify-center text-text-secondary cursor-pointer shrink-0"
        >
          ‹
        </button>

        <div className="hidden lg:block">
          <Navbar
            items={NAV_ITEMS}
            activeItem={activeNavItem}
            onSelect={setActiveNavItem}
          />
        </div>
        <div className="lg:hidden">
          <MobileNav
            items={NAV_ITEMS}
            activeItem={activeNavItem}
            onSelect={setActiveNavItem}
          />
        </div>
      </div>

      {/* Hero */}
      <div className="relative px-5 md:px-10 lg:px-16 pt-8 md:pt-14">
        <div className="relative max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 items-center">
          <div>
            <span className="inline-block bg-accent-soft text-accent text-xs font-semibold uppercase tracking-widest rounded-full px-3 py-1">
              City General Hospital
            </span>
            <p className="text-text-primary font-extrabold text-4xl md:text-6xl lg:text-7xl leading-[0.95] mt-4">
              Welcome,
            </p>
            <p className="text-accent font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
              {doctor?.name}
            </p>
            <p className="text-text-secondary text-sm md:text-base mt-3">
              {doctor?.specialty}
            </p>

            {alertCount > 0 && (
              <div className="inline-flex items-center gap-2 mt-5 bg-warning-soft border border-warning/30 rounded-2xl px-4 py-3">
                <span className="text-warning font-bold text-lg">⚠</span>
                <p className="text-warning font-semibold text-sm">
                  {alertCount} patient{alertCount > 1 ? 's require' : ' requires'} your attention today.
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/doc.jpg"
              alt="Doctor"
              className="w-56 md:w-80 lg:w-[26rem] h-auto object-cover object-top rounded-3xl"
            />
          </div>
        </div>
      </div>

      {/* Tab: Patients */}
      {activeNavItem === 'Patients' && (
        <div className="relative max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16 pt-8 pb-12">
          <p className="text-text-primary font-semibold text-lg md:text-xl mb-5">
            Your Patients
          </p>
          {patients.length === 0 ? (
            <p className="text-text-muted">No patients yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {patients.map((patient) => (
                <PatientCard
                  key={patient.id}
                  name={patient.name}
                  condition={patient.condition}
                  hospitalPatientId={patient.hospitalPatientId}
                  adherenceRate={patient.adherenceRate}
                  hasAlert={patient.hasAlert}
                  onClick={() => navigate(`/doctor/patient/${patient.id}`)}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab: Alerts */}
      {activeNavItem === 'Alerts' && (
        <div className="relative max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16 pt-8 pb-12">
          <p className="text-text-primary font-semibold text-lg md:text-xl mb-5">
            Patients Needing Attention
          </p>
          {alertPatients.length === 0 ? (
            <p className="text-text-muted">No alerts right now — everyone's on track.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {alertPatients.map((patient) => (
                <PatientCard
                  key={patient.id}
                  name={patient.name}
                  condition={patient.condition}
                  hospitalPatientId={patient.hospitalPatientId}
                  adherenceRate={patient.adherenceRate}
                  hasAlert={patient.hasAlert}
                  onClick={() => navigate(`/doctor/patient/${patient.id}`)}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Tab: Schedule */}
      {activeNavItem === 'Schedule' && (
        <div className="relative max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16 pt-8 pb-12">
          <p className="text-text-primary font-semibold text-lg md:text-xl mb-5">
            Your Schedule
          </p>
          <div className="max-w-md">
            <Calendar
              year={year}
              month={month}
              selectedDay={selectedDay}
              onSelectDay={setSelectedDay}
              onPrevMonth={goPrevMonth}
              onNextMonth={goNextMonth}
            />
          </div>
        </div>
      )}
    </div>
  )
}
