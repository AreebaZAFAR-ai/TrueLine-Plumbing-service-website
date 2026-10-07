"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import styles from "./TipsChecklist.module.css";

/** "Before we arrive" list the visitor can tick off, with a progress ring. */
export function TipsChecklist({ tips, phone }: { tips: string[]; phone: { href: string; display: string } }) {
  const [done, setDone] = useState<boolean[]>(() => tips.map(() => false));
  const count = done.filter(Boolean).length;
  const ratio = tips.length ? count / tips.length : 0;
  const r = 34;
  const c = 2 * Math.PI * r;

  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <div className={styles.ring} aria-hidden="true">
          <svg viewBox="0 0 80 80" width="80" height="80">
            <circle cx="40" cy="40" r={r} className={styles.ringBg} />
            <circle
              cx="40"
              cy="40"
              r={r}
              className={styles.ringFg}
              strokeDasharray={c}
              strokeDashoffset={c * (1 - ratio)}
            />
          </svg>
          <span>
            {count}/{tips.length}
          </span>
        </div>
        <div>
          <h3 className={styles.title}>Before we arrive</h3>
          <p className={styles.sub} aria-live="polite">
            {count === tips.length
              ? "All done — you're ready for us."
              : `${tips.length - count} quick step${tips.length - count === 1 ? "" : "s"} to limit damage and save time.`}
          </p>
        </div>
      </div>

      <ul className={styles.list}>
        {tips.map((t, i) => (
          <li key={t}>
            <label className={`${styles.item} ${done[i] ? styles.checked : ""}`}>
              <input
                type="checkbox"
                checked={done[i]}
                onChange={() => setDone((d) => d.map((v, j) => (j === i ? !v : v)))}
              />
              <span className={styles.box} aria-hidden="true">
                <Icon name="check" size={14} />
              </span>
              <span className={styles.text}>{t}</span>
            </label>
          </li>
        ))}
      </ul>

      <a href={phone.href} className={styles.help}>
        <Icon name="phone" size={16} />
        Not sure how? Call {phone.display} and we&apos;ll talk you through it.
      </a>
    </div>
  );
}
