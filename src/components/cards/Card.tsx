// components/ui/Card.tsx

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        bg-[rgba(var(--card),0.8)]
        backdrop-blur-md
        rounded-xl p-6

        shadow-md
        transition-all duration-200 ease-out

        hover:-translate-y-1
        hover:shadow-xl
        hover:bg-[rgba(var(--card),0.65)]

        ${className}
      `}
    >
      {children}
    </div>
  );
}