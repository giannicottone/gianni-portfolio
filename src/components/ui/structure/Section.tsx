// components/layout/Section.tsx

export default function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-4 md:8 ${className}`}>
      {children}
    </section>
  );
}