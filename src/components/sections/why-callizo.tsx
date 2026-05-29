import { Section, Shell } from "@/components/ui/shell";
import { SectionHead } from "@/components/ui/section-head";

// STUB — pillars + certifications built in the section pass.
export function WhyCallizo() {
  return (
    <Section id="why" anno="§ 04 / CAPABILITIES">
      <Shell>
        <SectionHead
          num={<><b>04 / 07</b> &nbsp;·&nbsp; Why Callizo</>}
          eyebrow="Credibility pillars"
          title={<>Built like a multinational.<br />Run like a <em>family.</em></>}
          side="What thirty years of sourcing, formulating and shipping inside the Americas adds up to — and why R&D directors at CPG companies keep our number."
        />
      </Shell>
    </Section>
  );
}
