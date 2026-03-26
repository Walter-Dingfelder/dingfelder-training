import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getNextCardPath, navigateToNextCard, navigateToPortal } from "./portalNavigation.js";

// ─── ROLE → FACILITY & MUSTER MAP ────────────────────────────────────────────
const ROLE_MAP = {
  "Foundry Operator":         { facility:"BLDG-010", muster:"North Employee Parking Lot — north edge",       exitNote:"Use north overhead doors or east pedestrian exits. Avoid melt deck area during metal incidents." },
  "Melt Deck Technician":     { facility:"BLDG-010", muster:"North Employee Parking Lot — north edge",       exitNote:"If metal incident: evacuate laterally away from furnaces. Do NOT run past the ladle path." },
  "Molding Line Operator":    { facility:"BLDG-010", muster:"North Employee Parking Lot — north edge",       exitNote:"Exit via molding line south pedestrian doors. Clear crane path before moving through Band 3." },
  "Maintenance Tech":         { facility:"CAMPUS",   muster:"Your active work area's designated muster point", exitNote:"Know the muster point for EACH building you enter at the start of every job." },
  "Beam Mill Operator":       { facility:"BLDG-030", muster:"West Truck Staging Area — beyond crane runway",  exitNote:"Exit via west side pedestrian doors. Do not cross cooling bed if hot material is present." },
  "Oilfield Operator":        { facility:"BLDG-040", muster:"South Gate — outside security fence",            exitNote:"Always move upwind from well field. If H₂S: do not use vehicle. Walk to south gate." },
  "Gas Well Operator":        { facility:"BLDG-040", muster:"South Gate — outside security fence",            exitNote:"Wind awareness critical. Know current wind direction before approaching wells each day." },
  "Propane Farm Tech":        { facility:"NG-002",   muster:"Main Gate Visitor Parking — 500 ft minimum",    exitNote:"Exit berm gate immediately. 300-ft exclusion for leak, 500-ft for fire. Never downwind." },
  "Electrician":              { facility:"CAMPUS",   muster:"Your active facility's designated muster point", exitNote:"If electrical fire or arc flash: evacuate 100 ft from substation, 50 ft from MCC room." },
  "Salad Plant Operator":     { facility:"BLDG-020", muster:"East Rail Siding — beyond the rail track",       exitNote:"Exit via east or north doors. If chemical spill: exit upwind of spill direction." },
  "Wastewater Operator":      { facility:"BLDG-070", muster:"Southeast Retention Pond Parking Area",          exitNote:"Exit away from tank areas. If confined space event: standby calls rescue — do NOT enter." },
  "Truck Service Tech":       { facility:"BLDG-080", muster:"Commercial District Far Parking Aisle",          exitNote:"If fuel spill or fire: no vehicles, no ignition. Walk to parking aisle perimeter." },
  "Restaurant Worker":        { facility:"BLDG-COM", muster:"Commercial District Far Parking Aisle",          exitNote:"Use customer exits if kitchen exits are blocked. Do not use elevators." },
  "Retail Associate":         { facility:"BLDG-COM", muster:"Commercial District Far Parking Aisle",          exitNote:"Follow customer evacuation procedures. Account for customers before leaving." },
  "Gas Station Attendant":    { facility:"BLDG-080", muster:"Commercial District Far Parking Aisle",          exitNote:"Shut off all pump power at emergency shutoff before evacuating. No vehicles." },
  "Security Officer":         { facility:"CAMPUS",   muster:"Security Command Post — BLDG-090 exterior",      exitNote:"Your role during evacuation: ensure all gates are open, guide personnel, do NOT re-enter." },
  "Office Staff":             { facility:"BLDG-050", muster:"Science & Training Facility Front Parking",       exitNote:"Exit via front lobby or east stairwell. Do not use elevators during any alarm." },
  "Contractor — Industrial":  { facility:"CAMPUS",   muster:"Your assigned facility's designated muster point", exitNote:"Confirm your muster point with your Dingfelder contact BEFORE starting work each day." },
  "Delivery Driver":          { facility:"BLDG-080", muster:"Industrial Truck Entrance Scale Bypass Lane",    exitNote:"Do not back up onto highway. Pull forward to scale bypass lane and await clearance." },
  "default":                  { facility:"CAMPUS",   muster:"Welcome Center Front Parking Lot",               exitNote:"If uncertain: move away from the hazard and toward the main gate. Ask any employee." },
};

const ALARM_TYPES = [
  { signal:"CONTINUOUS SIREN", color:"#FF2D2D", action:"FULL EVACUATION — Leave immediately via nearest exit. Go directly to your muster point. Do not collect belongings.", icon:"🚨" },
  { signal:"INTERMITTENT HORN (every 3 sec)", color:"#FF8C00", action:"GAS ALERT — Do not operate electrical switches or start vehicles. Follow escort upwind away from source.", icon:"💨" },
  { signal:"STEADY HORN + PA VOICE", color:"#0088FF", action:"SHELTER IN PLACE — Move to interior rooms, away from exterior walls and windows. Seal gaps if possible.", icon:"🏠" },
  { signal:"FIRE BELL (continuous ring)", color:"#FF4400", action:"FIRE EVACUATION — Exit immediately via marked exits. Do not use elevators. Activate pull station if you pass one.", icon:"🔥" },
  { signal:"PA ANNOUNCEMENT ONLY", color:"#FFD700", action:"LISTEN for your facility name followed by specific instruction. Act on the instruction immediately.", icon:"📻" },
];

