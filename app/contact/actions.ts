"use server";

import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";

export type ContactActionState = {
  status: "success" | "error";
  message: string;
};

/**
 * Contact form submission handler — STUB.
 *
 * Re-validates on the server with the shared zod schema and returns a typed
 * result. No email/SMTP provider is wired up yet: where a real integration
 * would send the message is marked below.
 */
export async function submitContact(
  values: ContactFormValues,
): Promise<ContactActionState> {
  const parsed = contactSchema.safeParse(values);

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please check the form and try again.",
    };
  }

  // TODO: integrate an email provider here (e.g. send parsed.data to the
  // studio inbox). Intentionally left unimplemented for this stub.

  return {
    status: "success",
    message: "Message sent — we'll be in touch shortly.",
  };
}
