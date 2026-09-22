"use client";

import { useState } from "react";
import Image from "next/image";
import { buildingSolutions } from "@/lib/data";
import { IconArrowRight } from "./Icons";

export default function IndustrySolutions() {
  const [active, setActive] = useState(0);
  const current = buildingSolutions[active];

  return (
    <section
      id="solutions"
      className="section section--dark solutions"
      aria-labelledby="solutions-title"
      data-dark="true"
    >
      <div className="container">
        <header className="sheet" data-reveal>
          <span className="sheet__no">03</span>
          <span className="sheet__rule" aria-hidden />
          <span className="sheet__title" id="solutions-title">
            Building Solutions
          </span>
        </header>

        <div className="collection__head">
          <h2 className="display-2" data-reveal>
            Designed Around Your Building
          </h2>
          <p data-reveal style={{ "--reveal-delay": "0.1s" }} className="lead" >
            Products answer “what lift?”. Building solutions answer “what is right for my
            project?” — traffic, load, architecture and experience, in that order.
          </p>
        </div>

        <div className="solutions-stage" data-reveal aria-live="polite">
          {buildingSolutions.map((s, i) => (
            <Image
              key={s.id}
              className={i === active ? "is-active" : ""}
              src={`https://images.unsplash.com/${s.img}?w=1500&q=68&auto=format&fit=crop`}
              alt={`${s.name} — building solution imagery (placeholder)`}
              fill
              sizes="(min-width: 1020px) 55vw, 92vw"
              loading="lazy"
              aria-hidden={i !== active}
            />
          ))}
          <div className="solutions-stage__caption">
            <span className="mono" style={{ color: "var(--bronze-bright)" }}>
              {String(active + 1).padStart(2, "0")} — {current.name}
            </span>
            <p className="copy">{current.copy}</p>
            <p className="detail">{current.detail}</p>
          </div>
        </div>

        <div className="solutions-list">
          {buildingSolutions.map((s, i) => (
            <button
              key={s.id}
              className={`solutions-row${i === active ? " is-active" : ""}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => {
                setActive(i);
                document
                  .getElementById("solutions")
                  ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
              }}
              aria-current={i === active ? "true" : undefined}
              data-track={`solution-${s.id}`}
            >
              <span className="no">{String(i + 1).padStart(2, "0")}</span>
              <span className="name">{s.name}</span>
              <span className="go" aria-hidden>
                <IconArrowRight size={13} />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
