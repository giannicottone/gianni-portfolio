//Footer component
export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto max-w-5xl px-4 py-10 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Gianni Cottone</p>
      </div>
    </footer>
  );
}