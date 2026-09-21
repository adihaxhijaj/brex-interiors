import type { Metadata } from "next";

import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore our collection of bespoke kitchens and fitted bedrooms across London and the Home Counties. Contemporary, classic and Shaker designs crafted with precision.",
  openGraph: {
    title: "Portfolio — Brex Interiors",
    description:
      "Explore our collection of bespoke kitchens and fitted bedrooms across London and the Home Counties.",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Nav active="projects" />

      <section className="px-20 pb-24 pt-20 max-[1024px]:px-12 max-[1024px]:pb-20 max-[1024px]:pt-16 max-[768px]:px-6 max-[768px]:pb-16 max-[768px]:pt-12 max-[430px]:px-5 max-[430px]:pb-12 max-[430px]:pt-9">
        <ScrollReveal>
          <div className="mb-3 text-[11px] font-normal uppercase tracking-eyebrow text-brand-muted">
            Our Work
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h1 className="mb-5 text-[48px] font-light leading-[1.1] text-brand-ink max-[1024px]:text-[40px] max-[768px]:text-[34px] max-[430px]:text-[28px]">
            Our <strong className="font-medium">Projects</strong>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="mb-16 max-w-[520px] text-[14px] leading-[1.8] text-brand-gray-66 max-[768px]:mb-10 max-[430px]:mb-8">
            Step inside our collection of bespoke kitchens and fitted bedrooms —
            each one designed, crafted and fitted with the same attention to
            detail that has defined Brex Interiors since 1996.
          </p>
        </ScrollReveal>

        <PortfolioGrid />
      </section>

      <Footer />
    </>
  );
}
