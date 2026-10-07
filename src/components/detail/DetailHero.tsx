import { Fragment } from "react";
import Link from "next/link";
import { HeroVideo } from "@/components/HeroVideo";
import styles from "./DetailHero.module.css";

type Crumb = { label: string; href?: string };

/**
 * Full-bleed hero for the inner pages, playing the same background
 * video as the home page hero.
 * In `title`, wrap the words to highlight in [brackets].
 */
export function DetailHero({
  crumbs,
  eyebrow,
  title,
  lead,
  actions,
  aside,
  next = "#overview",
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  lead: string;
  actions?: React.ReactNode;
  aside?: React.ReactNode;
  /** Section the scroll cue jumps to. */
  next?: string;
}) {
  // "Find The Leak. [Fix It Properly.]" -> words tagged with highlight flag
  const words = title
    .split(/(\[[^\]]+\])/)
    .filter(Boolean)
    .flatMap((part) => {
      const hl = part.startsWith("[");
      return part
        .replace(/[[\]]/g, "")
        .trim()
        .split(/\s+/)
        .map((w) => ({ w, hl }));
    });

  return (
    <section id="top" className={styles.hero} aria-labelledby="detail-title">
      <div className={styles.media}>
        <HeroVideo className={styles.img} />
      </div>
      <div className={styles.shade} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <nav aria-label="Breadcrumb" className={styles.crumbs}>
          <ol>
            {crumbs.map((c, i) => (
              <li key={c.label}>
                {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                {i < crumbs.length - 1 && <span className={styles.sep} aria-hidden="true">/</span>}
              </li>
            ))}
          </ol>
        </nav>

        <div className={styles.grid}>
          <div>
            <p className={styles.badge}>{eyebrow}</p>
            <h1 id="detail-title" className={styles.title}>
              {words.map(({ w, hl }, i) => (
                <Fragment key={i}>
                  <span className={styles.word}>
                    <span className={hl ? styles.hl : undefined} style={{ "--i": i } as React.CSSProperties}>
                      {w}
                    </span>
                  </span>{" "}
                </Fragment>
              ))}
            </h1>
            <p className={styles.lead}>{lead}</p>
            {actions && <div className={styles.ctas}>{actions}</div>}
          </div>
          {aside && <div className={styles.aside}>{aside}</div>}
        </div>
      </div>

      <a href={next} className={styles.scrollCue} aria-label="Scroll to details">
        <span />
      </a>
    </section>
  );
}
