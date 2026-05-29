import { Section, Shell } from "@/components/ui/shell";

// STUB — filled out in the section pass.
export function PetsDivision() {
  return (
    <Section id="pets" tone="dark" anno="§ 03 / DIVISIONS">
      <Shell>
        <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[oklch(0.65_0.01_65)]">
          Division 03 — Pets &amp; Palatability
        </div>
        <h3 className="mt-[18px] max-w-[18ch] font-serif text-[clamp(40px,7vw,64px)] font-normal leading-none [&_em]:italic [&_em]:text-gold">
          Palatability systems that pets <em>actually</em> choose.
        </h3>
      </Shell>
    </Section>
  );
}
