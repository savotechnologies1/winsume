import Image from "next/image";
import HeroVideo from "./HeroVideo";
import { IconArrowRight } from "./Icons";
import { contact } from "@/lib/data";

const HERO_FILM =
  "https://videos.pexels.com/video-files/3044827/3044827-hd_1920_1080_24fps.mp4"; // TEMPORARY FOOTAGE — replace with Winsume film

export default function Hero() {
  return (
    <section id="discover" className="hero" aria-label="Introduction">
      <div className="hero__media" data-parallax>
        {/* PLACEHOLDER IMAGE — serves as poster/base layer; replace with Winsume hero photography before production. */}
        <Image
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=2400&q=78&auto=format&fit=crop"
          alt="A private residence at dusk with warm interior light — the setting for a Winsume home elevator (placeholder image)"
          fill
          priority
          sizes="100vw"
        />
        {/* TEMPORARY FOOTAGE — modern atrium with moving elevators (Pexels stock).
            Replace with Winsume's own b-roll before production. UHD rendition available:
            https://videos.pexels.com/video-files/3044827/3044827-uhd_2560_1440_24fps.mp4 */}
        <HeroVideo src={HERO_FILM} />
      </div>
      <div className="hero__scrim" aria-hidden />

      <div className="hero__ticks" aria-hidden>
        <span className="lbl">FLOORS</span>
        <span className="ticks">
          <span className="tick" />
          <span className="tick" />
          <span className="tick" />
          <span className="tick" />
          <span className="tick" />
          <span className="tick" />
          <span className="tick" />
          <span className="tick" />
          <span className="tick" />
          <span className="tick" />
        </span>
        <span className="lbl">↑</span>
      </div>

      <div className="container hero__frame">
        <p className="mono hero__kicker" data-hero-reveal>
          <span className="rule" aria-hidden />
          Bespoke elevators · Indore, India · Est. 2018
        </p>

        <h1 data-hero-reveal style={{ "--reveal-delay": "0.12s" }}>
          <span className="reveal-line">
            <span style={{ "--reveal-delay": "0.12s" }}>Elevating Spaces.</span>
          </span>
          <span className="reveal-line">
            <span style={{ "--reveal-delay": "0.24s" }}>
              Engineering <em>Experiences.</em>
            </span>
          </span>
        </h1>

        <p className="hero__sub" data-hero-reveal style={{ "--reveal-delay": "0.4s" }}>
          Winsume designs, engineers and installs elevators around the buildings they serve and
          the people who ride them — from private villas to hospitals, hotels and towers.
        </p>

        <div className="hero__actions" data-hero-reveal style={{ "--reveal-delay": "0.55s" }}>
          <a className="btn btn--bronze" href="#collection" data-track="cta-explore-hero">
            Explore Our Elevators <IconArrowRight className="arrow" />
          </a>
          <a className="btn btn--ghost-light" href="#contact" data-track="cta-plan-hero">
            Plan Your Lift
          </a>
          <a
            className="text-link hero__expert"
            href={contact.phoneHref}
            data-track="cta-expert-hero"
          >
            Talk to an Expert
          </a>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden>
        <span className="lbl">Descend</span>
        <span className="shaft">
          <span className="car" />
        </span>
      </div>
    </section>
  );
}
