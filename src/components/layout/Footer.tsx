export const dynamic = "force-dynamic";

export default async function Footer() {
  const deployedAt = new Date();
  const TIME_ZONE = "America/New_York";


  return (
    <footer className="border-t border-neutral-800">
    <div>
    <div>
    <div>
    <p>© {new Date().getFullYear()} Gianni Cottone.</p>
    <p>
      Built with Next.js, TypeScript, and Tailwind CSS.
    </p>
    </div>
    <p>
      Last updated{" "}
      {deployedAt.toLocaleDateString("en-US", { timeZone: TIME_ZONE })} at{" "}
      {deployedAt.toLocaleTimeString("en-US", { timeZone: TIME_ZONE })} Eastern Time
    </p>
    </div>
    </footer>
  );
}

