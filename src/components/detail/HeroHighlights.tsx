import { Icon, type AnyIcon } from "@/components/ui/Icon";
import styles from "./HeroHighlights.module.css";

/** Stacked feature cards for the `aside` slot of DetailHero. */
export function HeroHighlights({ items }: { items: { title: string; text: string; icon: AnyIcon }[] }) {
  return (
    <ul className={styles.highlights}>
      {items.map((h, i) => (
        <li key={h.title} style={{ "--i": i } as React.CSSProperties}>
          <span className={styles.hlIcon}>
            <Icon name={h.icon} size={22} />
          </span>
          <span>
            <strong>{h.title}</strong>
            <small>{h.text}</small>
          </span>
        </li>
      ))}
    </ul>
  );
}
