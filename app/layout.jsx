import "./globals.css";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalSearch from "@/components/GlobalSearch";
import MobileCTABar from "@/components/MobileCTABar";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata = {
  /* Preview deployment target. When the site moves to the company domain,
     switch metadataBase/canonical/OG here + sitemap.js/robots.js (see README). */
  metadataBase: new URL("https://savotech.vercel.app"),
  title: {
    default: "Winsume Lift India — Bespoke Elevators & Vertical Mobility Solutions",
    template: "%s | Winsume Lift India",
  },
  description:
    "Winsume designs, engineers, installs and maintains bespoke elevators — home lifts, passenger, hospital, goods and capsule elevators. Made in Indore for India's finest spaces, since 2018.",
  alternates: { canonical: "/winsume" },
  openGraph: {
    type: "website",
    siteName: "Winsume Lift India",
    title: "Winsume Lift India — Elevating Spaces. Engineering Experiences.",
    description:
      "Bespoke elevators engineered around buildings and people: home lifts, passenger, hospital, goods, glass & MRL elevators — design, installation, maintenance and modernization across India.",
    locale: "en_IN",
    url: "/winsume",
  },
  twitter: {
    card: "summary_large_image",
    title: "Winsume Lift India — Elevating Spaces. Engineering Experiences.",
    description:
      "Bespoke elevators engineered around buildings and people — design, installation, maintenance and modernization across India.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#141619",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://winsumelift.com/#organization",
      name: "Winsume Lift India Private Limited",
      alternateName: "Winsume",
      url: "https://winsumelift.com",
      foundingDate: "2018",
      description:
        "Design, engineering, installation and maintenance of bespoke elevators and vertical mobility solutions.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1st Floor, 100 Sanvid Nagar, Kanadiya Road",
        addressLocality: "Indore",
        addressRegion: "Madhya Pradesh",
        postalCode: "452018",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-99932-77492",
          contactType: "customer service",
          email: "concierge@winsumelift.com",
          areaServed: "IN",
        },
      ],
      sameAs: [
        "https://instagram.com/winsumeliftindia",
        "https://facebook.com/winsome.lift",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://winsumelift.com/#localbusiness",
      name: "Winsume Lift India Private Limited",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=75&auto=format&fit=crop",
      telephone: "+91-99932-77492",
      email: "concierge@winsumelift.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1st Floor, 100 Sanvid Nagar, Kanadiya Road",
        addressLocality: "Indore",
        addressRegion: "Madhya Pradesh",
        postalCode: "452018",
        addressCountry: "IN",
      },
      openingHours: "Mo-Sa 10:00-19:00",
      priceRange: "$$",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={`${archivo.variable} ${plex.variable} ${plexMono.variable}`}>
      <body>
        {/* Direction contract (impeccable) ---------------------------------
          THESIS: Winsume's homepage is an architectural monograph of
          verticality — floor-numbered sections, hairline grids, measurement
          ticks, elevator-door reveals — refusing the icon-card lift catalogue.
          OWN-WORLD: graphite ink #16171B / warm paper #F4F1EB / champagne
          bronze #A98E5F; Archivo expanded display, IBM Plex Sans body, Plex
          Mono for floor numbers & specs; hairline rules, door-panel image
          reveals, floor-tick rails.
          STORY: the visitor understands Winsume engineers bespoke vertical
          experiences (est. 2018, Indore) for homes through hospitals; believes
          it through building-type journeys, a cabin configurator and an
          engineering story; acts via Plan Your Lift, consultation or service.
          FIRST VIEWPORT: full-bleed cinematic dusk architecture under a
          graphite scrim, expanded Archivo H1 set low-left with masked line
          reveals, bronze primary CTA bottom-left, mono floor-tick rail left
          edge, scroll cue styled as a descending elevator car right.
          FORM: architectural editorial, brief-pinned world (no roll: the
          user's brief paints its own picture). Seed: brief-pinned.
          FINISH: unreviewed and undocumented is unfinished; this build ends
          with the finish review, the verdict, DESIGN.md, and every shipping
          raster carrying its provenance. */}
        <div
          hidden
          dangerouslySetInnerHTML={{
            __html: `<!-- WINSUME DIRECTION CONTRACT v1 — THESIS: architectural monograph of verticality; floor-numbered sections, hairline grids, measurement ticks, elevator-door reveals; refuses the icon-card lift catalogue. OWN-WORLD: graphite ink 16171B / warm paper F4F1EB / champagne bronze A98E5F; Archivo expanded display, IBM Plex Sans body, Plex Mono floor numbers and specs; hairline rules, door-panel image reveals, floor-tick rails. STORY: Winsume engineers bespoke vertical experiences (est. 2018, Indore) for homes through hospitals; proof via building-type journeys, cabin configurator, engineering story; action via Plan Your Lift, consultation, service. FIRST VIEWPORT: full-bleed cinematic architecture film (moving elevators) fading in over a dusk-villa poster frame, under graphite scrim, expanded Archivo H1 low-left with masked line reveals, bronze primary CTA, mono floor-tick rail left, descending-elevator scroll cue right. FORM: architectural editorial; brief-pinned. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance. -->`,
          }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCTABar />
        <GlobalSearch />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
