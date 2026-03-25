import Container from "@/components/ui/Container";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Now from "@/components/sections/Now";
import HowIOperate from "@/components/sections/ThisIsTheWay";

export default function JuniorPage() {
  return (
    <Container>
      <Hero />
      <HowIOperate />
      <Projects />
      <Now />
    </Container>
  );
}