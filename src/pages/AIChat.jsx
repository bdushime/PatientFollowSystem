import { useState } from 'react'
import ChatBubble from '../components/patient/ChatBubble'
import ChatInput from '../components/patient/ChatInput'

const initialMessages = [
  {
    sender: 'ai',
    text: 'Hello John. According to your prescription, you should be on Day 3. Have you taken your morning dose?',
    options: ['Yes', 'No'],
  },
]

export default function AIChat({ onBack }) {
  const [messages, setMessages] = useState(initialMessages)

  const addMessage = (text) => {
    setMessages((prev) => [...prev, { sender: 'patient', text }])
  }

  return (
    <div className="min-h-svh bg-bg flex flex-col">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-border bg-surface">
        <button
          onClick={onBack}
          aria-label="Back"
          className="w-9 h-9 rounded-full bg-accent-soft flex items-center justify-center text-text-secondary cursor-pointer"
        >
          ‹
        </button>
        <p className="text-text-primary font-semibold">Mind Space</p>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4 max-w-2xl w-full mx-auto">
        {messages.map((message, i) => (
          <ChatBubble
            key={i}
            sender={message.sender}
            text={message.text}
            options={message.options}
            onOptionClick={addMessage}
          />
        ))}
      </div>

      <div className="px-5 py-4 border-t border-border bg-surface">
        <div className="max-w-2xl w-full mx-auto">
          <ChatInput onSend={addMessage} />
        </div>
      </div>
    </div>
  )
}
