"use client";

import { useEffect, useState } from "react";
import { IconArrowUp, IconArrowDown } from "./Icons";

/* Elevator journey navigation — a fixed floor indicator that tracks scroll. */
const FLOORS = [
  { id: "discover", floor: "G", name: "Discover" },
  { id: "collection", floor: "2", name: "Collection" },
  { id: "solutions", floor: "3", name: "Building solutions" },
  { id: "design", floor: "4", name: "Cabin design" },
  { id: "engineering", floor: "5", name: "Engineering" },
  { id: "projects", floor: "6", name: "Projects" },
  { id: "service", floor: "7", name: "Service" },
  { id: "contact", floor: "8", name: "Contact" },
];

export default function FloorIndicator() {
  const [current, setCurrent] = useState("discover");
  const [dark, setDark] = useState(false);
  const [dir, setDir] = useState("down");

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setDir(y >= lastY ? "down" : "up");
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setCurrent(e.target.id);
            const sec = e.target;
            setDark(
              sec.classList.contains("section--dark") ||
                sec.dataset.dark === "true" ||
                !!sec.closest('[data-dark="true"]')
            );
          }
        }
      },
      { rootMargin: "-42% 0px -42% 0px" }
    );
    FLOORS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav className={`floor-rail${dark ? " is-dark" : ""}`} aria-label="Section navigation">
      <span className="floor-rail__dir" aria-hidden>
        {dir === "up" ? <IconArrowUp className="lit" /> : <IconArrowDown className="lit" />}
      </span>
      <div className="floor-rail__list">
        {FLOORS.map((f) => (
          <button
            key={f.id}
            className={current === f.id ? "is-current" : ""}
            aria-current={current === f.id ? "true" : undefined}
            title={f.name}
            aria-label={`Floor ${f.floor} — ${f.name}`}
            onClick={() => document.getElementById(f.id)?.scrollIntoView({ behavior: "smooth" })}
            data-track={`floor-nav-${f.id}`}
          >
            {f.floor}
          </button>
        ))}
      </div>
    </nav>
  );
}
