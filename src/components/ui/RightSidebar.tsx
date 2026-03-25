import { BuzzBlock } from "./BuzzBlock";

export function RightSidebar() {
  const groups = [
    {
      title: "Systems",
      items: ["Raft", "k-DHT", "Concurrency", "Networking"],
    },
    {
      title: "Tooling",
      items: ["Git", "Docker", "CI/CD", "Vercel"],
    },
  ];

  return (
    <aside className="w-64 hidden xl:block">
      <BuzzBlock groups={groups} />
    </aside>
  );
}