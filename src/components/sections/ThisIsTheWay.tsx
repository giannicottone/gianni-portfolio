import SectionHeader from "../ui/SectionHeader";
import Section from "../ui/Section";
import HowIThink from "./subsections/Philosophy";
import HowIBuild from "./subsections/Process";

export default function HowIOperate() {
  return (
    <Section>
      <SectionHeader title = "How I Operate"/>

      <div className="grid md:grid-cols-2 gap-5 max-w-4xl">
        <HowIThink />
        <HowIBuild />
      </div>
    </Section>
  );
}