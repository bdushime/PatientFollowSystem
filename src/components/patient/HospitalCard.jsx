const STATUS_TEXT = {
  approved: { className: 'text-accent', label: 'Approved' },
  pending: { className: 'text-warning', label: 'Pending approval' },
}

export default function HospitalCard({ name, hospitalPatientId, status, image, onClick }) {
  const statusText = STATUS_TEXT[status]

  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-4 bg-surface border border-border rounded-2xl p-5 shadow-sm text-left cursor-pointer hover:border-black/20"
    >
      {image && (
        <img
          src={image}
          alt={name}
          className="w-16 h-16 shrink-0 rounded-xl object-contain bg-accent-soft p-1.5"
        />
      )}
      <div className="min-w-0 flex-1">
        <p className="text-text-primary font-semibold text-lg">{name}</p>
        <p className="text-text-secondary text-sm">ID: {hospitalPatientId}</p>
        <p className={`text-sm font-medium mt-0.5 ${statusText.className}`}>{statusText.label}</p>
      </div>
    </button>
  )
}
