import React from "react";
import TrainingModuleShell from "./TrainingModuleShell.jsx";

const notice = `A.I.R.O.N. Medical Response Notice
This module provides workplace emergency-response awareness only. It is not a substitute for hands-on instruction, medical direction, or recognized first-aid/CPR/AED certification. In a real emergency, activate EMS immediately, follow employer policy, and use trained responders and approved equipment.`;

const slides = [
  {
    title: "Medical Response Final",
    body: [
      "This capstone confirms workplace emergency-response awareness across the A.I.R.O.N. medical track.",
      "You are being assessed on scene safety, EMS activation, AED/CPR awareness, severe bleeding, choking, heat illness, stroke recognition, heart attack warning signs, burn first aid, and eye-exposure response.",
      notice,
    ],
  },
  {
    title: "Core Rule 1 — Scene Safety and EMS First",
    body: [
      "Do not rush blindly into a medical event. Check the scene for electrical, chemical, traffic, gas, machinery, or heat hazards first.",
      "Activate EMS quickly and communicate site access details, location, and what happened.",
      "Direct responders to the scene and keep access routes clear.",
    ],
  },
  {
    title: "Core Rule 2 — Recognize, Escalate, Stabilize",
    body: [
      "Medical emergencies are time-sensitive. Recognition and escalation are usually more important than hesitation.",
      "Use trained responders, approved kits, and employer procedures.",
      "Do not exceed your training. Awareness training is not certification.",
    ],
  },
  {
    title: "Core Rule 3 — Critical Never-Do Items",
    body: [
      "Never delay EMS activation while debating.",
      "Never attempt unprotected rescue in unsafe environments.",
      "Never ignore sudden collapse, stroke warning signs, airway emergencies, severe bleeding, or chemical eye exposure.",
      "Never rely on home remedies or improvisation when approved equipment and procedures exist.",
    ],
  },
  {
    title: "Final Review",
    body: [
      "Pass score target: 85%.",
      "Use the safest answer, not the fastest shortcut.",
      "When in doubt: protect yourself, activate EMS, use trained responders, and follow policy.",
    ],
  },
];

