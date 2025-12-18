
import Link from "next/link";

export default function Home() {
  return (
     <div className="flex flex-1 items-center justify-center">

      <section className="space-y-2 text-center">

        <p>
        Hi, I{"'"}m Gianni Cottone 
        </p>

        <h1 className="font-bold text-3xl">
        Full-Stack Developer + Distributed Systems Engineer
        </h1>

        <p>
        TypeScript · Next.js · Go · Python · Java · C  · MySQL · PHP
        </p>

        <nav className="flex justify-center gap-3">
          
          <Link href="/projects" className="btn basis-1/4">
            View Projects
          </Link>
          <Link href="/contact" className="btn basis-1/4">
            Contact
          </Link>
        </nav>

      </section>

      </div>
  );
}
