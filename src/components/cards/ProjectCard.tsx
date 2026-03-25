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
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
        {/* LEFT */}
        <div className="max-w-md">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground mt-2">{description}</p>
        </div>

        {/* RIGHT */}
        <ul className="text-sm text-muted-foreground space-y-1">
          {details.map((d, i) => (
            <li key={i}>• {d}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}