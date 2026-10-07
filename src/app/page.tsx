import { site } from "@/config/site";
import { faqs, services } from "@/data/content";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { VideoSection } from "@/components/VideoSection";
import { Process } from "@/components/Process";
import { EmergencyCTA } from "@/components/EmergencyCTA";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import { ServiceAreas } from "@/components/ServiceAreas";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/ui/RevealObserver";

/**
 * Structured data. The FAQ is always safe to publish. The Plumber
 * (LocalBusiness) block is only emitted once real business details are
 * in place (`site.isPlaceholder === false`), so no fake address or
 * phone number ends up in search results.
 */
function jsonLd() {
  const graph: object[] = [
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
  if (!site.isPlaceholder) {
    graph.push({
      "@type": "Plumber",
      name: site.legalName,
      url: site.url,
      telephone: site.phone.display,
      email: site.email,
      image: `${site.url}/og.jpg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        postalCode: site.address.postalCode,
        addressCountry: site.address.country,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Plumbing services",
        itemListElement: services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.title, description: s.description },
        })),
      },
    });
  }
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <WhyChooseUs />
        <VideoSection />
        <Process />
        <EmergencyCTA />
        <Projects />
        <Testimonials />
        <ServiceAreas />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <RevealObserver />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd() }} />
    </>
  );
}
