"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b-1 flex justify-center gap-3">
        <Link href="/" className="btn"> Gianni</Link>
        <Link href="/about" className="btn"> About </Link>
        <Link href="/projects" className="btn"> Projects</Link>
        <Link href="/contact" className="btn"> Contact </Link>
    </nav>
  );
}
