# CLAUDE.md

## PROJECT: Premium Plumbing Service Website

Build a premium, modern, conversion-focused plumbing service website inspired by:

Reference website:
https://plumbzo.framer.website/#testimonials

The user has also provided a **video reference** in the project/conversation. Study the video carefully and use it as an additional reference for layout, animations, transitions, spacing, scrolling behavior, image treatment, typography, and overall visual direction.

IMPORTANT:
The goal is to create a website with the same level of quality, visual hierarchy, interaction quality, and premium feel as the reference.

Do NOT simply create a generic plumbing website.

Do NOT copy proprietary source code, exact written content, logos, brand assets, or copyrighted images from the reference.

Recreate the design concept and experience using original implementation, original copy, and legally usable assets.

---

# 1. FIRST: INSPECT THE PROJECT

Before writing or changing code:

1. Inspect the complete existing project structure.
2. Identify the framework, dependencies, routing, styling system, animation libraries, and existing components.
3. Inspect all existing assets and folders.
4. Inspect the provided video reference.
5. Inspect any images already provided by the user.
6. Determine whether the project is Next.js, React, Vite, or another framework.
7. Reuse the existing architecture where appropriate instead of unnecessarily rebuilding the project.

Do not start coding before understanding the current project.

---

# 2. REFERENCE ANALYSIS

Study:

https://plumbzo.framer.website/

Pay particular attention to:

* Header/navigation
* Hero composition
* Typography hierarchy
* CTA placement
* Image composition
* Service cards
* Statistics
* Trust/why-us section
* Process/how-it-works section
* Emergency CTA
* Featured projects/gallery
* Testimonials
* Service areas
* Quote/contact form
* FAQ accordion
* Final CTA
* Footer
* Section spacing
* Border radius
* Shadows
* Grid structure
* Responsive behavior
* Hover interactions
* Scroll animations
* Image transitions
* Button interactions

The reference has a strong service-business conversion structure. Preserve that strategic flow while creating an original visual implementation.

---

# 3. DESIGN DIRECTION

Create a premium plumbing/home-services website.

The website should feel:

* Professional
* Trustworthy
* Modern
* Premium
* Clean
* Confident
* High-converting
* Human
* Fast
* Well-crafted

Avoid making it look like:

* A generic AI-generated website
* A basic Bootstrap template
* A cheap local-business template
* An overdecorated landing page
* A template with excessive gradients
* A website filled with unnecessary animations
* A website with random glassmorphism
* A website with excessive glowing effects

The final result should look like a professional agency-designed website.

---

# 4. VISUAL QUALITY

Prioritize:

* Excellent typography
* Strong visual hierarchy
* Large editorial-style headings
* High-quality photography
* Clean spacing
* Carefully balanced layouts
* Strong CTA hierarchy
* Premium card design
* Consistent border radius
* Subtle borders
* Refined hover states
* Smooth transitions
* Responsive layouts

Use whitespace intentionally.

Do not overcrowd sections.

Every section should have a clear visual purpose.

---

# 5. COLOR SYSTEM

Create a cohesive plumbing-service color palette.

Suggested direction:

* Deep navy / charcoal for primary dark sections
* White / warm white backgrounds
* Professional blue as the primary accent
* Subtle neutral gray surfaces
* High-contrast CTA buttons

Do not use excessive colors.

Use CSS variables/design tokens so the palette can easily be changed later.

---

# 6. TYPOGRAPHY

Use a premium modern sans-serif font.

Preferred options:

* Inter
* Manrope
* Satoshi
* Geist

Choose the font that best matches the reference and project setup.

Typography must have:

* Strong display headings
* Clear body text
* Good line-height
* Controlled letter spacing
* Responsive font sizes

Use `clamp()` where appropriate for responsive typography.

---

# 7. WEBSITE STRUCTURE

Create the website with the following overall structure:

## HEADER

Include:

* Professional plumbing company logo/wordmark
* Navigation
* Services
* About
* How It Works
* Testimonials
* Service Areas
* Contact
* Strong CTA

Desktop navigation should be clean and minimal.

Mobile navigation must have a polished menu interaction.

