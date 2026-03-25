import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Process() {
  return (
    <Section>
      <SectionHeader title="How I Build" />

      <p className="text-muted-foreground max-w-2xl">
        I approach development with a focus on correctness and iteration. I use AI to accelerate
        implementation, but I validate logic, test edge cases, and refine systems manually.
      </p>
    </Section>
  );
}