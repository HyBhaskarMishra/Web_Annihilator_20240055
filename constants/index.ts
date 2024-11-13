export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Aadhar Card",
  "Birth Certificate",
  "Driving License",
  "Passport",
  "Student ID Card",
  "Voter ID Card",
];

export const Doctors = [
  {
    name: "Dr. Bhaskar Mishra",
  },
  {
    name: "Dr. Anuj Pratap Singh",
  },
  {
    name: "MS Rachit Yadav",
  },
  {
    name: "Dr. kaushik Raj",
  },
  {
    name: "Dr. Anshul Rathore",
  },
  {
    name: "Dr. Yash Chore",
  },
  {
    name: "MS Dviyanshu Kumar Bharti ",
  },
  {
    name: "Dr. A.N. Saranya",
  },
  {
    name: "Dr. keerthana Guddeli",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};