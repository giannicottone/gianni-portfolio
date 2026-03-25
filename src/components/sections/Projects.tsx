import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/cards/ProjectCard";

export default function Projects() {
  return (
    <Section>
      <SectionHeader title="Selected Work" />

      <div className="space-y-8">
        <ProjectCard
          title="Market Pulse"
          description="Interest detection tool using multi-source signals."
          details={[
            "Handled data bias across sources",
            "Adjusted scoring model for realism",
            "Focused on signal reliability over raw volume",
          ]}
        />

        <ProjectCard
          title="Distributed Message Service"
          description="Concurrent TCP messaging system using Go."
          details={[
            "Maintains ordering per connection",
            "Supports concurrent message handling",
            "Focus on safe shutdown and resource management",
          ]}
        />
      </div>
    </Section>
  );
}