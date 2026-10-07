/**
 * Quote request submission.
 *
 * There is no backend yet. To connect one, set NEXT_PUBLIC_QUOTE_ENDPOINT
 * (e.g. a form service URL or your own API route) and requests will be
 * POSTed there as JSON. Until then `submitQuote` resolves with
 * `{ status: "not-configured" }` and the form tells the visitor to call
 * or email instead — it never pretends a message was sent.
 */
export type QuoteRequest = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
};

export type QuoteResult = { status: "sent" } | { status: "not-configured" } | { status: "error"; message: string };

export async function submitQuote(data: QuoteRequest): Promise<QuoteResult> {
  const endpoint = process.env.NEXT_PUBLIC_QUOTE_ENDPOINT;
  if (!endpoint) return { status: "not-configured" };

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) return { status: "error", message: `The server responded with ${res.status}.` };
    return { status: "sent" };
  } catch {
    return { status: "error", message: "We couldn't reach the server. Check your connection and try again." };
  }
}

export type QuoteErrors = Partial<Record<keyof QuoteRequest, string>>;

export function validateQuote(d: QuoteRequest): QuoteErrors {
  const e: QuoteErrors = {};
  if (!d.firstName.trim()) e.firstName = "Please enter your first name.";
  if (!d.lastName.trim()) e.lastName = "Please enter your last name.";

  const digits = d.phone.replace(/\D/g, "");
  if (!digits) e.phone = "Please enter a phone number so we can call you back.";
  else if (digits.length < 7 || digits.length > 15) e.phone = "That phone number doesn't look right.";

  if (!d.email.trim()) e.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.email.trim())) e.email = "Please enter a valid email, like name@domain.com.";

  if (!d.service) e.service = "Choose the service you need.";

  if (d.preferredDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (new Date(`${d.preferredDate}T00:00:00`) < today) e.preferredDate = "Please choose today or a future date.";
  }

  if (d.message.trim().length < 10) e.message = "Tell us a little about the problem (at least 10 characters).";
  return e;
}

/**
 * Link to the contact page, optionally pre-filling the quote form
 * (`?service=<slug>&message=<text>`). Only put non-personal details
 * here — e.g. a service, an area name or a list of symptoms.
 */
export function contactUrl(prefill: { service?: string; message?: string } = {}) {
  const params = new URLSearchParams();
  if (prefill.service) params.set("service", prefill.service);
  if (prefill.message) params.set("message", prefill.message);
  const q = params.toString();
  return q ? `/contact?${q}` : "/contact";
}
