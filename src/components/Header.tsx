"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/config/site";
import { isCurrent, nav, navHref } from "@/data/content";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import styles from "./Header.module.css";

/**
 * `onHome` is false on inner pages: section links then point back to the
 * home page. `contactHref` is where the contact button goes.
 */
export function Header({ onHome = true, contactHref }: { onHome?: boolean; contactHref?: string }) {
  const contact = contactHref ?? "/contact";
  const pathname = usePathname();
  const current = (href: string) => (isCurrent(href, pathname) ? "page" : undefined);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll and close on Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Close the menu if the viewport grows to desktop width.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${open ? styles.isOpen : ""}`}>
      <div className={styles.bar}>
        <Link
          href={onHome ? "#top" : "/"}
          className={styles.brand}
          aria-label={onHome ? `${site.name} — back to top` : `${site.name} home`}
          onClick={() => setOpen(false)}
        >
          <Logo tone={scrolled || open ? "dark" : "light"} />
        </Link>

        <nav aria-label="Main" className={styles.nav}>
          <ul>
            {nav
              .filter((item) => item.href !== "/contact")
              .map((item) => (
                <li key={item.href}>
                  <Link href={navHref(item.href, onHome)} className={styles.top} aria-current={current(item.href)}>
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link href={contact} className={`btn ${styles.cta}`}>
            Contact Now
            <span className="btn-icon">
              <Icon name="arrow" size={16} />
            </span>
          </Link>
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={styles.panel} hidden={!open}>
        <nav aria-label="Mobile">
          <ul>
            {nav.map((item, i) => (
              <li key={item.href} style={{ "--i": i } as React.CSSProperties}>
                <Link
                  href={navHref(item.href, onHome)}
                  aria-current={current(item.href)}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                  <Icon name="arrow" size={18} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.panelFoot}>
          <Link href={contact} className="btn" onClick={() => setOpen(false)}>
            Get a Free Quote
            <span className="btn-icon">
              <Icon name="arrow" size={16} />
            </span>
          </Link>
          <a href={site.emergencyPhone.href} className="btn btn-ghost">
            <Icon name="phone" size={16} />
            Call {site.emergencyPhone.display}
          </a>
        </div>
      </div>
    </header>
  );
}
