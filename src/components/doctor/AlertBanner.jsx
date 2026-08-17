import PatternBackground from '../ui/PatternBackground'

export default function AlertBanner({ message }) {
  return (
    <div className="relative overflow-hidden flex items-center gap-3 bg-warning-soft border border-warning/30 rounded-2xl px-4 py-4">
      <PatternBackground color="white" className="opacity-30" />
      <div className="relative w-10 h-10 rounded-full bg-white/80 flex items-center justify-center text-warning text-lg shrink-0">
        ⚠
      </div>
      <div className="relative">
        <p className="text-warning font-semibold">Concerning response detected</p>
        <p className="text-text-secondary text-sm mt-0.5">{message}</p>
      </div>
    </div>
  )
}
