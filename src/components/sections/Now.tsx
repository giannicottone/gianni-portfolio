import SectionHeader from "@/components/ui/primitives/SectionHeader";
import ComponentWrapper from "../ui/structure/ComponentWrapper";

export default function Now() {
  return (
    <ComponentWrapper>
      <SectionHeader title="Right Now" />
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
      <ul className="text-body list-disc pl-5 flex flex-col gap-2">
      <li>
        Learning new technologies with a focus on underlying systems and behavior
      </li>
      <li>
        Building projects to strengthen core engineering skills and real-world understanding
      </li>
      <li>
        Iterating on this site to better reflect how I think and build as an engineer
      </li>
    </ul>
</div>
    </ComponentWrapper>
  );
}
