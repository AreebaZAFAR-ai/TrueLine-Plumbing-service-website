"use client";

import { useEffect, useRef, useState } from "react";
import { Icon, type AnyIcon } from "@/components/ui/Icon";
import type { ServiceDetail } from "@/data/service-details";
import styles from "./ProcessStepper.module.css";

const icons: AnyIcon[] = ["phone", "search", "wrench", "shield"];

/**
 * Tabbed walk-through of a job. Auto-advances while on screen (the
 * progress bar is a CSS animation; when it ends we move on). Any click
 * or key press hands control to the visitor. No autoplay with
 * reduced motion.
 */
export function ProcessStepper({ steps }: { steps: ServiceDetail["steps"] }) {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [inView, setInView] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setAuto(false);
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.45 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const select = (i: number, focus = false) => {
    setAuto(false);
    setActive(i);
    if (focus) tabsRef.current[i]?.focus();
  };

  const onKey = (e: React.KeyboardEvent) => {
    const n = steps.length;
    const map: Record<string, number> = {
      ArrowRight: (active + 1) % n,
      ArrowDown: (active + 1) % n,
      ArrowLeft: (active - 1 + n) % n,
      ArrowUp: (active - 1 + n) % n,
      Home: 0,
      End: n - 1,
    };
    if (e.key in map) {
      e.preventDefault();
      select(map[e.key], true);
    }
  };

  const step = steps[active];
  const playing = auto && inView;

  return (
    <div ref={rootRef} className={styles.wrap}>
      <div className={styles.tabs} role="tablist" aria-label="Job steps" aria-orientation="vertical" onKeyDown={onKey}>
        {steps.map((s, i) => (
          <button
            key={s.title}
            ref={(el) => {
              tabsRef.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`step-tab-${i}`}
            aria-selected={active === i}
            aria-controls="step-panel"
            tabIndex={active === i ? 0 : -1}
            className={`${styles.tab} ${active === i ? styles.current : ""} ${i < active ? styles.done : ""}`}
            onClick={() => select(i)}
          >
            <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
            <span className={styles.tabTitle}>{s.title}</span>
            <span className={styles.track} aria-hidden="true">
              {active === i && (
                <span
                  key={`${i}-${auto}`}
                  className={`${styles.fill} ${auto ? "" : styles.full}`}
                  style={{ animationPlayState: playing ? "running" : "paused" }}
                  onAnimationEnd={() => setActive((a) => (a + 1) % steps.length)}
                />
              )}
            </span>
          </button>
        ))}
      </div>

      <div id="step-panel" role="tabpanel" aria-labelledby={`step-tab-${active}`} className={styles.panel}>
        <div key={active} className={styles.panelInner}>
          <div className={styles.panelHead}>
            <span className={styles.icon}>
              <Icon name={icons[active] ?? "check"} size={28} />
            </span>
            <span className={styles.bigNum} aria-hidden="true">
              {String(active + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className={styles.panelTitle}>{step.title}</h3>
          <p className={styles.panelText}>{step.text}</p>
          <ul className={styles.points}>
            {step.points.map((p, i) => (
              <li key={p} style={{ "--d": `${i * 80 + 150}ms` } as React.CSSProperties}>
                <Icon name="check" size={16} />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.ctrl}
            aria-label="Previous step"
            onClick={() => select((active - 1 + steps.length) % steps.length)}
          >
            <Icon name="arrowLeft" size={18} />
          </button>
          <button type="button" className={styles.ctrl} aria-label={auto ? "Pause walkthrough" : "Play walkthrough"} onClick={() => setAuto((a) => !a)}>
            <Icon name={auto ? "pause" : "play"} size={16} />
          </button>
          <button
            type="button"
            className={styles.ctrl}
            aria-label="Next step"
            onClick={() => select((active + 1) % steps.length)}
          >
            <Icon name="arrow" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
