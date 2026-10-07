import type { Metadata } from "next";
import { site } from "@/config/site";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.legalName} handles information submitted through this website.`,
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This page explains what information {site.legalName} collects through this website and how it is used.
      </p>
      <h2>Information you send us</h2>
      <p>
        When you request a quote we receive the details you enter — your name, phone number, email address, the
        service you need and your message — and use them only to respond to your request.
      </p>
      <h2>Cookies and analytics</h2>
      <p>Describe any analytics or cookies used on this site here.</p>
      <h2>Contact</h2>
      <p>
        Questions about privacy? Email <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