const MUSTER_POINTS = [
  { code:"BLDG-010", name:"Dingfelder Foundry",        muster:"North Employee Parking Lot — north edge",       hazardNote:"Clear of crane swing path and propane distribution lines" },
  { code:"BLDG-020", name:"Salad Dressing Plant",       muster:"East Rail Siding — beyond the rail track",      hazardNote:"Upwind from chemical spill direction" },
  { code:"BLDG-030", name:"Structural Beam Mill",       muster:"West Truck Staging Area",                       hazardNote:"Outside crane runway and cooling bed exposure" },
  { code:"BLDG-040", name:"Oilfield Processing",        muster:"South Gate — outside security fence",           hazardNote:"Upwind from well field; minimum 200 ft from separator" },
  { code:"NG-002",   name:"Propane Farm",                muster:"Main Gate Visitor Parking — 500 ft min",        hazardNote:"500 ft for fire, 300 ft for gas leak. Never downwind." },
  { code:"EP-001",   name:"Primary Substation",         muster:"North Service Road — 100 ft from fence",        hazardNote:"100-ft exclusion from arc flash or substation fire" },
  { code:"BLDG-050", name:"Science & Training",         muster:"Front Parking Lot",                             hazardNote:"Use main lobby exit or east stairwell" },
  { code:"BLDG-070", name:"Wastewater Treatment",       muster:"SE Retention Pond Parking",                     hazardNote:"Away from aeration tanks and chemical feed area" },
  { code:"BLDG-080", name:"Truck Stop / Fuel Center",   muster:"Commercial District Far Parking Aisle",         hazardNote:"No vehicles near fuel dispensers or UST vent stacks" },
  { code:"BLDG-COM", name:"Commercial District",        muster:"Commercial District Far Parking Aisle",         hazardNote:"Account for customers. Farthest row from buildings." },
];

