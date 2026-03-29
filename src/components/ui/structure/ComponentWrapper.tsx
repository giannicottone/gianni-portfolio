import Container from "./Container";
import Section from "./Section";
import Surface from "./Surface";

export default function ComponentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Section>
        <Container>
            <Surface>
                {children}
            </Surface>
        </Container>
    </Section>
  );
}