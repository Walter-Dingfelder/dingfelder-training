// Patch snippet package for integrating Medical Response Final.
// Merge the imports and PROGRAMS entry below into your existing src/App.jsx.
// This file is provided as a helper reference only.

import { MedicalResponseFinal } from "./programs/MedicalResponseFinal.jsx";

// Add this item to your live module registry / PROGRAMS map:
export const MEDICAL_RESPONSE_FINAL_PROGRAM = {
  path: "/medical-response-final",
  label: "Medical Response Final",
  short: "Capstone assessment covering emergency response awareness, AED/CPR concepts, EMS activation, bleeding, choking, stroke, heat, burns, and eye exposure.",
  icon: "🩺",
  color: "#9A3412",
  minutes: 22,
  environment: "medical",
  type: "final",
  component: MedicalResponseFinal,
};

// Add this card metadata to the landing-page registry if your app separates cards from PROGRAMS:
export const MEDICAL_RESPONSE_FINAL_CARD = {
  path: "/medical-response-final",
  title: "Medical Response Final",
  subtitle: "Health & Safety Emergency Response Capstone",
  regulation: "Awareness / Response Readiness",
  audience: "All employees, contractors, trainees",
  runtime: "22 min",
  environment: "medical",
  type: "final",
  live: true,
};
