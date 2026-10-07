"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import styles from "./SectionDock.module.css";

/**
 * Floating "on this page" dock. Slides up once the hero is out of view,
 * highlights the section currently on screen and shows reading progress.
 */
export function SectionDock({
  items,
  phone,
}: {
  items: { id: string; label: string }[];
  phone: { href: string; display: string };
}) {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(items[0]?.id);
  const [progress, setProgress] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);

  // Show/hide, progress and the active section, updated once per frame while scrolling
  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el));
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const max = document.documentElement.scrollHeight - vh;
      const footer = document.querySelector("footer");
      const nearFooter = footer ? footer.getBoundingClientRect().top < vh * 0.9 : false;
      setVisible(window.scrollY > vh * 0.7 && !nearFooter);
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      // The last section whose top has passed the upper third of the screen
      let current = sections[0]?.id;
      for (const s of sections) if (s.getBoundingClientRect().top <= vh * 0.35) current = s.id;
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [items]);

  // Keep the active chip in view on narrow screens
  useEffect(() => {
    const list = listRef.current;
    const chip = list?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (!list || !chip) return;
    list.scrollTo({ left: chip.offsetLeft - list.clientWidth / 2 + chip.clientWidth / 2, behavior: "smooth" });
  }, [active]);

  return (
    <nav
      className={`${styles.dock} ${visible ? styles.show : ""}`}
      aria-label="On this page"
      inert={!visible}
      style={{ "--p": progress } as React.CSSProperties}
    >
      <span className={styles.bar} aria-hidden="true" />
      <ul ref={listRef} className={styles.list}>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              data-id={item.id}
              className={active === item.id ? styles.active : undefined}
              aria-current={active === item.id ? "location" : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <a href={phone.href} className={styles.call} aria-label={`Call ${phone.display}`}>
        <Icon name="phone" size={18} />
      </a>
    </nav>
  );
}
