export default function HowIBuild() {
  return (
    <div className="space-y-4">
      <h3 className="text-sm uppercase tracking-wide text-muted-foreground">
        Implementation
      </h3>
      <ul className="space-y-3">
        <li>Write Tests Before Trusting Code</li>
        <li>Keep Data Flow Clear</li>
        <li>Follow Common Patterns People Expect</li>
      </ul>
    </div>
  );
}