import { z } from "zod";

//Simple Schema For Contact Information Validation - With Honeypot
export const ContactSchema = z.object({
  name: z.string().trim().min(2,{error:"How is your name only 1 letter :|"}),
  email: z.email({error: "Please Enter a Valid Email"}).trim().toLowerCase(),
  message: z.string().trim().min(2,{error:"Please enter a longer message"}),
});

export type ContactInput = z.infer<typeof ContactSchema>;
