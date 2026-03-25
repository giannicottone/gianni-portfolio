export default function Hero() {
  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center gap-16">
        
        {/* Left: Content */}
        <div className="flex-1 flex flex-col gap-6">
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            Full-Stack & Distributed Systems Developer
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Building reliable systems and clean web applications
          </h1>

          <p className="text-lg text-gray-600 max-w-xl">
            Focused on correctness, scalability, and real-world system design.
          </p>

          <div className="flex gap-4 pt-2">
            <a className="px-6 py-3 bg-black text-white rounded-lg">
              View Projects
            </a>
            <a className="px-6 py-3 border rounded-lg">
              Contact
            </a>
          </div>
        </div>

        {/* Right: Skills Panel */}
        <div className="flex-1 w-full bg-gray-50 rounded-2xl p-6 border">
          <div className="grid grid-cols-2 gap-6">
            
            {/* Frontend / Backend */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xs uppercase text-gray-500 tracking-wide">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Tailwind", "TypeScript"].map((item) => (
                  <span key={item} className="text-xs px-2 py-1 bg-white rounded-md border">
                    {item}
                  </span>
                ))}
              </div>

              <h3 className="text-xs uppercase text-gray-500 tracking-wide pt-3">
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Flask", "REST APIs", "PostgreSQL"].map((item) => (
                  <span key={item} className="text-xs px-2 py-1 bg-white rounded-md border">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Systems / Tooling */}
            <div className="flex flex-col gap-3">
              <h3 className="text-xs uppercase text-gray-500 tracking-wide">
                Systems
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Raft", "k-DHT", "Concurrency", "Networking"].map((item) => (
                  <span key={item} className="text-xs px-2 py-1 bg-white rounded-md border">
                    {item}
                  </span>
                ))}
              </div>

              <h3 className="text-xs uppercase text-gray-500 tracking-wide pt-3">
                Tooling
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "Docker", "CI/CD", "Vercel"].map((item) => (
                  <span key={item} className="text-xs px-2 py-1 bg-white rounded-md border">
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}