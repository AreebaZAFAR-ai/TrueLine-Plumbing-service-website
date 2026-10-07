"use client";

import { useRef } from "react";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import styles from "./Lightbox.module.css";

/**
 * Photo that follows the pointer with a gentle zoom on hover and opens
 * full-screen in a native <dialog> on click (Escape or backdrop closes it).
 */
export function Lightbox({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const frameRef = useRef<HTMLButtonElement>(null);

  const onMove = (e: React.PointerEvent) => {
    const el = frameRef.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--y", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <>
      <button
        ref={frameRef}
        type="button"
        className={styles.frame}
        onPointerMove={onMove}
        onClick={() => dialogRef.current?.showModal()}
        aria-label={`View larger: ${alt}`}
      >
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 760px, 100vw" />
        <span className={styles.zoom} aria-hidden="true">
          <Icon name="plus" size={18} />
          View photo
        </span>
      </button>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label={alt}
        onClick={(e) => e.target === e.currentTarget && dialogRef.current?.close()}
      >
        <figure className={styles.full}>
          <Image src={src} alt={alt} fill sizes="100vw" />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
        <button type="button" className={styles.close} aria-label="Close" onClick={() => dialogRef.current?.close()}>
          <Icon name="close" size={22} />
        </button>
      </dialog>
    </>
  );
}
