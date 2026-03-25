import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Philosophy() {
  return (
    <Section>
      <SectionHeader title="What I Care About" />

      <div className="space-y-6">
        <div>
          <h3 className="font-medium">Reliability over demo-ware</h3>
          <p className="text-muted-foreground">
            I focus on how systems behave under failure, not just happy paths.
          </p>
        </div>

        <div>
          <h3 className="font-medium">Understanding systems</h3>
          <p className="text-muted-foreground">
            I aim to understand communication, state, and coordination—not just frameworks.
          </p>
        </div>

        <div>
          <h3 className="font-medium">Fast iteration with intent</h3>
          <p className="text-muted-foreground">
            I use AI to accelerate development, but validate everything manually.
          </p>
        </div>
      </div>
    </Section>
  );
}