import Link from "next/link";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/gianni-cottone/",
    label: "LinkedIn",
    description: "Connect professionally",
  },
  {
    href: "https://github.com/giannicottone",
    label: "GitHub",
    description: "Browse my code",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero */}
      <section className="space-y-4">
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
            Full-Stack Developer
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Gianni Cottone
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
          Full-stack developer focused on building reliable, well-structured systems.
          </p>
        </div>

        <div className="flex gap-4 text-sm text-slate-600">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="text-gray-600 max-w-2xl">
          I{"'"}m a computer science graduate with a focus on distributed systems and backend development.
          I enjoy building systems that are correct, scalable, and easy to reason about.
        </p>
      </section>

      {/* Projects Preview */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Projects</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="border p-4 rounded">
            Project placeholder
          </div>
          <div className="border p-4 rounded">
            Project placeholder
          </div>
        </div>
      </section>

    </div>
  );
}
