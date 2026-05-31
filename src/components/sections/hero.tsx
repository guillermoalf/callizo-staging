"use client";

import { Button } from "@/components/ui/button";
import { Shell } from "@/components/ui/shell";
import { Placeholder } from "@/components/ui/placeholder";
import { Arrow } from "@/components/icons";
import { useLanguage } from "@/contexts/language-context";

export function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  const stats = [
    [h.stat_years_n, h.stat_years_l],
    [h.stat_centers_n, h.stat_centers_l],
    [h.stat_refs_n, h.stat_refs_l],
    [h.stat_dispatch_n, h.stat_dispatch_l],
  ] as const;

  return (
    <section className="relative pb-[92px] pt-16">
      <Shell>
        <div className="grid items-end gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
              {h.eyebrow}
            </div>
            <h1 className="mt-[18px] font-serif text-[clamp(56px,9vw,104px)] font-normal leading-[0.98] tracking-[-0.012em] [&_em]:italic [&_em]:text-gold-deep">
              {h.line1}
              <br />
              {/* wrap the second line in em for the gold italic */}
              <em>{h.line2}</em>
              <br />
              {h.line3}
              <br />
              {h.line4}
            </h1>
            <p className="mt-7 max-w-[44ch] text-[18px] leading-[1.5] text-ink-2">
              {h.subtitle}
            </p>
            <div className="mt-9 flex gap-3">
              <Button href="#catalog">
                {h.cta_primary} <Arrow />
              </Button>
              <Button href="#contact" variant="ghost">
                {h.cta_secondary}
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/5]">
            <Placeholder
              tone="dark"
              className="absolute inset-0 size-full"
              label="image · macro · passion fruit pulp"
              meta={
                <>
                  COMP-0142 · MARACUYÁ
                  <br />
                  <b>NOTE</b> top — green, sulfurous, juicy
                  <br />
                  <b>ORIGIN</b> Cartago Valley, CR
                  <br />
                  <b>BATCH</b> 2026-04-17
                </>
              }
            />
          </div>
        </div>

        <div className="mt-[88px] grid grid-cols-2 border-b border-t border-rule lg:grid-cols-4">
          {stats.map(([n, l]) => (
            <div key={n} className="border-r border-rule py-7 pr-6 last:border-r-0">
              <div className="font-serif text-[56px] leading-none">{n}</div>
              <div className="mt-2.5 max-w-[22ch] text-[13px] text-ink-2">{l}</div>
            </div>
          ))}
        </div>
      </Shell>
    </section>
  );
}
