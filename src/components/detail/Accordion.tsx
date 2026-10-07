"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import styles from "@/components/FAQ.module.css";

/** Same look and behaviour as the home page FAQ, for any list of Q&As. */
export function Accordion({ items, idPrefix = "acc" }: { items: { q: string; a: string }[]; idPrefix?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className={styles.list}>
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className={`${styles.item} ${isOpen ? styles.open : ""}`}>
            <h3>
              <button
                type="button"
                id={`${idPrefix}-q-${i}`}
                aria-expanded={isOpen}
                aria-controls={`${idPrefix}-a-${i}`}
                className={styles.question}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{f.q}</span>
                <span className={styles.toggle} aria-hidden="true">
                  <Icon name="chevron" size={20} />
                </span>
              </button>
            </h3>
            <div
              id={`${idPrefix}-a-${i}`}
              role="region"
              aria-labelledby={`${idPrefix}-q-${i}`}
              className={styles.answer}
              inert={!isOpen}
            >
              <div>
                <p>{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
