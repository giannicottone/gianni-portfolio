export default function SectionHeader({
  title,
}: {
  title: string;
}) {
  return (
    <div>
      <h2 className="text-section mb-6">{title}</h2>
    </div>
  );
}
