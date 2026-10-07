import { site } from "@/config/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/ui/RevealObserver";

/**
 * Shell for the top-level inner pages (Services, About, How It Works,
 * Service Areas, Contact). `contactHref` is where the header's contact
 * button goes — the Contact page, or `#contact` on the Contact page itself.
 * Emits breadcrumb structured data plus any extra `schema` nodes.
 */
export function InnerPage({
  path,
  name,
  schema = [],
  contactHref = "/contact",
  children,
}: {
  path: string;
  name: string;
  schema?: object[];
  contactHref?: string;
  children: React.ReactNode;
}) {
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
          { "@type": "ListItem", position: 2, name, item: `${site.url}${path}` },
        ],
      },
      ...schema,
    ],
  }).replace(/</g, "\\u003c");

  return (
    <>
      <Header onHome={false} contactHref={contactHref} />
      <main id="main">{children}</main>
      <Footer onHome={false} />
      <RevealObserver key={path} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
    </>
  );
}

