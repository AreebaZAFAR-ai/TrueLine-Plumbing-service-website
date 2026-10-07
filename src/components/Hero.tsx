import Link from "next/link";
import { Fragment } from "react";
import { HeroVideo } from "@/components/HeroVideo";
import { site } from "@/config/site";
import { Icon } from "@/components/ui/Icon";
import styles from "./Hero.module.css";

const lines = [
  ["Dependable", "Plumbing,"],
  ["Done", "Right", "Every", "Time"],
];

export function Hero() {
  let i = 0;
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.media}>
        <HeroVideo className={styles.img} />
      </div>
      <div className={styles.shade} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <p className={styles.badge}>Emergency line open 24/7</p>

        <h1 id="hero-title" className={styles.title}>
          {lines.map((line, li) => (
            <span key={li} className={styles.line}>
              {line.map((word) => {
                const n = i++;
                return (
                  <Fragment key={word}>
                    <span className={styles.word}>
                      <span style={{ "--i": n } as React.CSSProperties}>{word}</span>
                    </span>{" "}
                  </Fragment>
                );
              })}
            </span>
          ))}
        </h1>

        <p className={styles.lead}>
          Leaks, blocked drains, water heaters and full repipes — {site.name}&apos;s plumbers fix it properly, explain
          the price before they start and leave your space clean.
        </p>

        <div className={styles.ctas}>
          <Link href="/contact" className="btn">
            Get Your Free Quote
          </Link>
          <a href={site.phone.href} className="btn btn-light">
            <Icon name="phone" size={18} />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
