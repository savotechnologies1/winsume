"use client";

import { useState } from "react";
import Image from "next/image";
import { contact, finderOptions } from "@/lib/data";
import { IconPhone, IconWhatsApp, IconMail } from "./Icons";

const REQUIREMENTS = ["New lift", "Replacement", "Modernization", "Maintenance & AMC"];
const BUILDINGS = ["Home / Villa", "Residential building", "Office", "Hotel", "Hospital", "Retail", "Industrial", "Other"];

export default function ConsultationCTA() {
  const [req, setReq] = useState("");
  const [sent, setSent] = useState(false);

  const showBuilding = req && req !== "Maintenance & AMC";
  const showUpload = req === "New lift" || req === "Replacement";

  return (
    <section id="contact" className="section final-cta" aria-labelledby="final-title" data-dark="true">
      <div className="final-cta__bg" aria-hidden>
        <Image
          src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=2000&q=70&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          loading="lazy"
        />
      </div>

      <div className="container final-cta__grid">
        <div data-reveal>
          <h2 id="final-title" className="display-2">
            Let&rsquo;s Elevate Your Next Project.
          </h2>
          <p className="copy">
            Whether you are planning a private residence, a commercial development, a hospital or
            a modernization — start with a conversation with Winsume&rsquo;s team. Indore-based,
            project-ready, across India.
          </p>

          <div className="final-cta__contact">
            <a href={contact.phoneHref} data-track="cta-call-final">
              <IconPhone /> {contact.phoneDisplay}
            </a>
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" data-track="cta-whatsapp-final">
              <IconWhatsApp /> WhatsApp us
            </a>
            <a href={`mailto:${contact.email}`} data-track="cta-email-final">
              <IconMail /> {contact.email}
            </a>
          </div>
        </div>

        <div className="consult" data-reveal style={{ "--reveal-delay": "0.12s" }}>
          {sent ? (
            <div className="consult__success is-shown" role="status">
              <span className="floor">F1</span>
              <h4>Request received.</h4>
              <p>
                Thank you — our consultation team will reach out within one working day. For
                anything urgent, call {contact.phoneDisplay} or message us on WhatsApp.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              data-track="consultation-form"
              aria-label="Request a consultation"
            >
              <h3>Request a Consultation</h3>
              <p>Tell us a little about your project — we will take it from there.</p>

              <div className="consult__grid">
                <div className="consult__field">
                  <label htmlFor="c-name">Name *</label>
                  <input id="c-name" name="name" required autoComplete="name" />
                </div>
                <div className="consult__field">
                  <label htmlFor="c-phone">Phone *</label>
                  <input id="c-phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" />
                </div>
                <div className="consult__field">
                  <label htmlFor="c-email">
                    Email <span className="opt">(optional)</span>
                  </label>
                  <input id="c-email" name="email" type="email" autoComplete="email" />
                </div>
                <div className="consult__field">
                  <label htmlFor="c-city">City</label>
                  <input id="c-city" name="city" autoComplete="address-level2" />
                </div>
                <div className="consult__field">
                  <label htmlFor="c-req">Requirement *</label>
                  <select id="c-req" required value={req} onChange={(e) => setReq(e.target.value)}>
                    <option value="" disabled>
                      Select
                    </option>
                    {REQUIREMENTS.map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                </div>
                <div className={`consult__field${showBuilding ? " is-shown" : ""} is-conditional`}>
                  <label htmlFor="c-building">Building type</label>
                  <select id="c-building" name="building">
                    <option value="">Select</option>
                    {BUILDINGS.map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                </div>
                <div className={`consult__field${showBuilding ? " is-shown" : ""} is-conditional`}>
                  <label htmlFor="c-floors">Number of floors</label>
                  <select id="c-floors" name="floors">
                    <option value="">Select</option>
                    {finderOptions.floors.map((f) => (
                      <option key={f}>{f}</option>
                    ))}
                  </select>
                </div>
                <div className={`consult__field${showUpload ? " is-shown" : ""} is-conditional`}>
                  <label htmlFor="c-plan">
                    Drawing / floor plan <span className="opt">(optional)</span>
                  </label>
                  <input id="c-plan" name="plan" type="file" accept=".pdf,.dwg,.dxf,.jpg,.png" />
                </div>
                <div className="consult__field consult__field--full">
                  <label htmlFor="c-msg">
                    Message <span className="opt">(optional)</span>
                  </label>
                  <textarea id="c-msg" name="message" placeholder="Site, timeline, anything we should know…" />
                </div>
                <label className="consult__consent">
                  <input type="checkbox" required />
                  <span>
                    I agree to be contacted by Winsume Lift India about my enquiry and have read
                    the Privacy Policy. We never share your details.
                  </span>
                </label>
                <button type="submit" className="btn btn--bronze consult__submit" data-track="consultation-submit">
                  Plan Your Lift
                </button>
                <p className="form-note">
                  Demo form — connect to CRM / email workflow before production. Typical response:
                  one working day [CLIENT TO CONFIRM].
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
