import SectionHeader from "../ui/primitives/SectionHeader";
import ComponentWrapper from "../ui/structure/ComponentWrapper";
import HowIThink from "./subsections/Philosophy";
import HowIBuild from "./subsections/Process";

export default function HowIOperate() {
  return (
    <ComponentWrapper>
      <SectionHeader title="How I Operate" />
<div className="
      bg-[rgba(var(--card),0.8)]
      backdrop-blur-md
      rounded-xl p-6

      shadow-md
      transition-all duration-200 ease-out

      hover:-translate-y-1
      hover:shadow-xl
      hover:bg-[rgba(var(--card),0.65)]">
      <div className="grid md:grid-cols-2 gap-6">
        <HowIThink />
        <HowIBuild />
      </div>
      </div>
    </ComponentWrapper>
  );
}