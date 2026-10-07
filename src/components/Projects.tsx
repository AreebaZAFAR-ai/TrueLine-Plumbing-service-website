import Image from "next/image";
import { projects } from "@/data/content";
import styles from "./Projects.module.css";

/**
 * Endless sliding strip of project photos. The list is rendered twice
 * so the CSS animation can loop seamlessly; the copy is hidden from
 * assistive tech. Pauses on hover/focus; static and swipeable when
 * reduced motion is preferred.
 */
export function Projects() {
  const card = (p: (typeof projects)[number], dup: boolean, i: number) => (
    <li key={`${dup ? "d" : "o"}-${i}`} className={styles.item} aria-hidden={dup || undefined}>
      <figure className={styles.figure}>
        <Image src={p.image} alt={dup ? "" : p.alt} fill sizes="(min-width: 1024px) 460px, 80vw" />
        <figcaption className={styles.caption}>
          <span className={styles.cat}>{p.category}</span>
          <span className={styles.title}>{p.title}</span>
        </figcaption>
      </figure>
    </li>
  );

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Featured projects</span>
          <h2 id="projects-title" className="h2">
            Recent Work <em>We&apos;re Proud Of</em>
          </h2>
          <p className="lead">
            A look at jobs we&apos;ve finished recently — from quick kitchen fixes to full bathroom and plant-room
            installations.
          </p>
        </div>
      </div>

      <div className={styles.viewport} data-reveal="fade">
        <ul className={styles.track}>
          {projects.map((p, i) => card(p, false, i))}
          {projects.map((p, i) => card(p, true, i))}
        </ul>
      </div>
    </section>
  );
}
