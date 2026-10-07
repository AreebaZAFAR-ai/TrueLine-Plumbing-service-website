/**
 * Page content.
 *
 * Copy, services, process steps, projects, testimonials, service areas
 * and FAQs all live here so they can be edited without touching layout.
 * Business details (name, phone, email, hours) live in `src/config/site.ts`.
 *
 * Anything marked SAMPLE is placeholder content and must be replaced
 * with real information before launch.
 */
import { gallery } from "@/config/gallery";

export type IconName =
  | "drop"
  | "drain"
  | "flame"
  | "pipe"
  | "bath"
  | "sink"
  | "sewer"
  | "siren"
  | "calendar"
  | "search"
  | "wrench"
  | "shield"
  | "clock"
  | "tag"
  | "badge"
  | "box"
  | "users";

/**
 * Main navigation. Paths ("/about") are full pages; hashes ("#testimonials")
 * are sections of the home page.
 */
export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
] as const;

/** True when `href` is the page at `pathname` (or a page under it). */
export function isCurrent(href: string, pathname: string) {
  if (!href.startsWith("/")) return false;
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

/** Resolves a nav href for the current page (see `nav`). */
export function navHref(href: string, onHome: boolean) {
  if (href.startsWith("#")) return onHome ? href : `/${href}`;
  return href;
}

/** Short promises shown under the hero. Edit to match how you actually work. */
export const heroPoints = [
  "Upfront pricing before work starts",
  "Tidy, respectful technicians",
  "Residential & commercial",
];

/**
 * SAMPLE figures. Replace with real numbers (or remove the band)
 * before launch — the site shows a "sample figures" note while
 * `site.isPlaceholder` is true.
 */
export const stats = [
  { value: 15, suffix: "+", label: "Years on the tools" },
  { value: 4800, suffix: "+", label: "Jobs completed" },
  { value: 4.9, suffix: "/5", label: "Average review score", decimals: 1 },
  { value: 24, suffix: "/7", label: "Emergency line" },
];

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: IconName;
  /** Path inside public/gallery — see src/config/gallery.ts */
  image: string;
  alt: string;
};

export const services: Service[] = [
  {
    slug: "leak-repair",
    title: "Leak Detection & Repair",
    description:
      "We trace hidden leaks behind walls, under floors and in slabs, then fix them with as little disruption to your home as possible.",
    icon: "drop",
    image: gallery.services.leakRepair,
    alt: "Plumber using a pipe wrench on the trap under a sink",
  },
  {
    slug: "drain-cleaning",
    title: "Drain Cleaning",
    description:
      "Slow sinks, gurgling showers and full blockages cleared properly — not just pushed further down the line.",
    icon: "drain",
    image: gallery.services.drainCleaning,
    alt: "Close-up of a stainless steel sink drain",
  },
  {
    slug: "water-heaters",
    title: "Water Heater Repair",
    description:
      "Repairs, servicing and replacements for tank and tankless heaters, so hot water is back the same day where possible.",
    icon: "flame",
    image: gallery.services.waterHeaters,
    alt: "Plumber connecting the supply lines of a wall-mounted tankless water heater",
  },
  {
    slug: "pipe-repair",
    title: "Pipe Repair & Replacement",
    description:
      "From a single burst section to a full repipe in copper or PEX, done to code and pressure-tested before we leave.",
    icon: "pipe",
    image: gallery.services.pipeRepair,
    alt: "Plumber in a hard hat fitting a section of grey drainage pipe",
  },
  {
    slug: "bathroom",
    title: "Bathroom Plumbing",
    description:
      "Toilets, showers, vanities and full bathroom rough-ins for renovations of any size.",
    icon: "bath",
    image: gallery.services.bathroom,
    alt: "Plumber working on the supply manifold in a modern bathroom, with his tools on the floor",
  },
  {
    slug: "kitchen",
    title: "Kitchen Plumbing",
    description:
      "Faucets, sinks, disposals, dishwashers and ice-maker lines installed cleanly and leak-free.",
    icon: "sink",
    image: gallery.services.kitchen,
    alt: "Chrome kitchen faucet over a round steel sink",
  },
  {
    slug: "sewer",
    title: "Sewer Line Services",
    description:
      "Camera inspections, root removal and sewer line repair with a clear explanation of what we found.",
    icon: "sewer",
    image: gallery.services.sewer,
    alt: "Rows of grey pipework running along a wall",
  },
  {
    slug: "emergency",
    title: "Emergency Plumbing",
    description:
      "Burst pipe or overflowing toilet at 2am? Call the emergency line and we'll talk you through shutting off the water while we're on the way.",
    icon: "siren",
    image: gallery.services.emergency,
    alt: "Plumber kneeling at an open sink cabinet with his toolcase beside him",
  },
];

