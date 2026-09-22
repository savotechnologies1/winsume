"use client";

import { useState } from "react";
import { cabinFinishes } from "@/lib/data";
import { IconArrowRight } from "./Icons";

/**
 * Cabin configurator — a one-point-perspective SVG cabin whose materials
 * update live from the finish library. Feels like configuring an interior,
 * not industrial machinery.
 */
export default function CabinConfigurator() {
  const [wall, setWall] = useState(cabinFinishes.walls[0]);
  const [floor, setFloor] = useState(cabinFinishes.floor[0]);
  const [ceiling, setCeiling] = useState(cabinFinishes.ceiling[0]);
  const [rail, setRail] = useState(cabinFinishes.handrail[1]);

  return (
    <section id="design" className="section section--paper2" aria-labelledby="cabin-title">
      <div className="container">
        <header className="sheet" data-reveal>
          <span className="sheet__no">04</span>
          <span className="sheet__rule" aria-hidden />
          <span className="sheet__title" id="cabin-title">
            Cabin Design
          </span>
        </header>

        <div className="cabin">
          <div data-reveal>
            <div className="cabin__stage">
              <svg viewBox="0 0 720 600" role="img" aria-label={`Elevator cabin preview with ${wall.name} walls, ${floor.name} floor and ${ceiling.name}`}>
                <defs>
                  <linearGradient id="g-wall" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor={wall.edge} />
                    <stop offset="0.5" stopColor={wall.from} />
                    <stop offset="1" stopColor={wall.to} />
                  </linearGradient>
                  <linearGradient id="g-floor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor={floor.to} />
                    <stop offset="1" stopColor={floor.from} />
                  </linearGradient>
                  <linearGradient id="g-ceil" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#101114" />
                    <stop offset="1" stopColor={ceiling.tint} />
                  </linearGradient>
                  <radialGradient id="g-glow" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0" stopColor={ceiling.glow} stopOpacity="0.85" />
                    <stop offset="1" stopColor={ceiling.glow} stopOpacity="0" />
                  </radialGradient>
                  <filter id="soft" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="7" />
                  </filter>
                </defs>

                {/* shell */}
                <rect x="0" y="0" width="720" height="600" fill="#101114" />

                {/* walls */}
                <polygon points="30,30 210,170 210,420 30,570" fill="url(#g-wall)" opacity="0.66" />
                <polygon points="690,30 510,170 510,420 690,570" fill="url(#g-wall)" opacity="0.86" />
                <rect x="210" y="170" width="300" height="250" fill="url(#g-wall)" />

                {/* back wall door seams */}
                <line x1="310" y1="170" x2="310" y2="420" stroke={wall.to} strokeWidth="2" opacity="0.7" />
                <line x1="410" y1="170" x2="410" y2="420" stroke={wall.to} strokeWidth="2" opacity="0.7" />
                <line x1="210" y1="170" x2="510" y2="170" stroke={wall.edge} strokeWidth="1.4" opacity="0.8" />

                {/* floor */}
                <polygon points="30,570 210,420 510,420 690,570" fill="url(#g-floor)" />
                <g stroke={floor.edge} strokeWidth="1" opacity="0.5">
                  <line x1="162" y1="570" x2="270" y2="420" />
                  <line x1="294" y1="570" x2="330" y2="420" />
                  <line x1="426" y1="570" x2="390" y2="420" />
                  <line x1="558" y1="570" x2="450" y2="420" />
                </g>

                {/* ceiling */}
                <polygon points="30,30 210,170 510,170 690,30" fill="url(#g-ceil)" />
                <ellipse cx="360" cy="128" rx="165" ry="58" fill="url(#g-glow)" />
                {ceiling.id === "cove" && (
                  <polyline
                    points="90,52 214,180 506,180 630,52"
                    fill="none"
                    stroke={ceiling.glow}
                    strokeWidth="3"
                    filter="url(#soft)"
                    opacity="0.9"
                  />
                )}
                {ceiling.id === "matrix" && (
                  <g fill={ceiling.glow} opacity="0.95">
                    {[-1, 0, 1].map((cx) =>
                      [-1, 0, 1].map((cy) => (
                        <circle
                          key={`${cx}-${cy}`}
                          cx={360 + cx * 62}
                          cy={118 + cy * 26}
                          r="4.5"
                          filter="url(#soft)"
                        />
                      ))
                    )}
                  </g>
                )}
                {ceiling.id === "downlights" && (
                  <g fill={ceiling.glow}>
                    <circle cx="290" cy="126" r="7" filter="url(#soft)" />
                    <circle cx="360" cy="116" r="7" filter="url(#soft)" />
                    <circle cx="430" cy="126" r="7" filter="url(#soft)" />
                  </g>
                )}

                {/* handrails */}
                <polygon points={`60,424 218,350 218,360 60,440`} fill={rail.color} opacity="0.95" />
                <polygon points={`660,424 502,350 502,360 660,440`} fill={rail.color} opacity="0.95" />
                <line x1="60" y1="444" x2="218" y2="364" stroke="#0f1013" strokeWidth="3" opacity="0.35" />
                <line x1="660" y1="444" x2="502" y2="364" stroke="#0f1013" strokeWidth="3" opacity="0.35" />

                {/* control panel on right wall */}
                <polygon points="645,300 622,312 622,372 645,358" fill="#1b1d21" stroke={rail.color} strokeWidth="1" />
                <rect x="627.5" y="322" width="12" height="10" fill={ceiling.glow} opacity="0.75" />
                <circle cx="633" cy="345" r="2.6" fill={rail.color} />
                <circle cx="633" cy="354" r="2.6" fill="#5a5c61" />

                {/* front frame — floor-tick corners */}
                <g stroke="#A98E5F" strokeWidth="2" fill="none">
                  <path d="M30 30 h44 M30 30 v44 M690 30 h-44 M690 30 v44 M30 570 h44 M30 570 v-44 M690 570 h-44 M690 570 v-44" />
                </g>
                <rect x="30" y="30" width="660" height="540" fill="none" stroke="#F4F1EB" strokeOpacity="0.14" strokeWidth="1" />
              </svg>

              <span className="cabin__stage-tag">Cabin 01 — Perspective Preview</span>
              <span className="cabin__spec">
                Walls <b>{wall.name}</b>
                <br />
                Floor <b>{floor.name}</b>
                <br />
                Ceiling <b>{ceiling.name}</b>
                <br />
                Handrail <b>{rail.name}</b>
              </span>
            </div>
            <p className="mono" style={{ color: "var(--stone-500)", marginTop: "0.7rem" }}>
              Illustrative configurator — finishes indicative; final materials sampled on site
            </p>
          </div>

          <div data-reveal style={{ "--reveal-delay": "0.12s" }}>
            <h2 className="display-2">Your Elevator. Your Architecture. Your Signature.</h2>
            <p className="cabin__copy">
              A Winsume cabin is specified the way an interior is — walls, floor, ceiling light,
              handrail and controls chosen together, against your palette, in your home or
              building.
            </p>

            <div className="swatch-groups">
              <fieldset>
                <div className="swatch-group__head">
                  <label>Wall finish</label>
                  <span className="val">{wall.name}</span>
                </div>
                <div className="swatches">
                  {cabinFinishes.walls.map((f) => (
                    <button
                      key={f.id}
                      className="swatch"
                      aria-pressed={wall.id === f.id}
                      title={f.name}
                      aria-label={`Wall finish: ${f.name}`}
                      onClick={() => setWall(f)}
                      style={{ background: `linear-gradient(135deg, ${f.from}, ${f.to})` }}
                    />
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <div className="swatch-group__head">
                  <label>Floor</label>
                  <span className="val">{floor.name}</span>
                </div>
                <div className="swatches">
                  {cabinFinishes.floor.map((f) => (
                    <button
                      key={f.id}
                      className="swatch"
                      aria-pressed={floor.id === f.id}
                      title={f.name}
                      aria-label={`Floor: ${f.name}`}
                      onClick={() => setFloor(f)}
                      style={{ background: `linear-gradient(135deg, ${f.from}, ${f.to})` }}
                    />
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <div className="swatch-group__head">
                  <label>Ceiling &amp; lighting</label>
                  <span className="val">{ceiling.name}</span>
                </div>
                <div className="swatches">
                  {cabinFinishes.ceiling.map((f) => (
                    <button
                      key={f.id}
                      className="swatch swatch--flat"
                      aria-pressed={ceiling.id === f.id}
                      title={f.name}
                      aria-label={`Ceiling: ${f.name}`}
                      onClick={() => setCeiling(f)}
                      style={{ "--swatch-color": f.glow, background: f.glow }}
                    />
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <div className="swatch-group__head">
                  <label>Handrail</label>
                  <span className="val">{rail.name}</span>
                </div>
                <div className="swatches">
                  {cabinFinishes.handrail.map((f) => (
                    <button
                      key={f.id}
                      className="swatch swatch--flat"
                      aria-pressed={rail.id === f.id}
                      title={f.name}
                      aria-label={`Handrail: ${f.name}`}
                      onClick={() => setRail(f)}
                      style={{ "--swatch-color": f.color, background: f.color }}
                    />
                  ))}
                </div>
              </fieldset>
            </div>

            <div className="cabin__ctas">
              <a className="btn btn--primary" href="/winsume/design/materials" data-track="cta-cabin-design">
                Explore Cabin Design <IconArrowRight className="arrow" />
              </a>
              <a className="btn btn--ghost" href="#contact" data-track="cta-design-with-winsume">
                Design With Winsume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
