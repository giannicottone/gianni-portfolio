import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link'

export default function Home() {
  return (
    

    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-8">

      <main className="text-center text-xl font-medium">
        This is the first bit of what my website will be:{" "}
        <Link href="/about" className="text-blue-600 underline hover:text-blue-800 transition">
          About Me
        </Link>
        
      </main>
    </div>
  );
}

