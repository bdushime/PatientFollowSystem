import { useState } from 'react'

export default function MobileNav({ items, activeItem, onSelect }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (item) => {
    onSelect?.(item)
    setIsOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        className="w-11 h-11 rounded-full bg-surface border border-border shadow-sm flex flex-col items-center justify-center gap-1 cursor-pointer"
      >
        <span className="w-5 h-0.5 rounded-full bg-text-primary" />
        <span className="w-5 h-0.5 rounded-full bg-text-primary" />
        <span className="w-5 h-0.5 rounded-full bg-text-primary" />
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/40"
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-surface shadow-xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 pt-5">
          <p className="text-text-secondary text-xs font-semibold uppercase tracking-widest">
            General
          </p>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="w-9 h-9 rounded-full bg-accent-soft flex items-center justify-center text-text-secondary cursor-pointer"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col gap-1 px-3 mt-4">
          {items.map((item) => {
            const isActive = item === activeItem

            return (
              <button
                key={item}
                onClick={() => handleSelect(item)}
                className={
                  isActive
                    ? 'text-left rounded-xl px-4 py-3 text-sm font-semibold bg-accent text-white cursor-pointer'
                    : 'text-left rounded-xl px-4 py-3 text-sm font-medium text-text-secondary hover:bg-accent-soft cursor-pointer'
                }
              >
                {item}
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}
