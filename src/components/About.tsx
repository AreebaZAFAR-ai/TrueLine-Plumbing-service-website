import Link from "next/link";
import Image from "next/image";
import { gallery } from "@/config/gallery";
import { site } from "@/config/site";
import { aboutPoints, stats } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import styles from "./About.module.css";

const years = stats[0];

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className={`container ${styles.layout}`}>
        <div className={styles.visual} data-reveal="scale">
          <div className={styles.photo}>
            <Image
              src={gallery.sections.about}
              alt="Plumber installing and wiring a wall-mounted water heater"
              fill
              sizes="(min-width: 1024px) 460px, 100vw"
            />
          </div>
          <p className={styles.badge}>
            <strong>
              {years.value}
              {years.suffix}
            </strong>
            <span>{years.label}</span>
          </p>
        </div>

        <div className={styles.copy} data-reveal>
          <span className="eyebrow">About our company</span>
          <h2 id="about-title" className="h2">
            Honest <em>Work</em>.<br />
            Lasting <em>Results</em>.
          </h2>
          <p className={`lead ${styles.lead}`}>
            {site.name} is a local plumbing team for homeowners and businesses. We combine careful workmanship, clear
            pricing and quick response times so every job is done once — and done properly.
          </p>
          <ul className={styles.list}>
            {aboutPoints.map((p) => (
              <li key={p}>
                <span className={styles.check} aria-hidden="true">
                  <Icon name="check" size={14} />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <Link href="/contact" className={`btn ${styles.cta}`}>
            Book a Plumber
          </Link>
          {site.isPlaceholder && (
            <p className={styles.note}>
              <span className="sample-note">Years badge uses sample figures from src/data/content.ts</span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
