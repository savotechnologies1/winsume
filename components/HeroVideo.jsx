"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Cinematic background film for the hero.
 *
 * TEMPORARY FOOTAGE — Pexels stock (modern atrium with moving elevators).
 * Replace with Winsume's own installation / manufacturing footage before
 * production (see README · replacement list).
 *
 * Behaviour: the optimized <Image> in Hero.jsx stays as the base layer (poster);
 * this video fades in over it once frames are actually playable. If the video
 * fails to load, the image simply remains. Under prefers-reduced-motion the
 * video is never mounted — the still image is the hero.
 */
export default function HeroVideo({ src }) {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);
  const [allow, setAllow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setAllow(!mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  useEffect(() => {
    if (!allow || !ready) return;
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
    const onVis = () => (document.hidden ? v.pause() : v.play().catch(() => {}));
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [allow, ready]);

  if (!allow) return null;

  return (
    <video
      ref={ref}
      className={`hero__video${ready ? " is-ready" : ""}`}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden
      tabIndex={-1}
      onCanPlay={(e) => {
        if (e.currentTarget.readyState >= 3) setReady(true);
      }}
      onError={() => setReady(false)}
    />
  );
}
