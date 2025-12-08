//Footer component
export default function Footer() {
  return (
<footer className="border-t">
  <div>
    <p>© {new Date().getFullYear()} Gianni Cottone.</p>
    <p>
      Built with Next.js, TypeScript, and Tailwind CSS.
    </p>
  </div>
</footer>

  );
}