import Image from "next/image";
import { gallery } from "@/config/gallery";
import { site } from "@/config/site";
import { Icon } from "@/components/ui/Icon";
import styles from "./EmergencyCTA.module.css";

export function EmergencyCTA() {
  return (
    <section className={styles.wrap} aria-labelledby="emergency-title">
      <div className={styles.band}>
        <div className={styles.dots} aria-hidden="true" />
        <div className={`container ${styles.inner}`}>
          <div className={styles.copy} data-reveal>
            <span className={styles.clock} aria-hidden="true">
              <Icon name="clock" size={26} />
            </span>
            <h2 id="emergency-title" className={styles.title}>
              Plumbing Emergency? <br />
              We&apos;re Ready To Help.
            </h2>
            <p className={styles.text}>
              Burst pipe, flooding, no hot water or a sewer backup — call the 24/7 line. We&apos;ll help you shut off
              the water while a plumber is on the way.
            </p>
            <a href={site.emergencyPhone.href} className={styles.call}>
              <Icon name="phone" size={20} />
              Call Now
              <span className={styles.number}>{site.emergencyPhone.display}</span>
              <Icon name="arrow" size={18} />
            </a>
          </div>
        </div>
        <div className={styles.media} data-reveal="fade">
          <Image
            src={gallery.sections.emergencyHelp}
            alt="Plumber going over the job with a homeowner in her kitchen"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
