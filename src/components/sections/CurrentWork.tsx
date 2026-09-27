import ProjectCard from "../cards/ProjectCard";
import SectionHeader from "../ui/primitives/SectionHeader";
import ComponentWrapper from "../ui/structure/ComponentWrapper";

export default function CurrentWork() {
  return (
    <ComponentWrapper>
      <SectionHeader title="Where I Work" />
      <ProjectCard
        title="Netsmart"
        description="Software Developer"
        details={[
          "Build and maintain software using InterSystems Caché/IRIS",
          "Contribute to ongoing engineering work across an established product",
          "Support updates to existing features and application workflows",
        ]}
      />
    </ComponentWrapper>
  );
}
