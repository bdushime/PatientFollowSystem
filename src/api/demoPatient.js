import { listPatients, createPatient } from './patients'

const DEMO_PATIENT = {
  full_name: 'John Doe',
  date_of_birth: '1974-03-12',
  hospital_patient_id: 'CGH-4821',
  hospital: 'City General Hospital',
  condition: 'Type 2 Diabetes',
}

// No auth exists yet, so the patient app always opens the first patient in
// the system (creating a demo one on first run) — mirrors the backend's
// getOrCreateDemoDoctor pattern.
export async function getOrCreateDemoPatientId() {
  const patients = await listPatients()
  if (patients.length > 0) return patients[0].patient_id
  const created = await createPatient(DEMO_PATIENT)
  return created.patient_id
}
