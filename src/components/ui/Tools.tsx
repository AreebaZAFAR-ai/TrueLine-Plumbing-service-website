/**
 * Decorative tool illustrations (original vector drawings).
 * Purely ornamental: always aria-hidden.
 */
type P = { className?: string; style?: React.CSSProperties };

/** Orange pipe wrench, drawn vertically (jaw at the top). */
export function PipeWrench({ className, style }: P) {
  return (
    <svg viewBox="0 0 120 420" className={className} style={style} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="pw-handle" x1="0" x2="1">
          <stop offset="0" stopColor="#c7321a" />
          <stop offset="0.45" stopColor="#ff6a3d" />
          <stop offset="1" stopColor="#b52b14" />
        </linearGradient>
        <linearGradient id="pw-steel" x1="0" x2="1">
          <stop offset="0" stopColor="#6f747b" />
          <stop offset="0.5" stopColor="#e6e8eb" />
          <stop offset="1" stopColor="#7c8188" />
        </linearGradient>
      </defs>
      {/* hook jaw */}
      <path d="M30 18h46a8 8 0 0 1 8 8v30H58v-12H38v12H30z" fill="url(#pw-steel)" />
      <path d="M38 44h20v6H38z" fill="#4b4f55" />
      {[0, 1, 2, 3].map((i) => (
        <path key={i} d={`M38 ${52 + i * 6}h20`} stroke="#5a5f66" strokeWidth="2" />
      ))}
      {/* adjusting nut */}
      <rect x="26" y="78" width="60" height="30" rx="6" fill="url(#pw-steel)" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path key={i} d={`M${32 + i * 9} 80v26`} stroke="#80858c" strokeWidth="2" />
      ))}
      {/* lower jaw + handle */}
      <path d="M34 108h46v36l-8 10v236a20 20 0 0 1-20 20h-0a20 20 0 0 1-20-20V154l2-10z" fill="url(#pw-handle)" />
      <path d="M46 170h14v200H46z" fill="#000" opacity="0.12" rx="6" />
      <circle cx="53" cy="392" r="5" fill="#7a1d0d" />
    </svg>
  );
}

/** Chrome adjustable wrench, vertical. */
export function AdjustableWrench({ className, style }: P) {
  return (
    <svg viewBox="0 0 120 420" className={className} style={style} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="aw-steel" x1="0" x2="1">
          <stop offset="0" stopColor="#8b9097" />
          <stop offset="0.35" stopColor="#f4f5f6" />
          <stop offset="0.7" stopColor="#c3c7cc" />
          <stop offset="1" stopColor="#7d8289" />
        </linearGradient>
      </defs>
      <path
        d="M22 20c0-6 6-10 12-8l10 4v34h32V16l10-4c6-2 12 2 12 8v38c0 18-12 32-28 36v290a18 18 0 0 1-36 0V94C38 90 22 76 22 58z"
        fill="url(#aw-steel)"
      />
      <rect x="44" y="60" width="32" height="10" rx="5" fill="#9aa0a7" />
      <path d="M54 120h12v250H54z" fill="#000" opacity="0.08" />
      <circle cx="60" cy="378" r="7" fill="#fff" stroke="#9aa0a7" strokeWidth="3" />
    </svg>
  );
}

/** Pliers with orange grips, vertical. */
export function Pliers({ className, style }: P) {
  return (
    <svg viewBox="0 0 140 420" className={className} style={style} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="pl-steel" x1="0" x2="1">
          <stop offset="0" stopColor="#7f848b" />
          <stop offset="0.5" stopColor="#eef0f2" />
          <stop offset="1" stopColor="#80858c" />
        </linearGradient>
        <linearGradient id="pl-grip" x1="0" x2="1">
          <stop offset="0" stopColor="#c7321a" />
          <stop offset="0.5" stopColor="#ff6a3d" />
          <stop offset="1" stopColor="#b52b14" />
        </linearGradient>
      </defs>
      <path d="M52 10c-14 30-16 64-8 104l14 40h12l-6-46c-4-34-2-66 6-96z" fill="url(#pl-steel)" />
      <path d="M90 10c14 30 16 64 8 104l-14 40H72l6-46c4-34 2-66-6-96z" fill="url(#pl-steel)" />
      <circle cx="71" cy="150" r="14" fill="url(#pl-steel)" stroke="#6b7076" strokeWidth="2" />
      <circle cx="71" cy="150" r="4" fill="#5d6268" />
      <path d="M60 162 30 400a12 12 0 0 0 22 4l26-238z" fill="url(#pl-grip)" />
      <path d="M82 162l30 238a12 12 0 0 1-22 4L64 166z" fill="url(#pl-grip)" />
    </svg>
  );
}
