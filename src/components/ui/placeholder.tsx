import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Striped placeholder image comp — the designer's stand-in for real
 * photography, with a monospace caption and an optional dark "lab metadata"
 * overlay (COMP-0142 / BATCH …). Reads as an intentional slot, not a missing
 * asset. The stripe backgrounds (.ph / .ph-dark / .ph-gold) live in globals.css.
 */
export function Placeholder({
  tone = "light",
  label,
  meta,
  className,
}: {
  tone?: "light" | "dark" | "gold";
  /** Monospace caption, bottom-left — e.g. "image · macro · passion fruit pulp". */
  label?: string;
  /** Optional metadata overlay, top-left (dark card). */
  meta?: React.ReactNode;
  /** Sizing/aspect classes for the slot, e.g. "aspect-[4/5]". */
  className?: string;
}) {
  return (
    <div
      className={cn(
        "ph",
        tone === "dark" && "ph-dark",
        tone === "gold" && "ph-gold",
        className,
      )}
    >
      {meta && (
        <div className="absolute left-[18px] top-[18px] border border-[oklch(0.40_0.01_60)] bg-[oklch(0.18_0.01_60/0.68)] px-[14px] py-[10px] font-mono text-[10px] leading-[1.3] tracking-[0.08em] text-[oklch(0.95_0.02_80)] [&_b]:font-medium [&_b]:text-gold">
          {meta}
        </div>
      )}
      {label && (
        <div
          className={cn(
            "absolute bottom-[14px] left-4 border px-[9px] py-[6px] font-mono text-[10px] font-medium uppercase leading-[1.2] tracking-[0.08em] backdrop-blur-[2px]",
            tone === "dark"
              ? "border-[oklch(0.40_0.01_60)] bg-[oklch(0.18_0.01_60/0.72)] text-[oklch(0.94_0.02_80)]"
              : "border-rule bg-[oklch(0.97_0.01_80/0.82)] text-ink",
          )}
        >
          {label}
        </div>
      )}
    </div>
  );
}
