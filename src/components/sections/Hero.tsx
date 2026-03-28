import Section from "../ui/Section";
export default function Hero() {
  return (
    <Section>
  <div className="space-y-4">
    <h1 className="text-hero">
      I don&apos;t just write code.
      <span className="block">I build systems with intent.</span>
    </h1>

    <p className="text-muted max-w-prose">
      Focused on understanding how software behaves
      <span className="block">
        through continuous building and iteration.
      </span>
    </p>
  </div>
</Section>
  );
}
