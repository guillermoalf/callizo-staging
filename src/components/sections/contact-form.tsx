"use client";

import { Section, Shell } from "@/components/ui/shell";

// STUB — country-routed form wired to submitSampleRequest in the section pass.
export function ContactForm() {
  return (
    <Section id="contact" tone="dark" anno="§ 07 / GET IN TOUCH">
      <Shell>
        <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[oklch(0.65_0.01_65)]">
          Begin a project · request samples · book a lab visit
        </div>
        <h2 className="mt-4 max-w-[14ch] font-serif text-[clamp(48px,8vw,80px)] font-normal leading-none [&_em]:italic [&_em]:text-gold">
          Tell us what you&apos;re <em>working on.</em>
        </h2>
      </Shell>
    </Section>
  );
}
