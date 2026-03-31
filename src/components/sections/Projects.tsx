import SectionHeader from "@/components/ui/primitives/SectionHeader";
import ProjectCard from "@/components/cards/ProjectCard";
import ComponentWrapper from "../ui/structure/ComponentWrapper";

export default function Projects() {
  return (
    <ComponentWrapper>
      <SectionHeader title="Featured Work" />
      <div className="flex flex-col gap-4">
        <ProjectCard
  title="Phone Eats First (In Progress)"
  description="A social-first meal sharing platform where users must post their own meals to unlock their friends’ content."
  details={[
    "Designing a full-stack system with a Spring Boot API, MySQL persistence, and S3-backed media storage to support scalable meal sharing",
    "Implementing a progressive access model where users log breakfast, lunch, and dinner to unlock a mutual friends-only feed",
    "Building core social features including photo uploads, feed retrieval, and future support for likes, comments, and secure user authentication",
  ]}
/>
      </div>
    </ComponentWrapper>
  );
}