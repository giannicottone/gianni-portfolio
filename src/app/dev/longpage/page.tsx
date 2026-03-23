export default function Page() {
  return (
    <div>
      {Array.from({ length: 100 }).map((_, i) => (
        <p key={i}>Line {i + 1}</p>
      ))}
    </div>
  );
}