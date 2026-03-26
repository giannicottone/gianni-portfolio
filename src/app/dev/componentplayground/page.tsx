import Container from "@/components/ui/Container";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Now from "@/components/sections/Now";
import HowIOperate from "@/components/sections/ThisIsTheWay";
import Me from "@/components/sections/Me";

export default function JuniorPage() {
  return (
    <Container>
      <Me />
      <Hero />
      <HowIOperate />
      <Projects />
      <Now />
    </Container>
  );
}