Header should behave correctly while scrolling.

---

# 8. HERO SECTION

Create a high-impact hero section.

Include:

* Strong plumbing-related headline
* Supporting description
* Primary CTA
* Secondary phone/call CTA
* Professional plumbing image or video
* Trust indicators
* Availability/emergency indicator if appropriate

The hero should immediately communicate:

WHAT:
Professional plumbing services

WHY:
Reliable and fast service

ACTION:
Request a quote / call now

Use the video reference to reproduce the intended visual rhythm and animation behavior.

Hero must be visually impressive without becoming distracting.

---

# 9. TRUST / STATS SECTION

Include a compact statistics/trust section.

Examples:

* Years of Experience
* Projects Completed
* Customer Satisfaction
* Emergency Availability
* 5-Star Reviews

IMPORTANT:

Do not invent claims that the client has not provided.

If real business statistics are unavailable, use clearly editable placeholder values in the code and make them easy to replace.

Do not present fake statistics as verified facts.

---

# 10. SERVICES SECTION

Create a premium service grid.

Recommended services:

1. Leak Detection & Repair
2. Drain Cleaning
3. Water Heater Repair
4. Pipe Repair & Replacement
5. Bathroom Plumbing
6. Kitchen Plumbing
7. Sewer Line Services
8. Emergency Plumbing

Each service should include:

* Icon or visual
* Service title
* Short description
* CTA
* Hover interaction

Cards should feel premium and interactive.

Avoid excessive card decoration.

---

# 11. WHY CHOOSE US

Create a strong trust-building section.

Possible benefits:

* Experienced Professionals
* Fast & Reliable Service
* Quality Workmanship
* Transparent Pricing
* 24/7 Emergency Support
* Quality Materials

Use a strong visual composition rather than simply displaying six boring cards.

Use imagery where appropriate.

---

# 12. HOW IT WORKS

Create a simple 4-step process:

01 — Schedule Service

02 — Inspect the Issue

03 — Repair or Install

04 — Enjoy Peace of Mind

Each step should have:

* Number
* Heading
* Description
* Supporting visual/icon

Use subtle scroll-based animation.

---

# 13. EMERGENCY PLUMBING CTA

Create a visually strong emergency section.

Message should communicate:

"Plumbing Emergency? We're Ready to Help."

Include:

* 24/7 availability
* Emergency plumbing message
* Large CTA
* Call button
* Strong plumbing-related visual

This section should stand out from normal content.

---

# 14. FEATURED PROJECTS / GALLERY

Create a premium project showcase.

Show examples such as:

* Bathroom plumbing installation
* Kitchen plumbing repair
* Pipe replacement
* Water heater installation
* Commercial plumbing
* Emergency repair

Use a high-quality grid/masonry/editorial layout.

Include hover effects.

Images should feel authentic and relevant to plumbing.

Do not use random unrelated house/interior images.

---

# 15. TESTIMONIALS

Create a premium testimonials section inspired by the reference.

Include:

* Customer image
* Rating
* Testimonial
* Customer name
* Location
* Trust statistic

Use carousel/slider interaction if appropriate.

Add smooth transitions.

The testimonial section should not feel like a generic card carousel.

IMPORTANT:

If actual customer testimonials are unavailable, create clearly editable sample content rather than implying that fictional testimonials are genuine.

---

# 16. SERVICE AREAS

Create a service-area section.

Show locations in an attractive way.

Possible presentation:

* Location list
* Interactive-looking map treatment
* Area cards
* City/region grid

Do not claim service coverage for locations unless provided by the user.

Use editable location data.

---

# 17. QUOTE / CONTACT FORM

Create a professional quote request form.

Fields:

* First Name
* Last Name
* Phone
* Email
* Service Needed
* Message
* Preferred Date/Time if appropriate

Primary CTA:

"Get Your Free Quote"

Include clear validation and useful error messages.

The form must be responsive.

Do not create a fake backend.

If no backend/API exists, structure the form cleanly so the backend can be connected later.

---

# 18. FAQ SECTION

Create an accordion FAQ.

Possible questions:

