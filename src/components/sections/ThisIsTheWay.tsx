import SectionHeader from "../ui/SectionHeader";
import HowIThink from "./subsections/Philosophy";
import HowIBuild from "./subsections/Process";

export default function HowIOperate() {
  return (
    <section>
      <SectionHeader title = "How I Operate"/>

      <div className="grid md:grid-cols-2 gap-5 max-w-4xl">
        <HowIThink />
        <HowIBuild />
      </div>
    </section>
  );
}