/** The six services shown in the 3×2 services grid (all eight remain in the quote form). */
export const featuredSlugs = ["leak-repair", "drain-cleaning", "water-heaters", "pipe-repair", "bathroom", "emergency"];

/** Checklist in the About section. Edit to match what you actually offer. */
export const aboutPoints = [
  "24/7 emergency call-outs",
  "Clear, upfront pricing on every job",
  "Friendly, experienced plumbers",
  "Work tested and cleaned up before we leave",
];

export const benefits: { title: string; text: string; icon: IconName }[] = [
  {
    title: "Experienced professionals",
    text: "Every job is handled by a trained plumber, not a general handyman.",
    icon: "users",
  },
  {
    title: "Fast, reliable service",
    text: "We confirm a time window and keep you updated if anything changes.",
    icon: "clock",
  },
  {
    title: "Quality workmanship",
    text: "Work is tested before we pack up, and we explain what we did.",
    icon: "badge",
  },
  {
    title: "Transparent pricing",
    text: "You approve a clear price before any work begins. No surprises.",
    icon: "tag",
  },
  {
    title: "24/7 emergency support",
    text: "A real person answers the emergency line, day or night.",
    icon: "shield",
  },
  {
    title: "Quality materials",
    text: "Trusted brands and parts chosen to last, not the cheapest option.",
    icon: "box",
  },
];

export const steps: { title: string; text: string; icon: IconName }[] = [
  {
    title: "Schedule service",
    text: "Call us or send a quote request. Tell us what's happening and pick a time that suits you.",
    icon: "calendar",
  },
  {
    title: "Inspect the issue",
    text: "Your plumber diagnoses the problem on site and walks you through the options and the price.",
    icon: "search",
  },
  {
    title: "Repair or install",
    text: "Once you approve, we do the work properly, test everything and clean up after ourselves.",
    icon: "wrench",
  },
  {
    title: "Enjoy peace of mind",
    text: "You get a written summary of the work and a direct line if you have questions later.",
    icon: "shield",
  },
];

/** Who we work for — the Residential / Commercial split on the Services page. */
export const sectors = [
  {
    title: "Residential",
    text: "Houses, apartments and rentals. We work around your day, protect your floors and leave the room as we found it.",
    jobs: ["Leaks and dripping fixtures", "Blocked sinks, showers and toilets", "Water heater swaps", "Bathroom and kitchen renovations"],
    image: gallery.projects.bathroom,
    alt: "Plumber tightening a new basin faucet in a bathroom",
  },
  {
    title: "Commercial",
    text: "Offices, shops, restaurants and managed buildings. Planned maintenance and repairs scheduled to keep you open.",
    jobs: ["Planned maintenance visits", "Plant room and valve work", "Washroom and kitchen fit-outs", "Out-of-hours call-outs"],
    image: gallery.projects.commercial,
    alt: "Technician wiring and piping a wall-mounted boiler in a utility room",
  },
];

/** What customers can count on every visit — shown on How It Works. */
export const promises: { title: string; text: string; icon: IconName }[] = [
  { title: "A confirmed time window", text: "And a heads-up call if we're running late.", icon: "clock" },
  { title: "Price agreed first", text: "You approve the quote before any work begins.", icon: "tag" },
  { title: "Your home respected", text: "Shoe covers, dust sheets and a tidy finish.", icon: "shield" },
  { title: "Work tested on site", text: "We don't leave until it's checked and running.", icon: "badge" },
];

