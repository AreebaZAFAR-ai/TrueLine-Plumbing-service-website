import Link from "next/link";
import { site } from "@/config/site";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import { Footer } from "@/components/Footer";
import styles from "./LegalPage.module.css";

/** Shared shell for the Privacy and Terms placeholder pages. */
export function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <header className={`container ${styles.head}`}>
        <Link href="/" aria-label={`${site.name} home`}>
          <Logo />
        </Link>
        <Link href="/" className="link-arrow">
          <Icon name="arrowLeft" size={16} /> Back to home
        </Link>
      </header>
      <main id="main" className={`container ${styles.main}`}>
        <h1>{title}</h1>
        <p className={styles.note}>
          <span className="sample-note">
            Placeholder text — have this page written or reviewed for your business before launch.
          </span>
        </p>
        <div className={styles.body}>{children}</div>
      </main>
      <Footer onHome={false} />
    </>
  );
}
