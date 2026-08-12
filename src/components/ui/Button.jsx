import PatternBackground from './PatternBackground'

const styles = {
  primary: 'bg-accent text-white hover:bg-accent-hover disabled:opacity-40',
  secondary:
    'bg-surface-raised text-text-primary border border-border hover:border-black/20 disabled:opacity-40',
  ghost: 'bg-transparent text-accent hover:bg-accent-soft disabled:opacity-40',
}

export default function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  return (
    <button
      className={`relative overflow-hidden rounded-xl px-5 py-3 text-sm font-semibold cursor-pointer disabled:cursor-not-allowed transition-colors ${styles[variant]} ${className}`}
      {...props}
    >
      {variant === 'primary' && <PatternBackground color="white" className="opacity-25" />}
      <span className="relative">{children}</span>
    </button>
  )
}
