"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function GetToKnow() {
  return (
    <section className="bg-brand-cream px-20 py-16 max-[1024px]:px-12 max-[1024px]:py-14 max-[768px]:px-6 max-[768px]:py-11 max-[430px]:px-5 max-[430px]:py-9">
      <ScrollReveal>
        <p className="mb-6 max-w-[640px] text-[15px] leading-[1.75] text-brand-gray-55 max-[430px]:text-[13px]">
          Brex Interiors is a family-run carpentry business specialising in
          bespoke kitchens and fitted interiors. With over 25 years of experience,
          we combine traditional craftsmanship with practical design to create
          spaces that are functional, durable, and carefully finished.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <div className="flex flex-wrap items-center gap-6 max-[768px]:flex-col max-[768px]:items-start max-[768px]:gap-4">
          <Link
            href="/contact"
            className="inline-block bg-brand-ink px-[26px] py-2.5 text-[11px] font-normal uppercase tracking-nav text-white transition-colors hover:bg-brand-gray-44"
          >
            Book a Free Consultation
          </Link>
          <div className="flex items-center gap-4 text-[13px] text-brand-gray-55 max-[430px]:flex-col max-[430px]:items-start max-[430px]:gap-1.5">
            <a href="tel:07984111666" className="transition-colors hover:text-brand-ink">07984 111666</a>
            <span className="text-brand-line-soft max-[430px]:hidden">|</span>
            <a href="tel:07788471618" className="transition-colors hover:text-brand-ink">07788 471618</a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
