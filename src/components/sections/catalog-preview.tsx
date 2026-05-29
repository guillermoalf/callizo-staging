"use client";

import { Section, Shell } from "@/components/ui/shell";
import { SectionHead } from "@/components/ui/section-head";

// STUB — interactive search/filter built in the section pass.
export function CatalogPreview() {
  return (
    <Section id="catalog" anno="§ 02 / CATALOG">
      <Shell>
        <SectionHead
          num={<><b>02 / 07</b> &nbsp;·&nbsp; The Catalog</>}
          eyebrow="Search · filter · sample"
          title={<>Five hundred ingredients,<br />one <em>search bar.</em></>}
          side="Built so an R&D manager can find a maracuyá top-note at 11pm and request a sample before the cafeteria closes."
        />
      </Shell>
    </Section>
  );
}
