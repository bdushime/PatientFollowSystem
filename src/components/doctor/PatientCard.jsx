import Card from '../ui/Card'
import Button from '../ui/Button'

function AdherenceBadge({ rate }) {
  if (rate >= 90) {
    return (
      <span className="text-xs font-semibold text-success bg-success-soft rounded-full px-2.5 py-1 shrink-0">
        {rate}% · On track
      </span>
    )
  }
  if (rate >= 70) {
    return (
      <span className="text-xs font-semibold text-warning bg-warning-soft rounded-full px-2.5 py-1 shrink-0">
        {rate}% · Moderate
      </span>
    )
  }
  return (
    <span className="text-xs font-semibold text-warning bg-warning-soft rounded-full px-2.5 py-1 shrink-0">
      {rate}% · Low
    </span>
  )
}

export default function PatientCard({
  name,
  condition,
  hospitalPatientId,
  adherenceRate,
  hasAlert,
  onClick,
}) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="text-text-primary font-semibold text-lg truncate">{name}</p>
          <p className="text-text-secondary text-sm">{condition}</p>
          <p className="text-text-muted text-xs mt-0.5">ID: {hospitalPatientId}</p>
        </div>
        {hasAlert && (
          <span className="shrink-0 text-xs font-semibold text-warning bg-warning-soft rounded-full px-2.5 py-1">
            ⚠ Alert
          </span>
        )}
      </div>

      <div className="mt-4 flex items-center gap-3">
        <div className="flex-1 h-1.5 rounded-full bg-border overflow-hidden">
          <div
            className={`h-full rounded-full transition-all ${
              adherenceRate >= 90 ? 'bg-success' : 'bg-warning'
            }`}
            style={{ width: `${adherenceRate}%` }}
          />
        </div>
        <AdherenceBadge rate={adherenceRate} />
      </div>

      <div className="mt-4">
        <Button variant="secondary" className="w-full" onClick={onClick}>
          View Patient
        </Button>
      </div>
    </Card>
  )
}
