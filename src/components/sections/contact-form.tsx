"use client";

import { Section, Shell } from "@/components/ui/shell";
import { useLanguage } from "@/contexts/language-context";

export function ContactForm() {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <Section id="contact" tone="dark" anno="§ 07 / GET IN TOUCH">
      <Shell>
        <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[oklch(0.65_0.01_65)]">
          {c.eyebrow}
        </div>
        <h2 className="mt-4 max-w-[14ch] font-serif text-[clamp(48px,8vw,80px)] font-normal leading-none [&_em]:italic [&_em]:text-gold">
          {c.headline_1} <em>{c.headline_2}</em>
        </h2>
      </Shell>
    </Section>
  );
}
