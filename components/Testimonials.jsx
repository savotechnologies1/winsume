"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/lib/data";
import { IconArrowRight } from "./Icons";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [out, setOut] = useState(false);
  const n = testimonials.length;

  const go = (next) => {
    setOut(true);
    setTimeout(() => {
      setI((next + n) % n);
      setOut(false);
    }, 350);
  };

  useEffect(() => {
    const t = setInterval(() => {
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) go(i + 1);
    }, 7000);
    return () => clearInterval(t);
  }, [i]);

  const item = testimonials[i];

  return (
    <section className="section section--dark" aria-labelledby="testimonials-title" data-dark="true">
      <div className="container">
        <h2 id="testimonials-title" className="sr-only" style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
          What our clients say
        </h2>

        <div className="testimonial" data-reveal>
          <span className="pending-tag">Placeholder — approved client quotes to be supplied [CLIENT TO CONFIRM]</span>

          <div className={`testimonial__fade${out ? " is-out" : ""}`} aria-live="polite">
            <blockquote>{item.quote}</blockquote>
            <div className="testimonial__attr">
              <span className="who">{item.name}</span>
              <span className="ctx">{item.context}</span>
            </div>
          </div>

          <div className="testimonial__nav">
            <button aria-label="Previous testimonial" onClick={() => go(i - 1)}>
              <span style={{ display: "inline-flex", rotate: "180deg" }}>
                <IconArrowRight size={13} />
              </span>
            </button>
            <div className="testimonial__dots" role="tablist" aria-label="Choose testimonial">
              {testimonials.map((t, idx) => (
                <button
                  key={idx}
                  aria-label={`Testimonial ${idx + 1}`}
                  aria-selected={idx === i}
                  className={idx === i ? "is-active" : ""}
                  onClick={() => idx !== i && go(idx)}
                />
              ))}
            </div>
            <button aria-label="Next testimonial" onClick={() => go(i + 1)}>
              <span style={{ display: "inline-flex", rotate: "-90deg" }}>
                <IconArrowRight size={13} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
