import { useState } from 'react'
import PatternBackground from '../ui/PatternBackground'

export default function DoseChecklist({
  drugName,
  image = '/tablet.png',
  dose,
  doseUnit,
  time,
  timesTaken,
  timesTotal,
  onClose,
  onOpenDetail,
}) {
  const [taken, setTaken] = useState(false)

  return (
    <div className="w-full rounded-3xl overflow-hidden shadow-md bg-surface">
      <div
        onClick={onOpenDetail}
        className={`relative bg-accent-soft mx-4 mt-4 rounded-2xl px-4 pt-4 pb-4 ${onOpenDetail ? 'cursor-pointer' : ''}`}
      >
        <button
          onClick={(e) => {
            e.stopPropagation()
            onClose?.()
          }}
          aria-label="Close"
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/80 flex items-center justify-center text-text-secondary cursor-pointer"
        >
          ×
        </button>

        <div className="flex justify-center py-3">
          <img src={image} alt={drugName} className="w-40 h-52 object-contain" />
        </div>

        <div className="flex items-center justify-between gap-3">
          <p className="text-text-primary font-semibold text-lg">{drugName}</p>
          <button
            onClick={(e) => {
              e.stopPropagation()
              setTaken(true)
            }}
            disabled={taken}
            className="relative overflow-hidden inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-white cursor-pointer disabled:cursor-not-allowed shrink-0 bg-accent hover:bg-accent-hover disabled:hover:bg-accent"
          >
            {!taken && <PatternBackground color="white" className="opacity-25" />}
            <span className="relative" aria-hidden="true">✓</span>
            <span className="relative">{taken ? 'Taken' : 'Mark as taken'}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 divide-x divide-border mt-4 px-2 pb-4 pt-3">
        <div className="text-center px-1">
          <p className="text-text-primary font-semibold text-sm whitespace-nowrap">{dose}</p>
          <p className="text-text-secondary text-xs mt-0.5">Dose, {doseUnit}</p>
        </div>
        <div className="text-center px-1">
          <p className="text-text-primary font-semibold text-sm whitespace-nowrap">{time}</p>
          <p className="text-text-secondary text-xs mt-0.5">Time to take</p>
        </div>
        <div className="text-center px-1">
          <p className="text-text-primary font-semibold text-sm whitespace-nowrap">
            {timesTaken}/{timesTotal}
          </p>
          <p className="text-text-secondary text-xs mt-0.5">Number of times</p>
        </div>
      </div>
    </div>
  )
}
