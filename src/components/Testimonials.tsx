"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gallery } from "@/config/gallery";
import { site } from "@/config/site";
import { stats, testimonials } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import { Pliers, PipeWrench } from "@/components/ui/Tools";
import styles from "./Testimonials.module.css";

const AUTOPLAY_MS = 7000;
const rating = stats[2];
const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .replace(".", "");

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const count = testimonials.length;

  const go = useCallback((dir: 1 | -1) => setIndex((i) => (i + dir + count) % count), [count]);

  // Gentle autoplay; stops on hover/focus and when reduced motion is preferred.
  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => go(1), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [index, paused, go]);

  const t = testimonials[index];

  return (
    <section id="testimonials" className={`section ${styles.section}`} aria-labelledby="testimonials-title">
      <Pliers className={styles.toolLeft} />
      <PipeWrench className={styles.toolRight} />

      <div className="container">
        <div className="section-head section-head-center" data-reveal>
          <span className="eyebrow">Testimonials</span>
          <h2 id="testimonials-title" className="h2">
            What Our <em>Customers Say</em>
          </h2>
          <p className="lead">Real feedback on the work, the communication and how we left the place afterwards.</p>
          {site.isPlaceholder && (
            <p className={styles.note}>
              <span className="sample-note">Sample reviews — replace with real customer feedback before launch</span>
            </p>
          )}
        </div>

        <div
          className={styles.card}
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer testimonials"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
          data-reveal
        >
          <div className={styles.visual}>
            <Image
              src={gallery.sections.testimonials}
              alt="Plumber repairing an outdoor hose bib beside a house"
              fill
              sizes="(min-width: 1024px) 460px, 100vw"
            />
          </div>

          <div className={styles.body}>
            <div className={styles.rating}>
              <span className={styles.stars} aria-hidden="true">
                {Array.from({ length: 5 }, (_, i) => (
                  <Icon key={i} name="star" size={16} />
                ))}
              </span>
              <span>
                {rating.value.toFixed(rating.decimals ?? 0)}
                {rating.suffix}
              </span>
              <span className={styles.ratingNote}>{rating.label}</span>
            </div>

            <div
              key={index}
              className={styles.slide}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${count}`}
              aria-live={paused ? "polite" : "off"}
            >
              <blockquote className={styles.quote}>
                <p>&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <p className={styles.person}>
                <strong>{t.name}</strong>
                <span>
                  {t.location} · {t.service}
                </span>
              </p>
            </div>

            <div className={styles.avatars}>
              {testimonials.map((x, i) => (
                <button
                  key={x.name}
                  type="button"
                  className={i === index ? styles.avatarActive : styles.avatar}
                  aria-label={`Show review from ${x.name}`}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                >
                  {initials(x.name)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.arrows}>
          <button type="button" className={styles.arrow} onClick={() => go(-1)} aria-label="Previous testimonial">
            <Icon name="arrowLeft" size={18} />
          </button>
          <button type="button" className={styles.arrow} onClick={() => go(1)} aria-label="Next testimonial">
            <Icon name="arrow" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
