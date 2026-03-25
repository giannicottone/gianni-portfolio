import { BuzzBlock } from "./BuzzBlock";

export function LeftSidebar() {
  const groups = [
    {
      title: "Frontend",
      items: ["React", "Next.js", "Tailwind", "TypeScript"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Flask", "REST APIs", "PostgreSQL"],
    },
  ];

  return (
    <aside className="w-64 hidden lg:block">
      <BuzzBlock groups={groups} />
    </aside>
  );
}