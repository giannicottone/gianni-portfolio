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
    <div className="border rounded-xl p-6">
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