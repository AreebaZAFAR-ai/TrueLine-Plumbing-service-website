import type { Metadata } from "next";
import Link from "next/link";
import { gallery } from "@/config/gallery";
import { site } from "@/config/site";
import { areas, services } from "@/data/content";
import { InnerPage } from "@/components/InnerPage";
import { DetailHero } from "@/components/detail/DetailHero";
import { HeroHighlights } from "@/components/detail/HeroHighlights";
import { ServiceAreas } from "@/components/ServiceAreas";
import { AreaFinder } from "@/components/AreaFinder";
import { EmergencyCTA } from "@/components/EmergencyCTA";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { contactUrl } from "@/lib/quote";
import { Icon } from "@/components/ui/Icon";
import styles from "../inner.module.css";

const description = `Local plumbers serving ${areas.map((a) => a.name).join(", ")} and nearby streets. Check your neighborhood and request a free quote.`;

export const metadata: Metadata = {
  title: "Service Areas",
  description,
  alternates: { canonical: "/service-areas" },
  openGraph: {
    title: `Service Areas — ${site.legalName}`,
    description,
    url: "/service-areas",
    images: [{ url: gallery.pages.serviceAreas, alt: "Plumber fixing a faucet" }],
  },
};

export default function ServiceAreasPage() {
  return (
    <InnerPage path="/service-areas" name="Service Areas">
      <DetailHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Service Areas" }]}
        eyebrow="Local plumbers, never far away"
        title="Service [Areas]"
        lead="Our vans work the same neighborhoods every day, so we know the streets, the housing and the plumbing that comes with them."
        next="#areas"
        actions={
          <>
            <a href="#find" className="btn">
              Check Your Area
            </a>
            <a href={site.phone.href} className="btn btn-light">
              <Icon name="phone" size={18} />
              Call Now
            </a>
          </>
        }
        aside={
          <HeroHighlights
            items={[
              { title: `${areas.length} neighborhoods`, text: "Plus the streets around them", icon: "pin" },
              { title: "Same team everywhere", text: "Same plumbers, same pricing", icon: "users" },
              { title: "24/7 emergency line", text: "Answered by a person, day or night", icon: "siren" },
            ]}
          />
        }
      />

      <ServiceAreas />

      <section id="find" className={`section ${styles.tinted}`} aria-labelledby="find-title">
        <div className="container">
          <div className={`section-head ${styles.splitHead}`} data-reveal>
            <div>
              <span className="eyebrow">Find your area</span>
              <h2 id="find-title" className="h2">
                Do We Cover <em>Your Street?</em>
              </h2>
            </div>
            <p className="lead">
              Pick your neighborhood to start a quote — we&apos;ll fill in the location for you. Not listed? Ask
              anyway.
            </p>
          </div>
          <div data-reveal>
            <AreaFinder />
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="everywhere-title">
        <div className={`container ${styles.everywhere}`}>
          <div data-reveal>
            <span className="eyebrow">In every area</span>
            <h2 id="everywhere-title" className="h2">
              The Full Service, <em>Wherever You Are</em>
            </h2>
            <p className={`lead ${styles.leadGap}`}>
              Every neighborhood we cover gets the same plumbers, the same upfront pricing and the same tidy finish.
            </p>
          </div>
          <ul className={styles.chips} data-reveal>
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={contactUrl({ service: s.slug })} className={styles.chip}>
                  <span className={styles.chipIcon}>
                    <Icon name={s.icon} size={20} />
                  </span>
                  {s.title}
                  <Icon name="arrow" size={16} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <EmergencyCTA />
      <FAQ />
      <FinalCTA />
    </InnerPage>
  );
}
