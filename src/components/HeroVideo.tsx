"use client";

import { useEffect, useRef } from "react";
import { gallery } from "@/config/gallery";

/**
 * Hero background video, used by every page's hero. The poster shows
 * immediately; with reduced motion the video never loads. Decorative,
 * so hidden from assistive tech.
 */
export function HeroVideo({ className }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    v.src = gallery.videos.hero.src;
    v.play().catch(() => undefined);
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      poster={gallery.videos.hero.poster}
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    />
  );
}
