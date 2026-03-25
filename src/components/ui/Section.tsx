export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-5">
      {children}
    </section>
  );
}