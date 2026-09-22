"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { searchIndex } from "@/lib/data";
import { IconSearch, IconClose, IconArrowRight } from "./Icons";

const norm = (s) => s.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();

function levenshtein(a, b) {
  if (Math.abs(a.length - b.length) > 2) return 3;
  const m = a.length, n = b.length;
  const d = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
  for (let j = 1; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[m][n];
}

/** Typo-tolerant token match with score. */
function score(entry, query) {
  const label = norm(entry.label);
  const keys = norm(entry.keys);
  const q = norm(query);
  if (!q) return 0;
  if (label.startsWith(q)) return 100;
  if (label.includes(q)) return 80;
  if (keys.includes(q)) return 60;
  const tokens = q.split(" ");
  let tokScore = 0;
  for (const t of tokens) {
    if (t.length < 2) continue;
    if (label.includes(t) || keys.includes(t)) {
      tokScore += 40;
      continue;
    }
    // typo tolerance: match token against label words within edit distance 2
    const words = label.split(" ").concat(keys.split(" "));
    if (t.length >= 4 && words.some((w) => w.length >= 4 && levenshtein(t, w) <= 2)) tokScore += 25;
  }
  return tokScore;
}

function Highlight({ label, query }) {
  const q = norm(query);
  if (!q) return label;
  const idx = norm(label).indexOf(q);
  if (idx < 0) return label;
  return (
    <>
      {label.slice(0, idx)}
      <mark>{label.slice(idx, idx + q.length)}</mark>
      {label.slice(idx + q.length)}
    </>
  );
}

const GROUP_ORDER = ["Product", "Solution", "Service", "Resource", "Insight", "Project"];

export default function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const open = useCallback(() => {
    setIsOpen(true);
    setQuery("");
    setActive(0);
  }, []);

  useEffect(() => {
    const onOpen = () => open();
    const onKey = (e) => {
      if (e.key === "/" && !isOpen) {
        const tag = document.activeElement?.tagName;
        if (tag !== "INPUT" && tag !== "TEXTAREA" && tag !== "SELECT") {
          e.preventDefault();
          open();
        }
      }
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("ws:search-open", onOpen);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("ws:search-open", onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, open]);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      requestAnimationFrame(() => inputRef.current?.focus());
    } else {
      document.documentElement.style.overflow = "";
    }
  }, [isOpen]);

  const results = useMemo(() => {
    if (!norm(query)) return [];
    return searchIndex
      .map((entry) => ({ entry, s: score(entry, query) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 12)
      .map((r) => r.entry);
  }, [query]);

  const grouped = useMemo(() => {
    const g = new Map();
    for (const r of results) {
      if (!g.has(r.type)) g.set(r.type, []);
      g.get(r.type).push(r);
    }
    return GROUP_ORDER.filter((t) => g.has(t)).map((t) => [t, g.get(t)]);
  }, [results]);

  const flat = grouped.flatMap(([, items]) => items);

  const onInputKey = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, flat.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter" && flat[active]) {
      window.location.href = flat[active].href;
    }
  };

  useEffect(() => {
    listRef.current?.querySelector(".is-active")?.scrollIntoView({ block: "nearest" });
  }, [active]);

  if (!isOpen) return null;

  return (
    <div
      className="search-overlay is-open"
      onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Search Winsume"
    >
      <div className="search-panel">
        <div className="search-head">
          <IconSearch size={20} />
          <input
            ref={inputRef}
            type="search"
            placeholder='Try "home lift", "hospital elevator", "MRL", "maintenance"…'
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={onInputKey}
            aria-label="Search products, solutions, services and resources"
          />
          <span className="search-kbd">ESC TO CLOSE</span>
          <button className="icon-btn" aria-label="Close search" onClick={() => setIsOpen(false)}>
            <IconClose size={16} />
          </button>
        </div>
        <div className="search-body" ref={listRef} role="listbox" aria-label="Search results">
          {query && flat.length === 0 && (
            <p className="search-empty">
              No matches for “{query}”. Try a broader term like <code>home lift</code> or <code>goods lift</code>, or{" "}
              <a href="/winsume#contact" style={{ color: "var(--bronze-bright)" }} onClick={() => setIsOpen(false)}>
                talk to our team
              </a>
              .
            </p>
          )}
          {!query && (
            <p className="search-empty">
              Search lift types, building solutions, services, projects and resources.
              <br />
              Press <code>/</code> anywhere on the site to open search.
            </p>
          )}
          {grouped.map(([type, items]) => (
            <div key={type}>
              <p className="search-group">{type}</p>
              {items.map((item) => {
                const idx = flat.indexOf(item);
                return (
                  <a
                    key={`${type}-${item.label}`}
                    href={item.href}
                    className={`search-item${idx === active ? " is-active" : ""}`}
                    role="option"
                    aria-selected={idx === active}
                    onMouseEnter={() => setActive(idx)}
                    data-track={`search-result-${type.toLowerCase()}`}
                  >
                    <span>
                      <Highlight label={item.label} query={query} />
                    </span>
                    <span className="type">
                      {type} <IconArrowRight size={10} />
                    </span>
                  </a>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
