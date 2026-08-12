import { useState } from 'react'
import PatternBackground from '../components/ui/PatternBackground'

export default function MedicineDetail({
  drugName,
  image = '/tablet.png',
  dosage,
  instructions,
  sideEffects,
  doctorNotes,
  onBack,
}) {
  const [detailsOpen, setDetailsOpen] = useState(false)

  return (
    <div className="w-72 rounded-3xl overflow-hidden shadow-md bg-surface">
      <div className="relative overflow-hidden bg-accent pt-4 pb-6 px-4 flex flex-col items-center">
        <PatternBackground color="white" className="opacity-25" />
        <button
          onClick={onBack}
          aria-label="Back"
          className="absolute left-4 top-4 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-text-primary cursor-pointer"
        >
          ‹
        </button>
        <img
          src={image}
          alt={drugName}
          className="relative w-28 h-36 object-contain mt-6"
        />
      </div>

      <div className="px-5 pt-4 pb-5">
        <p className="text-text-primary text-lg font-semibold">{drugName}</p>
        <p className="text-text-secondary text-sm mt-1">{dosage}</p>

        <div className="border-t border-border mt-3 pt-3">
          <button
            onClick={() => setDetailsOpen((open) => !open)}
            className="w-full flex items-center justify-between cursor-pointer"
          >
            <span className="text-text-primary font-semibold">Details</span>
            <span
              className={`text-text-secondary transition-transform ${detailsOpen ? 'rotate-180' : ''}`}
            >
              ⌄
            </span>
          </button>

          {detailsOpen && (
            <div className="mt-3 flex flex-col gap-3">
              <div>
                <p className="text-text-secondary text-xs uppercase tracking-wide">
                  Instructions
                </p>
                <p className="text-text-primary text-sm mt-1">{instructions}</p>
              </div>
              <div>
                <p className="text-text-secondary text-xs uppercase tracking-wide">
                  Side effects
                </p>
                <p className="text-text-primary text-sm mt-1">{sideEffects}</p>
              </div>
              <div>
                <p className="text-text-secondary text-xs uppercase tracking-wide">
                  Doctor's notes
                </p>
                <p className="text-text-primary text-sm mt-1">{doctorNotes}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
