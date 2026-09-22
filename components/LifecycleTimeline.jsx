const PHASES = [
  { n: "01", t: "Consult", d: "We listen first — building, users, traffic, site constraints and aspirations." },
  { n: "02", t: "Design", d: "Configuration, capacity and cabin design developed around your architecture." },
  { n: "03", t: "Engineer", d: "Drawings, loads and component selection; the system is solved on paper before steel moves." },
  { n: "04", t: "Install", d: "Our supervised crews execute shaft set-out, installation, testing and handover." },
  { n: "05", t: "Maintain", d: "Preventive schedules and AMC keep the elevator at specification through its working life." },
  { n: "06", t: "Modernize", d: "When requirements age, the system is renewed — controller, drive, doors, cabin — around the same shaft." },
];

export default function LifecycleTimeline() {
  return (
    <section id="lifecycle" className="section section--paper2" aria-labelledby="lifecycle-title">
      <div className="container">
        <header className="sheet" data-reveal>
          <span className="sheet__rule" aria-hidden />
          <span className="sheet__title" id="lifecycle-title">
            The Lifecycle
          </span>
        </header>

        <h2 className="display-2" data-reveal style={{ maxWidth: "16ch" }}>
          With You at Every Level
        </h2>
        <p className="lead" data-reveal style={{ "--reveal-delay": "0.1s", marginTop: "1.2rem" }}>
          The relationship does not end at handover. From first consultation to modernization,
          one team stays accountable for the machine.
        </p>

        <div className="lifecycle__track" style={{ marginTop: "clamp(2.2rem, 5vw, 3.6rem)" }}>
          {PHASES.map((p, i) => (
            <div className="phase" key={p.n} style={{ "--reveal-delay": `${i * 0.12}s` }}>
              <span className="no">{p.n}</span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
