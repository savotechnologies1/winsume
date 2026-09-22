"use client";

import { useEffect } from "react";

/**
 * Motion root — one orchestrated motion system:
 * reveals, elevator-door image transitions, phase underlines,
 * hero entrance and hero parallax. Respects prefers-reduced-motion.
 */
export default function MotionRoot() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Hero entrance runs immediately (content is visible by default if reduced).
    const heroEls = document.querySelectorAll("[data-hero-reveal]");
    if (reduced) {
      heroEls.forEach((el) => el.classList.add("is-in"));
    } else {
      requestAnimationFrame(() => {
        setTimeout(() => heroEls.forEach((el) => el.classList.add("is-in")), 80);
      });
    }

    // Scroll-triggered reveals + door openings + phase rules.
    const targets = document.querySelectorAll("[data-reveal], .doors, .phase");
    if (reduced) {
      targets.forEach((el) => el.classList.add("is-in"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              e.target.classList.add("is-in");
              io.unobserve(e.target);
            }
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
      );
      targets.forEach((el) => io.observe(el));
    }

    // Hero parallax — the building drifts as you descend.
    let raf = null;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const img = document.querySelector("[data-parallax]");
        if (!img) return;
        const y = Math.min(window.scrollY, window.innerHeight * 1.4);
        img.style.transform = `translate3d(0, ${y * 0.14}px, 0) scale(1.08)`;
      });
    };
    if (!reduced) {
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
