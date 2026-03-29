export default function SectionHeader({
  title,
  underline = false,
}: {
  title: string;
  underline?: boolean;
}) {
  return (
    <div>
      <h2
        className={`text-section mb-6 ${
          underline ? "underline" : ""
        }`}
      >
        {title}
      </h2>
    </div>
  );
}