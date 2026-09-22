/**
 * Winsume Lift India — site content data layer.
 *
 * CMS MAPPING (§35 of brief): every structure below is shaped to be lifted
 * into a CMS collection as-is. Keys are stable; do not rename casually.
 *
 * CONTENT INTEGRITY (§39): entries flagged `pending: true` carry figures or
 * claims that Winsume must confirm before production — they render with a
 * visible [CLIENT TO CONFIRM] treatment. Verified facts come from
 * winsumelift.com (extracted from the production bundle this session).
 */

export const contact = {
  legalName: "Winsume Lift India Private Limited",
  shortName: "Winsume",
  tagline: "Elevating Spaces. Engineering Experiences.",
  founded: 2018,
  phoneDisplay: "+91 99932 77492",
  phoneHref: "tel:+919993277492",
  whatsapp: "https://wa.me/919993277492",
  whatsappSupport: "https://wa.me/919993277492", // alt no. on site: wa.me/917942829113 [CLIENT TO CONFIRM which is primary]
  email: "concierge@winsumelift.com",
  supportEmail: "support@winsumelift.com",
  address: {
    line1: "1st Floor, 100 Sanvid Nagar",
    line2: "Kanadiya Road, Indore, Madhya Pradesh 452018",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=1st+Floor+100+Sanvid+Nagar+Kanadiya+Road+Indore+452018",
  },
  hours: "Mon–Sat · 10:00–19:00 IST", // [CLIENT TO CONFIRM]
  social: [
    { label: "Instagram", href: "https://instagram.com/winsumeliftindia" },
    { label: "Facebook", href: "https://facebook.com/winsome.lift" },
  ],
};

/* ------------------------------------------------------------------ */
/*  Navigation (§5) — mega-menu panels are rendered from these trees.  */
/* ------------------------------------------------------------------ */

export const nav = {
  products: {
    label: "Products",
    href: "/#collection",
    featured: {
      title: "Panorama Collection",
      copy: "Glass and capsule elevators that turn movement into architecture — panoramic cabins for spaces that deserve to be seen.",
      cta: "Explore the collection",
      href: "/products/glass-capsule-elevators",
      img: "photo-1545324418-cc1a3fa10c00",
    },
    groups: [
      {
        heading: "By Application",
        links: [
          { label: "Passenger Elevators", href: "/products/passenger-elevators" },
          { label: "Home & Residential Elevators", href: "/products/home-elevators" },
          { label: "Commercial Elevators", href: "/products/commercial-elevators" },
          { label: "Hospital Elevators", href: "/products/hospital-elevators" },
          { label: "Goods & Freight Elevators", href: "/products/goods-elevators" },
          { label: "Car & Parking Lifts", href: "/products/car-parking-lifts" },
        ],
      },
      {
        heading: "By Technology",
        links: [
          { label: "MRL Elevators", href: "/products/mrl-elevators" },
          { label: "Hydraulic Elevators", href: "/products/hydraulic-elevators" },
          { label: "Glass & Capsule Elevators", href: "/products/glass-capsule-elevators" },
          { label: "Stair & Accessibility Lifts", href: "/products/accessibility-lifts" },
          { label: "View All Solutions", href: "/#collection", strong: true },
        ],
      },
    ],
  },
  solutions: {
    label: "Solutions",
    href: "/#solutions",
    featured: {
      title: "Designed around the building",
      copy: "A hospital, a villa and a mall each move differently. Start from what your building demands, not from a catalogue.",
      cta: "Find your building type",
      href: "/#solutions",
      img: "photo-1497366811353-6870744d04b2",
    },
    links: [
      { label: "Residential", href: "/solutions/residential" },
      { label: "Commercial & Offices", href: "/solutions/offices" },
      { label: "Hotels & Hospitality", href: "/solutions/hospitality" },
      { label: "Hospitals & Healthcare", href: "/solutions/healthcare" },
      { label: "Retail & Malls", href: "/solutions/retail" },
      { label: "Industrial & Warehousing", href: "/solutions/industrial" },
      { label: "Architects & Developers", href: "/solutions/architects-developers" },
      { label: "Custom Lift Solutions", href: "/solutions/custom", strong: true },
    ],
  },
  services: {
    label: "Services",
    href: "/#service",
    links: [
      { label: "New Installation", href: "/services/installation" },
      { label: "Lift Design & Consultation", href: "/services/consultation" },
      { label: "Maintenance & AMC", href: "/services/maintenance" },
      { label: "Repair & Support", href: "/services/repair" },
      { label: "Modernization", href: "/services/modernization" },
      { label: "Custom Cabin Design", href: "/#design" },
    ],
  },
  design: {
    label: "Design & Technology",
    href: "/#design",
    links: [
      { label: "Cabin Design", href: "/#design" },
      { label: "Materials & Finishes", href: "/design/materials" },
      { label: "Safety", href: "/#safety" },
      { label: "Engineering", href: "/#engineering" },
      { label: "Technology", href: "/#engineering" },
      { label: "Energy Efficiency", href: "/design/energy-efficiency" },
    ],
  },
  projects: {
    label: "Projects",
    href: "/#projects",
    links: [
      { label: "Featured Projects", href: "/#projects" },
      { label: "Residential", href: "/projects/residential" },
      { label: "Commercial", href: "/projects/commercial" },
      { label: "Hospitality", href: "/projects/hospitality" },
      { label: "Healthcare", href: "/projects/healthcare" },
      { label: "Custom Installations", href: "/projects/custom" },
    ],
  },
  about: {
    label: "About Winsume",
    href: "/#winsume",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Why Winsume", href: "/#why" },
      { label: "Quality & Safety", href: "/#safety" },
      { label: "Our Process", href: "/#lifecycle" },
      { label: "Careers", href: "/careers" },
    ],
  },
  resources: {
    label: "Resources",
    href: "/#insights",
    links: [
      { label: "Brochures", href: "/resources/brochures" },
      { label: "FAQs", href: "/resources/faqs" },
      { label: "Insights", href: "/#insights" },
      { label: "Lift Planning Guide", href: "/resources/planning-guide" },
    ],
  },
};

