import Hero from "@/components/sections/Hero";
import Me from "@/components/sections/Me";
import Now from "@/components/sections/Now";
import Projects from "@/components/sections/Projects";
import HowIOperate from "@/components/sections/ThisIsTheWay";
import Container from "@/components/ui/Container";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/gianni-cottone/",
    label: "LinkedIn",
    description: "Connect professionally",
  },
  {
    href: "https://github.com/giannicottone",
    label: "GitHub",
    description: "Browse my code",
  },
];

export default function HomePage() {
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
