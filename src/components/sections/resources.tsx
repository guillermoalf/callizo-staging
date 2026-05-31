"use client";

import { Section, Shell } from "@/components/ui/shell";
import { SectionHead } from "@/components/ui/section-head";
import { useLanguage } from "@/contexts/language-context";

export function Resources() {
  const { t } = useLanguage();
  const r = t.resources;

  return (
    <Section id="resources" anno="§ 06 / INSIGHTS">
      <Shell>
        <SectionHead
          num={r.section_label}
          eyebrow={r.eyebrow}
          title={
            <>
              {r.title_1}
              <br />
              <em>{r.title_2}</em>
            </>
          }
          side={r.side}
        />
      </Shell>
    </Section>
  );
}
