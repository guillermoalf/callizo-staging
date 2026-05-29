import { Section, Shell } from "@/components/ui/shell";
import { SectionHead } from "@/components/ui/section-head";

// STUB — article cards built in the section pass.
export function Resources() {
  return (
    <Section id="resources" anno="§ 06 / INSIGHTS">
      <Shell>
        <SectionHead
          num={<><b>06 / 07</b> &nbsp;·&nbsp; Resources</>}
          eyebrow="Notes from the lab"
          title={<>Field notes from <em>the bench.</em></>}
          side="Application notes, sustainability reports, regulatory briefs and the occasional thinking-out-loud from our formulators."
        />
      </Shell>
    </Section>
  );
}
