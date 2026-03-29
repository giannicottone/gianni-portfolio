import SectionHeader from "../ui/primitives/SectionHeader";
import ComponentWrapper from "../ui/structure/ComponentWrapper";
import HowIThink from "./subsections/Philosophy";
import HowIBuild from "./subsections/Process";

export default function HowIOperate() {
  return (
    <ComponentWrapper>
      <SectionHeader title="How I Operate" />
      <div className="grid md:grid-cols-2 gap-6">
        <HowIThink />
        <HowIBuild />
      </div>
    </ComponentWrapper>
  );
}