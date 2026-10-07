"use client";

import { useState } from "react";
import Image from "next/image";
import { gallery } from "@/config/gallery";
import { site } from "@/config/site";
import { faqs } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import styles from "./FAQ.module.css";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className={`section ${styles.section}`} aria-labelledby="faq-title">
      <div className={`container ${styles.layout}`}>
        <div className={styles.intro}>
          <div className={styles.collage} data-reveal="scale">
            <div className={styles.imgA}>
              <Image src={gallery.sections.faq1} alt="Plumber running a camera inspection of a sewer line outside a home" fill sizes="(min-width: 1024px) 300px, 60vw" />
            </div>
            <div className={styles.imgB}>
              <Image src={gallery.sections.faq2} alt="Plumber checking a leak under a kitchen sink while the homeowner watches" fill sizes="(min-width: 1024px) 240px, 45vw" />
            </div>
          </div>

          <a href={site.phone.href} className={styles.callCard} data-reveal>
            <span className={styles.callIcon}>
              <Icon name="phone" size={20} />
            </span>
            <span>
              <small>Still have a question?</small>
              <strong>Call {site.phone.display}</strong>
            </span>
          </a>
        </div>

        <div className={styles.right}>
          <div data-reveal>
            <span className="eyebrow">Got questions?</span>
            <h2 id="faq-title" className="h2">
              Your Plumbing <br />
              <em>Questions, Answered</em>
            </h2>
            <p className={`lead ${styles.lead}`}>
              Quick answers about our services, pricing, response times and what to expect when we visit.
            </p>
          </div>
        <div className={styles.list}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`${styles.item} ${isOpen ? styles.open : ""}`} data-reveal style={{ "--d": `${i * 50}ms` } as React.CSSProperties}>
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    className={styles.question}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{f.q}</span>
                    <span className={styles.toggle} aria-hidden="true">
                      <Icon name="chevron" size={20} />
                    </span>
                  </button>
                </h3>
                <div id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`} className={styles.answer} inert={!isOpen}>
                  <div>
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}
