import ComponentWrapper from "../ui/structure/ComponentWrapper";
import Section from "../ui/structure/Section";
export default function Hero() {
  return (
    <ComponentWrapper>
  <div className="flex flex-col gap-4">
    <h1 className="text-hero">
      I don{"'"}t just write code.
      <span className="block">I build systems with intent.</span>
    </h1>

    <p className="text-muted max-w-prose flex flex-col gap-2">
      Focused on understanding how software behaves
      <span className="block">
      through continuous building and iteration.
      </span>
    </p>
  </div>
</ComponentWrapper>
  );
}
