import Card from "@/components/cards/Card";
import ComponentWrapper from "@/components/ui/structure/ComponentWrapper";
import LinkButton from "@/components/ui/primitives/LinkButton";

export default function NotFound() {
  return (
    <ComponentWrapper className="flex min-h-screen w-full items-center">
      <Card className="flex min-h-[40vh] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-hero">Page not found</h1>
        <p className="text-body">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>  
      </Card>
      <LinkButton label="Go Home" href="/" external={false} />
    </ComponentWrapper>
  );
}
