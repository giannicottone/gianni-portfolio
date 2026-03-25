import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Now() {
  return (
    <Section>
      <SectionHeader title="Right Now" />

      <ul className="space-y-2 text-muted-foreground">
        <li>• Building a signal aggregation system</li>
        <li>• Refining portfolio architecture</li>
        <li>• Studying distributed coordination patterns</li>
      </ul>
    </Section>
  );
}