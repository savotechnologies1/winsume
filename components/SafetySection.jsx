import { SafetyIcon } from "./Icons";

const ITEMS = [
  { id: "passenger", t: "Passenger protection", d: "Cars specified with redundant suspension and braking philosophy — safety gear, buffers and over-travel protection as standard practice." },
  { id: "door", t: "Door safety", d: "Door operators with reopening protection, light curtains or sensitive edges so passengers never meet a closing door." },
  { id: "emergency", t: "Emergency systems", d: "Intercom/Alarm, automatic rescue devices where required, backup lighting and clear passenger communication." },
  { id: "components", t: "Quality components", d: "Drives, ropes and safety parts sourced from established component manufacturers, matched to duty and load." },
  { id: "installation", t: "Professional installation", d: "Our own supervised crews, alignment to measurement, testing and handover documentation before anyone rides." },
  { id: "maintenance", t: "Preventive maintenance", d: "Scheduled servicing under AMC — inspection, lubrication, adjustment and replacement before failure." },
  { id: "compliance", t: "Standards & compliance", d: "Installations follow applicable Indian and international elevator safety standards. Certification scope: [CLIENT TO CONFIRM]." },
  { id: "monitoring", t: "Ongoing monitoring", d: "Fault diagnostics and service records maintained across the elevator's life, informing repair and modernization decisions." },
];

export default function SafetySection() {
  return (
    <section id="safety" className="section" aria-labelledby="safety-title">
      <div className="container">
        <div className="safety__head">
          <div data-reveal>
            <h2 id="safety-title" className="display-2">
              Safety Isn&rsquo;t an Option. It&rsquo;s Engineered In.
            </h2>
          </div>
          <p data-reveal style={{ "--reveal-delay": "0.1s" }}>
            Every decision — component, installation practice, service interval — is taken as if
            our own families rode the car. That is the whole policy.
          </p>
        </div>

        <div className="safety-grid">
          {ITEMS.map((item, i) => (
            <div className="safety-item" key={item.id} data-reveal style={{ "--reveal-delay": `${(i % 4) * 0.06}s` }}>
              <SafetyIcon id={item.id} />
              <h3>{item.t}</h3>
              <p>{item.d}</p>
            </div>
          ))}
        </div>

        <p className="safety__note" data-reveal>
          Specific certifications and standard numbers will be listed only after verification by
          Winsume — [CLIENT TO CONFIRM].
        </p>
      </div>
    </section>
  );
}
