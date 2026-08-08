const STATUS_BAR = {
  taken: 'bg-success',
  next: 'bg-accent',
  upcoming: 'bg-border',
}

const STATUS_TIME_TEXT = {
  taken: 'text-success',
  next: 'text-accent',
  upcoming: 'text-text-secondary',
}

export default function DoseScheduleItem({ time, drugName, instructions, status = 'upcoming' }) {
  return (
    <div className="flex gap-3 py-3">
      <div className={`w-1 rounded-full ${STATUS_BAR[status]}`} />
      <div className="min-w-0">
        <p className={`text-xs font-semibold ${STATUS_TIME_TEXT[status]}`}>{time}</p>
        <p className="text-text-primary font-semibold mt-0.5">{drugName}</p>
        <p className="text-text-secondary text-sm">{instructions}</p>
      </div>
    </div>
  )
}
