import Card from "@/components/cards/Card";
import ComponentWrapper from "../structure/ComponentWrapper";

export default async function Footer() {
  const deployedAt = new Date();
  const TIME_ZONE = "America/New_York";


  return (
    <footer className="text-body">
    <ComponentWrapper>
  <Card>
    <p>© {new Date().getFullYear()} Gianni Cottone.</p>
    <p>
      Built with Next.js, TypeScript, and Tailwind CSS.
    </p>
    <p >
      Last updated{" "}
      {deployedAt.toLocaleDateString("en-US", { timeZone: TIME_ZONE })} at{" "}
      {deployedAt.toLocaleTimeString("en-US", { timeZone: TIME_ZONE })} Eastern Time
    </p>
  </Card>
    </ComponentWrapper>
    </footer>
  );
}
