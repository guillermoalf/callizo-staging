"use client";

import { Section, Shell } from "@/components/ui/shell";
import { SectionHead } from "@/components/ui/section-head";
import { useLanguage } from "@/contexts/language-context";

export function WhyCallizo() {
  const { t } = useLanguage();
  const w = t.why;

  return (
    <Section id="why" anno="§ 04 / CAPABILITIES">
      <Shell>
        <SectionHead
          num={w.section_label}
          eyebrow={w.eyebrow}
          title={
            <>
              {w.title_1}
              <br />
              <em>{w.title_2}</em>
            </>
          }
          side={w.side}
        />
      </Shell>
    </Section>
  );
}
