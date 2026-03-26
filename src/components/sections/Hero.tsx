import Section from "../ui/Section";
export default function Hero() {
  return (
    <Section>
      <div className="max-w-2xl">
        <h1 className="text-hero">
          I don&apos;t just write code.
          <br />
          I build systems with intent.
        </h1>
        <p className="text-muted mt-4">
          Focused on understanding how software behaves 
          <br />
          through continuous building and iteration.
        </p>
      </div>
    </Section>
  );
}