* Do you offer emergency plumbing?
* What plumbing services do you provide?
* How quickly can you respond?
* Do you provide free estimates?
* Do you service residential and commercial properties?
* What areas do you serve?
* Do you repair water heaters?
* Can you handle blocked drains?

Use smooth accordion animations.

---

# 19. FINAL CTA

End the main content with a strong conversion section.

Example direction:

"Ready to Fix Your Plumbing Problem?"

Include:

* Short supporting text
* Request Quote CTA
* Call Now CTA

This should visually transition naturally into the footer.

---

# 20. FOOTER

Create a premium footer containing:

* Logo
* Short company description
* Quick Links
* Services
* Service Areas
* Contact information
* Social links if provided
* Privacy Policy
* Terms
* Copyright

IMPORTANT:

Do NOT invent:

* Address
* Phone number
* Email
* Social media accounts

Use editable placeholders until real business information is provided.

---

# 21. IMAGES — VERY IMPORTANT

The user explicitly wants free online images that are publicly usable.

You may research and source images from legitimate free/publicly usable image platforms such as:

* Unsplash
* Pexels
* Pixabay
* Wikimedia Commons where appropriate
* Other reputable sources with clear reuse permissions

ONLY use assets when their licensing/usage rights are reasonably clear.

Do NOT download random images from Google Images.

Do NOT use images copied from competitor websites.

Do NOT use images from the Plumbzo website.

Do NOT use copyrighted Framer assets from the reference website.

Prefer:

* Professional plumbing workers
* Plumbers working under sinks
* Pipe repair
* Plumbing tools
* Bathroom plumbing
* Kitchen plumbing
* Water heaters
* Professional service vans
* Residential plumbing work
* Commercial plumbing work

Images should match the visual quality and composition of the reference.

---

# 22. IMAGE ATTRIBUTION / LICENSING

For every external image used:

1. Record the source URL.
2. Record the photographer/creator when available.
3. Record the license/source platform.
4. Keep a simple asset/source document in the project, for example:

`IMAGE_SOURCES.md`

Format:

Image:
Source:
Creator:
License:
URL:
Used In:

Do not claim an image is free unless the source/license supports that conclusion.

---

# 23. IMAGE OPTIMIZATION

Optimize all images.

Use:

* WebP/AVIF where appropriate
* Responsive image sizing
* Lazy loading below the fold
* Proper aspect ratios
* `next/image` if using Next.js
* Descriptive alt text

Do not load unnecessarily huge images.

Performance matters.

---

# 24. VIDEO REFERENCE

The user provided a video reference.

Study it carefully.

Use it to understand:

* Animation timing
* Section transitions
* Scroll behavior
* Image movement
* Text entrance
* Button interactions
* Hover behavior
* Overall pacing

Do NOT blindly reproduce every effect.

Only implement animations that improve the experience and remain performant.

Respect `prefers-reduced-motion`.

---

# 25. ANIMATION DIRECTION

Animations should be:

* Smooth
* Subtle
* Premium
* Fast enough to feel responsive
* Consistent

Use appropriate animation tools already installed in the project.

If no animation library exists, use lightweight CSS/React animations where possible.

Avoid:

* Excessive bouncing
* Random floating objects
* Continuous unnecessary movement
* Excessive parallax
* Flashing effects
* Large glowing circles
* Overly complicated cursor effects

---

# 26. RESPONSIVE DESIGN

The website must be fully responsive.

Test:

* 1440px+
* 1280px
* 1024px
* 768px
* 640px
* 480px
* 390px
* 375px

Mobile must NOT simply be a collapsed desktop layout.

Re-design layouts where necessary.

Pay special attention to:

* Navigation
* Hero
* Images
* Service cards
* Project gallery
* Testimonials
* Forms
* Typography
* Footer
* Horizontal overflow

There must be no:

* Horizontal scrolling
* Broken layouts
* Text overflow
* Cropped buttons
* Overlapping elements
* Unusable forms

---

# 27. ACCESSIBILITY

Implement:

* Semantic HTML
* Proper heading hierarchy
* Accessible buttons
* Keyboard navigation
* Focus states
* Form labels
* Useful alt text
* Sufficient contrast
* Reduced-motion support

