export default function ChatBubble({ sender, text, options, onOptionClick }) {
  const isAI = sender === 'ai'

  return (
    <div className={`flex ${isAI ? 'justify-start' : 'justify-end'}`}>
      <div className={`flex flex-col gap-2 max-w-[75%] ${isAI ? 'items-start' : 'items-end'}`}>
        <div
          className={`px-4 py-3 text-sm rounded-2xl ${
            isAI
              ? 'bg-surface border border-border text-text-primary rounded-bl-sm'
              : 'bg-accent text-white rounded-br-sm'
          }`}
        >
          {text}
        </div>

        {options && options.length > 0 && (
          <div className="flex gap-2">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => onOptionClick?.(option)}
                className="rounded-full border border-accent text-accent text-sm font-semibold px-4 py-1.5 cursor-pointer hover:bg-accent-soft"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