const quiz = [
  {
    q: "A worker collapses near active equipment and energized panels. What is your first priority?",
    choices: [
      "Run directly to the worker",
      "Check scene safety and activate emergency response",
      "Wait to see if the worker recovers",
      "Move nearby tools first"
    ],
    answer: 1,
    explain: "Scene safety comes first. Do not create a second victim."
  },
  {
    q: "For workplace emergency awareness, what should happen early in a serious medical event?",
    choices: [
      "Activate EMS and communicate location/access details",
      "Wait for a supervisor before doing anything",
      "Search for paperwork first",
      "Move the victim to a different department"
    ],
    answer: 0,
    explain: "Rapid EMS activation and clear site information are critical."
  },
  {
    q: "Which statement about AED use is best?",
    choices: [
      "Ignore the prompts and work from memory",
      "Only use it if the person is definitely dead",
      "Follow device prompts, keep others clear during analysis/shock",
      "Use it only after a pulse is confirmed twice"
    ],
    answer: 2,
    explain: "AEDs guide the responder. Keep the area clear when directed."
  },
  {
    q: "A coworker is unresponsive and not breathing normally. The best awareness-level action is to:",
    choices: [
      "Assume they are sleeping",
      "Activate EMS and begin the trained response sequence",
      "Offer water first",
      "Leave them alone and find their manager"
    ],
    answer: 1,
    explain: "Unresponsiveness with abnormal breathing requires immediate emergency response."
  },
  {
    q: "For severe bleeding, the awareness priority is:",
    choices: [
      "Direct pressure and rapid escalation using approved response resources",
      "Give pain medicine",
      "Delay action until a camera is available",
      "Move the injured person around continuously"
    ],
    answer: 0,
    explain: "Severe bleeding is time-critical."
  },
  {
    q: "A person is choking and cannot speak. What matters most?",
    choices: [
      "Wait quietly for improvement",
      "Recognize the airway emergency and begin the trained response sequence",
      "Offer them food and water",
      "Tell them to lie down and rest"
    ],
    answer: 1,
    explain: "Airway emergencies require immediate recognition and response."
  },
  {
    q: "Which is the best description of heat stroke concern?",
    choices: [
      "A minor comfort issue only",
      "A potentially life-threatening emergency requiring rapid cooling and EMS escalation",
      "A reason to take a longer lunch only",
      "Something that only happens outdoors"
    ],
    answer: 1,
    explain: "Heat stroke is a medical emergency."
  },
  {
    q: "FAST is used to recognize:",
    choices: [
      "Forklift inspection issues",
      "Stroke warning signs",
      "Electrical lockout status",
      "Food sanitation defects"
    ],
    answer: 1,
    explain: "FAST supports rapid stroke recognition and urgent EMS activation."
  },
  {
    q: "A coworker has chest pressure, sweating, and shortness of breath. The safest response is:",
    choices: [
      "Tell them to finish the shift first",
      "Treat it as a possible heart attack warning event and escalate immediately",
      "Ask them to drive home",
      "Wait an hour and recheck"
    ],
    answer: 1,
    explain: "Possible heart attack signs require urgent escalation."
  },
  {
    q: "For a burn event, which awareness statement is best?",
    choices: [
      "Apply random creams from the break room",
      "Recognize the burn type, begin approved first-aid response, and escalate appropriately",
      "Cover it in grease",
      "Ignore it if the person keeps working"
    ],
    answer: 1,
    explain: "Use approved burn response principles, not improvised remedies."
  },
  {
    q: "For chemical eye exposure, the strongest immediate action is usually:",
    choices: [
      "Close the eye tightly and wait",
      "Go home and rest",
      "Begin flushing immediately and use approved emergency eyewash procedures",
      "Rub the eye to remove the chemical faster"
    ],
    answer: 2,
    explain: "Chemical eye exposures are time-sensitive and require immediate flushing."
  },
  {
    q: "Which statement best fits A.I.R.O.N. medical modules?",
    choices: [
      "They replace formal CPR/AED certification",
      "They provide workplace emergency-response awareness only",
      "They authorize unsupervised rescue in any hazard zone",
      "They eliminate the need for EMS"
    ],
    answer: 1,
    explain: "These modules are awareness and readiness training, not formal certification."
  },
  {
    q: "A responder wants to enter a hazardous space to help a collapsed worker, but is not trained or equipped. The correct answer is:",
    choices: [
      "Go in immediately anyway",
      "Wait until the danger feels smaller",
      "Do not attempt unprotected rescue; activate trained response resources",
      "Turn off your radio and act alone"
    ],
    answer: 2,
    explain: "Unprotected rescue can create additional victims."
  },
  {
    q: "Why is site access information important during a medical emergency?",
    choices: [
      "It is not important",
      "It helps responders reach the right gate, area, and patient faster",
      "It is only for paperwork after the incident",
      "It matters only for visitors"
    ],
    answer: 1,
    explain: "Access and location details reduce delay."
  },
  {
    q: "What is the best capstone mindset for workplace medical response?",
    choices: [
      "Do whatever feels right in the moment",
      "Protect yourself, escalate quickly, follow policy, and use trained responders",
      "Avoid calling for help unless told twice",
      "Always improvise with nearby materials"
    ],
    answer: 1,
    explain: "That mindset aligns with safe, credible emergency response awareness."
  },
  {
    q: "A coworker shows facial droop and slurred speech but says they are fine. Best response?",
    choices: [
      "Respect their choice and do nothing",
      "Treat as possible stroke warning signs and escalate immediately",
      "Tell them to drink coffee",
      "Wait until the next break"
    ],
    answer: 1,
    explain: "Stroke signs require urgent attention even if the person minimizes symptoms."
  },
  {
    q: "Which is most appropriate for medical-response awareness training?",
    choices: [
      "Staying within training limits and using approved equipment",
      "Performing invasive treatment without instruction",
      "Skipping PPE in urgent moments",
      "Moving all victims regardless of hazards"
    ],
    answer: 0,
    explain: "Awareness training emphasizes safe limits and approved response."
  },
  {
    q: "A chemical splash affects the eyes in a process area. Before anything else, you should:",
    choices: [
      "Search the SDS for ten minutes before acting",
      "Start immediate flushing with the nearest approved eyewash and escalate",
      "Drive the person home",
      "Take photos for the incident file"
    ],
    answer: 1,
    explain: "Immediate flushing is time-critical."
  },
  {
    q: "What is the strongest reason to include scenario-based medical-response questions?",
    choices: [
      "To make the quiz longer only",
      "To test decision-making under realistic workplace conditions",
      "To avoid teaching any rules",
      "To replace hands-on training entirely"
    ],
    answer: 1,
    explain: "Scenario questions improve real-world judgment."
  },
  {
    q: "What passing standard best matches this capstone?",
    choices: [
      "50%",
      "70%",
      "85%",
      "100% with no retakes ever"
    ],
    answer: 2,
    explain: "The medical-response final is intended as an 85% pass standard."
  },
];

const moduleDef = {
  title: "Medical Response Final",
  short: "Health & Safety Emergency Response Capstone",
  icon: "🩺",
  color: "#9A3412",
  minutes: 22,
  slides,
  quiz,
  completionTitle: "Medical Response Final Complete",
  completionBody: [
    "You completed the A.I.R.O.N. Medical Response Final.",
    "This completion reflects emergency-response awareness and response readiness only.",
    notice,
  ],
};

export function MedicalResponseFinal() {
  return <TrainingModuleShell module={moduleDef} />;
}

export default MedicalResponseFinal;
