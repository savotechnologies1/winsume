"use client";

import { useEffect, useState } from "react";
import { contact } from "@/lib/data";
import { IconPhone, IconWhatsApp } from "./Icons";

export default function MobileCTABar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`mobile-bar${visible ? " is-visible" : ""}`} role="navigation" aria-label="Quick contact">
      <a href={contact.phoneHref} data-track="mobile-call">
        <IconPhone size={15} /> Call
      </a>
      <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" data-track="mobile-whatsapp">
        <IconWhatsApp size={15} /> WhatsApp
      </a>
      <a href="/winsume#contact" className="quote" data-track="mobile-quote">
        Get a Quote
      </a>
    </div>
  );
}