/* ------------------------------------------------------------------ */
/*  Elevator collection (§10)                                          */
/* ------------------------------------------------------------------ */

export const products = [
  {
    id: "home",
    name: "Home & Residential Elevators",
    kicker: "Homes · Villas",
    desc: "Beautiful, space-conscious mobility designed around modern homes — quiet, compact and made to your interior.",
    href: "/products/home-elevators",
    img: "photo-1600585154340-be6161a56a0c",
    alt: "Contemporary private residence with clean architectural lines — setting for a Winsume home elevator (placeholder image)",
    span: "wide",
  },
  {
    id: "passenger",
    name: "Passenger Elevators",
    kicker: "Everyday Movement",
    desc: "Smooth, dependable transportation for everyday movement in apartment blocks and public buildings.",
    href: "/products/passenger-elevators",
    img: "photo-1497366811353-6870744d04b2",
    alt: "Modern building lobby with passenger circulation — placeholder image pending Winsume photography",
    span: "tall",
  },
  {
    id: "commercial",
    name: "Commercial Elevators",
    kicker: "Offices · Developments",
    desc: "Performance-oriented systems engineered for the traffic, duty and image of commercial developments.",
    href: "/products/commercial-elevators",
    img: "photo-1486406146926-c627a92ad1ab",
    alt: "Glass commercial tower facade — placeholder image pending Winsume photography",
  },
  {
    id: "hospital",
    name: "Hospital Elevators",
    kicker: "Healthcare",
    desc: "Purpose-designed mobility for healthcare environments — stretchers, beds, smooth stops and rigorous hygiene finishes.",
    href: "/products/hospital-elevators",
    img: "photo-1516541196182-6bdb0516ed27",
    alt: "Healthcare facility corridor built for patient transport — placeholder image pending Winsume photography",
    span: "tall",
  },
  {
    id: "goods",
    name: "Goods & Freight Elevators",
    kicker: "Industrial",
    desc: "Heavy-duty transportation engineered around demanding loads, rough duty cycles and long service life.",
    href: "/products/goods-elevators",
    img: "photo-1553413077-190dd305871c",
    alt: "Industrial warehouse with heavy racking — placeholder image pending Winsume photography",
  },
  {
    id: "glass",
    name: "Glass & Capsule Elevators",
    kicker: "Architectural Statements",
    desc: "Architectural statement elevators combining movement and visibility — cabins that become part of the façade.",
    href: "/products/glass-capsule-elevators",
    img: "photo-1545324418-cc1a3fa10c00",
    alt: "Sculptural modern architecture seen from below — placeholder image pending Winsume photography",
    span: "wide",
  },
  {
    id: "mrl",
    name: "MRL Elevators",
    kicker: "Machine-Room-Less",
    desc: "Space-efficient systems designed without a conventional machine room — more usable building, less shaft.",
    href: "/products/mrl-elevators",
    img: "photo-1511818966892-d7d671e672a2",
    alt: "Contemporary glazed building elevation — placeholder image pending Winsume photography",
  },
  {
    id: "accessibility",
    name: "Accessibility Solutions",
    kicker: "Independence",
    desc: "Stair lifts and platform lifts designed to improve movement and independence — in homes and public spaces alike.",
    href: "/products/accessibility-lifts",
    img: "photo-1620626011761-996317b8d101",
    alt: "Interior staircase in a modern home — placeholder image pending Winsume photography",
  },
];

