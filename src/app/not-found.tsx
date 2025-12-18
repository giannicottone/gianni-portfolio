import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-4 text-center">

      <h1 className="text-2xl font-semibold">Page not found</h1>

      <p className="text-sm opacity-80">
        The page you're looking for doesn't exist.
      </p>

      <Link className="btn p-2" href="/">
        Go Home
      </Link>
    </section>
  );
}
