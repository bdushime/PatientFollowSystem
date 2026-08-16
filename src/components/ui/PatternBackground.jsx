const COLOR_CLASSES = {
  accent: 'bg-accent',
  white: 'bg-white',
}

export default function PatternBackground({ color = 'accent', className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none ${COLOR_CLASSES[color]} ${className}`}
      style={{
        maskImage: 'url(/background-removebg-preview.png)',
        maskMode: 'alpha',
        maskSize: '1400px 933px',
        maskPosition: 'center',
        maskRepeat: 'repeat',
        WebkitMaskImage: 'url(/background-removebg-preview.png)',
        WebkitMaskSize: '1400px 933px',
        WebkitMaskPosition: 'center',
        WebkitMaskRepeat: 'repeat',
      }}
    />
  )
}
