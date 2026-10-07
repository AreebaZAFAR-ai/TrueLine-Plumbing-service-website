import Image from "next/image";
import { gallery } from "@/config/gallery";
import { site } from "@/config/site";
import { benefits } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import styles from "./WhyChooseUs.module.css";

const pick = (title: string) => benefits.find((b) => b.title === title) ?? benefits[0];

export function WhyChooseUs() {
  const featured = pick("Transparent pricing");
  const left = pick("Fast, reliable service");
  const rightTop = pick("Quality workmanship");
  const rightBottom = pick("24/7 emergency support");

  const card = (b: (typeof benefits)[number], cls: string, d: number) => (
    <article className={`${styles.card} ${cls}`} data-reveal style={{ "--d": `${d}ms` } as React.CSSProperties}>
      <span className={styles.icon}>
        <Icon name={b.icon} size={30} />
      </span>
      <div>
        <h3>{b.title.replace(/^./, (c) => c.toUpperCase())}</h3>
        <p>{b.text}</p>
      </div>
    </article>
  );

  return (
    <section id="why" className="section" aria-labelledby="why-title">
      <div className="container">
        <div className="section-head section-head-center" data-reveal>
          <span className="eyebrow">Why choose us</span>
          <h2 id="why-title" className="h2">
            Plumbing You Can <em>Rely On</em>
          </h2>
          <p className="lead">
            Straight answers, tidy work and a team that turns up when it says it will — that&apos;s why customers keep
            calling {site.name}.
          </p>
        </div>

        <div className={styles.bento}>
          {card(featured, styles.featured, 0)}
          {card(left, styles.a2, 120)}

          <div className={styles.center} data-reveal="scale">
            <div className={styles.photo}>
              <Image
                src={gallery.sections.whyChooseUs}
                alt="Plumber in uniform working at a kitchen sink with his tools laid out"
                fill
                sizes="(min-width: 1024px) 380px, 100vw"
              />
            </div>
            <div className={styles.trust}>
              <span className={styles.avatars} aria-hidden="true">
                {["JM", "AR", "KT"].map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </span>
              <p>
                <strong>Trusted locally</strong>
                <span>by homeowners &amp; businesses</span>
              </p>
            </div>
          </div>

          {card(rightTop, styles.c1, 60)}
          {card(rightBottom, styles.c2, 180)}
        </div>
      </div>
    </section>
  );
}
