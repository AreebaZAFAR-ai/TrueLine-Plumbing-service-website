import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/config/site";
import { sectors, services } from "@/data/content";
import { InnerPage } from "@/components/InnerPage";
import { DetailHero } from "@/components/detail/DetailHero";
import { HeroHighlights } from "@/components/detail/HeroHighlights";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { EmergencyCTA } from "@/components/EmergencyCTA";
import { FinalCTA } from "@/components/FinalCTA";
import { Icon } from "@/components/ui/Icon";
import styles from "../inner.module.css";

const description =
  "Leak detection, drain cleaning, water heaters, pipe repair, bathroom and kitchen plumbing, sewer lines and 24/7 emergency call-outs for homes and businesses.";

export const metadata: Metadata = {
  title: "Plumbing Services",
  description,
  alternates: { canonical: "/services" },
  openGraph: {
    title: `Plumbing Services — ${site.legalName}`,
    description,
    url: "/services",
    // The hero photo is too small for share cards, so keep the site-wide image.
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: `${site.name} plumber at work` }],
  },
};

export default function ServicesPage() {
  const schema = site.isPlaceholder
    ? []
    : [
        {
          "@type": "ItemList",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: { "@type": "Service", name: s.title, description: s.description },
          })),
        },
      ];

  return (
    <InnerPage path="/services" name="Services" schema={schema}>
      <DetailHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        eyebrow="Every plumbing job, one team"
        title="Our [Services]"
        lead="From a dripping tap to a full repipe, our plumbers diagnose the problem, agree the price with you first and fix it properly."
        next="#services"
        actions={
          <>
            <Link href="/contact" className="btn">
              Get Your Free Quote
            </Link>
            <a href={site.phone.href} className="btn btn-light">
              <Icon name="phone" size={18} />
              Call Now
            </a>
          </>
        }
        aside={
          <HeroHighlights
            items={[
              { title: "Price agreed first", text: "No work starts until you approve it", icon: "tag" },
              { title: "24/7 emergency line", text: "Answered by a person, day or night", icon: "siren" },
              { title: "Homes & businesses", text: "Houses, rentals, shops and offices", icon: "users" },
            ]}
          />
        }
      />

      <Services all />

      <section className={`section ${styles.tinted}`} aria-labelledby="sectors-title">
        <div className="container">
          <div className={`section-head ${styles.splitHead}`} data-reveal>
            <div>
              <span className="eyebrow">Who we work for</span>
              <h2 id="sectors-title" className="h2">
                Homes <em>&amp;</em> Businesses
              </h2>
            </div>
            <p className="lead">
              The same plumbers and the same standards whether it&apos;s your kitchen sink or a building&apos;s plant
              room.
            </p>
          </div>

          <div className={styles.sectors}>
            {sectors.map((s, i) => (
              <article
                key={s.title}
                className={styles.sector}
                data-reveal
                style={{ "--d": `${i * 120}ms` } as React.CSSProperties}
              >
                <div className={styles.sectorMedia}>
                  <Image src={s.image} alt={s.alt} fill sizes="(min-width: 1024px) 600px, 100vw" />
                  <span className={styles.sectorTag}>{s.title}</span>
                </div>
                <div className={styles.sectorBody}>
                  <p>{s.text}</p>
                  <ul className={styles.checks}>
                    {s.jobs.map((j) => (
                      <li key={j}>
                        <span aria-hidden="true">
                          <Icon name="check" size={14} />
                        </span>
                        {j}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="link-arrow">
                    Request a {s.title.toLowerCase()} quote <Icon name="arrow" size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <EmergencyCTA />
      <FinalCTA />
    </InnerPage>
  );
}
