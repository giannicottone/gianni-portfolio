import Hero from "@/components/ui/Hero";
import { LeftSidebar } from "@/components/ui/LeftSidebar";
import { RightSidebar } from "@/components/ui/RightSidebar";

export default function Page() {
  return (
    <>
      {/* Hero BREAKS OUT */}
      <Hero />

      {/* Everything else constrained with sidebars */}
      <div className="mx-auto max-w-7xl px-4 flex gap-8">
        <main className="flex-1">
          {/* rest of content */}
        </main>
      </div>
    </>
  );
}
