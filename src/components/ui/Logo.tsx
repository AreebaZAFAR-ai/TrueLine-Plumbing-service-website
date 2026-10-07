import { site } from "@/config/site";

/** Wordmark: a simple pipe-elbow mark plus the brand name from config. */
export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const fg = tone === "dark" ? "var(--ink)" : "#fff";
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10, color: fg }}>
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="9" fill="var(--blue)" />
        <path
          d="M9 9.5h7.5a6 6 0 0 1 6 6V23"
          fill="none"
          stroke="#fff"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <circle cx="22.5" cy="23" r="1.6" fill="#fff" />
      </svg>
      <span style={{ fontWeight: 700, fontSize: "1.18rem", letterSpacing: "-0.04em" }}>{site.name}</span>
    </span>
  );
}
