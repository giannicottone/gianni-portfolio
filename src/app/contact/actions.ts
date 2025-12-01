"use server";

import { ContactSchema,ContactInput } from "@/lib/contact.schema";

export type Confirmation = {
  ok: boolean;
  message: string;
  errors?: Partial<Record<keyof ContactInput, string[]>>;
};

//Function that validates form and sends an email to me and the user who filled out the form
export async function validateAndSend(prev: Confirmation, formData: FormData): Promise<Confirmation> {
  //Extract Data 
  const data = Object.fromEntries(formData.entries());
  //Validate with zod schema
  const validated = ContactSchema.safeParse(data);

  //Return Error Messages
  if (!validated.success) {
    return {
      ok: false,
      message: "Please fix the errors above.",
    };
  }
  return { ok: true, message: "Sent! I’ll get back to you soon." };
}
