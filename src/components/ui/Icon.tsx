import type { IconName } from "@/data/content";

type ExtraIcon =
  | "phone"
  | "arrow"
  | "arrowLeft"
  | "check"
  | "plus"
  | "star"
  | "mail"
  | "pin"
  | "play"
  | "pause"
  | "menu"
  | "close"
  | "quote"
  | "chevron"
  | "soundOn"
  | "soundOff"
  | "tap";

const paths: Record<IconName | ExtraIcon, React.ReactNode> = {
  drop: <path d="M12 3.5S6 10 6 14.5a6 6 0 0 0 12 0C18 10 12 3.5 12 3.5Z" />,
  drain: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 3.5v5M12 15.5v5M3.5 12h5M15.5 12h5" />
    </>
  ),
  flame: (
    <>
      <rect x="6" y="3" width="12" height="18" rx="3" />
      <path d="M12 9.5c1.8 1.6 2.2 2.8 2.2 3.7a2.2 2.2 0 0 1-4.4 0c0-.9.4-2.1 2.2-3.7Z" />
    </>
  ),
  pipe: (
    <>
      <path d="M3 8h9a4 4 0 0 1 4 4v9" />
      <path d="M3 13h7a1 1 0 0 1 1 1v7" />
      <path d="M3 6.5v8M14.5 21h3" />
    </>
  ),
  bath: (
    <>
      <path d="M3 12h18v2.5a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V12Z" />
      <path d="M6 12V5.5A2 2 0 0 1 8 3.5h.5a2 2 0 0 1 2 2M7 19.5 6 21M17 19.5l1 1.5" />
    </>
  ),
  sink: (
    <>
      <path d="M3 13h18a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z" />
      <path d="M12 13V6a2.5 2.5 0 0 1 5 0M9 9h3" />
    </>
  ),
  sewer: (
    <>
      <path d="M3 7h18M3 17h18" />
      <path d="M7 7v10M17 7v10" />
      <circle cx="12" cy="12" r="2" />
    </>
  ),
  siren: (
    <>
      <path d="M6 18v-5a6 6 0 0 1 12 0v5" />
      <path d="M4 18h16v2.5H4zM12 3v2M4.5 6l1.4 1.4M19.5 6l-1.4 1.4" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4.4-4.4" />
    </>
  ),
  wrench: (
    <path d="M14.5 6.5a4 4 0 0 0 5 5L12 19a2.1 2.1 0 0 1-3-3l7.5-7.5a4 4 0 0 1-2-2Zm0 0L17 4" />
  ),
  shield: (
    <>
      <path d="M12 3 4.5 6v5.5c0 4.5 3.2 8.2 7.5 9.5 4.3-1.3 7.5-5 7.5-9.5V6L12 3Z" />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  tag: (
    <>
      <path d="M3.5 12.5V4.5a1 1 0 0 1 1-1h8l8 8-9 9-8-8Z" />
      <circle cx="8.5" cy="8.5" r="1.5" />
    </>
  ),
  badge: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m8.5 13.5-1.5 7 5-2.5 5 2.5-1.5-7" />
    </>
  ),
  box: (
    <>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="m4 7.5 8 4.5 8-4.5M12 12v9" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.8a3.5 3.5 0 0 1 0 6.4M18 14.2a6.5 6.5 0 0 1 3.5 5.8" />
    </>
  ),
  phone: (
    <path d="M5 3.5h3.5l1.8 4.5-2.3 1.4a11 11 0 0 0 6.6 6.6l1.4-2.3 4.5 1.8V19a1.5 1.5 0 0 1-1.5 1.5A16.5 16.5 0 0 1 3.5 5 1.5 1.5 0 0 1 5 3.5Z" />
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  soundOn: (
    <>
      <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor" />
      <path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" />
    </>
  ),
  soundOff: (
    <>
      <path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor" />
      <path d="m16 9.5 5 5M21 9.5l-5 5" />
    </>
  ),
  tap: (
    <>
      <path d="M4 11h9a3 3 0 0 1 3 3v1h3v-3a5 5 0 0 0-5-5H4z" />
      <path d="M8 7V4M5 4h6M17.5 18.5c0 1-.7 1.8-1.5 1.8s-1.5-.8-1.5-1.8c0-.9 1.5-2.5 1.5-2.5s1.5 1.6 1.5 2.5Z" />
    </>
  ),
  arrowLeft: <path d="M19 12H5M11 6l-6 6 6 6" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  plus: <path d="M12 5v14M5 12h14" />,
  star: (
    <path
      d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8l-5.4 2.9 1.1-6.1-4.5-4.2 6.1-.8L12 3Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  play: <path d="M8 5.5v13l10-6.5-10-6.5Z" fill="currentColor" />,
  pause: <path d="M8 5v14M16 5v14" strokeWidth="3" />,
  menu: <path d="M4 8h16M4 16h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  quote: (
    <path
      d="M4 18v-5.5C4 8.4 6.2 6 10 5.5v2.8c-2 .5-3 1.8-3 3.7h3V18H4Zm10 0v-5.5c0-4.1 2.2-6.5 6-7v2.8c-2 .5-3 1.8-3 3.7h3V18h-6Z"
      fill="currentColor"
      stroke="none"
    />
  ),
};

export type AnyIcon = keyof typeof paths;

export function Icon({
  name,
  size = 20,
  className,
}: {
  name: AnyIcon;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
