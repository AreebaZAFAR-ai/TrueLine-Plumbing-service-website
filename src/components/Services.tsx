import Image from "next/image";
import Link from "next/link";
import { featuredSlugs, services } from "@/data/content";
import { contactUrl } from "@/lib/quote";
import { Icon } from "@/components/ui/Icon";
import styles from "./Services.module.css";

/**
 * 3×2 service card grid. Each card opens the Contact page with that
 * service already selected in the quote form.
 * `all` shows every service (used on the /services page).
 */
export function Services({ all = false }: { all?: boolean }) {
  const featured = all
    ? services
    : featuredSlugs
        .map((slug) => services.find((s) => s.slug === slug))
        .filter((s): s is (typeof services)[number] => Boolean(s));

  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Our services</span>
          <h2 id="services-title" className="h2">
            Plumbing Help For <br />
            <em>Every Room</em> &amp; Every Pipe
          </h2>
          <p className="lead">
            Small repairs, big installations and late-night emergencies — one team handles it all for homes and
            businesses.
          </p>
        </div>

        <ul className={`${styles.grid} ${all ? styles.gridAll : ""}`}>
          {featured.map((s, i) => (
            <li key={s.slug} data-reveal style={{ "--d": `${(i % 3) * 100}ms` } as React.CSSProperties}>
              <article className={styles.card}>
                <div className={styles.media}>
                  <Image
                    src={s.image}
                    alt={s.alt}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <span className={styles.icon}>
                  <Icon name={s.icon} size={26} />
                </span>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.text}>{s.description}</p>
                <Link href={contactUrl({ service: s.slug })} className={styles.link}>
                  <span>Request This Service</span>
                  <span className={styles.arrow}>
                    <Icon name="arrow" size={16} />
                  </span>
                  <span className="sr-only">: {s.title.toLowerCase()}</span>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
