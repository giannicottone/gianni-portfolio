import HowIThink from "./subsections/Philosophy";
import HowIBuild from "./subsections/Process";

export default function HowIOperate() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-10">
        How I Operate
      </h2>

      <div className="grid md:grid-cols-2 gap-5 max-w-4xl">
        <HowIThink />
        <HowIBuild />
      </div>
    </section>
  );
}