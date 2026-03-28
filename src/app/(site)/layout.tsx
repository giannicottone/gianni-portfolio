import Footer from "@/components/ui/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
}