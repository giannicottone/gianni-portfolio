import Card from "@/components/cards/Card";
import LinkButton from "@/components/ui/primitives/LinkButton";
import ComponentWrapper from "@/components/ui/structure/ComponentWrapper";

export default function NotFound() {
  return (
    <ComponentWrapper>
      <div className="flex flex-col gap-6">
        <Card>
          <div className="flex flex-col gap-4">
            <h1 className="text-hero">Page not found</h1>
            <p className="text-body">
              The page you&apos;re looking for doesn&apos;t exist.
            </p>
          </div>
        </Card>
        <div className="flex flex-row gap-4">
          <LinkButton label="Go Home" href="/" external={false} />
        </div>
      </div>
    </ComponentWrapper>
  );
}
