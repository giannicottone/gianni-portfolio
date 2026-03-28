// components/layout/Section.tsx
import Container from "./Container";

export default function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-16 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}