// Dev-only playground. Never accessible in production.

import { notFound } from "next/navigation";

export const metadata = {
  robots: { index: false, follow: false },
};

export default function DevtestPage() {
  if (process.env.NODE_ENV === "production") notFound();
  return <div>Devtest</div>;
}
