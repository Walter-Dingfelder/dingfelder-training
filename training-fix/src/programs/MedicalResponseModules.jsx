
import TrainingModuleShell from "./TrainingModuleShell.jsx";

export const MEDICAL_RESPONSE_MODULES = [
  {
    path: "/medical-emergency-basics",
    label: "Medical Emergency Response Basics",
    short: "Scene Safety, EMS Activation, and First Actions",
    icon: "🩺",
    color: "#00C2FF",
    regulation: "Awareness Only — Emergency response orientation, not certification",
    audience: "All campus personnel, visitors, contractors, and public-facing staff",
    minutes: 18,
    slides: [
      {
        heading: "Protect the Scene Before You Rush In",
        sub: "You cannot help if you become the second victim.",
        body: "In a foundry, food plant, beam mill, restaurant, gas pad, or retail stockroom, a medical emergency may happen next to heat, electricity, traffic, chemicals, energized equipment, or moving vehicles. Your first job is to stop, look, and decide whether the area is safe enough to approach. If the scene is unsafe, isolate the area, call for help, and keep others back until trained responders arrive.",
        list: [
          "Look for electrical, mechanical, chemical, fire, traffic, and atmospheric hazards before entering.",
          "If the area is not safe, do not rush the victim — secure the scene and summon help.",
          "Send someone to guide EMS if the location is hard to reach on campus.",
        ],
        callout: {
          label: "A.I.R.O.N. MEDICAL RESPONSE NOTICE",
          text: "This module provides workplace emergency-response awareness only. It is not a substitute for hands-on instruction, medical direction, or recognized first-aid/CPR/AED certification. In a real emergency, activate EMS immediately, follow employer policy, and use trained responders and approved equipment.",
          color: "#00C2FF"
        }
      },
      {
        heading: "Activate the Emergency Response Chain Fast",
        sub: "Seconds matter more than perfect wording.",
        body: "Once the area is reasonably safe, activate the site response chain immediately. Call 911 when required, notify the control point or supervisor, and provide exact location details. On a large campus, the difference between 'at the foundry' and 'south melt deck door 3 near the aisle marker' can save minutes.",
        list: [
          "State what happened, where it happened, and whether the person is breathing or responsive.",
          "Use building names, aisle names, door numbers, landmarks, or equipment IDs.",
          "Have someone meet responding crews at the gate, road, or entrance.",
        ],
      },
      {
        heading: "Keep the First Minute Simple",
        sub: "Assess, communicate, protect, and support.",
        body: "Do not turn a response into chaos. One person should lead the call, one person should control the scene, and others should support only as directed. If the person is responsive, keep them calm and still unless immediate danger requires movement. If the person is unresponsive, escalate to trained responders, AED retrieval, and employer emergency procedures without delay.",
        list: [
          "Limit the crowd and preserve access for responders.",
          "Do not give food, drink, or medication unless trained policy specifically directs it.",
          "Stay with the person and continue reporting changes until responders take over.",
        ],
      },
    ],
    quiz: [
      { q: "What is your first priority when arriving at a medical emergency?", options: ["Move the person immediately", "Check whether the scene is safe to enter", "Search for the person’s phone", "Ask bystanders what they think happened"], answer: 1 },
      { q: "If the scene includes energized equipment, chemical release, or vehicle traffic, what should you do?", options: ["Rush in before it gets worse", "Wait for the person to stand up", "Secure the area and summon trained help", "Ignore the hazard if others are nearby"], answer: 2 },
      { q: "Which location report is most useful to EMS on a large industrial campus?", options: ["Somewhere near the foundry", "Behind the building", "South melt deck door 3 near aisle marker 12", "At work"], answer: 2 },
      { q: "If one person is calling EMS, what should another nearby responder do?", options: ["Start filming for documentation", "Meet responders and keep the access path clear", "Leave the scene to avoid involvement", "Question the victim about previous conditions"], answer: 1 },
      { q: "What is the best approach if the injured person is responsive and the area is safe?", options: ["Keep them calm and monitor until help arrives", "Make them walk to a safer room", "Give them water immediately", "Leave to find a manager"], answer: 0 },
      { q: "Why should bystanders be controlled during a medical emergency?", options: ["To avoid rumors only", "To keep access clear and reduce confusion", "To protect company privacy only", "Because more people always improve treatment"], answer: 1 },
      { q: "What should you communicate first when activating EMS?", options: ["The likely insurance carrier", "What happened, exact location, and responsiveness", "The injured person’s full work history", "What shift is working"], answer: 1 },
      { q: "Which action fits this awareness module best?", options: ["Provide advanced care beyond training", "Follow employer policy, use trained responders, and activate EMS", "Wait several minutes to see if the person improves", "Move the person before checking hazards"], answer: 1 },
    ],
  },
  {
    path: "/aed-awareness",
    label: "AED Awareness & Use",
    short: "Automated External Defibrillator Awareness",
    icon: "⚕️",
    color: "#00E0B8",
    regulation: "Awareness Only — Follow trained responder procedures and device prompts",
    audience: "All campus personnel, front office, food plant, retail, and public-facing teams",
    minutes: 20,
    slides: [
      {
        heading: "AEDs Are Built to Guide the User",
        sub: "The device tells you what to do — but the response still starts with scene safety and EMS activation.",
        body: "An AED is designed to analyze rhythm and coach the responder with voice or visual prompts. In A.I.R.O.N., this training is awareness-based: know where the AED is, bring it quickly, power it on, and follow the prompts while trained responders and EMS take over.",
        list: [
          "Call for help and send someone for the AED immediately.",
          "Turn the unit on as soon as it arrives and follow the device prompts.",
          "Clear the patient and others when the device says to stand clear.",
        ],
        callout: {
          label: "AWARENESS ONLY",
          text: "This module does not certify CPR/AED skills. Use trained responders, employer emergency procedures, and the device prompts in a real emergency.",
          color: "#00E0B8"
        }
      },
      {
        heading: "Pad Placement and Clear Commands Matter",
        sub: "The machine works best when the basics are done correctly.",
        body: "AED pads must be placed exactly as shown on the diagrams. Clothing or obstructions should be managed fast and safely. Once connected, nobody should touch the person during analysis or shock delivery. Loud, simple commands are essential in noisy industrial areas.",
        list: [
          "Expose the chest enough to place pads exactly where shown.",
          "Use clear commands such as 'stand clear' and visually confirm compliance.",
          "Do not touch the person while the device is analyzing or delivering a shock.",
        ],
      },
      {
        heading: "Industrial Settings Need Cleaner Coordination",
        sub: "Noise, PPE, and distance can slow response if people hesitate.",
        body: "At a beam mill, foundry, or food facility, the nearest AED may be behind doors, across a process line, or at a control room. Response improves when teams know who retrieves the device, who calls EMS, and who controls the scene. AED readiness is not just hardware — it is location awareness and role clarity.",
        list: [
          "Know the nearest AED location before an emergency happens.",
          "Assign one person to the call, one to the AED, and one to scene control.",
          "Keep aisles, doors, and apparatus access open for EMS and trained responders.",
        ],
      },
    ],
    quiz: [
      { q: "What should happen as soon as an AED is requested?", options: ["Wait for a manager to approve use", "Someone retrieves it immediately while EMS is activated", "Use it only after the person wakes up", "Leave it in the cabinet until security arrives"], answer: 1 },
      { q: "What is the first thing you should do when the AED arrives?", options: ["Power it on and follow the prompts", "Set it beside the patient and wait", "Press shock immediately", "Look for written instructions in another room"], answer: 0 },
      { q: "How should AED pads be placed?", options: ["Anywhere on the shirt", "Exactly where the pad diagrams show", "Both on the left side", "Only after a supervisor approves"], answer: 1 },
      { q: "What should everyone do when the AED is analyzing?", options: ["Hold the person still", "Stand clear and avoid touching the person", "Talk loudly over the prompts", "Move the person to a chair"], answer: 1 },
      { q: "Why are loud clear commands important in industrial settings?", options: ["Because the AED cannot work without yelling", "Because noisy areas make confusion more likely", "Because it speeds the battery charge", "Because it replaces EMS activation"], answer: 1 },
      { q: "Which statement best fits A.I.R.O.N. AED training?", options: ["This is hands-on certification", "This is awareness training that supports trained responders and device prompts", "This replaces employer policy", "This allows improvised treatment outside policy"], answer: 1 },
      { q: "What should one responder do while another retrieves the AED?", options: ["Leave the area to find witnesses", "Activate EMS and manage the scene", "Turn off alarms in the building", "Move the person without checking hazards"], answer: 1 },
      { q: "When should people touch the victim during a shock advisory?", options: ["Whenever they need to steady the body", "Only if the area is cold", "Never while the device says to stand clear", "As long as gloves are worn"], answer: 2 },
      { q: "What improves AED response the most before an emergency occurs?", options: ["Memorizing only the warning sticker", "Knowing device locations and response roles ahead of time", "Keeping the cabinet locked", "Waiting for annual meetings"], answer: 1 },
      { q: "What should happen after the AED is attached and operating?", options: ["Ignore the prompts and rely on guesswork", "Follow the device, keep the area clear, and continue response until trained help arrives", "Turn the unit off after one analysis", "Move the person immediately to another building"], answer: 1 },
    ],
  },
  {
    path: "/adult-cpr-awareness",
    label: "Adult CPR Awareness",
    short: "Recognition, Compression Readiness, and Team Response",
    icon: "❤️",
    color: "#FF4D6D",
    regulation: "Awareness Only — Not a CPR certification course",
    audience: "All campus personnel and public-facing teams",
    minutes: 22,
    slides: [
      {
        heading: "Recognize the Event Quickly",
        sub: "Delayed recognition is one of the biggest losses in an emergency.",
        body: "Adult CPR awareness begins with noticing collapse, unresponsiveness, and abnormal breathing fast. In A.I.R.O.N., the purpose is not to certify technique, but to make sure workers understand when to escalate immediately, retrieve an AED, and support trained responders without delay.",
        list: [
          "Look for collapse, unresponsiveness, and breathing that is absent or clearly not normal.",
          "Activate EMS and the site response chain immediately.",
          "Send for the AED at the same time the scene is being managed.",
        ],
        callout: {
          label: "CERTIFICATION BOUNDARY",
          text: "This module is awareness training only. Hands-on CPR technique, compression quality, and certification belong to recognized practical instruction.",
          color: "#FF4D6D"
        }
      },
      {
        heading: "Understand the Team Rhythm",
        sub: "One person calls, one person brings equipment, one person supports the response.",
        body: "The best workplace response is organized, not crowded. A caller activates emergency services, another retrieves the AED, and a lead responder controls the immediate care sequence. In facilities with radios, control rooms, or security gates, communication must be short and specific.",
        list: [
          "Do not let ten people try to lead at once.",
          "Use direct assignments: call, retrieve, clear, guide responders.",
          "Keep access routes open and the area controlled.",
        ],
      },
      {
        heading: "Awareness Means Knowing When to Act and When to Support",
        sub: "Confidence comes from role clarity, not improvisation.",
        body: "Workers should know what cardiac arrest can look like, what early actions matter, and what approved resources exist on site. Good awareness training reduces hesitation, supports AED readiness, and increases the chance that the right help reaches the person faster.",
        list: [
          "If the event looks like cardiac arrest, escalate immediately.",
          "Do not waste time debating while the person remains unresponsive.",
          "Follow employer policy and trained-responder procedures throughout the event.",
        ],
      },
    ],
    quiz: [
      { q: "What is the biggest danger of hesitating during a suspected cardiac arrest?", options: ["The AED battery may warm up", "Critical early response time is lost", "Supervisors may arrive first", "The victim may become annoyed"], answer: 1 },
      { q: "What should happen when a person collapses and appears unresponsive?", options: ["Wait quietly to see if they recover", "Activate EMS and the emergency response chain immediately", "Move them to an office first", "Ask others to decide later"], answer: 1 },
      { q: "Why is this module called CPR awareness instead of CPR certification?", options: ["Because no emergency action matters", "Because hands-on compression skill and certification require recognized practical training", "Because AEDs replace all CPR knowledge", "Because only doctors can respond"], answer: 1 },
      { q: "Which team structure is best in an emergency?", options: ["Everyone gives different instructions", "One person calls, one retrieves equipment, and one controls the scene", "Nobody takes charge", "Only supervisors are allowed to move"], answer: 1 },
      { q: "What sign should increase concern during an unresponsive collapse?", options: ["The person is standing and talking clearly", "Breathing is absent or clearly abnormal", "The room is quiet", "An extinguisher is nearby"], answer: 1 },
      { q: "What should workers send for while EMS is being activated?", options: ["A ladder", "An AED", "A mop", "A toolbox"], answer: 1 },
      { q: "What is a good reason to assign specific response roles?", options: ["To reduce confusion and speed action", "To create paperwork faster", "To avoid calling for help", "To make the event look more serious"], answer: 0 },
      { q: "What should bystanders do once direct responders are assigned?", options: ["Crowd in close to watch", "Keep clear and help only as directed", "Debate who is responsible", "Post updates on social media"], answer: 1 },
      { q: "What is the right mindset for CPR awareness in A.I.R.O.N.?", options: ["Improvise beyond policy", "Recognize the event, escalate fast, and support trained response", "Ignore the emergency until security arrives", "Treat every fainting event as unimportant"], answer: 1 },
      { q: "Why does role clarity matter during a medical event?", options: ["Because it helps the response move faster and cleaner", "Because it makes the room quieter for management", "Because it replaces training", "Because it stops EMS from entering"], answer: 0 },
    ],
  },
  {
    path: "/pulse-check-awareness",
    label: "Pulse Check & Unresponsiveness Assessment",
    short: "Awareness of Responsiveness, Breathing, and Escalation",
    icon: "🫀",
    color: "#B86CFF",
    regulation: "Awareness Only — Follow employer policy and trained responder procedures",
    audience: "All campus personnel, security, leads, and response-support staff",
    minutes: 20,
    slides: [
      {
        heading: "Start with Responsiveness and Breathing",
        sub: "The first observations shape the whole response.",
        body: "A person may be down because of heat, chemicals, trauma, collapse, electrical shock, or a medical event. Before assumptions are made, the responder should check responsiveness, observe breathing, and immediately escalate if the person is unresponsive or breathing is absent or abnormal.",
        list: [
          "Try to get a response using clear voice commands and visible assessment.",
          "Watch the chest and overall condition instead of guessing from a distance.",
          "If the person is unresponsive, escalate immediately and bring the AED.",
        ],
        callout: {
          label: "SCOPE OF TRAINING",
          text: "This module provides awareness of assessment steps. It does not replace hands-on certification or employer-specific medical response procedures.",
          color: "#B86CFF"
        }
      },
      {
        heading: "Do Not Lose Time in Uncertainty",
        sub: "Uncertainty should trigger escalation, not delay.",
        body: "Workers sometimes freeze because they are unsure whether the event is severe enough. In industrial settings, delay can be dangerous. If the person will not respond and breathing is not clearly normal, call for emergency help and shift to the site’s approved emergency response process.",
        list: [
          "When in doubt, escalate rather than wait.",
          "Use exact location details and clear status updates.",
          "Keep the scene organized while trained responders move in.",
        ],
      },
      {
        heading: "Assessment Supports, It Does Not Replace, the Response",
        sub: "Recognize what you see and communicate it clearly.",
        body: "Good assessment awareness produces better information: unresponsive, breathing present or absent, pulse check attempted under policy, AED requested, hazards controlled. These details help the next responder and prevent the team from losing time repeating basic observations.",
        list: [
          "Communicate changes quickly if the person worsens.",
          "Share observations using plain language.",
          "Support trained responders with access, crowd control, and equipment movement.",
        ],
      },
    ],
    quiz: [
      { q: "What should you check first in an unresponsive-person assessment awareness sequence?", options: ["Shift schedule and work assignment", "Responsiveness and breathing", "The nearest clock", "The person’s locker number"], answer: 1 },
      { q: "What should happen if the person does not respond and breathing is absent or clearly abnormal?", options: ["Wait another five minutes", "Escalate immediately and bring the AED", "Move them to a break room", "Search for family contact details first"], answer: 1 },
      { q: "What is the best response to uncertainty in a serious medical event?", options: ["Delay until someone more confident appears", "Escalate rather than lose time", "Assume the person is sleeping", "Ignore breathing and check paperwork"], answer: 1 },
      { q: "Why does clear observation matter?", options: ["Because it gives the next responder useful status information", "Because it replaces EMS", "Because it is required before calling 911", "Because it eliminates scene hazards"], answer: 0 },
      { q: "Which statement fits the scope of this module?", options: ["This is full clinical instruction", "This is awareness of assessment and escalation steps", "This replaces all employer medical procedures", "This authorizes improvised care"], answer: 1 },
      { q: "What should you do if the scene is becoming crowded while the person remains down?", options: ["Allow everyone close for a better view", "Control the area and keep access clear for responders", "Move the person into the crowd", "Stop communicating until management arrives"], answer: 1 },
      { q: "What kind of location report is most helpful after determining the person is unresponsive?", options: ["Near the building somewhere", "Exact building and landmark details", "In the usual place", "On site"], answer: 1 },
      { q: "Why should changes in the person’s condition be reported quickly?", options: ["So people can debate next steps", "So responders can adjust the response without delay", "So the incident can wait for paperwork", "So bystanders stay busy"], answer: 1 },
      { q: "What is a strong awareness habit during an assessment?", options: ["Guessing from across the room", "Using plain language and direct observations", "Avoiding the AED until later", "Waiting for rumors to settle"], answer: 1 },
      { q: "What supports trained responders best after the initial assessment?", options: ["Blocking access so the area stays private", "Providing observations, controlling the scene, and moving equipment as directed", "Leaving without telling anyone", "Restarting nearby machinery"], answer: 1 },
    ],
  },
  {
    path: "/severe-bleeding-control",
    label: "Severe Bleeding Control",
    short: "Recognition, Direct Pressure Awareness, and Escalation",
    icon: "🩸",
    color: "#FF0033",
    regulation: "Awareness Only — Immediate escalation and approved response resources",
    audience: "All campus personnel, shop workers, food plant staff, maintenance, and public teams",
    minutes: 18,
    slides: [
      {
        heading: "Bleeding Emergencies Escalate Fast",
        sub: "Act early, call early, and use the closest approved response resources.",
        body: "Severe bleeding can happen in maintenance shops, kitchens, beam lines, grinding areas, warehouses, or around sharp industrial hardware. Workers should recognize when bleeding is heavy, call for emergency help quickly, and support approved response actions without delay.",
        list: [
          "Treat major bleeding as an urgent emergency.",
          "Activate EMS and on-site responders immediately.",
          "Know where trauma kits or bleeding-control supplies are stored.",
        ],
        callout: {
          label: "LIABILITY BOUNDARY",
          text: "This is workplace awareness training only. Use employer-approved kits, trained responders, and emergency services in a real event.",
          color: "#FF0033"
        }
      },
      {
        heading: "Direct Pressure Starts the Control Mindset",
        sub: "Pressure, calm, and support are the core awareness ideas.",
        body: "The most important concept in bleeding awareness is that heavy bleeding should never be ignored or minimized. Responders should control the scene, apply employer-approved direct pressure measures if trained and authorized, and continue to escalate. In A.I.R.O.N., workers learn what the situation looks like and how quickly the response should move.",
        list: [
          "Do not waste time looking for the perfect response while blood loss continues.",
          "Keep the area clear and support trained responders bringing supplies.",
          "Communicate whether the bleeding is controlled, worsening, or still severe.",
        ],
      },
      {
        heading: "Industrial Scenes Need Access Control Too",
        sub: "Forklifts, traffic, machinery, and bystanders can block treatment.",
        body: "In production spaces, a bleeding emergency may happen in a walkway, dock, aisle, kitchen line, or equipment bay. Protecting the scene matters just as much as helping the person. Clear the route, stop nearby movement if needed, and make sure responders can reach the person fast.",
        list: [
          "Shut down surrounding movement if it creates added danger.",
          "Keep aisles, doors, and gates clear.",
          "Assign someone to meet incoming responders and guide them directly in.",
        ],
      },
    ],
    quiz: [
      { q: "How should severe bleeding be treated on an industrial campus?", options: ["As a minor issue unless the person asks for help", "As an urgent emergency requiring immediate escalation", "As something to document later", "As a problem only medical staff should notice"], answer: 1 },
      { q: "What is one of the most important first actions in a severe bleeding event?", options: ["Activate EMS and on-site responders quickly", "Wait for the next shift", "Move the person without checking hazards", "Debate what caused the cut"], answer: 0 },
      { q: "Why is direct pressure part of bleeding awareness?", options: ["Because heavy bleeding should not be ignored while help is on the way", "Because it replaces EMS activation", "Because it is optional only after paperwork", "Because only kitchens experience bleeding hazards"], answer: 0 },
      { q: "What should workers know before an emergency occurs?", options: ["Where trauma kits or bleeding-control supplies are located", "Only where the employee handbook is stored", "Only the nearest vending machine", "How to turn off the building lights"], answer: 0 },
      { q: "What should happen in the surrounding area during a severe bleeding emergency?", options: ["Traffic and bystanders should stay active", "The area should be controlled so responders can reach the person", "Everyone should gather close to help", "Nearby hazards should be ignored"], answer: 1 },
      { q: "Which statement best matches the scope of this module?", options: ["It provides workplace awareness and supports approved response resources", "It replaces all hands-on training", "It authorizes treatment beyond employer policy", "It is only for office staff"], answer: 0 },
      { q: "What should be reported to incoming responders?", options: ["Whether bleeding appears controlled, worsening, or still severe", "Only the injured person’s job title", "Only the shift supervisor name", "Nothing until HR arrives"], answer: 0 },
      { q: "Why is access control important during a bleeding emergency?", options: ["Because responders need a clear route and a safer treatment area", "Because it looks organized on camera", "Because it avoids writing reports", "Because it reduces the need to call EMS"], answer: 0 },
    ],
  },
  {
    path: "/choking-response",
    label: "Choking Response",
    short: "Airway Obstruction Recognition and Rapid Escalation",
    icon: "🫁",
    color: "#FFA726",
    regulation: "Awareness Only — Recognize obstruction and activate emergency response",
    audience: "Restaurants, food plants, offices, retail, campus services, and all staff",
    minutes: 16,
    slides: [
      {
        heading: "Recognize Airway Obstruction Early",
        sub: "If the person cannot speak, cough, or breathe normally, time matters.",
        body: "Choking incidents can occur in cafeterias, restaurants, offices, retail areas, and public spaces. Workers should know the visual signs of airway obstruction, respond fast, and activate emergency help immediately when the event is severe.",
        list: [
          "Look for inability to speak, ineffective cough, distress, and worsening panic.",
          "Do not minimize the event because the person is still standing.",
          "Call for help early and make space for the response.",
        ],
        callout: {
          label: "AWARENESS BOUNDARY",
          text: "This module provides recognition and response awareness only. Follow trained-responder procedures and employer policy in a real choking event.",
          color: "#FFA726"
        }
      },
      {
        heading: "Escalation Must Be Immediate",
        sub: "Do not wait for the person to solve the problem alone if the signs are severe.",
        body: "In public-facing environments, people often hesitate because they feel awkward or unsure. Good training removes that hesitation. Severe choking is an emergency. One person should activate EMS, one should direct responders, and the area should be cleared so the incident does not worsen.",
        list: [
          "Treat severe airway obstruction as a time-critical event.",
          "Use direct assignments so the response starts immediately.",
          "Keep crowds back and pathways clear.",
        ],
      },
      {
        heading: "Response Quality Improves with Clear Communication",
        sub: "Say what you see and what is happening.",
        body: "Simple language helps the next responder: 'Adult choking, cannot speak, EMS called, front counter area.' In noisy restaurant or retail settings, short direct updates are far more useful than long explanations. Communication is part of care.",
        list: [
          "Use plain language and exact location details.",
          "Report changes in breathing or responsiveness immediately.",
          "Stay with the person until trained responders or EMS take over.",
        ],
      },
    ],
    quiz: [
      { q: "Which sign should raise immediate concern for severe choking?", options: ["The person is speaking clearly", "The person cannot speak or breathe normally", "The person asks for a napkin", "The person sits down calmly"], answer: 1 },
      { q: "Why should severe choking be treated as time-critical?", options: ["Because public areas are noisy", "Because airway obstruction can worsen quickly", "Because reports take longer later", "Because managers prefer immediate action"], answer: 1 },
      { q: "What is a good first team response in a choking emergency?", options: ["One person calls EMS while another clears the area", "Everyone talks to the person at once", "Wait to see if food passes on its own", "Move the person out of sight first"], answer: 0 },
      { q: "Why is it dangerous to hesitate because you feel awkward or unsure?", options: ["Because choking is often a rapidly worsening emergency", "Because the person may be embarrassed", "Because it affects the lunch schedule", "Because it increases paperwork"], answer: 0 },
      { q: "What kind of update best helps the next responder?", options: ["A long discussion of what was eaten earlier", "Adult choking, cannot speak, EMS called, exact location", "No update until a report is written", "A guess about allergies"], answer: 1 },
      { q: "What should happen around the person during a choking event?", options: ["Crowds should gather close", "The area should be cleared so responders can work", "Nearby customers should stay in the aisle", "No one should call for help yet"], answer: 1 },
      { q: "What is the scope of this A.I.R.O.N. choking module?", options: ["Recognition and response awareness only", "Advanced clinical airway certification", "A replacement for employer policy", "A legal authorization to improvise care"], answer: 0 },
      { q: "When should you stop supporting the response?", options: ["As soon as someone starts recording", "When trained responders or EMS take over", "Immediately after calling for help", "When the manager arrives but EMS has not"], answer: 1 },
    ],
  },
];

export function createMedicalResponseComponent(path) {
  const module = MEDICAL_RESPONSE_MODULES.find((entry) => entry.path === path);
  return function MedicalResponseModuleWrapper() {
    return <TrainingModuleShell module={module} />;
  };
}

export const MedicalEmergencyBasicsTraining = createMedicalResponseComponent("/medical-emergency-basics");
export const AEDAwarenessTraining = createMedicalResponseComponent("/aed-awareness");
export const AdultCPRAwarenessTraining = createMedicalResponseComponent("/adult-cpr-awareness");
export const PulseCheckAwarenessTraining = createMedicalResponseComponent("/pulse-check-awareness");
export const SevereBleedingControlTraining = createMedicalResponseComponent("/severe-bleeding-control");
export const ChokingResponseTraining = createMedicalResponseComponent("/choking-response");
