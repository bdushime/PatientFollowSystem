export default function Navbar({ items, activeItem, onSelect }) {
  return (
    <nav className="max-w-full inline-flex items-center gap-1 bg-surface border border-border rounded-full p-1.5 shadow-sm overflow-x-auto">
      {items.map((item) => {
        const isActive = item === activeItem

        return (
          <button
            key={item}
            onClick={() => onSelect?.(item)}
            className={
              isActive
                ? 'shrink-0 whitespace-nowrap bg-accent text-white rounded-full px-3 sm:px-5 py-2 text-xs sm:text-sm font-semibold cursor-pointer'
                : 'shrink-0 whitespace-nowrap text-text-secondary px-3 sm:px-5 py-2 text-xs sm:text-sm font-medium cursor-pointer hover:text-text-primary'
            }
          >
            {item}
          </button>
        )
      })}
    </nav>
  )
}
