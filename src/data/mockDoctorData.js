// MOCK DATA — replace with real API responses when backend is ready.
// Field names are intentionally kept close to what a REST API would return
// so the swap is minimal: replace the export with a fetch/useEffect call.

export const mockDoctor = {
  id: 'd1',
  name: 'Dr. Beni',
  specialty: 'General Practice',
}

export const mockPatients = [
  {
    id: 'p1',
    name: 'John Doe',
    age: 52,
    hospitalPatientId: 'CGH-4821',
    hospital: 'City General Hospital',
    condition: 'Type 2 Diabetes',
    adherenceRate: 85,

    // true when the AI flagged something concerning in the latest check-in
    hasAlert: true,
    alertMessage: 'Patient reported dizziness and blurred vision during morning check-in.',

    prescription: {
      id: 'rx1',
      drugName: 'Metformin',
      dosage: '500mg',
      frequency: '2x daily',
      quantity: 60,
      refillsLeft: 2,
      startDate: '2026-08-01',
      nextPickupDate: '2026-08-31',
      instructions: 'Take with meals to reduce stomach upset.',
      doctorNotes: 'Monitor blood glucose weekly. Follow up in 4 weeks.',
    },

    schedule: [
      {
        time: '8:00 AM',
        drugName: 'Metformin 500mg',
        instructions: 'With breakfast',
        status: 'taken',
      },
      {
        time: '7:00 PM',
        drugName: 'Metformin 500mg',
        instructions: 'With dinner',
        status: 'upcoming',
      },
    ],

    // Adherence history for August 2026 — { [dayNumber]: 'taken' | 'missed' }
    // TODO: replace with GET /api/patients/:id/adherence?month=2026-08
    adherenceDays: {
      1: 'taken', 2: 'taken', 3: 'taken', 4: 'missed',
      5: 'taken', 6: 'taken', 7: 'taken', 8: 'taken', 9: 'missed',
      10: 'taken', 11: 'taken', 12: 'taken', 13: 'missed',
      14: 'taken', 15: 'taken', 16: 'taken',
    },

    // Latest AI check-in conversation — read-only for the doctor
    aiResponses: [
      {
        sender: 'ai',
        text: 'Good morning John. Have you taken your morning Metformin dose?',
      },
      { sender: 'patient', text: 'Yes, I took it with breakfast.' },
      {
        sender: 'ai',
        text: 'Good. Have you checked your blood sugar today? And are you experiencing any symptoms like dizziness or blurred vision?',
      },
      { sender: 'patient', text: 'I feel a bit dizzy and my vision is slightly blurry this morning.' },
      {
        sender: 'ai',
        text: 'Thank you for letting me know. Dizziness and blurred vision can indicate low or high blood sugar. I have flagged this for your doctor immediately.',
      },
    ],
  },

  {
    id: 'p2',
    name: 'Alice Mutoni',
    age: 45,
    hospitalPatientId: 'CGH-5103',
    hospital: 'City General Hospital',
    condition: 'Type 2 Diabetes',
    adherenceRate: 100,
    hasAlert: false,
    alertMessage: null,

    prescription: {
      id: 'rx2',
      drugName: 'Glibenclamide',
      dosage: '5mg',
      frequency: '1x daily',
      quantity: 30,
      refillsLeft: 1,
      startDate: '2026-07-15',
      nextPickupDate: '2026-08-30',
      instructions: 'Take 30 minutes before breakfast.',
      doctorNotes: 'Check HbA1c at next visit. Patient managing well.',
    },

    schedule: [
      {
        time: '7:30 AM',
        drugName: 'Glibenclamide 5mg',
        instructions: '30 min before breakfast',
        status: 'taken',
      },
    ],

    adherenceDays: {
      1: 'taken', 2: 'taken', 3: 'taken', 4: 'taken',
      5: 'taken', 6: 'taken', 7: 'taken', 8: 'taken', 9: 'taken',
      10: 'taken', 11: 'taken', 12: 'taken', 13: 'taken',
      14: 'taken', 15: 'taken', 16: 'taken',
    },

    aiResponses: [
      {
        sender: 'ai',
        text: 'Good morning Alice. Have you taken your Glibenclamide today?',
      },
      { sender: 'patient', text: 'Yes, I took it before breakfast as usual.' },
      {
        sender: 'ai',
        text: 'Great. How is your blood sugar reading today? Any symptoms of low blood sugar such as sweating or shakiness?',
      },
      { sender: 'patient', text: 'Blood sugar is 6.2 mmol/L. I feel fine today.' },
    ],
  },

  {
    id: 'p3',
    name: 'Eric Habimana',
    age: 38,
    hospitalPatientId: 'CGH-6047',
    hospital: 'City General Hospital',
    condition: 'Type 1 Diabetes',
    adherenceRate: 60,
    hasAlert: false,
    alertMessage: null,

    prescription: {
      id: 'rx3',
      drugName: 'Insulin Glargine',
      dosage: '10 units',
      frequency: '1x daily',
      quantity: 30,
      refillsLeft: 0,
      startDate: '2026-08-01',
      nextPickupDate: '2026-08-20',
      instructions: 'Inject subcutaneously at the same time each evening.',
      doctorNotes: 'Patient missing evening doses. Needs counselling on injection routine.',
    },

    schedule: [
      {
        time: '9:00 PM',
        drugName: 'Insulin Glargine 10 units',
        instructions: 'Subcutaneous injection',
        status: 'upcoming',
      },
    ],

    adherenceDays: {
      1: 'taken', 2: 'missed', 3: 'taken', 4: 'missed',
      5: 'taken', 6: 'missed', 7: 'taken', 8: 'missed', 9: 'missed',
      10: 'taken', 11: 'missed', 12: 'taken', 13: 'missed',
      14: 'missed', 15: 'missed', 16: 'taken',
    },

    aiResponses: [
      {
        sender: 'ai',
        text: 'Hi Eric. Did you take your Insulin Glargine injection last night?',
      },
      { sender: 'patient', text: 'No, I forgot again.' },
      {
        sender: 'ai',
        text: 'It is very important to take your insulin at the same time every evening. Skipping doses can cause your blood sugar to rise dangerously. Would you like me to send you a reminder this evening?',
      },
      { sender: 'patient', text: 'Yes please, remind me at 8:30 PM.' },
    ],
  },
]
