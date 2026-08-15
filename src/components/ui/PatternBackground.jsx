const COLOR_CLASSES = {
  accent: 'bg-accent',
  white: 'bg-white',
}

export default function PatternBackground({ color = 'accent', className = '' }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 ${COLOR_CLASSES[color]} ${className}`}
      style={{
        maskImage: 'url(/background-removebg-preview.png)',
        maskMode: 'alpha',
        maskSize: '700px 467px',
        maskPosition: 'center',
        maskRepeat: 'repeat',
        WebkitMaskImage: 'url(/background-removebg-preview.png)',
        WebkitMaskSize: '700px 467px',
        WebkitMaskPosition: 'center',
        WebkitMaskRepeat: 'repeat',
      }}
    />
  )
}
