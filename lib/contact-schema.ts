import { z } from "zod";

/**
 * Single source of truth for contact-form validation. Shared by the client
 * component (react-hook-form) and the server action stub so the rules can
 * never drift apart.
 *
 * Field ids mirror the legacy form (_legacy/contact.html): name, email,
 * number (optional phone), message.
 */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your full name." })
    .max(100, { message: "Name is too long." }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required." })
    .email({ message: "Please enter a valid email address." }),
  number: z
    .string()
    .trim()
    .max(40, { message: "Phone number is too long." })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, { message: "Please tell us a little about your project." })
    .max(2000, { message: "Message is too long." }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
