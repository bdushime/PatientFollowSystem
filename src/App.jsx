import { useState } from 'react'
import Calendar from './components/patient/Calendar'
import Card from './components/ui/Card'
import DoseScheduleItem from './components/patient/DoseScheduleItem'

function App() {
  const [{ year, month }, setCursor] = useState({ year: 2022, month: 4 })
  const [selectedDay, setSelectedDay] = useState(10)

  const goPrevMonth = () =>
    setCursor(({ year, month }) =>
      month === 0 ? { year: year - 1, month: 11 } : { year, month: month - 1 }
    )
  const goNextMonth = () =>
    setCursor(({ year, month }) =>
      month === 11 ? { year: year + 1, month: 0 } : { year, month: month + 1 }
    )

  return (
    <div className="min-h-svh bg-bg flex items-center justify-center p-8">
      <div className="w-80 flex flex-col gap-4">
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
      </div>
    </div>
  )
}

export default App
