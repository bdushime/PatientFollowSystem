const WEEKDAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstWeekdayOfMonth(year, month) {
  return new Date(year, month, 1).getDay()
}

// Builds one full grid of day cells: the tail end of last month, every day
// of this month, then the start of next month, so the grid always fills
// complete rows of 7.
function buildCalendarDays(year, month) {
  const daysInMonth = getDaysInMonth(year, month)
  const daysInPreviousMonth = getDaysInMonth(year, month - 1)
  const firstWeekday = getFirstWeekdayOfMonth(year, month)

  const days = []

  for (let i = 0; i < firstWeekday; i++) {
    const dayNumber = daysInPreviousMonth - firstWeekday + i + 1
    days.push({ dayNumber, isCurrentMonth: false })
  }

  for (let dayNumber = 1; dayNumber <= daysInMonth; dayNumber++) {
    days.push({ dayNumber, isCurrentMonth: true })
  }

  let nextMonthDay = 1
  while (days.length % 7 !== 0) {
    days.push({ dayNumber: nextMonthDay, isCurrentMonth: false })
    nextMonthDay++
  }

  return days
}

function getDayButtonStyle(day, selectedDay) {
  if (day.isCurrentMonth && day.dayNumber === selectedDay) {
    return 'bg-accent text-white font-semibold'
  }
  if (day.isCurrentMonth) {
    return 'text-text-primary hover:bg-accent-soft'
  }
  return 'text-text-muted'
}

export default function Calendar({
  year,
  month,
  selectedDay,
  onSelectDay,
  onPrevMonth,
  onNextMonth,
}) {
  const days = buildCalendarDays(year, month)

  return (
    <div className="w-full bg-surface border border-border rounded-2xl shadow-sm p-5 md:p-7">
      <div className="flex items-center justify-between">
        <button className="flex items-center gap-1.5 text-text-primary font-semibold text-base md:text-lg cursor-pointer">
          {MONTH_NAMES[month]} {year}
          <span className="text-text-secondary text-sm" aria-hidden="true">⌄</span>
        </button>
        <div className="flex items-center gap-2">
          <button
            onClick={onPrevMonth}
            aria-label="Previous month"
            className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-border flex items-center justify-center text-text-secondary cursor-pointer hover:border-black/20"
          >
            ‹
          </button>
          <button
            onClick={onNextMonth}
            aria-label="Next month"
            className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-border flex items-center justify-center text-text-secondary cursor-pointer hover:border-black/20"
          >
            ›
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 mt-5 text-center">
        {WEEKDAYS.map((weekday) => (
          <p key={weekday} className="text-text-muted text-xs md:text-sm font-semibold">
            {weekday}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-7 mt-2 gap-y-2 text-center">
        {days.map((day, index) => (
          <button
            key={index}
            onClick={() => day.isCurrentMonth && onSelectDay(day.dayNumber)}
            className={`h-10 w-10 md:h-12 md:w-12 mx-auto flex items-center justify-center rounded-full text-sm md:text-base cursor-pointer ${getDayButtonStyle(day, selectedDay)}`}
          >
            {day.dayNumber}
          </button>
        ))}
      </div>
    </div>
  )
}
