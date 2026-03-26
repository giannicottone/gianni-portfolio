import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-center">

      <h1 className="text-hero">Page not found</h1>

      <p className="text-body">
        The page you're looking for doesn't exist.
      </p>

      <Link className="btn p-2" href="/">
        Go Home
      </Link>
    </section>
  );
}
