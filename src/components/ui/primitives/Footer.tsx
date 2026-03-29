import ComponentWrapper from "../structure/ComponentWrapper";
import Container from "../structure/Container";
import Surface from "../structure/Surface";

export default async function Footer() {
  const deployedAt = new Date();
  const TIME_ZONE = "America/New_York";


  return (
    <footer className="text-body">
    <Container>
      <Surface>
    <p>© {new Date().getFullYear()} Gianni Cottone.</p>
    <p>
      Built with Next.js, TypeScript, and Tailwind CSS.
    </p>
    <p >
      Last updated{" "}
      {deployedAt.toLocaleDateString("en-US", { timeZone: TIME_ZONE })} at{" "}
      {deployedAt.toLocaleTimeString("en-US", { timeZone: TIME_ZONE })} Eastern Time
    </p>
    </Surface>
    </Container>
    </footer>
  );
}
