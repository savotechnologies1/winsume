"use client";

import { useState } from "react";
import Image from "next/image";
import { projects, projectFilters } from "@/lib/data";
import { IconArrowRight } from "./Icons";

export default function ProjectShowcase() {
  const [filter, setFilter] = useState("All");
  const visible = projects.filter((p) => filter === "All" || p.type === filter);

  return (
    <section id="projects" className="section section--dark" aria-labelledby="projects-title" data-dark="true">
      <div className="container">
        <header className="sheet" data-reveal>
          <span className="sheet__no">06</span>
          <span className="sheet__rule" aria-hidden />
          <span className="sheet__title" id="projects-title">
            Featured Projects
          </span>
        </header>

        <div className="projects__head">
          <h2 className="display-2" data-reveal>
            Projects That Move People — and Spaces Forward
          </h2>
          <div className="project-filters" role="group" aria-label="Filter projects by building type" data-reveal>
            {projectFilters.map((f) => (
              <button
                key={f}
                className={filter === f ? "is-active" : ""}
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
                data-track={`projects-filter-${f.toLowerCase()}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {visible.map((p, i) => (
            <a
              key={p.id}
              className="project-card"
              href="/winsume/projects"
              hidden={false}
              data-reveal
              style={{ "--reveal-delay": `${(i % 2) * 0.08}s` }}
              data-track={`project-${p.id}`}
            >
              <Image
                src={`https://images.unsplash.com/${p.img}?w=1300&q=68&auto=format&fit=crop`}
                alt={`${p.name}, ${p.location} — ${p.type} project (${p.pending ? "pending verification" : ""})`}
                fill
                sizes="(min-width: 760px) 50vw, 92vw"
                loading="lazy"
              />
              <span className="project-card__spacer" aria-hidden />
              <span className="project-card__meta">
                <span>
                  <h3>{p.name}</h3>
                  <span className="loc">{p.location}</span>
                </span>
                <span className="facts">
                  {p.type} · {p.lift}
                  <br />
                  {p.scope}
                  <br />
                  <span className="pending-tag" style={{ marginTop: "0.5rem" }}>
                    [CLIENT TO CONFIRM]
                  </span>
                </span>
              </span>
            </a>
          ))}
        </div>

        <p className="mono" style={{ color: "var(--stone-500)", marginTop: "1.4rem" }} data-reveal>
          Project details shown are referenced from winsumelift.com and await client confirmation —
          verified scope, capacity and completion data to be published here.
        </p>

        <div className="projects__cta" data-reveal>
          <a className="btn btn--ghost-light" href="/winsume/projects" data-track="cta-all-projects">
            View All Projects <IconArrowRight className="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
