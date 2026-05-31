import * as React from "react";
import { cn } from "@/lib/utils";

/** Centered max-width container — the page's horizontal rhythm. */
export function Shell({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1360px] px-14", className)}>
      {children}
    </div>
  );
}

/**
 * Section wrapper handling the light/dark alternating rhythm and the
 * top-right §NN annotation label. Wrap content in <Shell> inside.
 */
export function Section({
  id,
  tone = "light",
  anno,
  className,
  children,
}: {
  id?: string;
  tone?: "light" | "dark";
  /** Top-right monospace annotation, e.g. "§ 02 / CATALOG". */
  anno?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative border-t border-rule py-[110px] scroll-mt-[80px]",
        tone === "dark" && "bg-ink text-[oklch(0.92_0.012_75)]",
        className,
      )}
    >
      {anno && (
        <span
          className={cn(
            "absolute right-14 top-6 font-mono text-[10px] uppercase tracking-[0.14em]",
            tone === "dark" ? "text-[oklch(0.55_0.01_60)]" : "text-ink-3",
          )}
        >
          {anno}
        </span>
      )}
      {children}
    </section>
  );
}
