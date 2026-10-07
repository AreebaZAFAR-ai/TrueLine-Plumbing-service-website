"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/config/site";
import { areas } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import styles from "./ServiceAreas.module.css";

/** Abstract street map drawn in SVG — not real geography. */
function MapArt() {
  return (
    <svg className={styles.art} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <path d="M-5 78 C 15 70, 30 86, 48 74 S 78 52, 105 62" className={styles.river} />
      <path d="M-5 20 C 20 30, 35 10, 60 22 S 90 30, 105 12" className={styles.road} />
      <path d="M10 -5 C 18 30, 6 60, 22 105" className={styles.road} />
      <path d="M72 -5 C 66 30, 84 62, 74 105" className={styles.road} />
      <path d="M-5 46 C 30 52, 60 40, 105 48" className={styles.road} />
      {[30, 42, 58, 88].map((x) => (
        <line key={`v${x}`} x1={x} y1="0" x2={x - 4} y2="100" className={styles.street} />
      ))}
      {[10, 34, 60, 92].map((y) => (
        <line key={`h${y}`} x1="0" y1={y} x2="100" y2={y + 3} className={styles.street} />
      ))}
    </svg>
  );
}

export function ServiceAreas() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="areas" className="section" aria-labelledby="areas-title">
      <div className={`container ${styles.layout}`}>
        <div className={styles.copy}>
          <div data-reveal>
            <span className="eyebrow">Service areas</span>
            <h2 id="areas-title" className="h2">
              Local Plumbers, <br />
              <em>Close To Home</em>
            </h2>
            <p className={`lead ${styles.lead}`}>
              Our team covers the neighborhoods below and the surrounding streets, so help is never far away.
            </p>
            {site.isPlaceholder && (
              <p className={styles.note}>
                <span className="sample-note">Example areas — edit the list in src/data/content.ts</span>
              </p>
            )}
          </div>

          <ul className={styles.list} data-reveal>
            {areas.map((a, i) => (
              <li key={a.name}>
                <button
                  type="button"
                  className={i === active ? styles.itemActive : styles.item}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  aria-label={`Show ${a.name} on the map`}
                >
                  <span className={styles.pinTile}>
                    <Icon name="pin" size={20} />
                  </span>
                  {a.name}
                </button>
              </li>
            ))}
          </ul>

          <Link href="/contact" className={styles.info} data-reveal>
            <span className={styles.infoIcon} aria-hidden="true">
              i
            </span>
            <span className={styles.infoText}>
              <strong>Not sure if we cover your area?</strong>
              <span>Get in touch — we&apos;ll let you know right away.</span>
            </span>
            <span className={styles.infoArrow}>
              <Icon name="arrow" size={16} />
            </span>
          </Link>
        </div>

        <div className={styles.map} data-reveal="scale" aria-hidden="true">
          <MapArt />
          <svg className={styles.links} viewBox="0 0 100 100" preserveAspectRatio="none">
            {areas.map((a, i) => (
              <line
                key={a.name}
                x1="50"
                y1="50"
                x2={a.x}
                y2={a.y}
                className={i === active ? styles.linkActive : styles.link}
              />
            ))}
          </svg>
          <span className={styles.hub}>
            <Icon name="tap" size={38} />
          </span>
          {areas.map((a, i) => (
            <span
              key={a.name}
              className={i === active ? styles.pinActive : styles.pin}
              style={{ left: `${a.x}%`, top: `${a.y}%` }}
            >
              <svg viewBox="0 0 24 24" className={styles.pinIcon}>
                <path d="M12 23s-8-7.2-8-13.2a8 8 0 0 1 16 0C20 15.8 12 23 12 23Z" />
                <circle cx="12" cy="9.8" r="3" fill="#fff" />
              </svg>
              <span className={styles.pinLabel}>{a.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