/* ------------------------------------------------------------------ */
/*  Solutions by building type (§11)                                   */
/* ------------------------------------------------------------------ */

export const buildingSolutions = [
  {
    id: "homes",
    name: "Homes & Villas",
    img: "photo-1512917774080-9991f1c4c750",
    copy: "A home lift is chosen once and lived with every day. We design around your staircase, your interiors and your family's next twenty years.",
    detail: "Compact shafts · 2–6 persons · quiet operation · finish-matched cabins",
  },
  {
    id: "residential",
    name: "Residential Buildings",
    img: "photo-1580587771525-78b9dba3b914",
    copy: "Apartment living sets its own rhythm — morning peaks, school runs, deliveries. Capacity and duty cycle come before everything else.",
    detail: "4–13 persons · traffic planning · rugged duty cycles · AMC programs",
  },
  {
    id: "offices",
    name: "Offices",
    img: "photo-1497366754035-f200968a6e72",
    copy: "An office elevator is the first impression of the building and the measure of its management. Speed, finish and reliability carry the brand.",
    detail: "6–21 persons · destination control ready · corporate cabin finishes",
  },
  {
    id: "hotels",
    name: "Hotels & Hospitality",
    img: "photo-1566073771259-6a8506099945",
    copy: "Guests judge a hotel between lobby and room. Silent doors, smooth rides and cabins that extend the interior design language.",
    detail: "Service & guest cars · bed/stretcher options · bespoke interiors",
  },
  {
    id: "hospitals",
    name: "Hospitals & Healthcare",
    img: "photo-1519494026892-80bbd2d6fd0d",
    copy: "In healthcare, elevators are part of clinical logistics — beds, staff, visitors and materials, each with their own route and priority.",
    detail: "Bed-sized cars · smooth levelling · hygiene finishes · duty-rated doors",
  },
  {
    id: "retail",
    name: "Retail & Shopping Centres",
    img: "photo-1441986300917-64674bd600d8",
    copy: "Retail moves people and goods on separate clocks — customers upward, stock downward, all day, every day of the year.",
    detail: "High-traffic cars · service lifts · vandal-resistant finishes",
  },
  {
    id: "industrial",
    name: "Industrial & Warehousing",
    img: "photo-1586528116311-ad8dd3c8310d",
    copy: "Factories and logistics run on pallets, trolleys and tonnage. We size the car, the floor and the doors around the load, not the other way round.",
    detail: "Up to [X] kg [CLIENT TO CONFIRM] · rugged platforms · freight-rated doors",
  },
  {
    id: "architects",
    name: "Architects & Developers",
    img: "photo-1503387762-592deb58ef4e",
    copy: "We work from the drawing board — shaft dimensions, loads, headroom and pit — so vertical mobility is designed in, never fitted around.",
    detail: "Drawings & specs · coordination support · site supervision",
  },
];

/* ------------------------------------------------------------------ */
/*  Trust metrics (§9) — placeholders marked, nothing invented         */
/* ------------------------------------------------------------------ */

export const stats = [
  { value: "7", suffix: "+", label: "Years of craft", note: "Established 2018", verified: true },
  { value: "[XXX]", suffix: "+", label: "Elevators installed", pending: true },
  { value: "[XX]", suffix: "", label: "Cities served", pending: true },
  { value: "[XXX]", suffix: "+", label: "Projects delivered", pending: true },
  { value: "[XXX]", suffix: "", label: "Maintenance clients", pending: true },
];

/* ------------------------------------------------------------------ */
/*  Featured projects (§17) — referenced from current site, pending    */
/* ------------------------------------------------------------------ */

