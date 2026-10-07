"use client";

import { useMemo, useState } from "react";
import { site } from "@/config/site";
import { urgencyCopy, type ServiceDetail, type Urgency } from "@/data/service-details";
import Link from "next/link";
import { contactUrl } from "@/lib/quote";
import { Icon } from "@/components/ui/Icon";
import styles from "./SymptomChecker.module.css";

/**
 * "What are you noticing?" — visitors tap the signs that match, get a
 * plain-language urgency read-out, and can take the list to the quote
 * form on the Contact page.
 */
export function SymptomChecker({
  service,
  serviceTitle,
  symptoms,
}: {
  service: string;
  serviceTitle: string;
  symptoms: ServiceDetail["symptoms"];
}) {
  const [picked, setPicked] = useState<number[]>([]);

  const level = useMemo(
    () => picked.reduce<Urgency | 0>((max, i) => Math.max(max, symptoms[i].level) as Urgency, 0),
    [picked, symptoms],
  );
  const copy = level ? urgencyCopy[level] : null;

  const toggle = (i: number) => {
    setPicked((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));
  };

  // Opens the Contact page with this service and the picked signs filled in.
  const lines = picked.map((i) => `- ${symptoms[i].label}`).join("\n");
  const quoteHref = contactUrl({ service, message: `${serviceTitle} — signs I've noticed:\n${lines}\n\n` });

  return (
    <div className={styles.wrap} data-level={level}>
      <div className={styles.left}>
        <span className="eyebrow">Symptom checker</span>
        <h2 id="signs-title" className={`h2 ${styles.title}`}>
          What Are You <em>Noticing?</em>
        </h2>
        <p className={styles.lead}>
          Tap every sign that matches. We&apos;ll tell you how urgent it sounds — and you can send the list straight
          to us with your quote request.
        </p>

        <ul className={styles.chips} aria-label="Signs">
          {symptoms.map((s, i) => {
            const on = picked.includes(i);
            return (
              <li key={s.label}>
                <button
                  type="button"
                  aria-pressed={on}
                  className={`${styles.chip} ${on ? styles.on : ""}`}
                  onClick={() => toggle(i)}
                >
                  <span className={styles.tick} aria-hidden="true">
                    <Icon name={on ? "check" : "plus"} size={14} />
                  </span>
                  {s.label}
                </button>
              </li>
            );
          })}
        </ul>
        {picked.length > 0 && (
          <button type="button" className={styles.reset} onClick={() => setPicked([])}>
            Clear selection
          </button>
        )}
      </div>

      <div className={styles.result} aria-live="polite">
        <div className={styles.meter} aria-hidden="true">
          {[1, 2, 3].map((n) => (
            <span key={n} className={level >= n ? styles.lit : undefined} />
          ))}
        </div>
        <div className={styles.scale} aria-hidden="true">
          <span>Monitor</span>
          <span>Book soon</span>
          <span>Urgent</span>
        </div>

        {copy ? (
          <div key={level} className={styles.readout}>
            <p className={styles.pill}>{copy.label}</p>
            <h3 className={styles.resultTitle}>{copy.title}</h3>
            <p className={styles.resultText}>{copy.text}</p>
            <p className={styles.count}>
              {picked.length} sign{picked.length === 1 ? "" : "s"} selected
            </p>
            <div className={styles.actions}>
              {level === 3 ? (
                <>
                  <a href={site.emergencyPhone.href} className="btn">
                    <Icon name="phone" size={18} />
                    Call {site.emergencyPhone.display}
                  </a>
                  <Link href={quoteHref} className={`btn btn-ghost ${styles.ghost}`}>
                    Send details instead
                  </Link>
                </>
              ) : (
                <>
                  <Link href={quoteHref} className="btn">
                    Add to my quote request
                    <span className="btn-icon">
                      <Icon name="arrow" size={16} />
                    </span>
                  </Link>
                  <a href={site.phone.href} className={`btn btn-ghost ${styles.ghost}`}>
                    <Icon name="phone" size={16} />
                    Call us
                  </a>
                </>
              )}
            </div>
          </div>
        ) : (
          <div className={styles.readout}>
            <p className={styles.pill}>Waiting for you</p>
            <h3 className={styles.resultTitle}>Pick the signs you&apos;ve seen</h3>
            <p className={styles.resultText}>
              Your result appears here. It&apos;s general guidance only — if water is escaping or you smell gas, call
              straight away.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
