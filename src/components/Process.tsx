import { steps } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import { AdjustableWrench } from "@/components/ui/Tools";
import styles from "./Process.module.css";

/** Pipe run linking the four step icons (desktop). Column centers sit at 12.5/37.5/62.5/87.5%. */
const pipe =
  "M10 60 H125 M125 60 H170 Q182 60 182 72 V128 Q182 140 194 140 H306 Q318 140 318 128 V72 Q318 60 330 60 H375" +
  " M375 60 H420 Q432 60 432 72 V128 Q432 140 444 140 H556 Q568 140 568 128 V72 Q568 60 580 60 H625" +
  " M625 60 H670 Q682 60 682 72 V128 Q682 140 694 140 H806 Q818 140 818 128 V72 Q818 60 830 60 H875" +
  " M875 60 H940 Q952 60 952 72 V150";

export function Process() {
  return (
    <section id="process" className={styles.wrap} aria-labelledby="process-title">
      <div className={`container ${styles.panel}`}>
        <AdjustableWrench className={styles.wrench} />

        <div className="section-head section-head-center" data-reveal>
          <span className="eyebrow">How it works</span>
          <h2 id="process-title" className="h2">
            From First Call <em>To Fixed</em>
          </h2>
          <p className="lead">
            Four simple steps, no vague arrival windows and no surprise invoices — here&apos;s what happens after you
            get in touch.
          </p>
        </div>

        <div className={styles.flow} data-reveal="fade">
          <svg className={styles.pipe} viewBox="0 0 1000 180" preserveAspectRatio="none" aria-hidden="true">
            <path d={pipe} className={styles.pipeOuter} />
            <path d={pipe} className={styles.pipeInner} />
            <path d={pipe} className={styles.pipeShine} />
            <rect x="0" y="44" width="14" height="32" rx="3" className={styles.flange} />
            <rect x="940" y="146" width="24" height="12" rx="3" className={styles.flange} />
          </svg>

          <ol className={styles.steps}>
            {steps.map((s, i) => (
              <li key={s.title} style={{ "--i": i } as React.CSSProperties}>
                <span className={styles.icon}>
                  <Icon name={s.icon} size={30} />
                </span>
                <span className={styles.num}>Step {String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title.replace(/^./, (c) => c.toUpperCase())}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
