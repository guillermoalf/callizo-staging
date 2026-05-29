/** Callizo.OS mark — amber flame + thin wide-tracked wordmark (from reference). */
export function AdminLogo({ width = 168, height = 40 }: { width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 168 40" fill="none" aria-label="Callizo">
      <g transform="translate(0, 2)">
        <path
          d="M14 2 C 14 9, 7 11, 7 18 C 7 24, 11 28, 14 28 C 17 28, 21 24, 21 18 C 21 13, 17 11, 16 7"
          stroke="#C8960C"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="14" cy="22" r="2" fill="#C8960C" />
      </g>
      <text
        x="32"
        y="27"
        fill="#2C2C2A"
        style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 300, fontSize: "18px", letterSpacing: "0.18em" }}
      >
        CALLIZO
      </text>
    </svg>
  );
}
