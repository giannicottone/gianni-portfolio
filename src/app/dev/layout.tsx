// app/dev/layout.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

// app/dev/layout.tsx
export default function DevLayout({ children }: { children: React.ReactNode }) {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  return (
    <>
      {/* Watermark */}
      <div className="fixed bottom-4 right-4 z-50 pointer-events-none select-none">
        <span className="text-xs font-mono bg-black/70 text-white px-2 py-1 rounded">
          DEV
        </span>
      </div>

      {/* Content */}
        {children}
    </>
  );
}