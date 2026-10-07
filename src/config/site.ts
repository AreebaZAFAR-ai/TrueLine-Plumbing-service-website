/**
 * Central business configuration.
 *
 * Everything a client needs to change before launch lives here:
 * brand name, contact details, hours and social links.
 *
 * All values below are PLACEHOLDERS. The phone number uses the 555-01xx
 * range reserved for fictional use and the email uses the reserved
 * example.com domain, so nothing here points at a real business.
 * Set `isPlaceholder` to false once real details are in place — that
 * hides the "sample content" notes and enables full structured data.
 */
export const site = {
  isPlaceholder: true,

  name: "TrueLine",
  legalName: "TrueLine Plumbing",
  shortDescription:
    "Residential and commercial plumbing — leak repair, drains, water heaters, repiping and round-the-clock emergency service.",

  url: "https://www.example.com",

  phone: {
    display: "(555) 010-0199",
    href: "tel:+15550100199",
  },
  emergencyPhone: {
    display: "(555) 010-0199",
    href: "tel:+15550100199",
  },
  email: "hello@example.com",

  address: {
    street: "Your street address",
    city: "Your city",
    region: "ST",
    postalCode: "00000",
    country: "US",
  },

  hours: [
    { label: "Mon – Fri", value: "7:00am – 7:00pm" },
    { label: "Saturday", value: "8:00am – 4:00pm" },
    { label: "Emergency line", value: "24 hours, 7 days" },
  ],

  /** Expected reply window shown near the quote form. */
  responseNote: "We reply to quote requests within one business day.",

  /** Add real profiles here; the footer hides the row while it's empty. */
  social: [] as { label: "Facebook" | "Instagram" | "LinkedIn" | "YouTube" | "X"; href: string }[],
} as const;

export type Site = typeof site;
