export default function ProjectCard({
  title,
  description,
  details,
}: {
  title: string;
  description: string;
  details: string[];
}) {
  return (
    <div className="
      bg-[rgba(var(--card),0.8)]
      backdrop-blur-md
      rounded-xl p-6

      shadow-md
      transition-all duration-200 ease-out

      hover:-translate-y-1
      hover:shadow-xl
      hover:bg-[rgba(var(--card),0.65)]">
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        {/* LEFT */}
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-muted">{description}</p>
        </div>

        {/* RIGHT */}
        <ul className="list-disc pl-5 flex flex-col gap-1">
          {details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}