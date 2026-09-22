import Image from "next/image";
import { IconArrowRight } from "./Icons";

export default function IntroStatement() {
  return (
    <section id="winsume" className="section" aria-labelledby="intro-title">
      <div className="container intro">
        <div data-reveal>
          <p className="intro__eyebrow">Moving India, Beautifully</p>
          <h2 id="intro-title">Where Engineering Meets Exceptional Design</h2>
          <p className="copy">
            Since 2018, Winsume Lift India has designed and installed bespoke elevators for homes,
            buildings and institutions that expect more than transportation. We believe vertical
            movement should be an experience — quiet, precise, safe and beautiful to look at.
          </p>
          <p className="copy">
            Our designers, engineers and installation teams work as one studio: the cabin is
            treated like an interior, the shaft like architecture, and the drive system like the
            precision machine it is.
          </p>
          <p className="intro__cta">
            <a className="text-link" href="/winsume/about" data-track="cta-discover-winsume">
              Discover Winsume <IconArrowRight className="arrow" />
            </a>
          </p>
        </div>

        <figure className="intro__figure doors" data-reveal style={{ "--reveal-delay": "0.15s" }}>
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1100&q=72&auto=format&fit=crop"
            alt="Considered modern interior with natural materials — the register Winsume cabins are designed to match (placeholder image)"
            width={1100}
            height={1265}
            sizes="(min-width: 980px) 40vw, 92vw"
          />
          <figcaption>Fig. 01 — Interiors we design against · Placeholder, replace with Winsume cabin photography</figcaption>
        </figure>
      </div>
    </section>
  );
}
