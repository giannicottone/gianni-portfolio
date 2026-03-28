import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Now() {
  return (
    <Section>
      <SectionHeader title="Right Now" />
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
    </Section>
  );
}
