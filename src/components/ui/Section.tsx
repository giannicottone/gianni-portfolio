export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-8">
      {children}
    </section>
  );
}