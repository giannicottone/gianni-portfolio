import type { Metadata } from "next";
import "@/app/globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Gianni Cottone · Portfolio",
  description: "Full-Stack & Distributed Systems portfolio for Gianni Cottone.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen ">
        <Header/>
        <main className="flex flex-col flex-auto">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
