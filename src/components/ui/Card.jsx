const tones = {
  default: 'bg-surface border border-border',
  accent: 'bg-accent border-none',
}

export default function Card({ tone = 'default', children, className = '' }) {
  return (
    <div className={`rounded-2xl p-4 shadow-sm ${tones[tone]} ${className}`}>
      {children}
    </div>
  )
}
