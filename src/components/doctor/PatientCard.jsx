import PatternBackground from '../ui/PatternBackground'

export default function PatientCard({
  name,
  condition,
  hospitalPatientId,
  adherenceRate,
  hasAlert,
  onClick,
}) {
  return (
    <div className="w-full rounded-3xl overflow-hidden shadow-md bg-surface">
      <div
        onClick={onClick}
        className="relative bg-accent-soft mx-4 mt-4 rounded-2xl px-4 pt-4 pb-4 cursor-pointer"
      >

        <div className="flex justify-center py-3">
          <img src="/Patient.png" alt={name} className="w-40 h-52 object-contain" />
        </div>

        <div className="flex items-center justify-between gap-3">
          <p className="text-text-primary font-semibold text-lg">{name}</p>
          <button
            onClick={(e) => { e.stopPropagation(); onClick?.() }}
            className="relative overflow-hidden inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white cursor-pointer shrink-0 bg-accent hover:bg-accent-hover"
          >
            <PatternBackground color="white" className="opacity-25" />
            <span className="relative">View Patient</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 divide-x divide-border mt-4 px-2 pb-4 pt-3">
        <div className="text-center px-1">
          <p className="text-text-primary font-semibold text-sm">{hospitalPatientId}</p>
          <p className="text-text-secondary text-xs mt-0.5">Patient ID</p>
        </div>
        <div className="text-center px-1">
          <p className="text-text-primary font-semibold text-sm">{adherenceRate}%</p>
          <p className="text-text-secondary text-xs mt-0.5">Adherence</p>
        </div>
        <div className="text-center px-1">
          <p className="text-text-primary font-semibold text-sm truncate">{condition}</p>
          <p className="text-text-secondary text-xs mt-0.5">Condition</p>
        </div>
      </div>
    </div>
  )
}
