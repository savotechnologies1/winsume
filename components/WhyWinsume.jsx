import { pillars } from "@/lib/data";

export default function WhyWinsume() {
  return (
    <section id="why" className="section" aria-labelledby="why-title">
      <div className="container">
        <header className="sheet" data-reveal>
          <span className="sheet__rule" aria-hidden />
          <span className="sheet__title" id="why-title">
            Why Winsume
          </span>
        </header>

        <div className="pillars">
          {pillars.map((p, i) => (
            <div className="pillar" key={p.title} data-reveal style={{ "--reveal-delay": `${i * 0.06}s` }}>
              <h3>{p.title}</h3>
              <p>{p.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
