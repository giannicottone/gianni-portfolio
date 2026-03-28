export default function HowIBuild() {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-sm font-medium uppercase tracking-wide text-muted">
        Implementation
      </h3>

      <ul className="text-body list-disc pl-5 flex flex-col gap-2">
        <li>Write Tests Before Trusting Code</li>
        <li>Keep Data Flow Clear</li>
        <li>Follow Common Patterns People Expect</li>
      </ul>
    </div>
  );
}