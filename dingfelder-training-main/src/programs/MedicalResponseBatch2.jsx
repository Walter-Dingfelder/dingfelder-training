
import TrainingModuleShell from "./TrainingModuleShell.jsx";

const NOTICE = {
  label: "A.I.R.O.N. MEDICAL RESPONSE NOTICE",
  text: "This module provides workplace emergency-response awareness only. It is not a substitute for hands-on instruction, medical direction, or recognized first-aid/CPR/AED certification. In a real emergency, activate EMS immediately, follow employer policy, and use trained responders and approved equipment.",
};

export const MEDICAL_RESPONSE_BATCH2_MODULES = [
  {
    path: "/ems-activation",
    label: "911 / EMS Activation & Site Access",
    short: "Emergency Call Chain, Location Control, and Responder Access",
    icon: "📞",
    color: "#33D17A",
    regulation: "Awareness Only — Activate EMS immediately and follow site response plans",
    audience: "All campus personnel, supervisors, security, front office, and visitors under escort",
    minutes: 14,
    slides: [
      {
        heading: "The First Call Must Be Fast and Accurate",
        sub: "Speed matters, but accuracy gets responders to the right door.",
        body: "In a large industrial campus, saying 'someone is down at the plant' wastes time. The first caller must communicate the exact location, the type of emergency, and whether the area is safe for responders to enter. A clear first call can save several minutes of confusion at gates, service roads, and building entrances.",
        list: [
          "State what happened, where it happened, and whether the person is responsive or breathing normally.",
          "Use building names, aisle names, door numbers, bay labels, or landmark equipment identifiers.",
          "If the scene is unsafe, report that too so responders are not sent blindly into the hazard.",
        ],
        callout: { ...NOTICE, color: "#33D17A" },
      },
      {
        heading: "Open the Route Before EMS Arrives",
        sub: "Access delay is a medical delay.",
        body: "Emergency response on an industrial site often fails because crews cannot get through gates, find the right entrance, or navigate interior obstacles. Someone should be assigned to open gates, clear traffic, and guide responders from the property entry point to the exact scene.",
        list: [
          "Meet EMS at the gate, road crossing, or main entrance when possible.",
          "Move nonessential vehicles and pedestrians out of the response path.",
          "Keep radios or phones available so the caller and guide can coordinate.",
        ],
      },
      {
        heading: "Control the Scene and Communicate Changes",
        sub: "One person calls. One person guides. One person controls the area.",
        body: "When everyone talks at once, key facts get lost. Assign simple roles and give short updates only when conditions change. If the casualty is moved, the entrance changes, or the hazard level increases, the person guiding EMS must be updated immediately.",
        list: [
          "Keep spectators back and preserve room for responders to work.",
          "If you move the person because of immediate danger, tell EMS exactly where they were relocated.",
          "Repeat the route and building details back to confirm the message was received correctly.",
        ],
      },
      {
        heading: "Key Review",
        sub: "The best call gives responders a route, a condition, and a safe entry.",
        body: "Fast activation and strong site access control are often the difference between a delayed response and a clean one. Your job is not to sound impressive. Your job is to be exact, direct, and useful.",
        list: [
          "Exact location beats vague location every time.",
          "Guide EMS through gates, doors, and aisles whenever possible.",
          "Control traffic and bystanders so responders can enter and work quickly.",
          "Update responders if the patient location or scene hazard changes.",
        ],
      },
    ],
    quiz: [
      { q: "What information should be included in the first emergency call?", options: ["Only the victim's name", "What happened, exact location, and current condition", "A long history of prior incidents", "Only the building name"], answer: 1 },
      { q: "Why is an exact door, aisle, or landmark important?", options: ["It reduces responder delay on a large campus", "It is only for recordkeeping", "It keeps supervisors happy", "It is optional if EMS is experienced"], answer: 0 },
      { q: "If the area around the patient is unsafe, what should you do?", options: ["Ignore it so help arrives faster", "Report the hazard and control access", "Wait to call until the hazard is gone", "Send EMS in and explain later"], answer: 1 },
      { q: "Who should meet responders when possible?", options: ["No one", "A designated guide who knows the route", "The largest nearby crowd", "Only the person filming the event"], answer: 1 },
      { q: "What is the best scene-control practice during EMS access?", options: ["Keep traffic and bystanders out of the response path", "Bring everyone closer to help", "Move vehicles randomly", "Change entrances repeatedly"], answer: 0 },
      { q: "If the patient is relocated because of immediate danger, what must happen?", options: ["Do not tell EMS until they arrive", "The guide must update responders immediately", "Only security should know", "Nothing"], answer: 1 },
    ],
  },
  {
    path: "/heat-illness",
    label: "Heat Illness Recognition & Response",
    short: "Heat Stress, Heat Exhaustion, Heat Stroke, and Immediate Escalation",
    icon: "🌡️",
    color: "#FF6B00",
    regulation: "Awareness Only — Recognize symptoms, cool quickly, activate trained response",
    audience: "Foundry, beam mill, outdoor crews, maintenance, contractors, and food production teams",
    minutes: 18,
    slides: [
      {
        heading: "Heat Illness Can Escalate Fast",
        sub: "Hot work areas and outdoor conditions can overwhelm people quickly.",
        body: "Heat illness often begins with fatigue, dizziness, heavy sweating, headache, or nausea and can progress into confusion, collapse, or life-threatening heat stroke. Foundry floors, beam mills, rooftops, outdoor utilities, kitchens, and poorly ventilated process spaces all demand awareness and fast action.",
        list: [
          "Heavy sweating, weakness, cramps, dizziness, and nausea are early warning signs.",
          "Confusion, fainting, or altered behavior suggest a more serious emergency.",
          "Do not assume someone is just 'toughing it out' or being lazy.",
        ],
        callout: { ...NOTICE, color: "#FF6B00" },
      },
      {
        heading: "Cool First, Escalate Fast",
        sub: "Move, cool, notify, and monitor.",
        body: "When heat illness is suspected, get the person out of the hot environment if it is safe to do so, begin cooling measures allowed by site policy, and notify the response chain immediately. Delays in cooling and escalation are dangerous, especially if mental status changes appear.",
        list: [
          "Move the person to shade, airflow, or a cooler area if safe.",
          "Use approved cooling measures and hydration support only within site policy and training scope.",
          "Activate trained responders and EMS quickly if symptoms are severe or worsening.",
        ],
      },
      {
        heading: "Watch the Behavior, Not Just the Temperature",
        sub: "Confusion changes the response level.",
        body: "A worker who stops making sense, becomes combative, has trouble walking, or collapses should be treated as a serious medical emergency. Hot environments make it easy to miss the moment when routine discomfort becomes a crisis.",
        list: [
          "Altered mental status is a red flag for severe heat illness.",
          "Do not send a symptomatic worker back to duty to 'finish the shift.'",
          "Use the buddy system mindset in high-heat zones.",
        ],
      },
      {
        heading: "Key Review",
        sub: "Heat illness is recognized by symptoms and behavior, not pride or denial.",
        body: "The right response is fast recognition, immediate cooling support, and prompt escalation. People get injured when coworkers hesitate, minimize symptoms, or expect the person to self-recover without intervention.",
        list: [
          "Recognize the signs early and act immediately.",
          "Cooling and escalation should happen together for severe cases.",
          "Confusion, collapse, or worsening symptoms require emergency response.",
          "Never let pride override safety in heat conditions.",
        ],
      },
    ],
    quiz: [
      { q: "Which group of symptoms is consistent with early heat illness?", options: ["Heavy sweating, weakness, dizziness, nausea", "Perfect coordination and focus", "Cold hands only", "No symptoms at all"], answer: 0 },
      { q: "What is the best first action when heat illness is suspected?", options: ["Tell the worker to finish the task first", "Move them to a cooler area and begin response steps", "Wait one hour", "Send them home alone"], answer: 1 },
      { q: "Why is confusion a serious warning sign?", options: ["It may indicate severe heat illness requiring escalation", "It means the person is probably joking", "It only matters after lunch", "It is not related to heat"], answer: 0 },
      { q: "What is a dangerous mistake in a hot work area?", options: ["Monitoring coworkers", "Assuming symptoms are just weakness or attitude", "Reporting dizziness quickly", "Moving someone out of radiant heat"], answer: 1 },
      { q: "When should EMS or trained responders be activated?", options: ["Only at the end of shift", "When severe or worsening symptoms appear", "Never for heat illness", "Only after paperwork"], answer: 1 },
      { q: "What is the role of a buddy system in heat conditions?", options: ["To ignore symptoms together", "To detect changes that the affected person may deny or miss", "To reduce water use", "To speed production"], answer: 1 },
      { q: "Which environment can create heat-illness risk?", options: ["Only deserts", "Foundries, mills, kitchens, rooftops, and outdoor utilities", "Only office spaces", "Only winter work"], answer: 1 },
      { q: "What should happen after a heat illness response begins?", options: ["The person should be sent back to full duty immediately", "The scene should be monitored and escalated as needed", "Cooling should stop once anyone arrives", "Symptoms should be ignored if they improve briefly"], answer: 1 },
    ],
  },
  {
    path: "/stroke-fast",
    label: "Stroke Recognition (FAST)",
    short: "Face, Arms, Speech, Time — Recognition and Immediate EMS Activation",
    icon: "🧠",
    color: "#9B5CFF",
    regulation: "Awareness Only — Time-critical recognition and emergency escalation",
    audience: "All campus personnel, public-facing teams, supervisors, and security",
    minutes: 12,
    slides: [
      {
        heading: "FAST Is a Time-Critical Recognition Tool",
        sub: "Face, Arms, Speech, Time to call for help.",
        body: "Stroke can present suddenly with facial droop, arm weakness, slurred speech, or sudden confusion. The goal of this awareness module is not diagnosis. It is rapid recognition and immediate activation of EMS so the person gets time-sensitive medical care.",
        list: [
          "Face: look for uneven smile or drooping.",
          "Arms: look for weakness, drift, or inability to hold both arms up.",
          "Speech: listen for slurring, confusion, or inability to repeat a simple phrase.",
        ],
        callout: { ...NOTICE, color: "#9B5CFF" },
      },
      {
        heading: "Time Is the Critical Factor",
        sub: "Do not wait to see if symptoms pass.",
        body: "Stroke treatment depends on how quickly the person reaches qualified medical care. Delaying the call, arguing about whether it is 'really a stroke,' or letting the person rest can cost valuable time.",
        list: [
          "Call EMS immediately when stroke signs are suspected.",
          "Note the time symptoms were first noticed if known.",
          "Keep the person safe, calm, and monitored until trained help arrives.",
        ],
      },
      {
        heading: "Key Review",
        sub: "Recognize fast. Call fast. Escalate fast.",
        body: "FAST is designed to help non-clinical personnel recognize a possible stroke and trigger the emergency response chain. Your job is to identify a red flag and escalate without delay.",
        list: [
          "Face, Arms, Speech, Time to call.",
          "Do not delay the call to 'watch and see.'",
          "Provide responders with the first-known symptom time when possible.",
        ],
      },
    ],
    quiz: [
      { q: "What does the 'F' in FAST refer to?", options: ["Food intake", "Face droop or uneven smile", "Facility access", "Fever"], answer: 1 },
      { q: "What is the best response to suspected stroke symptoms?", options: ["Wait 30 minutes to confirm", "Activate EMS immediately", "Have the person drive home", "Only notify a coworker"], answer: 1 },
      { q: "Why is time important in stroke response?", options: ["Because some treatments are time-sensitive", "Because managers need a schedule", "Because the person may miss lunch", "It is not important"], answer: 0 },
      { q: "Which symptom fits the FAST method?", options: ["Slurred speech", "Toe pain", "Back stiffness only", "Dry skin"], answer: 0 },
      { q: "What information can help responders?", options: ["The time symptoms were first noticed", "The person's favorite meal", "A guess about next week's schedule", "Nothing"], answer: 0 },
      { q: "What is the goal of this module?", options: ["Clinical stroke certification", "Rapid recognition and emergency escalation awareness", "Neurology licensing", "Replacing EMS"], answer: 1 },
    ],
  },
  {
    path: "/heart-attack-warning",
    label: "Heart Attack Warning Signs",
    short: "Chest Pain, Collapse Risk, and Immediate Emergency Response",
    icon: "💓",
    color: "#FF335F",
    regulation: "Awareness Only — Recognize warning signs and activate EMS without delay",
    audience: "All campus personnel, public-facing teams, supervisors, and security",
    minutes: 12,
    slides: [
      {
        heading: "Warning Signs Can Look Different Person to Person",
        sub: "Do not expect every emergency to look dramatic at first.",
        body: "Heart attack warning signs can include chest pressure, pain spreading to the arm, jaw, back, shortness of breath, sweating, nausea, sudden weakness, or unusual distress. Some people downplay symptoms until they collapse. Awareness depends on taking warning signs seriously early.",
        list: [
          "Chest pressure or pain is important, but not the only sign.",
          "Shortness of breath, sweating, nausea, or radiating pain may also appear.",
          "Do not dismiss the person's distress because they are still standing or talking.",
        ],
        callout: { ...NOTICE, color: "#FF335F" },
      },
      {
        heading: "Escalate Before Collapse",
        sub: "Waiting for certainty is dangerous.",
        body: "If a person shows warning signs of a heart attack, activate the emergency response chain immediately. Do not send them to drive themselves, walk unassisted across campus, or wait alone in a break room. Serious cardiac events can worsen quickly.",
        list: [
          "Call EMS and notify the site response chain immediately.",
          "Keep the person at rest and monitored until trained responders arrive.",
          "Be prepared for the situation to progress into a collapse emergency.",
        ],
      },
      {
        heading: "Key Review",
        sub: "Take warning signs seriously before the event becomes catastrophic.",
        body: "Your role is to recognize red flags, stop delay, and get the person into the emergency response system quickly. Fast action is safer than false reassurance.",
        list: [
          "Chest pain is important, but not the only warning sign.",
          "Serious distress means immediate escalation.",
          "Never send a symptomatic person to self-transport or self-monitor alone.",
        ],
      },
    ],
    quiz: [
      { q: "Which symptom may be a heart attack warning sign?", options: ["Chest pressure with shortness of breath", "Only a paper cut", "Normal appetite", "Mild boredom"], answer: 0 },
      { q: "What is a dangerous response to possible heart-attack symptoms?", options: ["Calling EMS", "Telling the person to drive themselves home", "Keeping them at rest", "Monitoring them until responders arrive"], answer: 1 },
      { q: "Why should warning signs be taken seriously before collapse occurs?", options: ["Because cardiac emergencies can worsen quickly", "Because it increases paperwork", "Because symptoms always disappear on their own", "Because managers prefer drama"], answer: 0 },
      { q: "Which is true about heart-attack presentation?", options: ["It always looks identical", "Warning signs can vary from person to person", "Only athletes are affected", "It only happens outdoors"], answer: 1 },
      { q: "What should happen after EMS is activated?", options: ["The person should be left alone", "The person should be monitored and kept at rest", "Everyone should argue about symptoms", "The person should return to work"], answer: 1 },
      { q: "What is the scope of this module?", options: ["Clinical cardiac certification", "Recognition and escalation awareness only", "A replacement for medical direction", "A permit to diagnose"], answer: 1 },
    ],
  },
  {
    path: "/burn-first-aid",
    label: "Burn First Aid",
    short: "Thermal, Chemical, and Electrical Burn Response Awareness",
    icon: "🔥",
    color: "#FF8A00",
    regulation: "Awareness Only — First response awareness, not clinical certification",
    audience: "Foundry, beam mill, kitchens, maintenance, process areas, and contractors",
    minutes: 14,
    slides: [
      {
        heading: "Not All Burns Behave the Same",
        sub: "Thermal, chemical, and electrical burns require fast recognition and controlled response.",
        body: "A splash from molten material, contact with a hot surface, fryer oil, chemical cleaner, or energized source may all cause burns, but the response priorities are not identical. Recognition, scene safety, and immediate site escalation are essential.",
        list: [
          "Thermal burns come from hot surfaces, flame, steam, oil, and radiant heat.",
          "Chemical burns require immediate flushing and contamination control according to site policy.",
          "Electrical injuries may involve hidden internal damage and ongoing electrical hazard.",
        ],
        callout: { ...NOTICE, color: "#FF8A00" },
      },
      {
        heading: "Protect the Responder and Start the Right Support",
        sub: "Scene safety still comes first.",
        body: "Do not create a second victim while trying to help. Remove the person from danger only if it is safe to do so, flush chemical exposures according to procedure, and activate trained responders or EMS when the injury is serious, widespread, or caused by electricity or hazardous chemicals.",
        list: [
          "Stop the exposure source when it is safe.",
          "Use eyewash, drench, or other emergency systems when appropriate and available.",
          "Escalate quickly for electrical burns, chemical burns, severe pain, or large burn areas.",
        ],
      },
      {
        heading: "Key Review",
        sub: "Burn response starts with hazard recognition and immediate escalation.",
        body: "Do not improvise with home remedies or delay serious burn care. Your role is to recognize the injury type, protect the scene, begin approved first-response measures, and get the person into the response system.",
        list: [
          "Burn type affects the urgency and support steps.",
          "Electrical and chemical burns should be treated as serious emergencies.",
          "Use approved emergency wash systems immediately when chemical splash is involved.",
        ],
      },
    ],
    quiz: [
      { q: "Which burn type may involve hidden internal injury?", options: ["Electrical burn", "Only sunburn", "Paper friction", "None"], answer: 0 },
      { q: "What is a key concern in chemical burn response?", options: ["Immediate flushing and contamination control", "Waiting to see if it dries", "Ignoring eyewash systems", "Only changing shoes"], answer: 0 },
      { q: "What must come first in any burn response?", options: ["Scene safety", "Taking photos", "Completing a report before acting", "Moving everyone closer"], answer: 0 },
      { q: "Which situation requires rapid escalation?", options: ["Minor discomfort after touching cool metal", "Electrical, severe, or hazardous chemical burns", "A mild paper cut", "A warm coffee cup"], answer: 1 },
      { q: "What is the scope of this module?", options: ["Recognition and first-response awareness only", "Clinical burn certification", "A substitute for medical direction", "A permit to improvise treatment"], answer: 0 },
      { q: "What is a bad practice during a burn emergency?", options: ["Using approved emergency systems", "Improvising with unapproved home remedies", "Calling trained responders", "Protecting the scene"], answer: 1 },
    ],
  },
  {
    path: "/eye-exposure",
    label: "Eye Exposure / Chemical Splash Response",
    short: "Eyewash Use, Flush Discipline, and Immediate Notification",
    icon: "👁️",
    color: "#00C2FF",
    regulation: "Awareness Only — Follow eyewash, emergency response, and medical escalation procedures",
    audience: "Chemical users, sanitation, maintenance, food production, and process-area personnel",
    minutes: 14,
    slides: [
      {
        heading: "Eye Exposures Must Be Treated Immediately",
        sub: "Delay makes chemical and particulate injuries worse.",
        body: "A chemical splash, caustic mist, dust, metal particle, or cleaning-agent exposure to the eye is an emergency. The correct response is immediate flushing or approved first-response action, fast notification, and prompt medical escalation according to site policy.",
        list: [
          "Every second of delay can increase injury severity in the eye.",
          "Know the nearest eyewash location before you start the job.",
          "Treat splash and contamination events seriously even if vision is still present.",
        ],
        callout: { ...NOTICE, color: "#00C2FF" },
      },
      {
        heading: "Use the Eyewash Correctly and Keep Flushing",
        sub: "Quick flushing and steady flushing matter.",
        body: "Once an eye exposure is recognized, move the person to the eyewash or approved flushing station immediately. Keep flushing according to site procedure while the emergency response chain is activated. Do not stop just because the pain changes or because the person says they are okay after a brief rinse.",
        list: [
          "Start flushing immediately using the nearest approved eyewash station.",
          "Notify supervision and medical response while flushing continues.",
          "Prevent crowding so the affected person can stay at the station and responders can work.",
        ],
      },
      {
        heading: "Key Review",
        sub: "Immediate flush, immediate report, immediate escalation.",
        body: "Eye exposures get worse when workers hesitate, search for permission, or leave the station too early. Your role is to get the person to flushing support immediately and keep the response moving.",
        list: [
          "Know your nearest eyewash before starting exposure-prone work.",
          "Flush first and report immediately.",
          "Do not minimize splash, mist, or particle events involving the eye.",
        ],
      },
    ],
    quiz: [
      { q: "What is the correct first action in a chemical eye splash emergency?", options: ["Immediate flushing at an approved eyewash station", "Wait for a manager to inspect", "Finish the task first", "Rub the eye and walk away"], answer: 0 },
      { q: "Why is delay dangerous in an eye exposure event?", options: ["Because injury severity can increase quickly", "Because reports take longer later", "Because the station may close", "It is not dangerous"], answer: 0 },
      { q: "When should supervision or emergency response be notified?", options: ["Only after the shift ends", "While flushing continues or immediately after it begins", "Only if the person asks", "Never for small splashes"], answer: 1 },
      { q: "What is a bad practice during an eye exposure response?", options: ["Crowding around the station and interrupting flushing", "Using the nearest approved eyewash", "Keeping the response chain active", "Treating the event seriously"], answer: 0 },
      { q: "What should workers know before beginning chemical or dust exposure tasks?", options: ["The nearest eyewash location", "Only the lunch schedule", "Nothing about the area", "How to avoid reporting"], answer: 0 },
      { q: "What is the scope of this module?", options: ["Recognition and response awareness only", "Ophthalmology certification", "A substitute for site medical policy", "Permission to improvise care"], answer: 0 },
    ],
  },
];

export function createMedicalBatch2Component(path) {
  const module = MEDICAL_RESPONSE_BATCH2_MODULES.find((entry) => entry.path === path);
  return function MedicalBatch2ModuleWrapper() {
    return <TrainingModuleShell module={module} />;
  };
}

export const EMSActivationTraining = createMedicalBatch2Component("/ems-activation");
export const HeatIllnessTraining = createMedicalBatch2Component("/heat-illness");
export const StrokeFASTTraining = createMedicalBatch2Component("/stroke-fast");
export const HeartAttackWarningTraining = createMedicalBatch2Component("/heart-attack-warning");
export const BurnFirstAidTraining = createMedicalBatch2Component("/burn-first-aid");
export const EyeExposureTraining = createMedicalBatch2Component("/eye-exposure");
