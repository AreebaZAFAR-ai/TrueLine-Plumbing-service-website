"use client";

import { useEffect } from "react";

/**
 * One observer for the whole page: any element with `data-reveal`
 * fades/slides in the first time it enters the viewport.
 * Elements can stagger with `style={{ "--d": "120ms" }}`.
 * CSS only hides them when the `js` class is on <html>, so content
 * stays visible without JavaScript.
 */
export function RevealObserver() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
