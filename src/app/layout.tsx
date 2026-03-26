import type { Metadata } from "next";
import "@/app/globals.css";

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
      <body>{children}</body>
    </html>
  );
}
