import { useState } from 'react'
import Button from '../ui/Button'
import Card from '../ui/Card'

const EMPTY_FORM = {
  drugName: '',
  dosage: '',
  frequency: '',
  quantity: '',
  refills: '',
  startDate: '',
  instructions: '',
  doctorNotes: '',
}

const inputClass =
  'w-full rounded-xl border border-border bg-surface px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted outline-none focus:border-accent transition-colors'

const labelClass = 'text-text-muted text-xs uppercase tracking-wide'

export default function WritePrescriptionForm({ patientId, onCancel, onSubmit }) {
  const [form, setForm] = useState(EMPTY_FORM)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: replace with POST /api/prescriptions when backend is ready
    console.log('Submitting prescription for patient', patientId, form)
    onSubmit?.(form)
  }

  return (
    <Card>
      <p className="text-text-primary font-semibold text-lg mb-5">Write New Prescription</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        {/* Drug name + Dosage */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Drug name</label>
            <input
              name="drugName"
              value={form.drugName}
              onChange={handleChange}
              placeholder="e.g. Metformin"
              required
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Dosage</label>
            <input
              name="dosage"
              value={form.dosage}
              onChange={handleChange}
              placeholder="e.g. 500mg"
              required
              className={inputClass}
            />
          </div>
        </div>

        {/* Frequency + Quantity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Frequency</label>
            <input
              name="frequency"
              value={form.frequency}
              onChange={handleChange}
              placeholder="e.g. 2x daily"
              required
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Quantity</label>
            <input
              name="quantity"
              type="number"
              min="1"
              value={form.quantity}
              onChange={handleChange}
              placeholder="e.g. 60"
              required
              className={inputClass}
            />
          </div>
        </div>

        {/* Refills + Start date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Refills</label>
            <input
              name="refills"
              type="number"
              min="0"
              value={form.refills}
              onChange={handleChange}
              placeholder="e.g. 2"
              required
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Start date</label>
            <input
              name="startDate"
              type="date"
              value={form.startDate}
              onChange={handleChange}
              required
              className={inputClass}
            />
          </div>
        </div>

        {/* Instructions */}
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>Instructions</label>
          <textarea
            name="instructions"
            value={form.instructions}
            onChange={handleChange}
            placeholder="e.g. Take with meals to reduce stomach upset."
            rows={2}
            required
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* Doctor's notes */}
        <div className="flex flex-col gap-1.5">
          <label className={labelClass}>Doctor's notes</label>
          <textarea
            name="doctorNotes"
            value={form.doctorNotes}
            onChange={handleChange}
            placeholder="Internal notes visible only to the doctor."
            rows={2}
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-1">
          <Button type="submit" variant="primary" className="flex-1">
            Save Prescription
          </Button>
          <Button type="button" variant="secondary" className="flex-1" onClick={onCancel}>
            Cancel
          </Button>
        </div>

      </form>
    </Card>
  )
}
