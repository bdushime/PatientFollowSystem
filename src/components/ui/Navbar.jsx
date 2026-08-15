export default function Navbar({ items, activeItem, onSelect }) {
  return (
    <nav className="inline-flex items-center gap-1 bg-surface border border-border rounded-full p-1.5 shadow-sm">
      {items.map((item) => {
        const isActive = item === activeItem

        return (
          <button
            key={item}
            onClick={() => onSelect?.(item)}
            className={
              isActive
                ? 'bg-accent text-white rounded-full px-5 py-2 text-sm font-semibold cursor-pointer'
                : 'text-text-secondary px-5 py-2 text-sm font-medium cursor-pointer hover:text-text-primary'
            }
          >
            {item}
          </button>
        )
      })}
    </nav>
  )
}
