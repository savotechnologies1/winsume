import Image from "next/image";
import { contact } from "@/lib/data";
import { IconArrowRight, IconPhone } from "./Icons";

const SERVICES = [
  "Preventive maintenance",
  "Annual maintenance contracts (AMC)",
  "Scheduled servicing",
  "Repair support",
  "Component inspection",
  "Modernization recommendations",
];

export default function MaintenanceSection() {
  return (
    <section id="service" className="section" aria-labelledby="service-title">
      <div className="container maint">
        <header className="sheet" data-reveal>
          <span className="sheet__no">07</span>
          <span className="sheet__rule" aria-hidden />
          <span className="sheet__title">Service &amp; Support</span>
        </header>
        <figure className="maint__figure" data-reveal>
          <div className="doors" style={{ position: "relative", height: "100%" }}>
            <Image
              src="https://images.unsplash.com/photo-1772721559246-286e6d986d73?w=1200&q=70&auto=format&fit=crop"
              alt="Elevator equipment and service — imagery carried over from the current winsumelift.com (placeholder)"
              fill
              sizes="(min-width: 960px) 45vw, 92vw"
              loading="lazy"
            />
          </div>
          <figcaption className="badge">
            <span className="t">Service Desk</span>
            <a href={contact.phoneHref} data-track="cta-call-service">
              <IconPhone size={14} /> {contact.phoneDisplay}
            </a>
            <span style={{ fontSize: "0.78rem", color: "var(--stone-400)" }}>
              {contact.hours} [CLIENT TO CONFIRM]
            </span>
          </figcaption>
        </figure>

        <div data-reveal style={{ "--reveal-delay": "0.1s" }}>
          <h2 id="service-title" className="display-2">
            Performance You Can Depend On
          </h2>
          <p className="copy">
            An elevator earns trust over decades, not on installation day. Our maintenance
            programs keep Winsume lifts — and lifts we inherit — at specification through their
            working life.
          </p>
          <ul className="maint__list">
            {SERVICES.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <div className="maint__ctas">
            <a className="btn btn--primary" href="#contact" data-track="cta-request-service">
              Request Service <IconArrowRight className="arrow" />
            </a>
            <a className="btn btn--ghost" href="/winsume/services/maintenance" data-track="cta-explore-maintenance">
              Explore Maintenance
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
