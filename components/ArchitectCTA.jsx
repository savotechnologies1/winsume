import { IconArrowRight } from "./Icons";

const RESOURCES = [
  { label: "Technical specifications", fmt: "PDF" },
  { label: "Shaft dimension drawings", fmt: "DWG" },
  { label: "Planning & traffic guide", fmt: "PDF" },
  { label: "Cabin finish library", fmt: "WEB" },
  { label: "Company brochure", fmt: "PDF" },
];

export default function ArchitectCTA() {
  return (
    <section id="architects" className="section section--dark" aria-labelledby="arch-title" data-dark="true">
      <div className="container architect">
        <div>
          <h2 id="arch-title" className="display-2" data-reveal>
            Built to Work With Your Vision
          </h2>
          <p className="copy" data-reveal style={{ "--reveal-delay": "0.08s" }}>
            If you are specifying a building, we would rather join at the drawing board than the
            site visit. Winsume works with architects, interior designers, builders and developers
            to configure vertical mobility early — shaft dimensions, headroom, pit depths, loads
            and traffic — so the lift is designed into the architecture, never fitted around it.
          </p>
          <p className="copy" data-reveal style={{ "--reveal-delay": "0.14s" }}>
            Our project team coordinates drawings, revisions and site schedules alongside your
            consultants, from concept through handover.
          </p>
          <div className="architect__ctas" data-reveal style={{ "--reveal-delay": "0.2s" }}>
            <a className="btn btn--bronze" href="#contact" data-track="cta-project-team">
              Talk to Our Project Team <IconArrowRight className="arrow" />
            </a>
            <a className="btn btn--ghost-light" href="/winsume/resources" data-track="cta-download-resources">
              Download Resources
            </a>
          </div>
        </div>

        <aside className="architect__panel" data-reveal style={{ "--reveal-delay": "0.15s" }} aria-label="Project resources">
          <h3>Project Resources</h3>
          <ul>
            {RESOURCES.map((r) => (
              <li key={r.label}>
                <span>{r.label}</span>
                <span className="fmt">{r.fmt}</span>
              </li>
            ))}
          </ul>
          <span className="pending-tag" style={{ marginTop: "1.2rem" }}>
            In preparation — [CLIENT TO CONFIRM]
          </span>
        </aside>
      </div>
    </section>
  );
}
