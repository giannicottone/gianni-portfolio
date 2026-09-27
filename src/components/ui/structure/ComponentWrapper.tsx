import Container from "./Container";
import Section from "./Section";
import Surface from "./Surface";

export default function ComponentWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Section className={className}>
        <Container>
            <Surface>
                {children}
            </Surface>
        </Container>
    </Section>
  );
}
