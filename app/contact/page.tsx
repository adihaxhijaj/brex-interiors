import type { Metadata } from "next";

import { Nav } from "@/components/sections/Nav";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactStudioAside } from "@/components/sections/ContactStudioAside";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Brex Interiors for a free design visit. Bespoke kitchens and fitted interiors across London & surrounding areas.",
  openGraph: {
    title: "Contact — Brex Interiors",
    description:
      "Get in touch with Brex Interiors for a free design visit. Bespoke kitchens and fitted interiors across London & surrounding areas.",
  },
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-ink-deep">
      <Nav active="contact" />

      <main className="grid flex-1 grid-cols-1 lg:grid-cols-[1.08fr_0.92fr]">
        {/* Left — dark studio statement */}
        <ContactStudioAside />

        {/* Right — the enquiry */}
        <div className="flex flex-col justify-center bg-brand-cream px-14 py-16 max-[1280px]:px-12 max-[1024px]:px-10 max-[1024px]:py-14 max-[768px]:px-8 max-[768px]:py-12 max-[430px]:px-5 max-[430px]:py-10">
          <div className="mx-auto w-full max-w-[440px]">
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
}
