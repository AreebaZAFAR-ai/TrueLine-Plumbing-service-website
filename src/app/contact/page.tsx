import { Suspense } from "react";
import type { Metadata } from "next";
import { site } from "@/config/site";
import { InnerPage } from "@/components/InnerPage";
import { DetailHero } from "@/components/detail/DetailHero";
import { HeroHighlights } from "@/components/detail/HeroHighlights";
import { QuoteForm } from "@/components/QuoteForm";
import { QuotePrefillFromUrl } from "@/components/QuotePrefillFromUrl";
import { Icon } from "@/components/ui/Icon";

const description = `Contact ${site.legalName}: request a free, no-obligation plumbing quote, call the office or use the 24/7 emergency line.`;

export const metadata: Metadata = {
  title: "Contact Us",
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact — ${site.legalName}`,
    description,
    url: "/contact",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: `${site.name} plumber at work` }],
  },
};

export default function ContactPage() {
  const emergency = site.hours.find((h) => h.label === "Emergency line");

  return (
    <InnerPage path="/contact" name="Contact" contactHref="#contact">
      <DetailHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        eyebrow="Talk to a real plumber"
        title="Contact [Us]"
        lead={`Tell us what's going on and we'll come back with a clear, no-obligation quote. ${site.responseNote}`}
        next="#contact"
        actions={
          <>
            <a href="#contact" className="btn">
              Request a Quote
            </a>
            <a href={site.phone.href} className="btn btn-light">
              <Icon name="phone" size={18} />
              Call {site.phone.display}
            </a>
          </>
        }
        aside={
          <HeroHighlights
            items={[
              { title: site.phone.display, text: "Office line", icon: "phone" },
              {
                title: site.emergencyPhone.display,
                text: `Emergency line — ${emergency?.value ?? "24/7"}`,
                icon: "siren",
              },
              { title: site.email, text: "We reply within one business day", icon: "mail" },
            ]}
          />
        }
      />

      <QuoteForm />
      <Suspense fallback={null}>
        <QuotePrefillFromUrl />
      </Suspense>
    </InnerPage>
  );
}
