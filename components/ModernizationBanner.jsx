import Image from "next/image";
import { IconArrowRight } from "./Icons";

const BENEFITS = [
  "Improved reliability — ageing components replaced, not nursed",
  "Updated aesthetics — a new cabin and finishes over the same shaft",
  "Enhanced safety — current door operators, controls and protection",
  "Improved performance — smoother rides and more precise levelling",
  "Better experience — light, sound and comfort brought up to date",
];

export default function ModernizationBanner() {
  return (
    <section id="modernization" className="section" aria-labelledby="modern-title">
      <div className="container">
        <div className="modern" data-reveal>
          <div className="modern__media doors">
            <Image
              src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=1300&q=70&auto=format&fit=crop"
              alt="Existing architecture undergoing renewal — placeholder image for modernization"
              fill
              sizes="(min-width: 920px) 45vw, 92vw"
              loading="lazy"
            />
          </div>
          <div className="modern__body">
            <h2 id="modern-title">Give Your Existing Elevator a New Future</h2>
            <p>
              Most buildings outlive their lifts — not the other way round. Modernization renews
              the systems inside your existing shaft: controller, drive, door operator, ropes and
              cabin, with far less disruption than a full replacement.
            </p>
            <ul className="modern__list">
              {BENEFITS.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="modern__ctas">
              <a className="btn btn--primary" href="/winsume/services/modernization" data-track="cta-modernization">
                Explore Modernization <IconArrowRight className="arrow" />
              </a>
              <a className="btn btn--ghost" href="#contact" data-track="cta-modernization-assessment">
                Request an Assessment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
