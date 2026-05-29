import type { ReactElement } from "react";

/* ————————————————————————————————————————————————
   Inline SVG marks, copied from the designer's mockup.
   ———————————————————————————————————————————————— */

export function Arrow({ size = 14 }: { size?: number }) {
  return (
    <svg
      className="arrow transition-transform duration-200 ease-out group-hover:translate-x-[3px]"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg className="size-[18px]" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M20 20l-3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Division glyphs — abstract, restrained geometric marks
   (deliberately NOT beakers / leaves / atoms). Keyed by division id. */
export const Glyphs: Record<string, ReactElement> = {
  flavors: (
    <svg viewBox="0 0 80 80" fill="none" aria-hidden>
      <circle cx="40" cy="40" r="28" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="40" cy="40" r="18" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="40" cy="40" r="8" fill="currentColor" />
      <path d="M40 12v56M12 40h56" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  ),
  fragrances: (
    <svg viewBox="0 0 80 80" fill="none" aria-hidden>
      <path
        d="M40 14c10 8 16 18 16 30a16 16 0 11-32 0c0-12 6-22 16-30z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M40 38c4 4 6 8 6 12"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.55"
      />
    </svg>
  ),
  pets: (
    <svg viewBox="0 0 80 80" fill="none" aria-hidden>
      <circle cx="26" cy="32" r="6" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="54" cy="32" r="6" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="20" cy="50" r="5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="60" cy="50" r="5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M40 42c-9 0-16 7-16 14a8 8 0 008 8h16a8 8 0 008-8c0-7-7-14-16-14z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  ),
  zoo: (
    <svg viewBox="0 0 80 80" fill="none" aria-hidden>
      <path
        d="M16 56l14-28 10 18 10-22 14 32"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="30" cy="28" r="2" fill="currentColor" />
      <circle cx="50" cy="24" r="2" fill="currentColor" />
    </svg>
  ),
  ingredients: (
    <svg viewBox="0 0 80 80" fill="none" aria-hidden>
      <rect x="20" y="20" width="40" height="40" stroke="currentColor" strokeWidth="1.4" />
      <rect x="28" y="28" width="24" height="24" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="40" cy="40" r="6" fill="currentColor" />
    </svg>
  ),
};
