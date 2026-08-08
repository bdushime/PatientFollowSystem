import { useState } from 'react'

export default function ChatInput({ onSend }) {
  const [value, setValue] = useState('')

  const handleSend = () => {
    if (!value.trim()) return
    onSend?.(value.trim())
    setValue('')
  }

  return (
    <div className="flex items-center gap-2 bg-surface border border-border rounded-full p-1.5 pl-4">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        placeholder="Type your response..."
        className="flex-1 bg-transparent text-text-primary text-sm placeholder:text-text-muted outline-none"
      />
      <button
        onClick={handleSend}
        aria-label="Send"
        className="w-9 h-9 shrink-0 rounded-full bg-accent hover:bg-accent-hover text-white flex items-center justify-center cursor-pointer"
      >
        ↑
      </button>
    </div>
  )
}
