import ComponentWrapper from "../structure/ComponentWrapper";

export default async function Footer() {
  const deployedAt = new Date();
  const TIME_ZONE = "America/New_York";


  return (
    <footer className="text-body">
    <ComponentWrapper>
<div className="
      bg-[rgba(var(--card),0.8)]
      backdrop-blur-md
      rounded-xl p-6

      shadow-md
      transition-all duration-200 ease-out

      hover:-translate-y-1
      hover:shadow-xl
      hover:bg-[rgba(var(--card),0.65)]">
      <div className="grid md:grid-cols-2 gap-6">
    <p>© {new Date().getFullYear()} Gianni Cottone.</p>
    <p>
      Built with Next.js, TypeScript, and Tailwind CSS.
    </p>
    <p >
      Last updated{" "}
      {deployedAt.toLocaleDateString("en-US", { timeZone: TIME_ZONE })} at{" "}
      {deployedAt.toLocaleTimeString("en-US", { timeZone: TIME_ZONE })} Eastern Time
    </p>
</div>
    </ComponentWrapper>
    </footer>
  );
}
