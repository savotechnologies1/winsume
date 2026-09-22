"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";

function CountUp({ target, suffix }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(target);
      return;
    }
    let raf;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const dur = 1600;
        const tick = (t) => {
          const p = Math.min((t - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 4);
          setN(Math.round(eased * target));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target]);

  return (
    <span className="stat__value" ref={ref}>
      {n}
      {suffix && <span className="suffix">{suffix}</span>}
    </span>
  );
}

export default function StatsStrip() {
  return (
    <section className="section" aria-label="Winsume in numbers" style={{ paddingTop: 0 }}>
      <div className="container stats">
        <div className="stats__grid">
          {stats.map((s) => (
            <div className="stat" key={s.label} data-reveal>
              {s.verified ? (
                <CountUp target={parseInt(s.value, 10) || 0} suffix={s.suffix} />
              ) : (
                <span className="stat__value">
                  {s.value}
                  {s.suffix && <span className="suffix">{s.suffix}</span>}
                </span>
              )}
              <p className="stat__label">{s.label}</p>
              <p className="stat__note">
                {s.verified ? s.note : "Figure pending verification"}
              </p>
            </div>
          ))}
        </div>
        <p className="stats__footnote">
          <span className="dash" aria-hidden />
          Bracketed figures are intentional placeholders — Winsume to confirm before production
          launch. Nothing on this page invents a number.
        </p>
      </div>
    </section>
  );
}
