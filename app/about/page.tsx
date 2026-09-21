import type { Metadata } from "next";

import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { AboutContent } from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Family-run since 1996. Learn about Brex Interiors — our story, values, and commitment to bespoke craftsmanship across London and the surrounding areas.",
  openGraph: {
    title: "About — Brex Interiors",
    description:
      "Family-run since 1996. Learn about Brex Interiors — our story, values, and commitment to bespoke craftsmanship.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Nav active="about" />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
