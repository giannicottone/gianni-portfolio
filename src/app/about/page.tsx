import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-8">
      <main className="text-center text-xl font-medium">
        Go Back to Main:{" "}
        <Link
          href="/"
          className="text-blue-600 underline hover:text-blue-800 transition"
        >
        Home Page
        </Link>
      </main>
    </div>
  );
}
