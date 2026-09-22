const SPECS = [
  {
    t: "Smooth movement & ride comfort",
    d: "Drive and levelling tuned per installation so starts, runs and stops feel deliberate — not abrupt.",
  },
  {
    t: "Intelligent controls",
    d: "Modern controllers with diagnostic capabilities, configurable access and smart dispatch options for busier buildings.",
  },
  {
    t: "Space optimisation",
    d: "Machine-room-less and hydraulic configurations that return shaft volume and headroom to the building.",
  },
  {
    t: "Reliable componentry",
    d: "Drives, door operators, ropes and safety components sourced from established manufacturers, specified per duty.",
  },
  {
    t: "Safety systems",
    d: "Overspeed governors, safety gears, door protection and buffers — engineered as a system, inspected as a ritual.",
  },
  {
    t: "Precision installation",
    d: "Rail alignment, pit and headroom set-outs and door ironwork executed by our own supervised crews.",
  },
];

export default function EngineeringStory() {
  return (
    <section
      id="engineering"
      className="section section--dark engineering"
      aria-labelledby="eng-title"
      data-dark="true"
    >
      <div className="container">
        <header className="sheet" data-reveal>
          <span className="sheet__no">05</span>
          <span className="sheet__rule" aria-hidden />
          <span className="sheet__title" id="eng-title">
            Engineering
          </span>
        </header>

        <div className="engineering__grid">
          <div>
            <h2 className="display-2" data-reveal>
              Precision Behind Every Journey
            </h2>
            <p className="lead" data-reveal style={{ "--reveal-delay": "0.1s" }}>
              An elevator is a building&rsquo;s most-used machine. Ours are engineered as systems —
              drive, guidance, suspension, safety and service access designed together, installed
              to measurement, and maintained on schedule.
            </p>

            <div className="spec-list">
              {SPECS.map((s, i) => (
                <div className="spec-item" key={s.t} data-reveal style={{ "--reveal-delay": `${i * 0.05}s` }}>
                  <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{s.t}</h3>
                    <p>{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="engineering__diagram" data-reveal style={{ "--reveal-delay": "0.15s" }}>
            <svg viewBox="0 0 560 640" role="img" aria-label="Schematic elevation of a machine-room-less elevator: traction machine and sheave in the headroom, car and counterweight suspended on ropes between guide rails, governor and buffers shown.">
              <g stroke="#F4F1EB" strokeOpacity="0.9" strokeWidth="1" fill="none">
                {/* shaft */}
                <rect x="150" y="30" width="260" height="580" />
                {/* guide rails */}
                <line x1="168" y1="30" x2="168" y2="610" strokeOpacity="0.4" />
                <line x1="392" y1="30" x2="392" y2="610" strokeOpacity="0.4" />
                {/* floor lines */}
                <g strokeOpacity="0.22" strokeDasharray="3 6">
                  <line x1="150" y1="120" x2="410" y2="120" />
                  <line x1="150" y1="215" x2="410" y2="215" />
                  <line x1="150" y1="310" x2="410" y2="310" />
                  <line x1="150" y1="405" x2="410" y2="405" />
                  <line x1="150" y1="500" x2="410" y2="500" />
                </g>
              </g>

              {/* machine + sheave (MRL headroom) */}
              <g stroke="#A98E5F" strokeWidth="1.4" fill="none">
                <rect x="205" y="36" width="150" height="38" />
                <circle cx="280" cy="104" r="24" />
                <circle cx="280" cy="104" r="3" fill="#A98E5F" />
              </g>

              {/* ropes */}
              <g stroke="#F4F1EB" strokeOpacity="0.75" strokeWidth="1">
                <line x1="262" y1="104" x2="262" y2="200" />
                <line x1="298" y1="104" x2="298" y2="330" />
              </g>

              {/* counterweight */}
              <g stroke="#F4F1EB" strokeWidth="1.2" fill="none">
                <rect x="222" y="200" width="80" height="104" />
                <line x1="222" y1="200" x2="302" y2="304" strokeOpacity="0.5" />
                <line x1="302" y1="200" x2="222" y2="304" strokeOpacity="0.5" />
              </g>

              {/* car */}
              <g stroke="#A98E5F" strokeWidth="1.8" fill="none">
                <rect x="205" y="330" width="150" height="180" />
                <line x1="205" y1="510" x2="355" y2="510" />
                <line x1="280" y1="330" x2="280" y2="360" strokeOpacity="0.6" />
              </g>

              {/* governor */}
              <g stroke="#F4F1EB" strokeWidth="1" fill="none" strokeOpacity="0.8">
                <circle cx="446" cy="60" r="13" />
                <line x1="410" y1="60" x2="433" y2="60" />
                <line x1="446" y1="73" x2="446" y2="330" strokeDasharray="2 4" strokeOpacity="0.45" />
              </g>

              {/* buffers */}
              <g stroke="#A98E5F" strokeWidth="1.4" fill="none">
                <path d="M235 585 v18 M235 603 h-14 M235 603 h14 M235 595 h10" />
                <path d="M325 585 v18 M325 603 h-14 M325 603 h14 M325 595 h-10" />
              </g>

              {/* callouts */}
              <g fontFamily="var(--font-plex-mono), monospace" fontSize="9.5" letterSpacing="1.4" fill="#A6A39A">
                {/* left callouts */}
                <g>
                  <line x1="130" y1="55" x2="205" y2="55" stroke="#A98E5F" strokeWidth="0.8" />
                  <circle cx="130" cy="55" r="1.8" fill="#A98E5F" stroke="none" />
                  <text x="124" y="58" textAnchor="end">TRACTION MACHINE · MRL</text>

                  <line x1="130" y1="104" x2="256" y2="104" stroke="#A98E5F" strokeWidth="0.8" />
                  <circle cx="130" cy="104" r="1.8" fill="#A98E5F" stroke="none" />
                  <text x="124" y="107" textAnchor="end">TRACTION SHEAVE</text>

                  <line x1="130" y1="252" x2="222" y2="252" stroke="#A98E5F" strokeWidth="0.8" />
                  <circle cx="130" cy="252" r="1.8" fill="#A98E5F" stroke="none" />
                  <text x="124" y="255" textAnchor="end">COUNTERWEIGHT</text>

                  <line x1="130" y1="168" x2="168" y2="168" stroke="#A98E5F" strokeWidth="0.8" />
                  <circle cx="130" cy="168" r="1.8" fill="#A98E5F" stroke="none" />
                  <text x="124" y="171" textAnchor="end">GUIDE RAIL</text>
                </g>
                {/* right callouts */}
                <g>
                  <line x1="462" y1="60" x2="460" y2="60" stroke="none" />
                  <text x="466" y="63">OVERSPEED GOVERNOR</text>

                  <line x1="425" y1="420" x2="355" y2="420" stroke="#A98E5F" strokeWidth="0.8" />
                  <circle cx="425" cy="420" r="1.8" fill="#A98E5F" stroke="none" />
                  <text x="431" y="423">CAR · FINISH-MATCHED</text>

                  <line x1="425" y1="596" x2="335" y2="596" stroke="#A98E5F" strokeWidth="0.8" />
                  <circle cx="425" cy="596" r="1.8" fill="#A98E5F" stroke="none" />
                  <text x="431" y="599">BUFFERS · PIT</text>

                  <line x1="425" y1="120" x2="410" y2="120" stroke="#A98E5F" strokeWidth="0.8" />
                  <circle cx="425" cy="120" r="1.8" fill="#A98E5F" stroke="none" />
                  <text x="431" y="123">FLOOR LINES</text>
                </g>
              </g>
            </svg>
            <p className="mono" style={{ color: "var(--stone-500)", marginTop: "0.8rem" }}>
              Fig. 02 — MRL traction schematic, elevation · Illustrative, not a dimensioned drawing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
