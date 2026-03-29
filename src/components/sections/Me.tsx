import Image from "next/image";
import SectionHeader from "../ui/primitives/SectionHeader";
import ComponentWrapper from "../ui/structure/ComponentWrapper";

export default function Me() {
  return (
    <ComponentWrapper>
      <div className="flex flex-col md:flex-row items-center">
        {/* LEFT: Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/ProfilePicture.jpeg"
            alt="Gianni Cottone"
            width={400}
            height={500}
            className="rounded-2xl h-auto shadow-md"
          />
        </div>

        {/* RIGHT: Content */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Identity */}
          <div className="flex flex-col">
            <SectionHeader underline title = "Hi, I'm Gianni"/>
            <p className="text-body">
              Based in New York. I graduated with a B.S in Computer Science from University at Buffalo in Spring of 2025 with a focus on software development. I&apos;m excited to learn new tools and work on industry solutions.
            </p>
          </div>

          {/* Interests */}
          <div className="flex flex-col gap-2">
            <p className="text-muted text-sm uppercase tracking-wide">
              Interests
            </p>
            <p className="text-body">
              Horror Movies · Cycling · Escape Rooms · Fighting Games
            </p>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
}