Do not sacrifice accessibility for visual effects.

---

# 28. SEO

Implement:

* Unique page title
* Meta description
* Open Graph metadata
* Semantic HTML
* Proper heading hierarchy
* Image alt text
* Local-service SEO structure
* Relevant plumbing keywords naturally

If appropriate, add structured data for:

* LocalBusiness
* Plumber
* Service
* FAQ

Do not create fake business information in structured data.

---

# 29. PERFORMANCE

Before considering the website finished:

* Optimize images
* Remove unnecessary dependencies
* Avoid excessive JavaScript
* Avoid layout shifts
* Lazy-load appropriate media
* Keep animations performant
* Avoid unnecessary re-renders
* Check mobile performance

The website should feel fast.

---

# 30. CODE QUALITY

Write production-quality code.

Use:

* Reusable components
* Clean component hierarchy
* Meaningful names
* TypeScript where project supports it
* Centralized data where appropriate
* CSS variables/design tokens
* Clean responsive styles

Do not create giant components unnecessarily.

Separate sections into reusable components.

Example:

components/
Header
Hero
Stats
Services
WhyChooseUs
Process
EmergencyCTA
Projects
Testimonials
ServiceAreas
QuoteForm
FAQ
FinalCTA
Footer

Adapt this structure to the actual project architecture.

---

# 31. DO NOT OVERWRITE EXISTING WORK UNNECESSARILY

Before modifying existing files:

* Understand what they do.
* Preserve working functionality.
* Reuse existing components when appropriate.
* Avoid unnecessary dependency changes.
* Do not delete files unless necessary.

If something is already implemented correctly, improve it rather than replacing it blindly.

---

# 32. CONTENT

Write original professional plumbing copy.

Tone:

* Confident
* Helpful
* Professional
* Human
* Clear
* Conversion-focused

Avoid generic AI phrases such as:

"Elevate your experience"

"Unleash the power of"

"Revolutionize your"

"Seamless solutions"

Write copy that sounds like a real professional plumbing company.

---

# 33. IMPORTANT LEGAL / ORIGINALITY RULE

The reference website is for DESIGN AND EXPERIENCE INSPIRATION.

Do not copy:

* Source code
* Exact text
* Logos
* Brand identity
* Proprietary images
* Testimonials
* Exact assets
* Hidden implementation details

Create an original website that captures a similar premium plumbing-service experience.

---

# 34. FINAL QUALITY CHECK

Before declaring the project complete, verify:

### Visual

* [ ] Premium appearance
* [ ] Consistent typography
* [ ] Consistent spacing
* [ ] Strong visual hierarchy
* [ ] High-quality imagery
* [ ] Good CTA placement

### Responsive

* [ ] Desktop
* [ ] Tablet
* [ ] Mobile
* [ ] No horizontal overflow

### Functional

* [ ] Navigation works
* [ ] Mobile menu works
* [ ] Buttons work
* [ ] Anchors work
* [ ] FAQ works
* [ ] Testimonial interaction works
* [ ] Contact form works on frontend
* [ ] No broken links

### Technical

* [ ] Production build succeeds
* [ ] No TypeScript errors
* [ ] No console errors
* [ ] Images optimized
* [ ] No unnecessary dependencies
* [ ] SEO metadata configured

### Content

* [ ] No fake business claims
* [ ] No fake contact details
* [ ] No copyrighted images
* [ ] External image sources documented
* [ ] Original copy used

---

# 35. MOST IMPORTANT INSTRUCTION

Do not stop at creating a functional website.

The final result should look like a **premium, professionally designed plumbing company website**.

Compare the implementation continuously against the provided Plumbzo reference and video reference for:

* Composition
* Spacing
* Typography
* Visual hierarchy
* Image quality
* Animation
* Interaction
* Responsiveness
* Conversion flow

If something looks generic, redesign it.

If something looks AI-generated, refine it.

If an animation feels unnecessary, remove it.

If a section feels visually empty, improve its composition.

If mobile feels like an afterthought, redesign it.

Aim for an agency-quality final product.
