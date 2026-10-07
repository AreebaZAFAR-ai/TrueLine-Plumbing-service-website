"use client";

import { useEffect, useRef } from "react";
import { gallery } from "@/config/gallery";

/**
 * Hero background video. Phones get the portrait clip, larger screens
 * the landscape one; the source is chosen on mount so only one clip
 * downloads. The poster shows immediately; with reduced motion the
 * video never loads. Decorative, so hidden from assistive tech.
 */
export function HeroVideo({ className }: { className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const mobile = window.matchMedia("(max-width: 640px)").matches;
    const clip = mobile ? gallery.videos.heroMobile : gallery.videos.hero;
    v.poster = clip.poster;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    v.src = clip.src;
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
