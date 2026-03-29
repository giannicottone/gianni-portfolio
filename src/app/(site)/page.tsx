import Hero from "@/components/sections/Hero";
import Me from "@/components/sections/Me";
import Now from "@/components/sections/Now";
import Projects from "@/components/sections/Projects";
import HowIOperate from "@/components/sections/Mindset";


export default function HomePage() {
  return (
    <>
      <Me />
      <HowIOperate />
      <Projects />
      <Now />
    </>
  );
}
