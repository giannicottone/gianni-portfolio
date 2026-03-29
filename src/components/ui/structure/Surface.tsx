// components/ui/Surface.tsx
export default function Surface({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="
      rounded-2xl
      border border-neutral-800
      bg-neutral-100
      backdrop-blur
      p-6
    ">
      {children}
    </div>
  );
}