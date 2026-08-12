const STATUS_BAR = {
  taken: 'bg-accent',
  next: 'bg-accent',
  upcoming: 'bg-border',
}

const STATUS_TIME_TEXT = {
  taken: 'text-accent',
  next: 'text-accent',
  upcoming: 'text-text-secondary',
}

export default function DoseScheduleItem({
  time,
  drugName,
  instructions,
  status = 'upcoming',
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`flex gap-3 py-3 ${onClick ? 'cursor-pointer hover:bg-accent-soft/40 -mx-2 px-2 rounded-xl' : ''}`}
    >
      <div className={`w-1 rounded-full ${STATUS_BAR[status]}`} />
      <div className="min-w-0">
        <p className={`text-xs font-semibold ${STATUS_TIME_TEXT[status]}`}>{time}</p>
        <p className="text-text-primary font-semibold mt-0.5">{drugName}</p>
        <p className="text-text-secondary text-sm">{instructions}</p>
      </div>
    </div>
  )
}
