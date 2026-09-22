"use client";

import { useEffect, useRef, useState } from "react";
import { nav, contact } from "@/lib/data";
import {
  IconSearch,
  IconBurger,
  IconClose,
  IconChevron,
  IconPhone,
  IconWhatsApp,
  IconArrowRight,
} from "./Icons";

function BrandMark({ size = 34 }) {
  return (
    <svg className="brand__mark" width={size} height={size} viewBox="0 0 64 64" aria-hidden>
      <rect width="64" height="64" fill="#141619" />
      <rect x="4.5" y="4.5" width="55" height="55" fill="none" stroke="#A98E5F" strokeWidth="2" />
      <path
        d="M14 20 L23 44 L32 26 L41 44 L50 20"
        fill="none"
        stroke="#F4F1EB"
        strokeWidth="4"
        strokeLinecap="square"
      />
      <path d="M32 14v6M29.5 17.5 32 20l2.5-2.5" stroke="#A98E5F" strokeWidth="2" fill="none" />
    </svg>
  );
}

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(null); // nav item id
  const [drawer, setDrawer] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = drawer ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [drawer]);

  const megaItems = ["products", "solutions"];
  const dropItems = ["services", "design", "projects", "about", "resources"];

  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 180);
  };
  const openNow = (id) => {
    clearTimeout(closeTimer.current);
    setOpen(id);
  };

  const openSearch = () => window.dispatchEvent(new CustomEvent("ws:search-open"));

  return (
    <>
      <header className={`site-header${solid || open ? " is-solid" : ""}`}>
        <div className="util-bar">
          <div className="container util-bar__inner">
            <nav className="util-bar__links" aria-label="Utility">
              <a href={contact.phoneHref} data-track="utility-call">
                Customer Support
              </a>
              <span className="sep" aria-hidden />
              <a href="/winsume#service" data-track="utility-service">
                Service Request
              </a>
              <span className="sep" aria-hidden />
              <a href="/winsume/resources/brochures" data-track="utility-downloads">
                Downloads
              </a>
              <span className="sep" aria-hidden />
              <a href="/winsume#contact" data-track="utility-contact">
                Contact
              </a>
            </nav>
            <div className="util-bar__links">
              <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
              <span className="sep" aria-hidden />
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          </div>
        </div>

        <div className="main-bar">
          <div className="container main-bar__inner">
            <a href="/winsume" className="brand" aria-label="Winsume Lift India — home">
              <BrandMark />
              <span>
                <span className="brand__name">WINSUME</span>
                <span className="brand__sub">Lift India</span>
              </span>
            </a>

            <nav aria-label="Primary">
              <ul className="primary-nav" style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {megaItems.map((key) => {
                  const item = nav[key];
                  const isOpen = open === key;
                  return (
                    <li key={key}>
                      <button
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        onClick={() => setOpen(isOpen ? null : key)}
                        onMouseEnter={() => openNow(key)}
                        onMouseLeave={scheduleClose}
                      >
                        {item.label}
                        <IconChevron className="nav-caret" />
                      </button>
                      <div
                        className={`mega${isOpen ? " is-open" : ""}`}
                        onMouseEnter={() => openNow(key)}
                        onMouseLeave={scheduleClose}
                      >
                        <div className="container mega__inner">
                          {item.groups?.map((g) => (
                            <div className="mega__col" key={g.heading}>
                              <h3>{g.heading}</h3>
                              <ul>
                                {g.links.map((l) => (
                                  <li key={l.label}>
                                    <a className={l.strong ? "strong" : ""} href={l.href}>
                                      {l.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          {!item.groups && item.links && (
                            <div className="mega__col mega__col--links">
                              <h3>{item.label}</h3>
                              <ul>
                                {item.links.map((l) => (
                                  <li key={l.label}>
                                    <a className={l.strong ? "strong" : ""} href={l.href}>
                                      {l.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          {item.featured && (
                            <a className="mega__featured" href={item.featured.href}>
                              <div className="mega__featured-img">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={`https://images.unsplash.com/${item.featured.img}?w=760&q=70&auto=format&fit=crop`}
                                  alt={item.featured.title}
                                  loading="lazy"
                                  decoding="async"
                                />
                              </div>
                              <h4>{item.featured.title}</h4>
                              <p>{item.featured.copy}</p>
                              <span className="text-link">
                                {item.featured.cta} <IconArrowRight className="arrow" size={14} />
                              </span>
                            </a>
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
                {dropItems.map((key) => {
                  const item = nav[key];
                  const isOpen = open === key;
                  return (
                    <li key={key}>
                      <button
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        onClick={() => setOpen(isOpen ? null : key)}
                        onMouseEnter={() => openNow(key)}
                        onMouseLeave={scheduleClose}
                      >
                        {item.label}
                        <IconChevron className="nav-caret" />
                      </button>
                      <div
                        className={`mega${isOpen ? " is-open" : ""}`}
                        onMouseEnter={() => openNow(key)}
                        onMouseLeave={scheduleClose}
                      >
                        <div className="container mega__inner" style={{ gridTemplateColumns: "1fr" }}>
                          <div className="mega__col mega__col--links">
                            <h3>{item.label}</h3>
                            <ul style={{ columns: 2, columnGap: "3rem" }}>
                              {item.links.map((l) => (
                                <li key={l.label}>
                                  <a className={l.strong ? "strong" : ""} href={l.href}>
                                    {l.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="header-actions">
              <button className="icon-btn" onClick={openSearch} aria-label="Search the site" data-track="search-open">
                <IconSearch />
              </button>
              <a className="btn btn--bronze header-cta" href="/winsume#contact" data-track="cta-plan-lift-header">
                Plan Your Lift
              </a>
              <button
                className="icon-btn burger"
                aria-label={drawer ? "Close menu" : "Open menu"}
                aria-expanded={drawer}
                onClick={() => setDrawer((v) => !v)}
              >
                {drawer ? <IconClose /> : <IconBurger />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`drawer${drawer ? " is-open" : ""}`} role="dialog" aria-modal="true" aria-label="Menu">
        <div className="drawer__bar">
          <a href="/winsume" className="brand" onClick={() => setDrawer(false)}>
            <BrandMark size={30} />
            <span>
              <span className="brand__name">WINSUME</span>
              <span className="brand__sub">Lift India</span>
            </span>
          </a>
          <button className="icon-btn" aria-label="Close menu" onClick={() => setDrawer(false)}>
            <IconClose />
          </button>
        </div>
        <div className="drawer__body">
          <ul>
            {Object.entries(nav).map(([key, item]) => (
              <li key={key}>
                <button
                  className="drawer__toggle"
                  aria-expanded={false}
                  onClick={(e) => {
                    const btn = e.currentTarget;
                    const panel = btn.nextElementSibling;
                    const willOpen = !panel.classList.contains("is-open");
                    document.querySelectorAll(".drawer__panel.is-open").forEach((p) => p.classList.remove("is-open"));
                    document
                      .querySelectorAll(".drawer__toggle[aria-expanded='true']")
                      .forEach((b) => b.setAttribute("aria-expanded", "false"));
                    if (willOpen) {
                      panel.classList.add("is-open");
                      btn.setAttribute("aria-expanded", "true");
                    }
                  }}
                >
                  {item.label}
                  <IconChevron />
                </button>
                <div className="drawer__panel">
                  {item.groups ? (
                    item.groups.map((g) => (
                      <div key={g.heading}>
                        <p className="mono" style={{ color: "var(--stone-500)", margin: "0.8rem 0 0.3rem 1rem" }}>
                          {g.heading}
                        </p>
                        {g.links.map((l) => (
                          <a key={l.label} href={l.href} onClick={() => setDrawer(false)}>
                            {l.label}
                          </a>
                        ))}
                      </div>
                    ))
                  ) : (
                    item.links.map((l) => (
                      <a key={l.label} href={l.href} onClick={() => setDrawer(false)}>
                        {l.label}
                      </a>
                    ))
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="drawer__foot">
          <a className="btn btn--bronze" href={contact.phoneHref} data-track="cta-call-drawer">
            <IconPhone size={15} /> {contact.phoneDisplay}
          </a>
          <a className="btn btn--ghost-light" href={contact.whatsapp} data-track="cta-whatsapp-drawer">
            <IconWhatsApp size={15} /> WhatsApp Us
          </a>
        </div>
      </div>
    </>
  );
}
