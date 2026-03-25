import Container from "@/components/ui/Container";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import Now from "@/components/sections/Now";

export default function JuniorPage() {
  return (
    <Container>
      <Hero />
      <Philosophy />
      <Projects />
      <Process />
      <Now />
    </Container>
  );
}