import Hero from "@/components/sections/Hero";
import Me from "@/components/sections/Me";
import Container from "@/components/ui/structure/Container";

export default function Page() {
  return (
    <Container>
        <Me />
        <Hero />
    </Container>
  );
}