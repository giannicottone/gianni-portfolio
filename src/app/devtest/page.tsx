"use client";

import Field from "@/components/forms/Field";

export default function Page() {
  return(
      <main className="text-center text-xl font-medium">
       <Field label="Name" name="name" autoComplete="name" />
      </main>
  )
}