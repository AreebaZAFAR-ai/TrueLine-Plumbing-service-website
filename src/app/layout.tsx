import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const title = `${site.legalName} — Leak Repair, Drains, Water Heaters & 24/7 Emergency Plumber`;
const description =
  "Local plumbing for homes and businesses: leak detection, drain cleaning, water heater repair, repiping, bathroom and kitchen plumbing, and a 24/7 emergency line. Request a free quote.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s — ${site.name}` },
  description,
  keywords: [
    "plumber",
    "emergency plumber",
    "leak repair",
    "drain cleaning",
    "water heater repair",
    "pipe repair",
    "sewer line",
    "bathroom plumbing",
    "kitchen plumbing",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title,
    description,
    url: "/",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: `${site.name} plumber at work` }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
  robots: site.isPlaceholder ? { index: false, follow: false } : { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ee4a24",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <head>
        {/* Enables scroll-reveal styles only when JS runs, so content is never hidden without it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