export const projects = [
  {
    id: "villa-indore",
    name: "Private Villa Residence",
    location: "Indore, Madhya Pradesh",
    type: "Residential",
    lift: "Home elevator · 4 stops",
    scope: "Design, manufacture & installation",
    img: "photo-1613490493576-7fde63acd811",
    pending: true,
  },
  {
    id: "radisson-blu",
    name: "Radisson Blu",
    location: "Indore, Madhya Pradesh",
    type: "Hospitality",
    lift: "Passenger & service cars",
    scope: "Installation & support",
    img: "photo-1566073771259-6a8506099945",
    pending: true,
    note: "Referenced on current winsumelift.com — scope to be confirmed",
  },
  {
    id: "phoenix-mall",
    name: "Phoenix Mall",
    location: "Indore, Madhya Pradesh",
    type: "Retail",
    lift: "Passenger elevators",
    scope: "Supply & installation",
    img: "photo-1441986300917-64674bd600d8",
    pending: true,
    note: "Referenced on current winsumelift.com — scope to be confirmed",
  },
  {
    id: "healthcare",
    name: "Multispeciality Hospital",
    location: "Indore, Madhya Pradesh",
    type: "Healthcare",
    lift: "Bed elevators · 6 stops",
    scope: "Design & installation",
    img: "photo-1516541196182-6bdb0516ed27",
    pending: true,
  },
];

export const projectFilters = ["All", "Residential", "Hospitality", "Retail", "Healthcare"];

/* ------------------------------------------------------------------ */
/*  Cabin configurator finishes (§12)                                  */
/* ------------------------------------------------------------------ */

export const cabinFinishes = {
  walls: [
    { id: "brushed-steel", name: "Brushed Steel", from: "#CFD1D4", to: "#9EA1A6", edge: "#E7E9EB" },
    { id: "bronze-mirror", name: "Bronze Mirror", from: "#9C7A4E", to: "#6E5334", edge: "#C4A26E" },
    { id: "smoked-glass", name: "Smoked Glass", from: "#4A4E56", to: "#2C2F35", edge: "#6A6F78" },
    { id: "walnut", name: "Walnut Veneer", from: "#7A5433", to: "#4E341E", edge: "#96703F" },
    { id: "stone", name: "Stone Grey", from: "#B4B0A6", to: "#8B877D", edge: "#CFCBC0" },
  ],
  floor: [
    { id: "nero", name: "Granite Nero", from: "#26262A", to: "#141416", edge: "#3B3B41" },
    { id: "travertine", name: "Travertine", from: "#D8CDB8", to: "#B7A98F", edge: "#E6DCC9" },
    { id: "oak", name: "Natural Oak", from: "#B08048", to: "#7E5A2F", edge: "#C79A63" },
    { id: "anthracite", name: "Anthracite Resin", from: "#3E4147", to: "#26282D", edge: "#565A62" },
  ],
  ceiling: [
    { id: "cove", name: "Warm Cove Light", glow: "#F2D9A8", tint: "#3A352C" },
    { id: "matrix", name: "LED Matrix", glow: "#E9EEF2", tint: "#2E3238" },
    { id: "downlights", name: "Downlights", glow: "#F6EEDC", tint: "#33363B" },
  ],
  handrail: [
    { id: "steel-rail", name: "Brushed Steel", color: "#C9CBCE" },
    { id: "bronze-rail", name: "Champagne Bronze", color: "#B08D57" },
    { id: "leather-rail", name: "Saddle Leather", color: "#7A4A2E" },
  ],
};

/* ------------------------------------------------------------------ */
/*  Insights (§22) — topics from the brief; articles to be authored    */
/* ------------------------------------------------------------------ */

export const insights = [
  {
    title: "How to Choose a Home Elevator",
    dek: "Shaft or shaftless? Hydraulic or traction? A practical guide for homeowners planning vertical mobility.",
    href: "/insights/choosing-a-home-elevator",
    img: "photo-1600607687939-ce8a6c25118c",
    tag: "Residential",
  },
  {
    title: "MRL vs. Conventional Elevators",
    dek: "What a machine-room-less design actually saves you — space, construction and long-term considerations.",
    href: "/insights/mrl-vs-conventional-elevators",
    img: "photo-1486406146926-c627a92ad1ab",
    tag: "Technology",
  },
  {
    title: "When Should an Old Lift Be Modernized?",
    dek: "The signals that matter — reliability, parts availability, ride quality, safety and running economics.",
    href: "/insights/when-to-modernize",
    img: "photo-1479839672679-a46483c0e7c8",
    tag: "Modernization",
  },
];

/* ------------------------------------------------------------------ */
/*  Testimonials (§21) — placeholders, production needs approved ones  */
/* ------------------------------------------------------------------ */

export const testimonials = [
  {
    quote:
      "They treated our home like an interior project, not an installation — the cabin matches our staircase wood exactly.",
    name: "[Client name]",
    context: "Private villa · Indore",
    pending: true,
  },
  {
    quote:
      "The team coordinated directly with our architect on shaft dimensions. Zero friction during construction.",
    name: "[Client name]",
    context: "Residential project · Indore",
    pending: true,
  },
  {
    quote:
      "Response times on service calls have been exactly what was promised in the AMC.",
    name: "[Client name]",
    context: "Commercial building · Indore",
    pending: true,
  },
];

