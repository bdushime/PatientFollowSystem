import { useState } from 'react'
import PatternBackground from '../components/ui/PatternBackground'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import DoseChecklist from '../components/patient/DoseChecklist'
import DoseScheduleItem from '../components/patient/DoseScheduleItem'
import Calendar from '../components/patient/Calendar'
import Navbar from '../components/ui/Navbar'

export default function Dashboard({
  patientName,
  hospitalName,
  doctorName,
  hospitalPatientId,
  medications,
  schedule,
  onTalkToAI,
  onSelectMedicine,
}) {
  const [{ year, month }, setCursor] = useState({ year: 2022, month: 4 })
  const [selectedDay, setSelectedDay] = useState(10)
  const [activeNavItem,setActiveNavItem] = useState('Home')

  const goPrevMonth = () =>
    setCursor((c) => (c.month === 0 ? { year: c.year - 1, month: 11 } : { year: c.year, month: c.month - 1 }))
  const goNextMonth = () =>
    setCursor((c) => (c.month === 11 ? { year: c.year + 1, month: 0 } : { year: c.year, month: c.month + 1 }))

  return (
    <div className="relative overflow-hidden bg-bg min-h-svh">
      <PatternBackground color="accent" className="opacity-10"/>
      <div className="px-5 md:px-10 lg:px-16 pt-4 flex justify-center lg:justify-start">
         <Navbar items={['Home','Prescriptions','Hospitals','MindSpace']} activeItem={activeNavItem} onSelect={setActiveNavItem}/>
      </div>
      <div className="relative overflow-hidden px-5 md:px-10 lg:px-16 pt-8 md:pt-14">
        <div className="relative max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 items-center">
          <div>
            <span className="inline-block bg-accent-soft text-accent text-xs font-semibold uppercase tracking-widest rounded-full px-3 py-1">
              [ {hospitalName} ]
            </span>
            <p className="text-text-primary font-extrabold text-4xl md:text-6xl lg:text-7xl leading-[0.95] mt-4">
              Welcome,
            </p>
            <p className="text-accent font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
              {patientName}
            </p>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3">
              <p className="text-text-secondary text-sm">
                Doctor: <span className="text-text-primary font-medium">{doctorName}</span>
              </p>
              <p className="text-text-secondary text-sm">
                Hospital ID:{' '}
                <span className="text-text-primary font-medium">{hospitalPatientId}</span>
              </p>
            </div>

            <div className="flex items-center gap-6 mt-6 md:mt-8">
              <p className="text-text-secondary text-sm md:text-base max-w-xs">
                Your prescriptions, dose reminders, and AI check-ins all in one place, built
                around your care.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src="/Patient.png"
              alt="Patient"
              className="w-56 md:w-80 lg:w-[26rem] h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16 pt-6 md:pt-8 relative grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-8">
        <div className="bg-surface rounded-3xl shadow-md p-5 md:p-8">
          <p className="text-text-primary font-semibold text-lg md:text-xl mb-4 md:mb-6">
            Today's Medications
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {medications.map((medication) => (
              <DoseChecklist
                key={medication.drugName}
                {...medication}
                onOpenDetail={() => onSelectMedicine?.(medication)}
              />
              
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
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
              {schedule.map((item) => (
                <DoseScheduleItem
                  key={item.time + item.drugName}
                  {...item}
                  onClick={item.medicine ? () => onSelectMedicine?.(item.medicine) : undefined}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>

      <div className="relative max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16 py-6 md:py-8">
        <Button variant="ghost" className="w-full lg:w-auto" onClick={onTalkToAI}>
          Mind Space
        </Button>
      </div>
    </div>
  )
}
