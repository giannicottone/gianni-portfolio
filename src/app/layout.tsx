import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://giannicottone.dev"),
  title: { default: "Gianni Cottone — Software Engineer", template: "%s — Gianni Cottone" },
  description: "Gianni Cottone – Software Engineer specializing in Go & TypeScript. Explore projects in distributed systems, APIs & modern web development",
  openGraph: {
    type: "website",
    siteName: "Gianni Cottone",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-background text-foreground font-sans">
        <Navbar />
        <main className="px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
