import { contact, nav, products } from "@/lib/data";
import { IconMail, IconPhone, IconWhatsApp, IconMapPin, IconClock } from "./Icons";

const COMPANY = [
  { label: "About Winsume", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Quality & Safety", href: "/#safety" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/#contact" },
];

const RESOURCES = [
  { label: "Insights", href: "/insights" },
  { label: "FAQs", href: "/resources/faqs" },
  { label: "Downloads", href: "/resources/brochures" },
  { label: "Lift Planning Guide", href: "/resources/planning-guide" },
  { label: "Sitemap", href: "/sitemap.xml" },
];

const SOCIAL_ICONS = {
  Instagram: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  Facebook: (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M14.5 8.5H17V5h-2.5A3.5 3.5 0 0 0 11 8.5V11H8.5v3H11v7h3.5v-7H17l.5-3h-3V9a1 1 0 0 1 1-.5Z" />
    </svg>
  ),
};

export default function Footer() {
  const productLinks = products.slice(0, 9).map((p) => ({ label: p.name, href: p.href }));
  const solutionLinks = nav.solutions.links.filter((l) => !l.strong);
  const serviceLinks = nav.services.links;

  return (
    <footer className="site-footer on-dark" data-dark="true">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="/winsume" className="brand" aria-label="Winsume Lift India — home">
              <svg width="34" height="34" viewBox="0 0 64 64" aria-hidden>
                <rect width="64" height="64" fill="none" stroke="#A98E5F" strokeWidth="2" />
                <path d="M14 20 L23 44 L32 26 L41 44 L50 20" fill="none" stroke="#F4F1EB" strokeWidth="4" />
                <path d="M32 14v6M29.5 17.5 32 20l2.5-2.5" stroke="#A98E5F" strokeWidth="2" fill="none" />
              </svg>
              <span>
                <span className="brand__name">WINSUME</span>
                <span className="brand__sub">Lift India</span>
              </span>
            </a>
            <p>
              Winsume Lift India Private Limited — bespoke elevators designed, engineered,
              installed and maintained since 2018.
            </p>

            <div className="footer-contact">
              <span className="mono-label">Contact</span>
              <a href={contact.phoneHref}>
                <IconPhone size={13} /> {contact.phoneDisplay}
              </a>
              <a href={`mailto:${contact.email}`}>
                <IconMail size={13} /> {contact.email}
              </a>
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
                <IconWhatsApp size={13} /> WhatsApp
              </a>
              <a href={contact.address.mapsUrl} target="_blank" rel="noopener noreferrer">
                <IconMapPin size={13} /> {contact.address.line1}, {contact.address.line2}
              </a>
              <span style={{ color: "var(--stone-400)", fontSize: "0.86rem", display: "inline-flex", gap: "0.5rem", alignItems: "center" }}>
                <IconClock size={13} /> {contact.hours} <em style={{ opacity: 0.6, fontStyle: "normal" }}>[CLIENT TO CONFIRM]</em>
              </span>
            </div>

            <div className="footer-social" aria-label="Social media">
              {contact.social.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  {SOCIAL_ICONS[s.label]}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-cols">
            <div>
              <h3>Products</h3>
              <ul>
                {productLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Solutions</h3>
              <ul>
                {solutionLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Services</h3>
              <ul>
                {serviceLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Company</h3>
              <ul>
                {COMPANY.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Resources</h3>
              <ul>
                {RESOURCES.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-legal">
          <span>© {new Date().getFullYear()} Winsume Lift India Private Limited. All rights reserved.</span>
          <nav aria-label="Legal">
            <a href="/winsume/legal/privacy">Privacy Policy</a>
            <a href="/winsume/legal/terms">Terms &amp; Conditions</a>
            <a href="/winsume/legal/cookies">Cookie Policy</a>
            <a href="/winsume/legal/disclaimer">Disclaimer</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
