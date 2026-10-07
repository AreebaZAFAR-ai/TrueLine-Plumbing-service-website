# Gallery

Every photo on the website lives in this folder.

## Changing a photo

1. Replace the file with a new photo **using the same file name** (e.g. drop a new `hero.webp` over the old one).
   WebP or JPG both work; if you use a different name or extension, update the path in `src/config/gallery.ts`.
2. Use reasonably large images: about 2400px wide for `hero.webp`, 1600px for section photos, 1200px for service and project photos.
   The site resizes and compresses them automatically.
3. **Still seeing the old photo?** Next.js caches resized images. Stop the dev server, delete the folder
   `.next/dev/cache/images` (or `.next/cache/images` after a production build), start it again and hard-refresh the browser (Ctrl+F5).
4. Record the photo's source and license in `IMAGE_SOURCES.md` (project root).

## What goes where

| File | Where it appears |
| --- | --- |
| `videos/hero.mp4`, `videos/hero-mobile.mp4` | Full-screen hero background (landscape clip on desktop, portrait clip on phones) |
| `videos/a.mp4` | Portrait video (with sound button) below "Plumbing You Can Rely On" |
| `videos/on-the-job.mp4` | Spare (previous video-section clip) |
| `videos/*-poster.webp` | Still frame shown before each video plays |
| `hero.webp` | Spare (previous hero photo; still used for the social share image) |
| `services/*.webp` | Service cards (leak repair, drain cleaning, water heaters, pipe repair, bathroom, emergency; kitchen and sewer are kept for when those cards are shown) |
| `projects/*.webp` | Featured projects sliding strip |
| `sections/why-choose-us.webp` | Tall center photo in "Why choose us" |
| `sections/emergency-cta.webp` | Circular photo in the orange emergency banner |
| `sections/testimonials.webp` | Photo beside the customer quotes |
| `sections/about.webp` | About section photo (with the years badge) |
| `sections/contact.webp` | Contact Info panel next to the quote form |
| `sections/faq-1.webp`, `sections/faq-2.webp` | Overlapping photos beside the FAQ |
| `sections/final-cta.webp` | Final "Ready to fix…" banner (shown red-tinted) |
| `extra/` | Spare images not currently shown (`old-*` = photos replaced by your own) |

Note: this README is publicly reachable at `/gallery/README.md` once deployed; it contains no private information.
