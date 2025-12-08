//Header Component, Still unusure if i'll put navigation here

import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
    <div>
      <Link href="/" className="text-xl font-semibold">
        Gianni Cottone
      </Link>
    </div>
    </header>
  );
}