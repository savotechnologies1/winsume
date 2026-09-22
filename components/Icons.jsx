/* Shared icon set — one consistent 1.5px stroke grammar, drawn for Winsume. */

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "square",
  strokeLinejoin: "miter",
  "aria-hidden": true,
};

export const IconSearch = (p) => (
  <svg width={p.size || 20} height={p.size || 20} viewBox="0 0 24 24" {...base}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="M16 16l5 5" />
  </svg>
);

export const IconArrowRight = (p) => (
  <svg width={p.size || 16} height={p.size || 16} viewBox="0 0 24 24" {...base}>
    <path d="M3 12h17M14 6l6 6-6 6" />
  </svg>
);

export const IconArrowUp = (p) => (
  <svg width={p.size || 12} height={p.size || 12} viewBox="0 0 24 24" {...base}>
    <path d="M12 21V4M5 11l7-7 7 7" />
  </svg>
);

export const IconArrowDown = (p) => (
  <svg width={p.size || 12} height={p.size || 12} viewBox="0 0 24 24" {...base}>
    <path d="M12 3v17M5 13l7 7 7-7" />
  </svg>
);

export const IconChevron = (p) => (
  <svg className={p.className} width="9" height="6" viewBox="0 0 10 6" {...base}>
    <path d="M1 1l4 4 4-4" />
  </svg>
);

export const IconPhone = (p) => (
  <svg width={p.size || 16} height={p.size || 16} viewBox="0 0 24 24" {...base}>
    <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

export const IconWhatsApp = (p) => (
  <svg width={p.size || 16} height={p.size || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z" />
    <path d="M9 8.5c-.3 1.9 1.2 4.4 3 5.7 1.2.9 2.5 1.2 3.3.9l.7-1.6-2.2-.9-.9.9c-1-.5-2-1.5-2.4-2.5l.9-.8-.9-2.1-1.5.4Z" fill="currentColor" stroke="none" />
  </svg>
);

export const IconMail = (p) => (
  <svg width={p.size || 16} height={p.size || 16} viewBox="0 0 24 24" {...base}>
    <rect x="3" y="5.5" width="18" height="13" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const IconBurger = (p) => (
  <svg width={p.size || 22} height={p.size || 22} viewBox="0 0 24 24" {...base}>
    <path d="M3 6h18M3 12h12M3 18h18" />
  </svg>
);

export const IconClose = (p) => (
  <svg width={p.size || 20} height={p.size || 20} viewBox="0 0 24 24" {...base}>
    <path d="M5 5l14 14M19 5L5 19" />
  </svg>
);

export const IconMapPin = (p) => (
  <svg width={p.size || 16} height={p.size || 16} viewBox="0 0 24 24" {...base}>
    <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
    <circle cx="12" cy="10" r="2.4" />
  </svg>
);

export const IconClock = (p) => (
  <svg width={p.size || 16} height={p.size || 16} viewBox="0 0 24 24" {...base}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7v5l3.5 2" />
  </svg>
);

/* --- safety icon set ---------------------------------------------------- */

export const SafetyIcon = ({ id, size = 30 }) => {
  const props = { width: size, height: size, viewBox: "0 0 32 32", ...base, strokeWidth: 1.4 };
  switch (id) {
    case "passenger":
      return (
        <svg {...props}>
          <circle cx="16" cy="8" r="3.4" />
          <path d="M9 28v-7m14 7v-7M9 21c0-4 3-6.5 7-6.5s7 2.5 7 6.5" />
        </svg>
      );
    case "door":
      return (
        <svg {...props}>
          <rect x="5" y="4" width="10" height="24" />
          <rect x="17" y="4" width="10" height="24" />
          <path d="M12 15v2m8-2v2" />
        </svg>
      );
    case "emergency":
      return (
        <svg {...props}>
          <rect x="7" y="3" width="18" height="26" rx="1" />
          <path d="M16 9v8" />
          <circle cx="16" cy="21.4" r="0.6" fill="currentColor" />
        </svg>
      );
    case "components":
      return (
        <svg {...props}>
          <circle cx="16" cy="16" r="3" />
          <path d="M16 4v5m0 14v5M4 16h5m14 0h5M8 8l3 3m10 10 3 3M24 8l-3 3M11 21l-3 3" />
        </svg>
      );
    case "installation":
      return (
        <svg {...props}>
          <path d="M16 5l9 4-9 4-9-4 9-4Z" />
          <path d="M7 13v4l9 4 9-4v-4" />
          <path d="M16 21v6" />
        </svg>
      );
    case "maintenance":
      return (
        <svg {...props}>
          <path d="M20.5 6.5a6 6 0 0 1-8 8L6 21a2.2 2.2 0 0 1-3-3l6.5-6.5a6 6 0 0 1 8-8l-3.4 3.4 3 3L21.5 6.5Z" />
        </svg>
      );
    case "compliance":
      return (
        <svg {...props}>
          <path d="M16 3l10 4v8c0 7-5 11.5-10 14C11 26.5 6 22 6 15V7l10-4Z" />
          <path d="M11.5 15.5l3 3 6-6.5" />
        </svg>
      );
    case "monitoring":
      return (
        <svg {...props}>
          <path d="M4 25h24" />
          <path d="M7 25v-7m6 7V11m6 14V15m6 10v-4" />
        </svg>
      );
    default:
      return null;
  }
};
