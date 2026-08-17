const STATUS_TEXT = {
  approved: { className: 'text-accent', label: 'Approved' },
  pending: { className: 'text-warning', label: 'Pending' },
}

export default function HospitalCard({
  name,
  hospitalPatientId,
  doctorName,
  status,
  image = '/tablet.png',
  onClick,
}) {
  const statusText = STATUS_TEXT[status]

  return (
    <div className="w-full rounded-3xl overflow-hidden shadow-md bg-surface">
      <div
        onClick={onClick}
        className={`relative bg-accent-soft mx-4 mt-4 rounded-2xl px-4 pt-4 pb-4 ${onClick ? 'cursor-pointer' : ''}`}
      >
        <div className="flex justify-center py-3">
          <img src={image} alt={name} className="w-40 h-40 object-contain" />
        </div>

        <div className="flex items-center justify-between gap-3">
          <p className="text-text-primary font-semibold text-lg">{name}</p>
          <span className="text-text-secondary text-lg" aria-hidden="true">
            ›
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 divide-x divide-border mt-4 px-2 pb-4 pt-3">
        <div className="text-center px-1">
          <p className="text-text-primary font-semibold text-sm whitespace-nowrap">
            {hospitalPatientId}
          </p>
          <p className="text-text-secondary text-xs mt-0.5">Hospital ID</p>
        </div>
        <div className="text-center px-1">
          <p className="text-text-primary font-semibold text-sm">{doctorName}</p>
          <p className="text-text-secondary text-xs mt-0.5">Doctor</p>
        </div>
        <div className="text-center px-1">
          <p className={`font-semibold text-sm whitespace-nowrap ${statusText.className}`}>
            {statusText.label}
          </p>
          <p className="text-text-secondary text-xs mt-0.5">Status</p>
        </div>
      </div>
    </div>
  )
}
