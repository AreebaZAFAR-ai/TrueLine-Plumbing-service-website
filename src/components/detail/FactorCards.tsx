"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import type { ServiceDetail } from "@/data/service-details";
import styles from "./FactorCards.module.css";

/** "What affects the price" cards that open to explain each factor. */
export function FactorCards({ factors }: { factors: ServiceDetail["factors"] }) {
  const [open, setOpen] = useState<number[]>([0]);
  const toggle = (i: number) => setOpen((o) => (o.includes(i) ? o.filter((x) => x !== i) : [...o, i]));

  return (
    <ul className={styles.grid}>
      {factors.map((f, i) => {
        const isOpen = open.includes(i);
        return (
          <li key={f.title} className={`${styles.card} ${isOpen ? styles.open : ""}`}>
            <h4>
              <button
                type="button"
                className={styles.btn}
                aria-expanded={isOpen}
                aria-controls={`factor-${i}`}
                onClick={() => toggle(i)}
              >
                <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                <span className={styles.title}>{f.title}</span>
                <span className={styles.plus} aria-hidden="true">
                  <Icon name="plus" size={18} />
                </span>
              </button>
            </h4>
            <div id={`factor-${i}`} className={styles.body} inert={!isOpen}>
              <div>
                <p>{f.text}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
