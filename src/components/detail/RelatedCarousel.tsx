"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon, type AnyIcon } from "@/components/ui/Icon";
import styles from "./RelatedCarousel.module.css";

export type RelatedCard = {
  href: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  tag?: string;
  icon?: AnyIcon;
};

/** Swipeable, snap-scrolling row of cards with prev/next buttons. */
export function RelatedCarousel({
  eyebrow,
  title,
  cards,
}: {
  eyebrow: string;
  title: React.ReactNode;
  cards: RelatedCard[];
}) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () =>
      setEdge({
        start: track.scrollLeft < 8,
        end: track.scrollLeft + track.clientWidth > track.scrollWidth - 8,
      });
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const go = (dir: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.firstElementChild as HTMLElement | null;
    if (!track || !card) return;
    track.scrollBy({ left: dir * (card.offsetWidth + 18), behavior: "smooth" });
  };

  return (
    <div className={styles.wrap}>
      <div className={`container ${styles.head}`} data-reveal>
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="h2">{title}</h2>
        </div>
        <div className={styles.nav}>
          <button type="button" aria-label="Previous" disabled={edge.start} onClick={() => go(-1)}>
            <Icon name="arrowLeft" size={20} />
          </button>
          <button type="button" aria-label="Next" disabled={edge.end} onClick={() => go(1)}>
            <Icon name="arrow" size={20} />
          </button>
        </div>
      </div>

      <ul ref={trackRef} className={styles.track} data-reveal="fade">
        {cards.map((c) => (
          <li key={c.href} className={styles.item}>
            <Link href={c.href} className={styles.card}>
              <div className={styles.media}>
                <Image src={c.image} alt={c.alt} fill sizes="(min-width: 1024px) 400px, 80vw" />
                {c.tag && <span className={styles.tag}>{c.tag}</span>}
              </div>
              <div className={styles.body}>
                {c.icon && (
                  <span className={styles.icon}>
                    <Icon name={c.icon} size={22} />
                  </span>
                )}
                <h3 className={styles.title}>{c.title}</h3>
                <p className={styles.text}>{c.text}</p>
                <span className={styles.more}>
                  Learn more
                  <span className={styles.arrow}>
                    <Icon name="arrow" size={16} />
                  </span>
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
