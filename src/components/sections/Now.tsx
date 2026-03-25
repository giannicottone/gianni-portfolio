import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Now() {
  return (
    <Section>
      <SectionHeader title="Right Now" />

      <ul className="text-muted-foreground space-y-2 max-w-2xl">
      <li>
        • Learning new technologies with a focus on underlying systems and behavior
      </li>
      <li>
        • Building projects to strengthen core engineering skills and real-world understanding
      </li>
      <li>
        • Iterating on this site to better reflect how I think and build as an engineer
      </li>
    </ul>
    </Section>
  );
}