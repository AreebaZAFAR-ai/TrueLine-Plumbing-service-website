import type { Metadata } from "next";
import { site } from "@/config/site";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms",
  description: `Terms of use for the ${site.legalName} website.`,
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms">
      <p>These terms cover use of this website. They do not replace the written quote or contract for any job.</p>
      <h2>Quotes</h2>
      <p>
        Prices given online or by phone are estimates until a plumber has assessed the work. You approve the final
        price before work begins.
      </p>
      <h2>Website content</h2>
      <p>Content on this site is provided for general information and may change without notice.</p>
      <h2>Contact</h2>
      <p>
        Questions? Email <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
        <a href={site.phone.href}>{site.phone.display}</a>.
      </p>
    </LegalPage>
  );
}
