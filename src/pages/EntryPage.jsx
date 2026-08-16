import { useNavigate } from 'react-router-dom'
import PatternBackground from '../components/ui/PatternBackground'

export default function EntryPage() {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-svh bg-bg flex flex-col items-center justify-center px-5">
      <PatternBackground color="accent" className="opacity-10" />

      <div className="relative text-center mb-10">
        <span className="inline-block bg-accent-soft text-accent text-xs font-semibold uppercase tracking-widest rounded-full px-3 py-1 mb-4">
          Mind Space
        </span>
        <h1 className="text-text-primary font-extrabold text-4xl md:text-6xl leading-tight">
          Who are you
        </h1>
        <h1 className="text-accent font-extrabold text-4xl md:text-6xl leading-tight">
          signing in as?
        </h1>
      </div>

      <div className="relative w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Patient card */}
        <button
          onClick={() => navigate('/patient')}
          className="group relative overflow-hidden bg-surface border border-border rounded-3xl p-8 text-left shadow-sm hover:border-accent/40 hover:shadow-md transition-all cursor-pointer"
        >
          <PatternBackground color="accent" className="opacity-0 group-hover:opacity-5 transition-opacity" />
          <div className="relative flex flex-col h-full">
            <img
              src="/Patient.png"
              alt="Patient"
              className="w-16 h-16 rounded-2xl object-contain bg-accent-soft p-1 mb-5"
            />
            <p className="text-text-primary font-bold text-xl">Patient</p>
            <p className="text-text-secondary text-sm mt-1">
              View your prescriptions, medication schedule, and check in with your AI assistant.
            </p>
            <p className="text-accent font-semibold text-sm mt-5 flex items-center gap-1">
              Enter patient portal <span aria-hidden="true">›</span>
            </p>
          </div>
        </button>

        {/* Doctor card */}
        <button
          onClick={() => navigate('/doctor')}
          className="group relative overflow-hidden bg-accent rounded-3xl p-8 text-left shadow-sm hover:shadow-md transition-all cursor-pointer"
        >
          <PatternBackground color="white" className="opacity-25" />
          <div className="relative flex flex-col h-full">
            <img
              src="/doc.jpg"
              alt="Doctor"
              className="w-16 h-16 rounded-2xl object-cover mb-5"
            />
            <p className="text-white font-bold text-xl">Doctor</p>
            <p className="text-white/80 text-sm mt-1">
              Monitor your patients, review adherence, check AI follow-up responses, and write prescriptions.
            </p>
            <p className="text-white font-semibold text-sm mt-5 flex items-center gap-1">
              Enter doctor dashboard <span aria-hidden="true">›</span>
            </p>
          </div>
        </button>
      </div>
    </div>
  )
}