const MODULES = [
  {
    id:"alarms",
    icon:"🔔",
    label:"Alarm Recognition",
    color:"#00CC88",
    slides:[
      {
        heading:"Dingfelder Campus Alarm System",
        body:"The Dingfelder campus uses a multi-zone alarm system integrated with the Industrial Intelligence Platform (A.I.R.O.N.). Different alarm signals mean different things — and require different immediate responses. You must know the difference before you ever hear one in a real emergency.",
        icon:"🔔",
        fact:"The most dangerous response to an unfamiliar alarm is hesitation. Learn the signals now so the correct action is automatic when it matters."
      },
      {
        heading:"The Five Alarm Types",
        body:"Every alarm you hear on campus fits into one of these five categories. Your response in the first 30 seconds determines whether you are safe or in increasing danger.",
        icon:"📡",
        type:"alarms"
      },
      {
        heading:"What 'Evacuate' Means at an Industrial Facility",
        body:"Industrial evacuation is fundamentally different from a fire drill in an office or school. The hazards are larger, faster-moving, and less predictable. The following rules have no exceptions.",
        icon:"🏃",
        list:[
          "👟 MOVE IMMEDIATELY — do not return for belongings, coats, or phones",
          "🚪 USE THE NEAREST MARKED EXIT — not the most convenient or familiar one",
          "🚫 DO NOT USE ELEVATORS — emergency lighting and backup power do not guarantee elevator function",
          "📵 NO PHOTOS — emergency responders need clear paths and zero distraction",
          "🧑‍🤝‍🧑 STAY WITH YOUR GROUP — accountability begins the moment you leave the building",
          "🔄 DO NOT RE-ENTER — until a Safety Officer announces all-clear by name or radio",
          "🚗 DO NOT DRIVE through an active evacuation route — roads must stay clear for emergency vehicles",
        ]
      },
      {
        heading:"Industrial Hazards That Change Evacuation Routes",
        body:"Not all exits are equal in an industrial emergency. The nature of the hazard determines which exits are safe and which put you in greater danger.",
        icon:"🗺️",
        list:[
          "🔥 FIRE: Do not exit toward smoke. Feel doors — if hot, use alternate exit.",
          "💨 GAS LEAK: Move perpendicular to wind direction, then upwind. Never downwind.",
          "⚡ ARC FLASH / ELECTRICAL: Stay back 100 ft. Do not cross through any arc or smoke plume.",
          "🌡️ MOLTEN METAL INCIDENT: Evacuate laterally — never run past the spill direction.",
          "💥 EXPLOSION RISK (propane): 300–500 ft exclusion. Move away fast — do not shelter nearby.",
          "🧪 CHEMICAL SPILL: Read wind direction. Move crosswind first, then upwind of the spill.",
        ],
        fact:"At Dingfelder, the muster point locations were specifically chosen to be upwind of the primary hazard zones for prevailing wind conditions. Know your muster point, not just your nearest exit."
      }
    ],
    quiz:[
      { q:"You hear a continuous siren alarm. Your first action is:", options:["Find out what caused it before moving","Leave immediately via the nearest marked exit and go to your muster point","Call 911 from inside the building","Ask a supervisor what to do"], answer:1 },
      { q:"During a gas alarm at the propane farm, you should NOT:", options:["Move briskly upwind","Alert nearby personnel","Start your vehicle to drive away quickly","Go to your muster point on foot"], answer:2 },
      { q:"You hear the intermittent horn (every 3 seconds). This means:", options:["Full evacuation — leave immediately","Gas alert — do not touch electrical switches, move upwind away from the source","Shelter in place inside a building","A test drill — no action required"], answer:1 }
    ]
  },
  {
    id:"muster",
    icon:"📍",
    label:"Muster Points",
    color:"#00AAFF",
    slides:[
      {
        heading:"Your Muster Point — Know It Before You Need It",
        body:"A muster point is the designated outdoor assembly area where all personnel report during an evacuation. Emergency coordinators take headcounts at muster points to confirm everyone is accounted for. Going to the wrong muster point — or not going at all — can delay rescue for a missing person or trigger a dangerous re-entry to search for you.",
        icon:"📍",
        fact:"The single most effective action a person can take during an industrial emergency is to get to their muster point quickly, stay there, and answer the headcount. Everything else the emergency team needs to do is harder if people are scattered."
      },
      {
        heading:"Campus Muster Point Map",
        body:"Each facility has a specific muster point. These locations are also printed on the back of your IRIS badge and posted at every building entrance.",
        icon:"🗺️",
        type:"musterMap"
      },
      {
        heading:"At the Muster Point — Your Responsibilities",
        body:"Arriving at the muster point is not the end of your responsibility. What you do there is equally important.",
        icon:"✅",
        list:[
          "✅ STAY at the muster point — do not walk to your car, do not leave the site",
          "✅ ANSWER when your name is called in the headcount",
          "✅ REPORT any missing coworkers immediately to your supervisor or the Safety Coordinator",
          "✅ REPORT any injuries you witnessed or know about",
          "✅ DO NOT re-enter the facility or approach the hazard zone",
          "✅ Limit phone use to contacting family — do not livestream or photograph the incident",
          "✅ Wait for the formal ALL-CLEAR announcement from a Safety Officer — not a coworker",
        ]
      },
      {
        heading:"Accountability — Why Every Person Counts",
        body:"If emergency responders believe someone is still inside, they will conduct a search. This puts trained firefighters and rescue personnel at risk. Your accountability at the muster point directly determines whether a rescue team enters a burning or gas-filled building unnecessarily.",
        icon:"🧑‍🤝‍🧑",
        list:[
          "Your name is in the IRIS visitor/employee log — coordinators have the list",
          "If you leave the site before the all-clear, call the Campus Emergency Line immediately",
          "Contractors and visitors are counted separately — your escort is responsible for you",
          "If you sheltered in place inside (e.g., mobility issue), call 911 and give your exact location",
          "Emergency personnel do NOT know who drove away, left through a back gate, or went to a car",
        ],
        fact:"In major industrial incidents, rescue teams have risked their lives searching for workers who had already driven home without notifying anyone. Accountability saves both your coworkers and the rescue team."
      }
    ],
    quiz:[
      { q:"When you arrive at your muster point, your most important immediate action is:", options:["Check your phone for news about the incident","Stay there, answer the headcount, and report any missing coworkers","Walk to your car until the all-clear is given","Call your supervisor to find out what happened"], answer:1 },
      { q:"You left your laptop in the building during an evacuation. You should:", options:["Go back quickly — it will only take 30 seconds","Ask your supervisor to retrieve it","Continue to the muster point — do not re-enter under any circumstances","Wait just outside the door while someone else gets it"], answer:2 },
      { q:"You leave the muster point early because the wait is long and you need to get home. You must:", options:["Text your coworker that you left","Immediately call the Campus Emergency Line to report your departure so you are removed from the search list","Sign out at the security gate","Nothing — you are a visitor and not on the list"], answer:1 }
    ]
  },
  {
    id:"rolespecific",
    icon:"👷",
    label:"Your Role & Facility",
    color:"#FFB400",
    slides:[
      {
        heading:"Your Assigned Facility and Muster Point",
        body:"Based on your IRIS role assignment, your primary emergency muster point is shown below. This is where you report for ALL campus-wide evacuations unless a Safety Officer directs you otherwise.",
        icon:"👷",
        type:"roleCard"
      },
      {
        heading:"First Day in Any New Building — The Safety Scan",
        body:"Every time you enter a building or work area you haven't been in before — or haven't been in for more than two weeks — you must perform a quick safety scan before starting work.",
        icon:"👁️",
        list:[
          "1. LOCATE the two nearest emergency exits from your work position",
          "2. IDENTIFY the nearest fire alarm pull station (red boxes)",
          "3. LOCATE the nearest fire extinguisher — note the class",
          "4. IDENTIFY the nearest first aid kit",
          "5. FIND the emergency eyewash/shower if chemicals are present",
          "6. CONFIRM the muster point for this facility (posted at entrances)",
          "7. NOTE any site-specific hazards relevant to your work (gas, electrical, thermal)",
        ],
        fact:"This scan takes 60 seconds. It is the habit that has saved lives when workers needed to find an exit in smoke or darkness — from memory, not from a map."
      },
      {
        heading:"Calling for Help — Campus Emergency Contacts",
        body:"In any emergency at Dingfelder, you have multiple ways to reach help. Use all available channels — do not assume someone else has already called.",
        icon:"📞",
        list:[
          "📞 911 — Always appropriate for immediate life threat. Give: Dingfelder Industrial Campus + your building code + the nature of the emergency",
          "📞 Campus Emergency Line — posted at all building entrances and on your IRIS badge",
          "📻 Radio — if you have a campus radio, Channel 1 is the emergency channel",
          "🏥 Medical: Call 911 first. Then Campus Emergency Line. Do NOT move an injured person unless they are in immediate additional danger",
          "🔥 Fire: Activate the nearest pull station AND call 911. Do not fight a fire unless you are trained and it is in its absolute earliest stage",
          "💨 Gas Alarm: Do not use phone inside the exclusion zone. Evacuate first, then call from outside",
        ]
      },
      {
        heading:"Emergency Contact Card — Keep This with You",
        body:"This information is on the back of your IRIS badge. Know it before you need it.",
        icon:"💳",
        type:"contactCard"
      }
    ],
    quiz:[
      { q:"When entering a new work area or building you haven't been in recently, your first safety action is:", options:["Wait for someone to give you a safety briefing","Locate the two nearest emergency exits and the fire alarm pull station","Check the air quality","Sign in at the security desk"], answer:1 },
      { q:"During a fire in the building, you attempt to open a door and the handle is hot. You should:", options:["Open it quickly and run through","Do NOT open it — use an alternate exit route","Alert the fire department by phone before moving","Stand back and wait for the door to cool"], answer:1 },
      { q:"A coworker is injured in a fall. They can speak but are in pain and cannot move. You should:", options:["Move them to a more comfortable position while waiting for help","Call 911 immediately — do NOT move them unless they are in immediate additional danger","Ask them to walk to the first aid room","Give them water"], answer:1 }
    ]
  },
  {
    id:"reentry",
    icon:"✅",
    label:"All-Clear & Re-Entry",
    color:"#22CC66",
    slides:[
      {
        heading:"The All-Clear — Who Gives It and What It Means",
        body:"The all-clear is a formal declaration that the hazard has been controlled, the area is safe to re-enter, and normal operations may resume. At Dingfelder, the all-clear may only be given by the Dingfelder Safety Manager or the Incident Commander for that event.",
        icon:"✅",
        list:[
          "🚫 A supervisor or team leader cannot give the all-clear — only the Safety Manager or IC",
          "🚫 'The alarm stopped' is NOT an all-clear",
          "🚫 'I don't see any more smoke' is NOT an all-clear",
          "🚫 A coworker saying 'I think we're good' is NOT an all-clear",
          "✅ The all-clear is given by name and role on the PA, radio, or direct address at the muster point",
          "✅ After all-clear: return via designated re-entry route — not the same as evacuation path in some scenarios",
        ],
        fact:"Re-entries before the all-clear have resulted in secondary injuries and fatalities — particularly in gas events where the atmosphere appeared clear but was still hazardous."
      },
      {
        heading:"Post-Incident Reporting",
        body:"After every real emergency evacuation — not just drills — a post-incident report must be completed. This is how Dingfelder improves its emergency response and documents compliance with regulatory requirements.",
        icon:"📝",
        list:[
          "1. Complete a witness statement form within 24 hours of the event",
          "2. Report any near-misses, injuries, or hazards observed during evacuation",
          "3. Note any alarms that were unclear, exits that were blocked, or muster issues",
          "4. Submit through your supervisor or directly to the Safety Department",
          "5. Your report is protected — reporting issues with the evacuation process is encouraged",
          "6. For serious incidents: do not discuss publicly or on social media until Safety Department clears",
        ]
      },
      {
        heading:"Drills — Why They Are Mandatory",
        body:"Dingfelder conducts regular evacuation drills for all facilities. Participation is mandatory, not optional. The reason is simple: the actions that need to be automatic in a real emergency only become automatic through practice.",
        icon:"📋",
        list:[
          "Drills are announced in advance for most facilities",
          "Some drills may be partially unannounced to test realistic response",
          "Drills are timed and evaluated — muster completion time is recorded",
          "Gaps found in drills (wrong muster point, blocked exits, missing personnel) must be corrected before the next drill",
          "Refusing to participate in an evacuation drill is a safety policy violation",
          "Post-drill debriefs are held — your feedback is specifically requested",
        ],
        fact:"Evacuation drill data at industrial facilities consistently shows that response times improve by 30–50% after just two drills compared to the first. The second drill is often the difference between a smooth evacuation and chaos."
      }
    ],
    quiz:[
      { q:"The all-clear to re-enter your building after an evacuation can be given by:", options:["Your direct supervisor","Your most experienced coworker once the smoke clears","The Dingfelder Safety Manager or designated Incident Commander only","911 dispatch once the fire trucks leave"], answer:2 },
      { q:"After a gas leak evacuation, a coworker says they can't smell gas anymore and suggests re-entering. You should:", options:["Follow them back in — they have experience","Wait for the official all-clear from the Safety Manager — the absence of smell does NOT mean the atmosphere is safe","Re-enter only to retrieve your personal belongings","Call the Safety Manager yourself to confirm"], answer:1 },
      { q:"Participating in Dingfelder evacuation drills is:", options:["Optional — encouraged but not required","Mandatory — refusal is a safety policy violation","Required only for industrial area workers","Only for new employees in their first 90 days"], answer:1 }
    ]
  }
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function useAnim(dep) {
  const [v, setV] = useState(false);
  useEffect(()=>{setV(false);const t=setTimeout(()=>setV(true),40);return()=>clearTimeout(t);},[dep]);
  return v;
}
function ProgressBar({ current, total, color }) {
  return <div style={{width:"100%",height:3,background:"#081208",borderRadius:2,overflow:"hidden"}}><div style={{height:"100%",width:`${Math.max(3,(current/total)*100)}%`,background:color,transition:"width 0.4s ease"}}/></div>;
}

function AlarmCard({ signal, color, action, icon }) {
  return (
    <div style={{padding:"10px 12px",marginBottom:6,background:"#060e08",border:`1px solid ${color}33`,borderLeft:`4px solid ${color}`,borderRadius:3}}>
      <div style={{display:"flex",gap:8,alignItems:"center",marginBottom:5}}>
        <span style={{fontSize:18}}>{icon}</span>
        <span style={{color,fontFamily:"'Barlow Condensed',sans-serif",fontSize:12,letterSpacing:2,fontWeight:700}}>{signal}</span>
      </div>
      <div style={{color:"#aaa",fontSize:13,fontFamily:"'IBM Plex Sans',sans-serif",lineHeight:1.5}}>{action}</div>
    </div>
  );
}

function MusterRow({ code, name, muster, hazardNote }) {
  return (
    <div style={{padding:"8px 12px",marginBottom:5,background:"#060e08",border:"1px solid #0d1f0d",borderLeft:"3px solid #00AAFF",borderRadius:3}}>
      <div style={{display:"flex",gap:10,marginBottom:2}}>
        <span style={{color:"#00AAFF",fontFamily:"'Barlow Condensed',sans-serif",fontSize:11,letterSpacing:2,width:70,flexShrink:0}}>{code}</span>
        <span style={{color:"#ddd",fontSize:12,fontFamily:"'IBM Plex Sans',sans-serif",fontWeight:600}}>{name}</span>
      </div>
      <div style={{color:"#88cc88",fontSize:12,fontFamily:"'Barlow Condensed',sans-serif",letterSpacing:1,marginBottom:2}}>📍 {muster}</div>
      <div style={{color:"#557",fontSize:11,fontFamily:"'IBM Plex Sans',sans-serif"}}>{hazardNote}</div>
    </div>
  );
}

function RoleCard({ role, ctx }) {
  return (
    <div style={{padding:"16px",background:"#060e08",border:"2px solid #FFB400",borderRadius:6,marginBottom:12}}>
      <div style={{color:"#FFB400",fontFamily:"'Barlow Condensed',sans-serif",fontSize:11,letterSpacing:3,marginBottom:8}}>YOUR ROLE ASSIGNMENT</div>
      <div style={{color:"#fff",fontFamily:"'Barlow Condensed',sans-serif",fontSize:22,fontWeight:700,marginBottom:4}}>{role}</div>
      <div style={{color:"#aaa",fontSize:13,fontFamily:"'IBM Plex Sans',sans-serif",marginBottom:12}}>Primary Facility: <strong style={{color:"#FFB400"}}>{ctx.facility}</strong></div>
      <div style={{color:"#FFB400",fontFamily:"'Barlow Condensed',sans-serif",fontSize:11,letterSpacing:2,marginBottom:4}}>🏁 YOUR MUSTER POINT</div>
      <div style={{color:"#22CC66",fontFamily:"'IBM Plex Sans',sans-serif",fontSize:15,fontWeight:600,marginBottom:12}}>📍 {ctx.muster}</div>
      <div style={{padding:"10px 12px",background:"#0a1a0a",border:"1px solid #1a3a1a",borderRadius:4}}>
        <div style={{color:"#88aa88",fontFamily:"'Barlow Condensed',sans-serif",fontSize:10,letterSpacing:2,marginBottom:4}}>EXIT NOTE FOR YOUR AREA</div>
        <div style={{color:"#ccc",fontSize:13,fontFamily:"'IBM Plex Sans',sans-serif",lineHeight:1.5}}>{ctx.exitNote}</div>
      </div>
    </div>
  );
}

function ContactCard() {
  return (
    <div style={{padding:"14px",background:"#060e08",border:"1px solid #0d2a0d",borderRadius:6,marginBottom:12}}>
      <div style={{color:"#22CC66",fontFamily:"'Barlow Condensed',sans-serif",fontSize:11,letterSpacing:3,marginBottom:10}}>DINGFELDER EMERGENCY CONTACTS</div>
      {[
        {label:"ANY EMERGENCY",    number:"911",           note:"Always call for life threat"},
        {label:"CAMPUS EMERGENCY", number:"On IRIS Badge", note:"Reaches campus Safety Dept"},
        {label:"RADIO EMERGENCY",  number:"Channel 1",     note:"Campus emergency channel"},
        {label:"POISON CONTROL",   number:"1-800-222-1222",note:"Chemical exposure non-fatal"},
      ].map((c,i)=>(
        <div key={i} style={{display:"grid",gridTemplateColumns:"140px 130px 1fr",gap:8,padding:"7px 0",borderBottom:"1px solid #0d1a0d"}}>
          <span style={{color:"#88aa88",fontFamily:"'Barlow Condensed',sans-serif",fontSize:11,letterSpacing:1}}>{c.label}</span>
          <span style={{color:"#fff",fontFamily:"'Barlow Condensed',sans-serif",fontSize:13,fontWeight:700}}>{c.number}</span>
          <span style={{color:"#557",fontFamily:"'IBM Plex Sans',sans-serif",fontSize:11}}>{c.note}</span>
        </div>
      ))}
    </div>
  );
}

function SlideView({ slide, color, roleCtx, playerRole, onNext, onPrev, isFirst, isLast }) {
  const v = useAnim(slide.heading);
  return (
    <div style={{flex:1,display:"flex",flexDirection:"column",opacity:v?1:0,transform:v?"translateY(0)":"translateY(10px)",transition:"all 0.3s ease"}}>
      <div style={{fontSize:48,marginBottom:12,textAlign:"center",filter:"drop-shadow(0 0 16px rgba(0,200,100,0.4))"}}>{slide.icon}</div>
      <h2 style={{margin:"0 0 10px",fontSize:22,fontWeight:800,fontFamily:"'Barlow Condensed',sans-serif",color:"#fff",lineHeight:1.2}}>{slide.heading}</h2>
      {slide.body&&<p style={{margin:"0 0 12px",fontSize:14,lineHeight:1.75,color:"#aac0aa",fontFamily:"'IBM Plex Sans',sans-serif"}}>{slide.body}</p>}
      {slide.type==="alarms"&&<div style={{marginBottom:12}}>{ALARM_TYPES.map((a,i)=><AlarmCard key={i} {...a}/>)}</div>}
      {slide.type==="musterMap"&&<div style={{marginBottom:12,maxHeight:340,overflowY:"auto"}}>{MUSTER_POINTS.map((m,i)=><MusterRow key={i} {...m}/>)}</div>}
      {slide.type==="roleCard"&&<RoleCard role={playerRole} ctx={roleCtx}/>}
      {slide.type==="contactCard"&&<ContactCard/>}
      {slide.list&&<ul style={{margin:"0 0 12px",padding:0,listStyle:"none"}}>{slide.list.map((item,i)=><li key={i} style={{padding:"7px 12px",marginBottom:5,background:"#060e08",border:"1px solid #0d1a0d",borderLeft:`3px solid ${color}`,borderRadius:3,fontSize:13,color:"#aac0aa",fontFamily:"'IBM Plex Sans',sans-serif",lineHeight:1.5}}>{item}</li>)}</ul>}
      {slide.fact&&<div style={{padding:"11px 14px",background:`${color}12`,border:`1px solid ${color}44`,borderLeft:`4px solid ${color}`,borderRadius:3,marginBottom:12}}><span style={{fontSize:10,color,fontFamily:"'Barlow Condensed',sans-serif",letterSpacing:2,display:"block",marginBottom:3}}>⚠ KEY FACT</span><span style={{fontSize:13,color:"#ddd",fontFamily:"'IBM Plex Sans',sans-serif",lineHeight:1.5}}>{slide.fact}</span></div>}
      <div style={{display:"flex",gap:8,marginTop:"auto",paddingTop:14}}>
        {!isFirst&&<button onClick={onPrev} style={{flex:1,padding:"11px",background:"transparent",border:"1px solid #0d1a0d",borderRadius:3,color:"#446644",cursor:"pointer",fontFamily:"'Barlow Condensed',sans-serif",fontSize:13,letterSpacing:1}}>← BACK</button>}
        <button onClick={onNext} style={{flex:2,padding:"12px",background:color,border:"none",borderRadius:3,color:"#000",cursor:"pointer",fontSize:14,fontWeight:700,fontFamily:"'Barlow Condensed',sans-serif",letterSpacing:2}}>{isLast?"TAKE QUIZ →":"NEXT →"}</button>
      </div>
    </div>
  );
}

function QuizView({ mod, onComplete }) {
  const [cur,setCur]=useState(0);const [sel,setSel]=useState(null);const [rev,setRev]=useState(false);const [score,setScore]=useState(0);const [done,setDone]=useState(false);
  const q=mod.quiz[cur];const color=mod.color;const passed=score>=Math.ceil(mod.quiz.length*0.67);
  const pick=i=>{if(rev)return;setSel(i);setRev(true);if(i===q.answer)setScore(s=>s+1);};
  const next=()=>{if(cur+1>=mod.quiz.length){setDone(true);return;}setCur(c=>c+1);setSel(null);setRev(false);};
  if(done) return (
    <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"}}>
      <div style={{fontSize:56,marginBottom:14}}>{passed?"✅":"❌"}</div>
      <h2 style={{color,fontFamily:"'Barlow Condensed',sans-serif",fontSize:26,margin:"0 0 8px"}}>{passed?"MODULE PASSED":"REVIEW REQUIRED"}</h2>
      <p style={{color:"#446644",fontSize:14,fontFamily:"'IBM Plex Sans',sans-serif",marginBottom:20}}>{score}/{mod.quiz.length} correct.{!passed&&" Score 2/3 or better to pass."}</p>
      <button onClick={()=>onComplete(passed)} style={{padding:"12px 28px",background:passed?color:"transparent",border:`1px solid ${color}`,borderRadius:3,color:passed?"#000":color,cursor:"pointer",fontFamily:"'Barlow Condensed',sans-serif",fontSize:14,letterSpacing:2,fontWeight:700}}>{passed?"CONTINUE →":"RETRY"}</button>
    </div>
  );
  return (
    <div style={{flex:1,display:"flex",flexDirection:"column"}}>
      <div style={{color,fontFamily:"'Barlow Condensed',sans-serif",fontSize:11,letterSpacing:3,marginBottom:6}}>QUIZ — {mod.label.toUpperCase()} · Q{cur+1}/{mod.quiz.length}</div>
      <ProgressBar current={cur} total={mod.quiz.length} color={color}/>
      <h2 style={{color:"#fff",fontFamily:"'Barlow Condensed',sans-serif",fontSize:20,margin:"16px 0",lineHeight:1.3}}>{q.q}</h2>
      <div style={{flex:1,display:"flex",flexDirection:"column",gap:8}}>
        {q.options.map((opt,i)=>{
          let bg="#060e08",bdr="#0d1a0d",clr="#889988";
          if(rev){if(i===q.answer){bg=`${color}18`;bdr=color;clr="#fff";}else if(i===sel){bg="#100808";bdr="#cc2222";clr="#ff8888";}}
          else if(sel===i){bdr=color;}
          return <button key={i} onClick={()=>pick(i)} style={{padding:"13px 14px",background:bg,border:`1px solid ${bdr}`,borderRadius:3,color:clr,cursor:rev?"default":"pointer",fontFamily:"'IBM Plex Sans',sans-serif",fontSize:14,textAlign:"left",lineHeight:1.4,transition:"all 0.15s"}}><span style={{color,fontWeight:700,marginRight:8,fontFamily:"'Barlow Condensed',sans-serif"}}>{String.fromCharCode(65+i)}.</span>{opt}{rev&&i===q.answer&&<span style={{float:"right"}}>✓</span>}{rev&&i===sel&&i!==q.answer&&<span style={{float:"right"}}>✗</span>}</button>;
        })}
      </div>
      {rev&&<button onClick={next} style={{marginTop:16,padding:"12px",background:color,border:"none",borderRadius:3,color:"#000",cursor:"pointer",fontSize:14,fontWeight:700,fontFamily:"'Barlow Condensed',sans-serif",letterSpacing:2}}>{cur+1>=mod.quiz.length?"SEE RESULTS":"NEXT →"}</button>}
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function EvacuationTraining() {
  const navigate = useNavigate();
  const location = useLocation();
  const nextCardPath = getNextCardPath(location.pathname, location.state);
  const playerRole = "Foundry Operator"; // In Roblox: player:GetAttribute("Role")
  const roleCtx = ROLE_MAP[playerRole] || ROLE_MAP["default"];

  const [screen,setScreen]=useState("home");
  const [modIdx,setModIdx]=useState(0);
  const [slideIdx,setSlideIdx]=useState(0);
  const [phase,setPhase]=useState("slides");
  const [completed,setCompleted]=useState({});
  const completedCount=Object.keys(completed).length;

  const mod=MODULES[modIdx];
  const startMod=idx=>{setModIdx(idx);setSlideIdx(0);setPhase("slides");setScreen("module");};
  const handleNext=()=>{if(slideIdx+1>=mod.slides.length)setPhase("quiz");else setSlideIdx(s=>s+1);};
  const handlePrev=()=>{if(slideIdx>0)setSlideIdx(s=>s-1);};
  const handleQuizDone=passed=>{
    if(!passed){setSlideIdx(0);setPhase("slides");return;}
    const nc={...completed,[mod.id]:true};setCompleted(nc);
    const next=MODULES.findIndex((m,i)=>i>modIdx&&!nc[m.id]);
    if(next===-1||Object.keys(nc).length>=MODULES.length){setScreen("complete");}else startMod(next);
  };

  if(screen==="home") return (
    <div style={{minHeight:"100vh",background:"#030a04",fontFamily:"'IBM Plex Sans',sans-serif",display:"flex",flexDirection:"column"}}>
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet"/>
      <div style={{background:"#22CC66",padding:"10px 20px",display:"flex",justifyContent:"space-between"}}>
        <span style={{fontFamily:"'Barlow Condensed',sans-serif",fontWeight:700,fontSize:13,letterSpacing:3,color:"#000"}}>DINGFELDER INDUSTRIAL — EMERGENCY PREPAREDNESS TRAINING</span>
        <span style={{fontFamily:"'Barlow Condensed',sans-serif",fontSize:11,color:"#001",letterSpacing:2}}>OSHA 29 CFR 1910.38</span>
      </div>
      <div style={{padding:"28px 24px 20px",borderBottom:"1px solid #0a180a"}}>
        <div style={{color:"#22CC66",fontFamily:"'Barlow Condensed',sans-serif",fontSize:9,letterSpacing:5,marginBottom:8}}>ROLE: {playerRole.toUpperCase()} · FACILITY: {roleCtx.facility}</div>
        <h1 style={{margin:0,fontSize:40,fontWeight:800,fontFamily:"'Barlow Condensed',sans-serif",color:"#fff",lineHeight:1.0}}>EMERGENCY<br /><span style={{color:"#22CC66"}}>EVACUATION & MUSTER</span></h1>
        <div style={{width:50,height:3,background:"#22CC66",margin:"14px 0 12px"}}/>
        <div style={{padding:"10px 14px",background:"#060e06",border:"1px solid #1a3a1a",borderLeft:"4px solid #22CC66",borderRadius:3}}>
          <div style={{color:"#88aa88",fontFamily:"'Barlow Condensed',sans-serif",fontSize:10,letterSpacing:2,marginBottom:3}}>YOUR MUSTER POINT</div>
          <div style={{color:"#22CC66",fontSize:15,fontFamily:"'Barlow Condensed',sans-serif",fontWeight:700}}>📍 {roleCtx.muster}</div>
        </div>
      </div>
      <div style={{padding:"16px 24px",flex:1}}>
        <div style={{height:2,background:"#0a180a",borderRadius:2,overflow:"hidden",marginBottom:16}}><div style={{height:"100%",width:`${(completedCount/MODULES.length)*100}%`,background:"#22CC66",transition:"width 0.4s"}}/></div>
        {MODULES.map((m,i)=>{
          const done=completed[m.id];
          return <div key={m.id} onClick={()=>startMod(i)} style={{display:"flex",alignItems:"center",gap:12,padding:"13px 14px",marginBottom:7,background:"#060e06",border:`1px solid ${done?m.color+"55":"#0d1a0d"}`,borderRadius:4,cursor:"pointer"}}>
            <div style={{width:42,height:42,borderRadius:6,background:done?m.color:`${m.color}1a`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,border:`1px solid ${m.color}33`,flexShrink:0}}>{done?"✓":m.icon}</div>
            <div style={{flex:1}}>
              <div style={{color:done?m.color:"#ddd",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:700,fontSize:15}}>{m.label}</div>
              <div style={{color:"#446644",fontSize:11}}>{m.slides.length} slides · {m.quiz.length} questions</div>
            </div>
            <span style={{color:done?m.color:"#224422",fontSize:16}}>{done?"✓":"→"}</span>
          </div>;
        })}
      </div>
    </div>
  );

  if(screen==="complete") return (
    <div style={{minHeight:"100vh",background:"#030a04",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:28,textAlign:"center"}}>
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet"/>
      <div style={{fontSize:64,marginBottom:16}}>✅</div>
      <h1 style={{color:"#22CC66",fontFamily:"'Barlow Condensed',sans-serif",fontSize:30,margin:"0 0 10px"}}>EVACUATION TRAINING<br />COMPLETE</h1>
      <div style={{padding:"14px 18px",background:"#060e06",border:"2px solid #22CC66",borderRadius:6,marginBottom:20,textAlign:"left",maxWidth:400}}>
        <div style={{color:"#22CC66",fontFamily:"'Barlow Condensed',sans-serif",fontSize:11,letterSpacing:2,marginBottom:6}}>YOUR MUSTER POINT — MEMORIZE THIS</div>
        <div style={{color:"#fff",fontSize:16,fontFamily:"'Barlow Condensed',sans-serif",fontWeight:700}}>📍 {roleCtx.muster}</div>
        <div style={{color:"#88aa88",fontSize:12,fontFamily:"'IBM Plex Sans',sans-serif",marginTop:6}}>{roleCtx.exitNote}</div>
      </div>
      <p style={{color:"#446644",fontSize:13,fontFamily:"'IBM Plex Sans',sans-serif",marginBottom:20,lineHeight:1.6,maxWidth:440}}>Role: <strong style={{color:"#22CC66"}}>{playerRole}</strong> · Facility: <strong style={{color:"#22CC66"}}>{roleCtx.facility}</strong><br />Annual recertification required. Evacuation drill participation mandatory.</p>
      <div style={{color:"#224422",fontSize:10,fontFamily:"'Barlow Condensed',sans-serif",letterSpacing:2}}>DINGFELDER SAFETY · OSHA 29 CFR 1910.38 · {new Date().toLocaleDateString()}</div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,width:"100%",maxWidth:420,marginTop:20}}>
        <button
          onClick={() => navigateToPortal(navigate, location.state)}
          style={{padding:"10px 16px",background:"transparent",border:"1px solid #0d1a0d",borderRadius:3,color:"#cfe8cf",cursor:"pointer",fontFamily:"'Barlow Condensed',sans-serif",fontSize:12,letterSpacing:2}}
        >
          RETURN TO PORTAL
        </button>
        <button
          onClick={() => navigateToNextCard(navigate, location.pathname, location.state)}
          disabled={!nextCardPath}
          style={{padding:"10px 16px",background:nextCardPath ? "#22CC66" : "#081008",border:"1px solid #0d1a0d",borderRadius:3,color:nextCardPath ? "#030a04" : "#224422",cursor:nextCardPath ? "pointer" : "not-allowed",fontFamily:"'Barlow Condensed',sans-serif",fontSize:12,letterSpacing:2,fontWeight:700}}
        >
          NEXT CARD
        </button>
      </div>
      <button onClick={()=>{setCompleted({});setScreen("home");}} style={{marginTop:20,padding:"10px 24px",background:"transparent",border:"1px solid #0d1a0d",borderRadius:3,color:"#224422",cursor:"pointer",fontFamily:"'Barlow Condensed',sans-serif",fontSize:12,letterSpacing:2}}>RESTART</button>
    </div>
  );

  return (
    <div style={{minHeight:"100vh",background:"#030a04",display:"flex",flexDirection:"column"}}>
      <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet"/>
      <div style={{background:"#050e05",borderBottom:`2px solid ${mod.color}44`,padding:"10px 18px"}}>
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:7}}>
          <button onClick={()=>setScreen("home")} style={{background:"none",border:"none",color:"#224422",cursor:"pointer",fontFamily:"'Barlow Condensed',sans-serif",fontSize:11,letterSpacing:1,padding:0}}>← HOME</button>
          <div style={{flex:1}}/>
          <span style={{color:mod.color,fontFamily:"'Barlow Condensed',sans-serif",fontSize:11,letterSpacing:2}}>{phase==="slides"?`${slideIdx+1}/${mod.slides.length}`:"QUIZ"}</span>
        </div>
        <ProgressBar current={phase==="slides"?slideIdx+1:mod.slides.length+1} total={mod.slides.length+1} color={mod.color}/>
        <div style={{marginTop:9,display:"flex",alignItems:"center",gap:10}}>
          <span style={{fontSize:18}}>{mod.icon}</span>
          <div>
            <div style={{color:"#fff",fontFamily:"'Barlow Condensed',sans-serif",fontWeight:700,fontSize:14}}>{mod.label}</div>
            <div style={{color:"#224422",fontSize:10,letterSpacing:2}}>EMERGENCY EVACUATION & MUSTER · {playerRole.toUpperCase()}</div>
          </div>
          <div style={{marginLeft:"auto",display:"flex",gap:5}}>
            {MODULES.map((m,i)=><div key={m.id} style={{width:18,height:18,borderRadius:"50%",background:completed[m.id]?"#22CC66":i===modIdx?m.color:"#0a180a",border:`1px solid ${i===modIdx?m.color:"#0d1a0d"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:8,transition:"all 0.3s"}}>{completed[m.id]?"✓":m.icon}</div>)}
          </div>
        </div>
      </div>
      <div style={{flex:1,padding:"18px 20px",display:"flex",flexDirection:"column",maxWidth:700,width:"100%",margin:"0 auto",boxSizing:"border-box"}}>
        {phase==="slides"
          ?<SlideView slide={mod.slides[slideIdx]} color={mod.color} roleCtx={roleCtx} playerRole={playerRole} onNext={handleNext} onPrev={handlePrev} isFirst={slideIdx===0&&modIdx===0} isLast={slideIdx===mod.slides.length-1}/>
          :<QuizView mod={mod} onComplete={handleQuizDone}/>}
      </div>
    </div>
  );
}
