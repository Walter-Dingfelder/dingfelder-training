
import TrainingModuleShell from "./TrainingModuleShell.jsx";

const module = {
  path: "/medical-response-final",
  label: "Medical Response Final",
  short: "Capstone Medical Awareness Assessment",
  icon: "🧭",
  color: "#00E0B8",
  regulation: "Awareness Only — Capstone knowledge check, not certification",
  audience: "All campus personnel completing the medical response awareness track",
  minutes: 24,
  slides: [
    {
      heading: "This Final Measures Recognition and Escalation",
      sub: "A.I.R.O.N. medical-response modules teach awareness, not clinical certification.",
      body: "This capstone checks whether a worker, supervisor, visitor escort, or public-facing team member can recognize a medical emergency, protect the scene, escalate quickly, and support trained responders. The goal is not diagnosis. The goal is disciplined action before delay turns a warning sign into a catastrophe.",
      list: [
        "Recognize warning signs quickly.",
        "Protect the scene before approaching.",
        "Activate EMS and the site response chain without delay.",
        "Support trained responders with clear information and safe access.",
      ],
      callout: {
        label: "A.I.R.O.N. MEDICAL RESPONSE NOTICE",
        text: "This module provides workplace emergency-response awareness only. It is not a substitute for hands-on instruction, medical direction, or recognized first-aid/CPR/AED certification. In a real emergency, activate EMS immediately, follow employer policy, and use trained responders and approved equipment.",
        color: "#00E0B8",
      },
    },
    {
      heading: "Scene Safety Comes Before Heroics",
      sub: "Do not become the second victim.",
      body: "Medical emergencies often occur next to electricity, moving equipment, hot surfaces, traffic, chemicals, gas hazards, or unstable footing. The first responder at the scene must evaluate hazards immediately. If the scene is unsafe, control access, call for help, and prevent others from rushing into danger.",
      list: [
        "Electrical, mechanical, thermal, chemical, and traffic hazards can all complicate a rescue.",
        "If the area is unsafe, isolate it and escalate instead of improvising entry.",
        "A clear scene gives trained responders room to work when they arrive.",
      ],
    },
    {
      heading: "Recognition and Escalation Must Be Immediate",
      sub: "Delay is a hazard.",
      body: "Whether the warning sign is collapse, chest pain, stroke symptoms, severe bleeding, choking, heat illness, chemical eye exposure, or sudden unresponsiveness, the correct response is early recognition and immediate escalation. Waiting for certainty wastes the time that trained responders need to intervene effectively.",
      list: [
        "Exact location matters on a large industrial campus.",
        "One person should call. One person should guide. One person should control the area.",
        "If the patient location changes, the access route changes, or the hazard changes, responders must be updated immediately.",
      ],
    },
    {
      heading: "Key Review",
      sub: "Your job is to recognize, escalate, and support.",
      body: "This final should feel like a readiness check, not a click-through. A strong result means the worker can identify red flags, control delay, and hand the emergency over to trained responders or EMS quickly and clearly.",
      list: [
        "Exact location beats vague location every time.",
        "Scene safety is part of patient safety.",
        "Sudden confusion, collapse, chest pain, severe bleeding, airway obstruction, and chemical splash injuries all demand rapid action.",
        "Awareness training never replaces employer policy, trained responders, or EMS.",
      ],
    },
  ],
  quiz: [
    { q: "What is the main purpose of the Medical Response Final?", options: ["Clinical certification", "Recognition and escalation awareness", "Replacing EMS", "Permitting diagnosis"], answer: 1 },
    { q: "If a scene is unsafe because of electricity, heat, traffic, or chemicals, what should happen first?", options: ["Rush in immediately", "Control access and activate help", "Wait for the person to self-recover", "Move everyone closer"], answer: 1 },
    { q: "Why is exact location important when calling for help on a large campus?", options: ["It reduces responder delay", "It only helps with reports", "It is optional if security is nearby", "It only matters after EMS arrives"], answer: 0 },
    { q: "What should happen if the patient is moved because of immediate danger?", options: ["Nothing", "Responders should be updated immediately", "Only the patient should know", "Wait until shift end"], answer: 1 },
    { q: "Which symptom set should always be treated seriously?", options: ["Chest pressure with shortness of breath", "Mild boredom", "Normal appetite", "Routine conversation"], answer: 0 },
    { q: "What does FAST help workers recognize?", options: ["Burn severity", "Possible stroke", "Chemical labels", "Noise exposure"], answer: 1 },
    { q: "What is the correct response to a suspected stroke?", options: ["Watch and wait", "Activate EMS immediately", "Send the person home", "Ask them to finish the shift"], answer: 1 },
    { q: "What is a dangerous response to heart-attack warning signs?", options: ["Keeping the person at rest", "Telling the person to drive themselves", "Calling EMS", "Monitoring until trained responders arrive"], answer: 1 },
    { q: "If a person becomes confused and unstable in a hot work area, what should you assume?", options: ["They are joking", "They may have severe heat illness", "They only need more work", "It can wait until lunch"], answer: 1 },
    { q: "What is the priority when severe bleeding is present?", options: ["Delay action until paperwork starts", "Immediate escalation and approved response measures", "Let the person walk it off", "Ask the crowd what to do"], answer: 1 },
    { q: "What should a worker do if a choking emergency is suspected?", options: ["Ignore it unless the person falls down", "Recognize obstruction and activate emergency response", "Wait for a supervisor meeting", "Only record the event"], answer: 1 },
    { q: "What is a correct AED awareness principle?", options: ["Ignore device prompts", "Follow trained responder procedures and device prompts", "Use it casually without escalation", "Skip scene safety"], answer: 1 },
    { q: "What is the scope of Adult CPR Awareness in this portal?", options: ["Full certification", "Recognition and response-readiness awareness", "Medical licensing", "Permission to override policy"], answer: 1 },
    { q: "What is the best first move for an eye chemical splash?", options: ["Flush immediately and escalate", "Wait to see if irritation fades", "Rub the eye", "Leave the area without reporting"], answer: 0 },
    { q: "Why is one designated guide useful during EMS activation?", options: ["To reduce confusion at gates, roads, and entrances", "To slow the response", "To replace EMS", "To increase crowd size"], answer: 0 },
    { q: "What should happen after EMS is activated for a symptomatic person?", options: ["Leave them alone", "Keep them monitored and at rest until trained help arrives", "Return them to work", "Move them without reason"], answer: 1 },
    { q: "What does the medical-response notice mean?", options: ["This portal replaces certification", "This portal provides awareness only", "This portal replaces employer policy", "This portal authorizes treatment beyond training"], answer: 1 },
    { q: "Which is a strong scene-control practice?", options: ["Allow bystanders to crowd in", "Keep traffic and spectators out of the response path", "Move vehicles randomly", "Change entrances repeatedly"], answer: 1 },
    { q: "What is the correct attitude toward warning signs like confusion, collapse, or sudden distress?", options: ["Minimize them until proven serious", "Treat them as red flags and escalate", "Ask the person to finish first", "Assume they will pass"], answer: 1 },
    { q: "When does the awareness responder step back?", options: ["As soon as someone starts filming", "When trained responders or EMS take over", "Immediately after calling", "Only after shift change"], answer: 1 },
  ],
};

export default function MedicalResponseFinalTraining() {
  return <TrainingModuleShell module={module} />;
}
