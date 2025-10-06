
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section>
        <p>
          Hi, I'm Gianni Cottone 
        </p>
        <h1 className="font-bold text-3xl">
        Full-Stack Developer + Distributed Systems Engineer
        </h1>
        <p>
        TypeScript · Next.js · Go · Python · Java · C  · MySQL · PHP
        </p>
        
        <div className="flex justify-center gap-3">
          <Link
            href="/projects"
            className="btn rounded"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="btn rounded"
          >
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}
