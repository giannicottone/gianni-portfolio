
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
       {/* https://tailwindcss.com/docs/hover-focus-and-other-states pseudo-elements and child-selectors are amazing*/}
       <ul className="flex flex-wrap justify-center 
       *:after:content-['|'] 
       *:after:mx-2 
       *:last:after:content-none"
       >
        <li>C </li>
        <li>Go</li>
        <li>Java</li>
        <li>Python</li>
        <li>TypeScript</li>
        <li>Next.js</li>
        <li>MySQL</li>
        <li>PHP</li>
      </ul>
      
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
