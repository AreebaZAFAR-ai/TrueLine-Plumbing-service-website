"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import type { QuotePrefill } from "@/components/QuoteForm";

/**
 * Reads `?service=` and `?message=` (see `contactUrl` in lib/quote) and
 * hands them to the QuoteForm via its "quote:prefill" event. Render it
 * after the form, inside <Suspense>, so the form itself stays static.
 */
export function QuotePrefillFromUrl() {
  const params = useSearchParams();
  const service = params.get("service") ?? undefined;
  const message = params.get("message") ?? undefined;

  useEffect(() => {
    if (!service && !message) return;
    window.dispatchEvent(new CustomEvent<QuotePrefill>("quote:prefill", { detail: { service, message } }));
  }, [service, message]);

  return null;
}
