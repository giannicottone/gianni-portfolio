
import Link from "next/link";

export default function Home() {
  return (
     <div>

      <section>

        <p>
        Hi, I{"'"}m Gianni Cottone 
        </p>

        <h1>
        Distributed Systems Engineer
        </h1>

       <ul>
        <li>C </li>
        <li>Go</li>
        <li>Java</li>
        <li>Python</li>
        <li>TypeScript</li>
        <li>Next.js</li>
        <li>MySQL</li>
        <li>PHP</li>
      </ul>
      
        <nav>
          <Link href="/projects" className="btn basis-1/4">
            View Projects
          </Link>
          <Link href="/contact" className="btn basis-1/4">
            Contact
          </Link>
        </nav>

        <p>
          I enjoy backend work, but I'm comfortable moving across the stack.
          <span className="block"> 
          I care about keeping systems simple, smart, and easy to work on over time. 
          </span>
        </p> 
        
        <div>
        <Link
          href="https://www.linkedin.com/in/gianni-cottone/"
          rel="noreferrer"
          className="hover:text-neutral-400 underline underline-offset-4"
        >
          My LinkedIn
        </Link>
        <p>{"<--"} Check out these links while I work on this website{"-->"}</p>
        <Link
          href="https://github.com/giannicottone"
          rel="noreferrer"
          className="hover:text-neutral-400 underline underline-offset-4"
        >
          My GitHub
        </Link>
        </div>
        

      </section>

      </div>
  );
}
