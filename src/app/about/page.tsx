import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { gallery } from "@/config/gallery";
import { site } from "@/config/site";
import { aboutStory, stats, values } from "@/data/content";
import { InnerPage } from "@/components/InnerPage";
import { DetailHero } from "@/components/detail/DetailHero";
import { FinalCTA } from "@/components/FinalCTA";
import { Icon } from "@/components/ui/Icon";
import styles from "../inner.module.css";

const description = `Meet ${site.legalName}: a local plumbing team for homes and businesses that explains the problem, agrees the price first and tests every job before leaving.`;

export const metadata: Metadata = {
  title: "About Us",
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About — ${site.legalName}`,
    description,
    url: "/about",
    images: [{ url: gallery.pages.about, alt: `${site.name} plumber at work` }],
  },
};

const fmt = (s: (typeof stats)[number]) =>
  `${s.decimals ? s.value.toFixed(s.decimals) : s.value.toLocaleString("en-US")}${s.suffix}`;

export default function AboutPage() {
  return (
    <InnerPage path="/about" name="About">
      <DetailHero
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="Plumbers who do it properly"
        title="About [Us]"
        lead="We're a local team of plumbers for homes and businesses. Clear answers, fair prices and work that's tested before we pack up the van."
        next="#story"
        actions={
          <>
            <Link href="/contact" className="btn">
              Book a Plumber
            </Link>
            <Link href="/how-it-works" className="btn btn-light">
              How We Work
            </Link>
          </>
        }
      />

      <section id="story" className="section" aria-labelledby="story-title">
        <div className={`container ${styles.story}`}>
          <div className={styles.collage} data-reveal="scale">
            <div className={styles.imgA}>
              <Image
                src={gallery.sections.about}
                alt="Plumber installing and wiring a wall-mounted water heater"
                fill
                sizes="(min-width: 1024px) 340px, 60vw"
              />
            </div>
            <div className={styles.imgB}>
              <Image
                src={gallery.sections.contact}
                alt="Plumber tightening a sink faucet with tools laid out on the counter"
                fill
                sizes="(min-width: 1024px) 260px, 45vw"
              />
            </div>
          </div>

          <div data-reveal>
            <span className="eyebrow">Our story</span>
            <h2 id="story-title" className="h2">
              Built On <em>Repeat Customers</em>
            </h2>
            <div className={styles.prose}>
              {aboutStory.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="container">
          <dl className={styles.stats} data-reveal>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <dt>{s.label}</dt>
                <dd>{fmt(s)}</dd>
              </div>
            ))}
          </dl>
          {site.isPlaceholder && (
            <p className={styles.statsNote}>
              <span className="sample-note">Sample figures — edit them in src/data/content.ts</span>
            </p>
          )}
        </div>
      </section>

      <section className={`section ${styles.dark}`} data-band aria-labelledby="values-title">
        <div className="container">
          <div className={`section-head ${styles.splitHead}`} data-reveal>
            <div>
              <span className="eyebrow">What we stand for</span>
              <h2 id="values-title" className="h2">
                How We <em>Work</em>
              </h2>
            </div>
            <p className={`lead ${styles.leadDark}`}>
              Four things we hold every job to, whether it&apos;s a ten-minute fix or a two-week renovation.
            </p>
          </div>

          <ol className={styles.values}>
            {values.map((v, i) => (
              <li
                key={v.title}
                className={styles.value}
                data-reveal
                style={{ "--d": `${i * 90}ms` } as React.CSSProperties}
              >
                <span className={styles.valueTop}>
                  <span className={styles.valueIcon}>
                    <Icon name={v.icon} size={24} />
                  </span>
                  <span className={styles.valueNum}>{String(i + 1).padStart(2, "0")}</span>
                </span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FinalCTA />
    </InnerPage>
  );
}
