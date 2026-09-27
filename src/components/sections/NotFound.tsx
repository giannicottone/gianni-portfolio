import Link from "next/link";
import Card from "@/components/cards/Card";
import ComponentWrapper from "@/components/ui/structure/ComponentWrapper";

export default function NotFound() {
  return (
    <ComponentWrapper>
      <Card className="flex min-h-[40vh] flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-hero">Page not found</h1>
        <p className="text-body">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link className="btn p-2" href="/">
          Go Home
        </Link>
      </Card>
    </ComponentWrapper>
  );
}