/**
 * About page story. Written to describe how the team works rather than
 * history we can't verify — swap in your own story before launch.
 */
export const aboutStory = [
  "We started out with a simple idea: plumbing should be fixed properly the first time, priced honestly and done by people who treat your home like their own.",
  "Today the team handles everything from dripping taps to full repipes and commercial plant rooms, but the approach hasn't changed. We explain what we find, agree the price before we start and test the work before we leave.",
  "Most of our work comes from repeat customers and referrals, and we'd like to keep it that way.",
];

export const values: { title: string; text: string; icon: IconName }[] = [
  {
    title: "Straight answers",
    text: "If a repair isn't worth doing, we'll say so. If a cheaper fix will last, we'll offer it first.",
    icon: "search",
  },
  {
    title: "Done once, done right",
    text: "Proper parts, proper fittings and a full test before we pack up — no call-backs for the same problem.",
    icon: "wrench",
  },
  {
    title: "Respect for your space",
    text: "Floors covered, mess contained and everything tidied away. You shouldn't need to clean up after a plumber.",
    icon: "shield",
  },
  {
    title: "Always reachable",
    text: "A real person answers the emergency line, day or night, and the office keeps you updated on the day.",
    icon: "siren",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  /** Slug of the matching service page. */
  service: string;
  /** Path inside public/gallery — see src/config/gallery.ts */
  image: string;
  alt: string;
  summary: string;
  facts: { label: string; value: string }[];
  challenge: string;
  approach: string[];
  result: string;
  scope: string[];
};

/**
 * SAMPLE project write-ups showing how a case study is laid out.
 * Replace with your own jobs (and photos of them) before launch —
 * the detail pages show a "sample project" note while
 * `site.isPlaceholder` is true.
 */
export const projects: Project[] = [
  {
    slug: "bathroom-fixture-installation",
    title: "Bathroom fixture installation",
    category: "Bathroom",
    service: "bathroom",
    image: gallery.projects.bathroom,
    alt: "Plumber tightening a new basin faucet in a bathroom, with tools laid out on the vanity",
    summary:
      "New toilet, vanity and shower valve fitted as part of a bathroom renovation, coordinated around the tiler's schedule.",
    facts: [
      { label: "Property", value: "Residential" },
      { label: "Job type", value: "Renovation" },
      { label: "Visits", value: "Rough-in + finish fit" },
    ],
    challenge:
      "The homeowners were renovating their main bathroom and wanted a wall-hung toilet and a new shower position. The existing waste pipe was in the wrong place and the old shut-off valves were seized.",
    approach: [
      "Surveyed the floor and wall to plan a new waste route with the right fall",
      "Ran new supply lines with accessible shut-off valves for every fixture",
      "Set the concealed toilet frame and shower valve before the walls were closed",
      "Returned after tiling to fit the toilet, vanity and shower trim",
    ],
    result:
      "Every fixture was pressure- and leak-tested on handover, and the tiler was never held up waiting on plumbing.",
    scope: ["Waste re-route", "New supply pipework", "Concealed cistern frame", "Shower valve", "Vanity and basin fit"],
  },
  {
    slug: "under-sink-refit",
    title: "Under-sink supply & waste refit",
    category: "Kitchen",
    service: "kitchen",
    image: gallery.projects.kitchen,
    alt: "Plumber fitting a kitchen faucet, with pliers and wrenches laid out on a mat",
    summary:
      "A slow leak under a kitchen sink had swollen the cabinet floor. We traced it, replaced the tired connections and tidied the whole cabinet.",
    facts: [
      { label: "Property", value: "Residential" },
      { label: "Job type", value: "Repair" },
      { label: "Visits", value: "Single visit" },
    ],
    challenge:
      "The homeowner noticed the cabinet base had softened. Water was seeping from an old compression fitting and a perished dishwasher hose — neither obvious at first glance.",
    approach: [
      "Dried the cabinet and ran each line in turn to isolate the leaks",
      "Replaced the seized shut-off valves and rigid connectors",
      "Fitted a new trap and dishwasher waste connection",
      "Re-routed the pipework so everything is reachable for future servicing",
    ],
    result: "Leak-free under pressure, with clean, accessible pipework and new valves that actually turn.",
    scope: ["Leak tracing", "New shut-off valves", "Braided connectors", "Trap and dishwasher waste"],
  },
  {
    slug: "heating-pipe-replacement",
    title: "Heating pipe replacement",
    category: "Pipework",
    service: "pipe-repair",
    image: gallery.projects.pipework,
    alt: "Plumber tightening a chrome waste trap with a pipe wrench under a sink",
    summary:
      "Corroded runs replaced with PEX, planned in stages so the household kept water and heat between each day of work.",
    facts: [
      { label: "Property", value: "Residential" },
      { label: "Job type", value: "Partial repipe" },
      { label: "Material", value: "PEX" },
    ],
    challenge:
      "Repeated pinhole leaks were appearing in different places along the same runs. Patching each one was becoming a monthly job.",
    approach: [
      "Inspected the full run to map corroded sections",
      "Agreed a staged plan so water was restored every evening",
      "Replaced the affected runs with PEX and new fittings",
      "Flushed and pressure-tested every new section",
    ],
    result: "The leaking runs were replaced in full rather than patched, and the system passed a full pressure test.",
    scope: ["Pipe condition survey", "PEX replacement runs", "New fittings and supports", "Pressure test and flush"],
  },
  {
    slug: "water-heater-installation",
    title: "Water heater installation",
    category: "Water heater",
    service: "water-heaters",
    image: gallery.projects.waterHeater,
    alt: "Plumber connecting the supply lines of a new wall-mounted water heater",
    summary:
      "An ageing tank heater swapped for a wall-mounted unit, freeing up floor space in a compact laundry room.",
    facts: [
      { label: "Property", value: "Residential" },
      { label: "Job type", value: "Replacement" },
      { label: "Visits", value: "Single visit" },
    ],
    challenge:
      "The old tank was showing rust at the base and taking up most of a small laundry room. The owners wanted reliable hot water and more space.",
    approach: [
      "Checked supply, venting and electrics for the new unit",
      "Drained and removed the old tank",
      "Mounted the new heater and connected supply and safety valves",
      "Tested temperature and relief valve, then walked the owners through settings",
    ],
    result: "Hot water was back the same day, and the room gained usable floor space.",
    scope: ["Old unit removal", "Wall-mounted install", "Safety valve fit", "Handover and settings"],
  },
  {
    slug: "plant-room-pipework",
    title: "Plant room pipework",
    category: "Commercial",
    service: "pipe-repair",
    image: gallery.projects.commercial,
    alt: "Technician wiring and piping a wall-mounted boiler in a utility room",
    summary:
      "Valves and sections of distribution pipework replaced in a commercial plant room, scheduled outside business hours.",
    facts: [
      { label: "Property", value: "Commercial" },
      { label: "Job type", value: "Maintenance" },
      { label: "Scheduling", value: "Out of hours" },
    ],
    challenge:
      "Several isolation valves had stopped sealing, so any repair meant shutting down more of the building than necessary.",
    approach: [
      "Surveyed the plant room and labelled every valve and run",
      "Planned the work outside business hours with the building manager",
      "Replaced failed valves and the worst-affected sections",
      "Pressure-tested and handed over an updated valve schedule",
    ],
    result: "Each zone can now be isolated on its own, so future repairs disrupt far less of the building.",
    scope: ["Valve survey and labelling", "Isolation valve replacement", "Pipe section replacement", "Valve schedule"],
  },
  {
    slug: "outdoor-tap-call-out",
    title: "Burst outdoor tap call-out",
    category: "Emergency",
    service: "emergency",
    image: gallery.projects.emergency,
    alt: "Plumber repairing an outdoor tap beside a house, with tools on a mat",
    summary:
      "A frost-split outdoor tap was pouring water against the house wall. We stopped the leak, replaced the tap and fitted a frost-proof valve.",
    facts: [
      { label: "Property", value: "Residential" },
      { label: "Job type", value: "Emergency" },
      { label: "Visits", value: "Single call-out" },
    ],
    challenge:
      "The tap's body had split overnight and water was soaking the wall and foundation. The owners couldn't find an isolation valve for the outside line.",
    approach: [
      "Talked the owners through shutting off the main on the phone",
      "Cut out the split tap and capped the line on arrival",
      "Fitted a frost-proof tap and a new isolation valve indoors",
      "Restored the supply and checked the wall for further leaks",
    ],
    result: "Water was back on the same visit, and the outside line can now be shut off on its own.",
    scope: ["Phone guidance", "Make-safe", "Frost-proof tap", "Isolation valve"],
  },
];

/**
 * SAMPLE testimonials written to show the layout.
 * Replace with real, attributable customer reviews before launch.
 */
export const testimonials = [
  {
    quote:
      "Our water heater gave out on a Sunday. They picked up straight away, explained the options over the phone and had hot water running again that afternoon.",
    name: "Jamie R.",
    location: "Homeowner",
    service: "Water heater repair",
    rating: 5,
  },
  {
    quote:
      "Clear quote, turned up when they said they would, and left the bathroom cleaner than they found it. That's all I want from a tradesperson.",
    name: "Priya S.",
    location: "Renovation client",
    service: "Bathroom plumbing",
    rating: 5,
  },
  {
    quote:
      "They ran a camera down the sewer line and showed us exactly where the roots were before quoting. No guesswork and no upselling.",
    name: "Marcus T.",
    location: "Property manager",
    service: "Sewer line inspection",
    rating: 5,
  },
  {
    quote:
      "We manage several units and needed someone dependable. Scheduling is easy and the invoices actually match the quote.",
    name: "Elena V.",
    location: "Commercial client",
    service: "Commercial maintenance",
    rating: 5,
  },
];

/**
 * SAMPLE service areas. Replace with the real neighborhoods/cities you
 * cover. `x` and `y` place the pin on the stylized map (0–100).
 */
export const areas = [
  { name: "Downtown", x: 50, y: 13 },
  { name: "Northside", x: 19, y: 31 },
  { name: "Eastgate", x: 81, y: 31 },
  { name: "Riverside", x: 19, y: 69 },
  { name: "Westfield", x: 81, y: 69 },
  { name: "Oakridge", x: 50, y: 87 },
];

export const faqs = [
  {
    q: "Do you offer emergency plumbing?",
    a: "Yes. The emergency line is answered around the clock. If water is escaping, we'll help you find and close the main shut-off valve over the phone while a plumber is dispatched.",
  },
  {
    q: "What plumbing services do you provide?",
    a: "Leak detection and repair, drain cleaning, water heater repair and replacement, pipe repair and repiping, bathroom and kitchen plumbing, sewer line services and emergency call-outs.",
  },
  {
    q: "How quickly can you respond?",
    a: "Emergencies are prioritized and dispatched as soon as a plumber is available. For non-urgent work we'll offer the earliest time window that suits you when you book.",
  },
  {
    q: "Do you provide free estimates?",
    a: "Quote requests through this website are free. For complex jobs we may need to see the problem first; we'll always tell you about any call-out fee before we arrive.",
  },
  {
    q: "Do you service residential and commercial properties?",
    a: "Both. We work in houses, apartments, offices, restaurants and other commercial spaces.",
  },
  {
    q: "What areas do you serve?",
    a: "The neighborhoods listed on our service areas page and the streets around them. If you're just outside, get in touch anyway — we can often still help.",
  },
  {
    q: "Do you repair water heaters?",
    a: "Yes — tank and tankless, gas and electric. We'll tell you honestly whether a repair makes sense or whether replacement is the better value.",
  },
  {
    q: "Can you handle blocked drains?",
    a: "Yes. We clear kitchen, bathroom and main drain blockages, and use a camera inspection when a blockage keeps coming back.",
  },
];
