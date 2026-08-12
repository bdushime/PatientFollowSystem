import PatternBackground from './PatternBackground'

const tones = {
  default: 'bg-surface border border-border',
  accent: 'bg-accent border-none',
}

export default function Card({ tone = 'default', children, className = '' }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl p-4 shadow-sm ${tones[tone]} ${className}`}>
      {tone === 'accent' && <PatternBackground color="white" className="opacity-25" />}
      <div className="relative">{children}</div>
    </div>
  )
}
