import SectionHeader from "@/components/ui/primitives/SectionHeader";
import ComponentWrapper from "../ui/structure/ComponentWrapper";
import Card from "../cards/Card";

export default function Now() {
  return (
    <ComponentWrapper>
      <SectionHeader title="Right Now" />
      <Card>
      <div className="grid gap-6">
<ul className="text-body list-disc pl-5 flex flex-col gap-2 md:max-w-prose">
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
</Card>
    </ComponentWrapper>
  );
}
