import SectionHeader from "@/components/ui/primitives/SectionHeader";
import ProjectCard from "@/components/cards/ProjectCard";
import ComponentWrapper from "../ui/structure/ComponentWrapper";

export default function Projects() {
  return (
    <ComponentWrapper>
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
    </ComponentWrapper>
  );
}