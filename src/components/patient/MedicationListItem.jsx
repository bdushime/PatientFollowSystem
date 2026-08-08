export default function MedicationListItem({
  name,
  meta,
  frequency,
  image = '/tablet.png',
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-4 bg-surface border border-border rounded-2xl p-3 shadow-sm text-left cursor-pointer hover:border-black/20"
    >
      <img
        src={image}
        alt={name}
        className="w-20 h-20 shrink-0 rounded-xl object-contain bg-accent-soft p-1"
      />
      <div className="min-w-0 flex-1">
        <p className="text-text-primary font-semibold">{name}</p>
        {meta && <p className="text-text-secondary text-sm truncate">{meta}</p>}
      </div>
      <p className="text-text-secondary text-sm text-right shrink-0 whitespace-nowrap">
        {frequency}
      </p>
    </button>
  )
}
