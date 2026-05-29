import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * The repeated three-column section header:
 *   [ index / eyebrow ]   [ big serif title w/ gold <em> ]   [ side note ]
 * Used by Catalog, Why, Map and Resources.
 */
export function SectionHead({
  num,
  eyebrow,
  title,
  side,
  tone = "light",
  className,
}: {
  /** e.g. "02 / 07  ·  The Catalog" — the bold "02 / 07" goes in <b>. */
  num: React.ReactNode;
  eyebrow: string;
  /** Display title; wrap accented words in <em> for the gold italic. */
  title: React.ReactNode;
  side: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "mb-16 grid grid-cols-1 items-end gap-10 lg:grid-cols-[1fr_1.6fr_1fr]",
        className,
      )}
    >
      <div className="flex flex-col gap-[14px]">
        <span
          className={cn(
            "font-mono text-[11px] tracking-[0.14em] [&_b]:font-medium [&_b]:text-gold-deep",
            dark ? "text-[oklch(0.65_0.01_65)]" : "text-ink-3",
          )}
        >
          {num}
        </span>
        <span
          className={cn(
            "font-mono text-[11px] font-medium uppercase tracking-[0.14em]",
            dark ? "text-[oklch(0.65_0.01_65)]" : "text-ink-3",
          )}
        >
          {eyebrow}
        </span>
      </div>

      <h2
        className={cn(
          "mt-3 font-serif text-[clamp(40px,6vw,72px)] font-normal leading-[0.98] tracking-[-0.012em]",
          dark
            ? "[&_em]:italic [&_em]:text-gold"
            : "[&_em]:italic [&_em]:text-gold-deep",
        )}
      >
        {title}
      </h2>

      <p
        className={cn(
          "max-w-[32ch] self-end text-sm",
          dark ? "text-[oklch(0.72_0.01_65)]" : "text-ink-2",
        )}
      >
        {side}
      </p>
    </div>
  );
}
