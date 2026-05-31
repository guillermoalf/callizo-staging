"use client";

import { Section, Shell } from "@/components/ui/shell";
import { useLanguage } from "@/contexts/language-context";

export function PetsDivision() {
  const { t } = useLanguage();
  const p = t.pets;

  return (
    <Section id="pets" tone="dark" anno="§ 03 / DIVISIONS">
      <Shell>
        <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[oklch(0.65_0.01_65)]">
          {p.division_label}
        </div>
        <h3 className="mt-[18px] max-w-[18ch] font-serif text-[clamp(40px,7vw,64px)] font-normal leading-none [&_em]:italic [&_em]:text-gold">
          {p.headline_1} <em>{p.headline_2}</em>
        </h3>
      </Shell>
    </Section>
  );
}
