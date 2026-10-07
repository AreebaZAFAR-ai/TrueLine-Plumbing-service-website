import type { Metadata } from "next";
import Link from "next/link";
import { gallery } from "@/config/gallery";
import { site } from "@/config/site";
import { promises } from "@/data/content";
import { InnerPage } from "@/components/InnerPage";
import { DetailHero } from "@/components/detail/DetailHero";
import { HeroHighlights } from "@/components/detail/HeroHighlights";
import { Process } from "@/components/Process";
import { EmergencyCTA } from "@/components/EmergencyCTA";
import { FinalCTA } from "@/components/FinalCTA";
import { Icon } from "@/components/ui/Icon";
import styles from "../inner.module.css";

const description =
  "What happens after you call a plumber: booking, on-site diagnosis, an upfront price you approve, the repair, testing and clean-up.";

export const metadata: Metadata = {
  title: "How It Works",
  description,
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: `How It Works — ${site.legalName}`,
    description,
    url: "/how-it-works",
    images: [{ url: gallery.pages.howItWorks, alt: "Plumber tightening a chrome waste trap with a pipe wrench" }],
  },
};

export default function HowItWorksPage() {
  return (
    <InnerPage path="/how-it-works" name="How It Works">
      <DetailHero
        crumbs={[{ label: "Home", href: "/" }, { label: "How It Works" }]}
        eyebrow="Simple steps, no surprises"
        title="How It [Works]"
        lead="Here's exactly what happens from the moment you get in touch to the moment we hand the job back to you — and what you can expect from us at every step."
        next="#process"
        actions={
          <>
            <Link href="/contact" className="btn">
              Book a Plumber
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
              { title: "Book in minutes", text: "By phone or with the quote form", icon: "calendar" },
              { title: "Price before work", text: "You approve it before we start", icon: "tag" },
              { title: "Tested on site", text: "We check it all before we leave", icon: "badge" },
            ]}
          />
        }
      />

      <Process />

      <section className={`section ${styles.promisesSection}`} aria-labelledby="promises-title">
        <div className="container">
          <div className="section-head section-head-center" data-reveal>
            <span className="eyebrow">Every visit</span>
            <h2 id="promises-title" className="h2">
              What You Can <em>Count On</em>
            </h2>
          </div>
          <ul className={styles.promises}>
            {promises.map((p, i) => (
              <li
                key={p.title}
                className={styles.promise}
                data-reveal
                style={{ "--d": `${i * 90}ms` } as React.CSSProperties}
              >
                <span className={styles.valueIcon}>
                  <Icon name={p.icon} size={24} />
                </span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <EmergencyCTA />
      <FinalCTA />
    </InnerPage>
  );
}
