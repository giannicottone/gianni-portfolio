import Image from "next/image";
import Section from "../ui/Section";

export default function Me() {
  return (
    <Section>
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* LEFT: Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/Me.jpg"
            alt="Gianni Cottone"
            width={400}
            height={500}
            className="rounded-2xl shadow-md"
          />
        </div>

        {/* RIGHT: Content */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Identity */}
          <div className="flex flex-col gap-2">
            <h2 className="text-section">Hi, I{"'"}m Gianni</h2>
            <p className="text-body">
              Based in New York. I graduated with a B.S in Computer Science from University at Buffalo in Spring of 2025 with a focus on software development. I'm excited to learn new tools and work on industry solutions.
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
    </Section>
  );
}