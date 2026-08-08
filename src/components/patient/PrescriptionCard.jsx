import Button from '../ui/Button'
import Card from '../ui/Card'

export default function PrescriptionCard({
  drugName,
  dosage,
  refillsLeft,
  quantity,
  nextPickupDate,
  onRequestRefill,
  onDetailsClick,
}) {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent-soft flex items-center justify-center text-lg">
            💊
          </div>
          <div>
            <p className="text-text-primary font-semibold">{drugName}</p>
            <p className="text-text-secondary text-sm">{dosage}</p>
          </div>
        </div>
        <button
          onClick={onDetailsClick}
          className="flex items-center gap-1 text-text-secondary text-sm cursor-pointer hover:text-text-primary"
        >
          Details
          <span aria-hidden="true">›</span>
        </button>
      </div>

      <div className="border-t border-border mt-4 pt-3 flex items-center justify-between">
        <p className="text-text-secondary text-sm">
          Refills left: <span className="text-accent font-semibold">{refillsLeft}</span>
        </p>
        <p className="text-text-secondary text-sm">
          Quantity: <span className="text-text-primary font-medium">{quantity}</span>
        </p>
      </div>

      <div className="border-t border-border mt-3 pt-3">
        <p className="text-text-secondary text-sm">
          Next pickup: <span className="text-text-primary font-semibold">{nextPickupDate}</span>
        </p>
      </div>

      <div className="mt-4">
        <Button variant="primary" onClick={onRequestRefill} className="w-full">
          Request Refill
        </Button>
      </div>
    </Card>
  )
}
