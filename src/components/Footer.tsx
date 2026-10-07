import Link from "next/link";
import { site } from "@/config/site";
import { areas, nav, navHref, services } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import { AdjustableWrench, Pliers, PipeWrench } from "@/components/ui/Tools";
import styles from "./Footer.module.css";

export function Footer({ onHome = true }: { onHome?: boolean }) {
  // Section anchors need the "/" prefix when the footer renders on other pages.
  const base = onHome ? "" : "/";
  const a = site.address;

  return (
    <footer className={styles.footer}>
      <div className={styles.tools} aria-hidden="true">
        <Pliers className={styles.t1} />
        <span className={styles.rod} />
        <PipeWrench className={styles.t2} />
        <AdjustableWrench className={styles.t3} />
      </div>

      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <Link href={`${base}#top`} aria-label={`${site.name} home`} className={styles.logo}>
            <Logo tone="light" />
          </Link>
          <p>{site.shortDescription}</p>
        </div>

        <nav className={styles.col} aria-label="Quick links">
          <h2>Quick Links</h2>
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={navHref(n.href, onHome)}>{n.label}</Link>
              </li>
            ))}
            <li>
              <Link href={`${base}#testimonials`}>Testimonials</Link>
            </li>
            <li>
              <Link href={`${base}#faq`}>FAQs</Link>
            </li>
          </ul>
        </nav>

        <nav className={styles.col} aria-label="Services">
          <h2>Services</h2>
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                <Link href="/services">{s.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className={styles.col} aria-label="Service areas">
          <h2>Service Areas</h2>
          <ul>
            {areas.map((area) => (
              <li key={area.name}>
                <Link href="/service-areas">{area.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className={styles.col} aria-label="Legal">
          <h2>Legal</h2>
          <ul>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.contact}>
          <a href={site.phone.href} className={styles.contactItem}>
            <span className={styles.tile}>
              <Icon name="phone" size={20} />
            </span>
            <span>
              <small>Phone Number</small>
              {site.phone.display}
            </span>
          </a>
          <a href={`mailto:${site.email}`} className={styles.contactItem}>
            <span className={styles.tile}>
              <Icon name="mail" size={20} />
            </span>
            <span>
              <small>Email Address</small>
              {site.email}
            </span>
          </a>
          <div className={styles.contactItem}>
            <span className={styles.tile}>
              <Icon name="pin" size={20} />
            </span>
            <address>
              <small>Physical Address</small>
              {a.street}, {a.city}, {a.region} {a.postalCode}
            </address>
          </div>
          {site.social.length > 0 && (
            <ul className={styles.social}>
              {site.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {site.legalName}. All rights reserved.</p>
      </div>

      <p className={styles.wordmark} aria-hidden="true">
        {site.name}
      </p>
    </footer>
  );
}
