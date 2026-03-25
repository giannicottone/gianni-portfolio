type BuzzGroup = {
  title: string;
  items: string[];
};

export function BuzzBlock({ groups }: { groups: BuzzGroup[] }) {
  return (
    <div className="flex flex-col gap-6">
      {groups.map((group) => (
        <div key={group.title} className="flex flex-col gap-2">
          <h3 className="text-xs uppercase tracking-wide text-gray-500">
            {group.title}
          </h3>

          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="text-xs px-2 py-1 bg-gray-100 rounded-md"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}