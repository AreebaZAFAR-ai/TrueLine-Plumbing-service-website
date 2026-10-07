/**
 * Every photo on the site, by slot.
 *
 * Files live in `public/gallery/`. To change a photo, replace the file
 * with a new one of the same name (any size; WebP or JPG recommended,
 * at least ~1600px wide for full-width slots), or point a slot at a
 * different file here. Next.js resizes and optimizes them automatically.
 * Remember to update IMAGE_SOURCES.md with the new photo's credit.
 */
export const gallery = {
  hero: "/gallery/hero.webp",

  /** Background/feature videos (MP4, H.264, no audio) with a poster frame each. */
  videos: {
    hero: { src: "/gallery/videos/hero.mp4", poster: "/gallery/videos/hero-poster.webp" },
    heroMobile: { src: "/gallery/videos/hero-mobile.mp4", poster: "/gallery/videos/hero-mobile-poster.webp" },
    onTheJob: { src: "/gallery/videos/on-the-job.mp4", poster: "/gallery/videos/on-the-job-poster.webp" },
    /** Portrait clip with music, shown below "Plumbing You Can Rely On". */
    community: { src: "/gallery/videos/a.mp4", poster: "/gallery/videos/a-poster.webp" },
  },

  services: {
    leakRepair: "/gallery/services/leak-repair.webp",
    drainCleaning: "/gallery/services/drain-cleaning.webp",
    waterHeaters: "/gallery/services/water-heaters.webp",
    pipeRepair: "/gallery/services/client-pipe-repair.webp",
    bathroom: "/gallery/services/client-bathroom.webp",
    kitchen: "/gallery/services/kitchen.webp",
    sewer: "/gallery/services/sewer.webp",
    emergency: "/gallery/services/client-emergency.webp",
  },

  projects: {
    bathroom: "/gallery/projects/client-bathroom.webp",
    kitchen: "/gallery/projects/client-kitchen.webp",
    pipework: "/gallery/projects/client-pipework.webp",
    waterHeater: "/gallery/projects/client-water-heater.webp",
    commercial: "/gallery/projects/client-commercial.webp",
    emergency: "/gallery/projects/client-emergency.webp",
  },

  /** Full-width heroes on the inner pages. */
  pages: {
    services: "/gallery/pages/services-hero.webp",
    about: "/gallery/hero.webp",
    howItWorks: "/gallery/projects/client-pipework.webp",
    serviceAreas: "/gallery/extra/video-poster.webp",
  },

  sections: {
    whyChooseUs: "/gallery/sections/why-choose-us.webp",
    emergencyCta: "/gallery/sections/emergency-cta.webp",
    /** Photo in the "Plumbing Emergency?" band. */
    emergencyHelp: "/gallery/sections/emergency-help.webp",
    testimonials: "/gallery/sections/testimonials.webp",
    about: "/gallery/sections/about.webp",
    contact: "/gallery/sections/contact.webp",
    faq1: "/gallery/sections/faq-1.webp",
    faq2: "/gallery/sections/faq-2.webp",
    finalCta: "/gallery/sections/final-cta.webp",
  },
} as const;
