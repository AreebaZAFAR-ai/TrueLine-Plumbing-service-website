"use client";

import { useRef, useState } from "react";
import { Icon, type AnyIcon } from "@/components/ui/Icon";
import type { Project } from "@/data/content";
import styles from "./ProjectStory.module.css";

type Tab = { key: string; label: string; icon: AnyIcon };

const tabs: Tab[] = [
  { key: "challenge", label: "The challenge", icon: "search" },
  { key: "approach", label: "Our approach", icon: "wrench" },
  { key: "result", label: "The result", icon: "badge" },
];

/** Challenge / approach / result told as three tabs with a sliding indicator. */
export function ProjectStory({ project }: { project: Project }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: React.KeyboardEvent) => {
    const n = tabs.length;
    const next =
      e.key === "ArrowRight" ? (active + 1) % n : e.key === "ArrowLeft" ? (active - 1 + n) % n : null;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    refs.current[next]?.focus();
  };

  return (
    <div className={styles.wrap}>
      <div
        className={styles.tabs}
        role="tablist"
        aria-label="Project story"
        onKeyDown={onKey}
        style={{ "--i": active, "--n": tabs.length } as React.CSSProperties}
      >
        <span className={styles.indicator} aria-hidden="true" />
        {tabs.map((t, i) => (
          <button
            key={t.key}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`story-tab-${t.key}`}
            aria-selected={active === i}
            aria-controls="story-panel"
            tabIndex={active === i ? 0 : -1}
            className={`${styles.tab} ${active === i ? styles.current : ""}`}
            onClick={() => setActive(i)}
          >
            <Icon name={t.icon} size={18} />
            <span>{t.label}</span>
          </button>
        ))}
      </div>

      <div id="story-panel" role="tabpanel" aria-labelledby={`story-tab-${tabs[active].key}`} className={styles.panel}>
        <div key={active} className={styles.inner}>
          {active === 0 && <p className={styles.big}>{project.challenge}</p>}
          {active === 1 && (
            <ol className={styles.steps}>
              {project.approach.map((a, i) => (
                <li key={a} style={{ "--d": `${i * 90}ms` } as React.CSSProperties}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {a}
                </li>
              ))}
            </ol>
          )}
          {active === 2 && (
            <div className={styles.result}>
              <span className={styles.resultIcon}>
                <Icon name="check" size={26} />
              </span>
              <p className={styles.big}>{project.result}</p>
            </div>
          )}
        </div>
        <div className={styles.pager}>
          <span>
            {active + 1} / {tabs.length}
          </span>
          {active < tabs.length - 1 && (
            <button type="button" className="link-arrow" onClick={() => setActive(active + 1)}>
              Next: {tabs[active + 1].label.toLowerCase()} <Icon name="arrow" size={16} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
