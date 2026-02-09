async function getLastUpdated() {
  const res = await fetch(
    "https://api.github.com/repos/giannicottone/gianni-portfolio/commits?per_page=1",
    { next: { revalidate: 3600 } }
  );

  const data = await res.json();
  return new Date(data[0].commit.author.date);
}

export default async function Footer() {
  const lastUpdated = await getLastUpdated();
  const TIME_ZONE = "America/New_York";


  return (
    <footer className="mt-16 border-t border-neutral-800">
    <div>
    <p>© {new Date().getFullYear()} Gianni Cottone.</p>
    <p>
      Built with Next.js, TypeScript, and Tailwind CSS.
    </p>
    <p>
      Last updated{" "}
      {lastUpdated.toLocaleDateString("en-US", { timeZone: TIME_ZONE })} at{" "}
      {lastUpdated.toLocaleTimeString("en-US", { timeZone: TIME_ZONE })} Eastern Time
    </p>
    </div>
    </footer>
  );
}

