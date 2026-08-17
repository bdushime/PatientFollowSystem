import PatternBackground from '../components/ui/PatternBackground'
import Navbar from '../components/ui/Navbar'
import MobileNav from '../components/ui/MobileNav'
import HospitalCard from '../components/patient/HospitalCard'

const NAV_ITEMS = ['Home', 'Prescriptions', 'Hospitals', 'MindSpace']

export default function HospitalList({
  patientName,
  hospitals,
  activeNavItem,
  onNavSelect,
  onSelectHospital,
}) {
  return (
    <div className="relative overflow-hidden bg-bg min-h-svh">
      <PatternBackground color="accent" className="opacity-10" />

      <div className="px-5 md:px-10 lg:px-16 pt-4 flex justify-between lg:justify-start items-center">
        <div className="hidden lg:block">
          <Navbar items={NAV_ITEMS} activeItem={activeNavItem} onSelect={onNavSelect} />
        </div>
        <div className="lg:hidden">
          <MobileNav items={NAV_ITEMS} activeItem={activeNavItem} onSelect={onNavSelect} />
        </div>
      </div>

      <div className="relative max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16 pt-8 md:pt-14">
        <span className="inline-block bg-accent-soft text-accent text-xs font-semibold uppercase tracking-widest rounded-full px-3 py-1">
          [ Your Hospitals ]
        </span>
        <p className="text-text-primary font-extrabold text-4xl md:text-6xl lg:text-7xl leading-[0.95] mt-4">
          Hi, {patientName}
        </p>
        <p className="text-text-secondary text-sm md:text-base max-w-md mt-3">
          These are the hospitals linked to your account. Tap one to view your prescriptions
          and care team there.
        </p>
      </div>

      <div className="relative max-w-[1600px] mx-auto px-5 md:px-10 lg:px-16 pt-8 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {hospitals.map((hospital) => (
            <HospitalCard
              key={hospital.hospitalPatientId}
              {...hospital}
              onClick={() => onSelectHospital?.(hospital)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
