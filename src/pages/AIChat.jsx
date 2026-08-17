import { useEffect, useRef, useState } from 'react'
import ChatBubble from '../components/patient/ChatBubble'
import ChatInput from '../components/patient/ChatInput'
import TypingIndicator from '../components/patient/TypingIndicator'
import { sendChatMessage } from '../api/chat'

const FALLBACK_MESSAGE = {
  sender: 'ai',
  text: 'Hello! Have you taken your medication as scheduled today?',
  options: ['Yes', 'No'],
}

export default function AIChat({ patientId, initialMessages, onBack }) {
  const [messages, setMessages] = useState(
    initialMessages?.length ? initialMessages : [FALLBACK_MESSAGE],
  )
  const [sending, setSending] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, sending])

  const addMessage = async (text) => {
    if (sending) return
    setMessages((prev) => [...prev, { sender: 'patient', text }])
    setSending(true)
    try {
      const { reply, hasAlert } = await sendChatMessage(patientId, text)
      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: reply, ...(hasAlert ? {} : { options: ['Yes', 'No'] }) },
      ])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: 'ai', text: err.message || 'Something went wrong sending that. Please try again.' },
      ])
    } finally {
      setSending(false)
    }
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
            optionsDisabled={sending}
            onOptionClick={addMessage}
          />
        ))}
        {sending && <TypingIndicator />}
        <div ref={bottomRef} />
      </div>

      <div className="px-5 py-4 border-t border-border bg-surface">
        <div className="max-w-2xl w-full mx-auto">
          <ChatInput onSend={addMessage} disabled={sending} />
        </div>
      </div>
    </div>
  )
}
