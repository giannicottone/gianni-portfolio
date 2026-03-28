import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/cards/ProjectCard";

export default function Projects() {
  return (
    <Section>
      <SectionHeader title="Featured Work" />
      <div className="flex flex-col gap-4">
        <ProjectCard
          title="In Progress"
          description="Actively building new work to showcase."
          details={[
            "Focused on real-world use cases",
            "Prioritizing reliability and clarity",
            "Will be updated as projects ship",
          ]}
        />
      </div>
    </Section>
  );
}