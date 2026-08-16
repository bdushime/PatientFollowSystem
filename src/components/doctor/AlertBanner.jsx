export default function AlertBanner({ message }) {
  return (
    <div className="flex items-start gap-3 bg-warning-soft border border-warning/30 rounded-2xl px-4 py-3">
      <span className="text-warning font-bold text-xl shrink-0 mt-0.5">⚠</span>
      <div>
        <p className="text-warning font-semibold text-sm">Concerning response detected</p>
        <p className="text-text-secondary text-sm mt-0.5">{message}</p>
      </div>
    </div>
  )
}
