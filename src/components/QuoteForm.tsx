"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gallery } from "@/config/gallery";
import { site } from "@/config/site";
import { services } from "@/data/content";
import { submitQuote, validateQuote, type QuoteErrors, type QuoteRequest } from "@/lib/quote";
import { Icon } from "@/components/ui/Icon";
import { Pliers } from "@/components/ui/Tools";
import styles from "./QuoteForm.module.css";

type Status = "idle" | "submitting" | "sent" | "not-configured" | "error";

const empty: QuoteRequest = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  service: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
};

/** Detail for the "quote:prefill" window event other components can dispatch. */
export type QuotePrefill = { service?: string; message?: string };

export function QuoteForm({ defaultService = "" }: { defaultService?: string }) {
  const [data, setData] = useState<QuoteRequest>({ ...empty, service: defaultService });
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof QuoteRequest, boolean>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");
  const statusRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Any link with data-service="<slug>" pre-selects that service here.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest<HTMLElement>("[data-service]");
      const slug = link?.dataset.service;
      if (slug && services.some((s) => s.slug === slug)) {
        setData((d) => ({ ...d, service: slug }));
        setErrors((er) => ({ ...er, service: undefined }));
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Interactive widgets (e.g. the symptom checker) can fill in the form.
  useEffect(() => {
    const onPrefill = (e: Event) => {
      const { service, message } = (e as CustomEvent<QuotePrefill>).detail ?? {};
      setData((d) => ({
        ...d,
        ...(service && services.some((s) => s.slug === service) ? { service } : {}),
        ...(message ? { message } : {}),
      }));
      setErrors((er) => ({ ...er, service: undefined, message: undefined }));
    };
    window.addEventListener("quote:prefill", onPrefill);
    return () => window.removeEventListener("quote:prefill", onPrefill);
  }, []);

  const update = (name: keyof QuoteRequest, value: string) => {
    const next = { ...data, [name]: value };
    setData(next);
    if (touched[name]) setErrors((er) => ({ ...er, [name]: validateQuote(next)[name] }));
  };

  const blur = (name: keyof QuoteRequest) => {
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((er) => ({ ...er, [name]: validateQuote(data)[name] }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validateQuote(data);
    setErrors(found);
    setTouched(Object.fromEntries(Object.keys(empty).map((k) => [k, true])));
    const first = Object.keys(found)[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    setServerError("");
    const result = await submitQuote(data);
    setStatus(result.status);
    if (result.status === "error") setServerError(result.message);
    if (result.status === "sent") {
      setData({ ...empty, service: defaultService });
      setTouched({});
    }
    requestAnimationFrame(() => statusRef.current?.focus());
  };

  const field = (name: keyof QuoteRequest) => ({
    id: `q-${name}`,
    name,
    value: data[name],
    "aria-invalid": Boolean(errors[name]) || undefined,
    "aria-describedby": errors[name] ? `q-${name}-err` : undefined,
    onBlur: () => blur(name),
  });

  const err = (name: keyof QuoteRequest) =>
    errors[name] ? (
      <p id={`q-${name}-err`} className={styles.error}>
        {errors[name]}
      </p>
    ) : null;

  return (
    <section id="contact" className={`section ${styles.section}`} aria-labelledby="contact-title">
      <div className="container">
        <div className="section-head section-head-center" data-reveal>
          <span className="eyebrow">Contact us</span>
          <h2 id="contact-title" className="h2">
            Let&apos;s Get It <em>Sorted</em>
          </h2>
          <p className="lead">
            Need a repair or have a plumbing question? Send the details and we&apos;ll come back with a clear,
            no-obligation estimate.
          </p>
        </div>
      <div className={styles.layout} data-reveal="scale">
        <Pliers className={styles.tool} />
        <aside className={styles.side}>
          <Image
            src={gallery.sections.contact}
            alt="Plumber fitting a new faucet at a bathroom sink"
            fill
            sizes="(min-width: 1024px) 460px, 100vw"
            className={styles.sideImg}
          />
          <div className={styles.info}>
            <p className={styles.infoTitle}>Contact Info</p>
            <ul>
              <li>
                <span className={styles.infoIcon}>
                  <Icon name="phone" size={18} />
                </span>
                <span>
                  <small>Phone</small>
                  <a href={site.phone.href}>{site.phone.display}</a>
                </span>
              </li>
              <li>
                <span className={styles.infoIcon}>
                  <Icon name="mail" size={18} />
                </span>
                <span>
                  <small>Email</small>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </span>
              </li>
              <li>
                <span className={styles.infoIcon}>
                  <Icon name="pin" size={18} />
                </span>
                <span>
                  <small>Address</small>
                  {site.address.street}, {site.address.city}
                </span>
              </li>
              <li>
                <span className={styles.infoIcon}>
                  <Icon name="clock" size={18} />
                </span>
                <span>
                  <small>{site.hours[0].label}</small>
                  {site.hours[0].value}
                </span>
              </li>
            </ul>
          </div>
        </aside>

        <div className={styles.formWrap}>
          <h3 className={styles.formTitle}>
            Request a <em>Free Estimate</em>
          </h3>
          <p className={styles.sub}>{site.responseNote} For anything urgent, please call.</p>

          <form ref={formRef} className={styles.form} noValidate onSubmit={onSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="q-firstName">First name</label>
                <input type="text" autoComplete="given-name" {...field("firstName")} onChange={(e) => update("firstName", e.target.value)} />
                {err("firstName")}
              </div>
              <div className={styles.field}>
                <label htmlFor="q-lastName">Last name</label>
                <input type="text" autoComplete="family-name" {...field("lastName")} onChange={(e) => update("lastName", e.target.value)} />
                {err("lastName")}
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="q-phone">Phone</label>
                <input type="tel" inputMode="tel" autoComplete="tel" {...field("phone")} onChange={(e) => update("phone", e.target.value)} />
                {err("phone")}
              </div>
              <div className={styles.field}>
                <label htmlFor="q-email">Email</label>
                <input type="email" autoComplete="email" {...field("email")} onChange={(e) => update("email", e.target.value)} />
                {err("email")}
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="q-service">Service needed</label>
              <div className={styles.select}>
                <select {...field("service")} onChange={(e) => update("service", e.target.value)}>
                  <option value="">Select a service…</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.title}
                    </option>
                  ))}
                  <option value="other">Something else</option>
                </select>
              </div>
              {err("service")}
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="q-preferredDate">
                  Preferred date <span className={styles.optional}>(optional)</span>
                </label>
                <input type="date" {...field("preferredDate")} onChange={(e) => update("preferredDate", e.target.value)} />
                {err("preferredDate")}
              </div>
              <div className={styles.field}>
                <label htmlFor="q-preferredTime">
                  Preferred time <span className={styles.optional}>(optional)</span>
                </label>
                <div className={styles.select}>
                  <select {...field("preferredTime")} onChange={(e) => update("preferredTime", e.target.value)}>
                    <option value="">Any time</option>
                    <option value="morning">Morning (8am – 12pm)</option>
                    <option value="afternoon">Afternoon (12pm – 4pm)</option>
                    <option value="evening">Evening (4pm – 7pm)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="q-message">What&apos;s going on?</label>
              <textarea
                rows={5}
                placeholder="E.g. the kitchen sink drains slowly and there's a smell under the cabinet."
                {...field("message")}
                onChange={(e) => update("message", e.target.value)}
              />
              {err("message")}
            </div>

            <button type="submit" className={`btn ${styles.submit}`} disabled={status === "submitting"}>
              {status === "submitting" ? (
                <>
                  <span className={styles.spinner} aria-hidden="true" />
                  Sending…
                </>
              ) : (
                <>
                  Get Your Free Quote
                  <span className="btn-icon">
                    <Icon name="arrow" size={16} />
                  </span>
                </>
              )}
            </button>

            <div ref={statusRef} tabIndex={-1} aria-live="polite" className={styles.statusWrap}>
              {status === "sent" && (
                <p className={`${styles.status} ${styles.ok}`}>
                  <Icon name="check" size={18} />
                  Thanks — your request has been sent. We&apos;ll be in touch soon.
                </p>
              )}
              {status === "not-configured" && (
                <p className={`${styles.status} ${styles.warn}`}>
                  <Icon name="phone" size={18} />
                  <span>
                    Online requests aren&apos;t connected yet, so this message was <strong>not sent</strong>. Please call{" "}
                    <a href={site.phone.href}>{site.phone.display}</a> or email <a href={`mailto:${site.email}`}>{site.email}</a>.
                  </span>
                </p>
              )}
              {status === "error" && (
                <p className={`${styles.status} ${styles.bad}`}>
                  <Icon name="close" size={18} />
                  <span>
                    Sorry, your request didn&apos;t go through. {serverError} You can also call{" "}
                    <a href={site.phone.href}>{site.phone.display}</a>.
                  </span>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
}
