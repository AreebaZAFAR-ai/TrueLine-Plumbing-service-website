"use client";

import { useEffect, useRef, useState } from "react";
import { gallery } from "@/config/gallery";
import { Icon } from "@/components/ui/Icon";
import styles from "./VideoSection.module.css";

const clip = gallery.videos.community;

/**
 * Full-width band below "Why choose us". The portrait clip sits sharp
 * in the center over a blurred copy of its poster frame. It plays muted
 * while on screen (browsers block autoplay with sound); visitors can
 * pause it or turn the sound on. With reduced motion it starts paused.
 */
export function VideoSection() {
  const band = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const el = band.current;
    const v = video.current;
    if (!el || !v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) userPaused.current = true;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPaused.current) v.play().catch(() => undefined);
        else if (!entry.isIntersecting) v.pause();
      },
      { threshold: 0.35 },
    );
    io.observe(el);

    // Band grows from inset/rounded to full-bleed as it scrolls in.
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const p = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.9)));
        el.style.setProperty("--p", p.toFixed(3));
      });
    };
    if (reduce) el.style.setProperty("--p", "1");
    else {
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const togglePlay = () => {
    const v = video.current;
    if (!v) return;
    if (v.paused) {
      userPaused.current = false;
      v.play().catch(() => undefined);
    } else {
      userPaused.current = true;
      v.pause();
    }
  };

  const toggleSound = () => {
    const v = video.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted && v.paused) {
      userPaused.current = false;
      v.play().catch(() => undefined);
    }
  };

  return (
    <section className={styles.section} aria-labelledby="video-title">
      <h2 id="video-title" className="sr-only">
        Our plumbers in the community
      </h2>
      <div ref={band} className={styles.band} style={{ "--poster": `url(${clip.poster})` } as React.CSSProperties}>
        <div className={styles.player} data-reveal="scale">
          <video
            ref={video}
            className={styles.video}
            src={clip.src}
            poster={clip.poster}
            muted
            loop
            playsInline
            preload="metadata"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            aria-label="Short film: our plumbers at work in the community"
          />
          <div className={styles.controls}>
            <button
              type="button"
              className={styles.control}
              onClick={toggleSound}
              aria-label={muted ? "Turn sound on" : "Turn sound off"}
              aria-pressed={!muted}
            >
              <Icon name={muted ? "soundOff" : "soundOn"} size={20} />
            </button>
            <button
              type="button"
              className={styles.control}
              onClick={togglePlay}
              aria-label={playing ? "Pause video" : "Play video"}
            >
              <Icon name={playing ? "pause" : "play"} size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
