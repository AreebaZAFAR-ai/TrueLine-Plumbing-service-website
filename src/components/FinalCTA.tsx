import Image from "next/image";
import Link from "next/link";
import { gallery } from "@/config/gallery";
import { site } from "@/config/site";
import { Icon } from "@/components/ui/Icon";
import { AdjustableWrench, PipeWrench } from "@/components/ui/Tools";
import styles from "./FinalCTA.module.css";

export function FinalCTA({ quoteHref = "/contact" }: { quoteHref?: string }) {
  return (
    <section className={styles.wrap} aria-labelledby="final-title">
      <div className={`container ${styles.frame}`} data-reveal="scale">
        <Image
          src={gallery.sections.finalCta}
          alt="Plumber inspecting overhead pipework and valves in a plant room"
          fill
          sizes="(min-width: 1280px) 1280px, 100vw"
          className={styles.img}
        />
        <PipeWrench className={styles.toolLeft} />
        <AdjustableWrench className={styles.toolRight} />

        <div className={styles.content}>
          <h2 id="final-title" className={styles.title}>
            Ready To Fix Your <br />
            Plumbing Problem?
          </h2>
          <p className={styles.text}>
            From emergency repairs to new installations, tell us what&apos;s going on and we&apos;ll come back with a
            clear, no-obligation quote.
          </p>
          <div className={styles.ctas}>
            <Link href={quoteHref} className="btn">
              Get Free Quote
            </Link>
            <a href={site.phone.href} className="btn btn-light">
              <Icon name="phone" size={18} />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
