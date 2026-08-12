export default function TalkToAIBadge({ onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Talk to AI"
      className="relative w-24 h-24 shrink-0 cursor-pointer"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <path id="talkToAiCirclePath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-accent text-[8px] font-semibold uppercase" style={{ letterSpacing: '2px' }}>
          <textPath href="#talkToAiCirclePath" startOffset="0%">
            Talk to AI • Talk to AI • Talk to AI •
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white text-lg">
        💬
      </div>
    </button>
  )
}
