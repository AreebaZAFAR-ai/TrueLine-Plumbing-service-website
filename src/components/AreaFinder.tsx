"use client";

import { useId, useState } from "react";
import { useRouter } from "next/navigation";
import { areas } from "@/data/content";
import { contactUrl } from "@/lib/quote";
import { Icon } from "@/components/ui/Icon";
import styles from "./AreaFinder.module.css";

/**
 * Search box + card grid of the areas in `src/data/content.ts`.
 * Each card (and the "not listed" fallback) opens the Contact page with
 * the area already written into the quote form.
 */
export function AreaFinder() {
  const router = useRouter();
  const askAbout = (message: string) => router.push(contactUrl({ message }));
  const [query, setQuery] = useState("");
  const inputId = useId();
  const q = query.trim().toLowerCase();
  const matches = q ? areas.filter((a) => a.name.toLowerCase().includes(q)) : areas;

  return (
    <div className={styles.finder}>
      <div className={styles.search}>
        <label htmlFor={inputId} className={styles.label}>
          Check your neighborhood
        </label>
        <div className={styles.inputWrap}>
          <Icon name="search" size={20} />
          <input
            id={inputId}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Start typing an area name…"
            autoComplete="off"
            aria-controls={`${inputId}-results`}
          />
        </div>
        <p className={styles.count} aria-live="polite">
          {q
            ? matches.length
              ? `${matches.length} area${matches.length === 1 ? "" : "s"} match “${query.trim()}”`
              : `No listed area matches “${query.trim()}”`
            : `${areas.length} areas on our regular routes`}
        </p>
      </div>

      <div id={`${inputId}-results`}>
        {matches.length > 0 ? (
          <ul className={styles.grid}>
            {matches.map((a) => (
              <li key={a.name}>
                <button
                  type="button"
                  className={styles.card}
                  onClick={() => askAbout(`I'm in ${a.name}. `)}
                >
                  <span className={styles.pin}>
                    <Icon name="pin" size={22} />
                  </span>
                  <span className={styles.name}>{a.name}</span>
                  <span className={styles.action}>
                    Book a plumber here
                    <Icon name="arrow" size={16} />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.empty}>
            <p>
              <strong>Not on the list?</strong> We may still be able to help — send us your location and we&apos;ll
              confirm straight away.
            </p>
            <button
              type="button"
              className="btn"
              onClick={() => askAbout(`I'm in ${query.trim()} — do you cover my area? `)}
            >
              Ask about {query.trim()}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
