"use client";

import { useState } from "react";
import { finderOptions, recommend } from "@/lib/data";
import { IconArrowRight } from "./Icons";

export default function SolutionFinder() {
  const [form, setForm] = useState({ building: "", requirement: "", floors: "", capacity: "" });
  const [results, setResults] = useState(null);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const recs = recommend(form);
    setResults(recs.length ? recs : recommend({ building: "Other", requirement: form.requirement || "New lift", capacity: form.capacity }));
  };

  return (
    <section id="finder" className="finder" aria-labelledby="finder-title">
      <div className="container">
        <div className="finder__head">
          <h2 id="finder-title">Find the Right Lift for Your Space</h2>
          <p className="hint">Four questions · Instant direction · No jargon</p>
        </div>

        <form className="finder__form" onSubmit={submit} data-track="solution-finder">
          <div className="finder__field">
            <label htmlFor="f-building">Building type</label>
            <select id="f-building" required value={form.building} onChange={set("building")}>
              <option value="" disabled>
                Select
              </option>
              {finderOptions.building.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
          <div className="finder__field">
            <label htmlFor="f-req">Requirement</label>
            <select id="f-req" required value={form.requirement} onChange={set("requirement")}>
              <option value="" disabled>
                Select
              </option>
              {finderOptions.requirement.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
          <div className="finder__field">
            <label htmlFor="f-floors">Number of floors</label>
            <select id="f-floors" required value={form.floors} onChange={set("floors")}>
              <option value="" disabled>
                Select
              </option>
              {finderOptions.floors.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
          <div className="finder__field">
            <label htmlFor="f-cap">Capacity</label>
            <select id="f-cap" required value={form.capacity} onChange={set("capacity")}>
              <option value="" disabled>
                Select
              </option>
              {finderOptions.capacity.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="finder__field finder__submit"
            data-track="solution-finder-submit"
          >
            Find My Solution
          </button>
        </form>

        <div className={`finder__results${results ? " is-open" : ""}`} aria-live="polite">
          <div>
            {results && (
              <div className="finder__cards">
                {results.map((r) => (
                  <div className="finder__card" key={r.name}>
                    <span className="cat">Recommended</span>
                    <h3>{r.name}</h3>
                    <p>{r.why}</p>
                    <a className="text-link" href={r.href}>
                      Explore <IconArrowRight className="arrow" size={13} />
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