/* ------------------------------------------------------------------ */
/*  Solution finder (§7)                                               */
/* ------------------------------------------------------------------ */

export const finderOptions = {
  building: ["Home / Villa", "Residential building", "Office", "Hotel", "Hospital", "Retail", "Industrial", "Other"],
  requirement: ["New lift", "Replacement", "Modernization", "Maintenance / AMC"],
  floors: ["Up to 2", "3–4", "5–8", "9–12", "13+"],
  capacity: ["2–4 persons", "4–6 persons", "8–13 persons", "13–21 persons", "21+ / goods"],
};

/** Recommendation logic — mapping, not marketing. */
export function recommend({ building, requirement, capacity }) {
  const out = [];
  const push = (name, href, why) => out.push({ name, href, why });

  if (building === "Home / Villa") push("Home & Residential Elevators", "/products/home-elevators", "Compact shafts, quiet drives and cabins finish-matched to your interiors.");
  if (["Residential building", "Office", "Hotel", "Retail", "Other"].includes(building))
    push("Passenger Elevators", "/products/passenger-elevators", "Traffic-ready cars sized for daily circulation in your building.");
  if (building === "Hospital") push("Hospital Elevators", "/products/hospital-elevators", "Bed-sized cars, smooth levelling and hygiene-grade finishes.");
  if (building === "Industrial" || capacity === "21+ / goods") push("Goods & Freight Elevators", "/products/goods-elevators", "Load-first engineering: car, floor and doors sized around the duty.");
  if (building === "Hotel" || building === "Retail") push("Glass & Capsule Elevators", "/products/glass-capsule-elevators", "A visible cabin that becomes part of the guest experience.");
  if (requirement === "Modernization") push("Modernization Program", "/#modernization", "Retain the shaft, renew the system — controller, drive, door operator and cabin.");
  if (requirement === "Maintenance / AMC") push("Maintenance & AMC", "/#service", "Preventive schedules, inspections and priority repair support.");
  if (capacity === "2–4 persons" && building !== "Industrial") push("Hydraulic / MRL Options", "/products/mrl-elevators", "Space-efficient drives for low-rise, light-duty applications.");

  // Ensure a useful slate — supplement with the generalist if only one match.
  if (!out.some((o) => o.name === "Passenger Elevators"))
    push("Passenger Elevators", "/products/passenger-elevators", "The dependable generalist — for visitors, staff and daily circulation.");

  return out.slice(0, 3);
}

/* ------------------------------------------------------------------ */
/*  Search index (§25) — grouped entries for global search             */
/* ------------------------------------------------------------------ */

export const searchIndex = [
  ...products.map((p) => ({ type: "Product", label: p.name, href: p.href, keys: `${p.name} ${p.kicker} ${p.desc}` })),
  ...buildingSolutions.map((s) => ({ type: "Solution", label: s.name, href: `/solutions/${s.id}`, keys: `${s.name} ${s.copy} lift for ${s.name.toLowerCase()}` })),
  ...nav.services.links.map((l) => ({ type: "Service", label: l.label, href: l.href, keys: `${l.label} lift service winsume` })),
  ...insights.map((a) => ({ type: "Insight", label: a.title, href: a.href, keys: `${a.title} ${a.dek}` })),
  ...nav.resources.links.map((l) => ({ type: "Resource", label: l.label, href: l.href, keys: `${l.label} elevator guide download` })),
  ...projects.map((p) => ({ type: "Project", label: `${p.name} — ${p.location.split(",")[0]}`, href: "/#projects", keys: `${p.name} ${p.type} ${p.lift} ${p.location}` })),
];

/* ------------------------------------------------------------------ */
/*  Why Winsume pillars (§18)                                          */
/* ------------------------------------------------------------------ */

export const pillars = [
  {
    title: "Design Without Compromise",
    copy: "Cabins specified like interiors — materials, lighting and details chosen with you, not for you.",
  },
  {
    title: "Engineering With Purpose",
    copy: "Every configuration starts from loads, duty cycles and building physics. The maths precedes the aesthetic.",
  },
  {
    title: "Safety at Every Level",
    copy: "From component selection to installation practice and preventive maintenance, safety is built into the process.",
  },
  {
    title: "Solutions Built Around You",
    copy: "No two shafts, families or buildings are identical. Neither are the lifts we design for them.",
  },
  {
    title: "Service Beyond Installation",
    copy: "The relationship begins at handover — maintenance, support and modernization through the elevator's life.",
  },
];
