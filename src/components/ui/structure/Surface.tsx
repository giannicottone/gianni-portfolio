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
    bg-[rgba(var(--surface),0.5)]
    backdrop-blur-md
    rounded-2xl p-8

    transition-all duration-200 ease-out

    hover:bg-[rgba(var(--surface),0.6)]
    ">  
      {children}
    </div>
  );
}