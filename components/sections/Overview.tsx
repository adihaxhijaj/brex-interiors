"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const credentials = [
  { label: "Est. 1996", detail: "Nearly three decades of craftsmanship" },
  { label: "Fully Bespoke", detail: "Every project designed from scratch" },
  { label: "Design to Install", detail: "End-to-end, single point of contact" },
];

export function Overview() {
  return (
    <section className="px-20 pt-28 max-[1024px]:px-12 max-[1024px]:pt-24 max-[768px]:px-6 max-[768px]:pt-16 max-[430px]:px-5 max-[430px]:pt-12">
      <div className="mb-20 grid grid-cols-[1fr_auto] items-start gap-20 max-[1024px]:mb-16 max-[1024px]:gap-16 max-[768px]:mb-12 max-[768px]:grid-cols-1 max-[768px]:gap-10 max-[430px]:mb-10 max-[430px]:gap-8">
        {/* Left — eyebrow + statement */}
        <div>
          <ScrollReveal direction="none" duration={600}>
            <div className="mb-5 text-[11px] font-normal uppercase tracking-eyebrow text-brand-muted">
              Overview
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p className="max-w-[620px] text-[28px] font-light leading-[1.6] text-brand-ink max-[1024px]:text-[24px] max-[768px]:text-[20px] max-[430px]:text-[18px] max-[430px]:leading-[1.55]">
              Brex Interiors designs and installs bespoke kitchens and fitted
              interiors with a focus on craftsmanship and precision. Each project
              is tailored to its space, built with care, and finished to last.
            </p>
          </ScrollReveal>
        </div>

        {/* Right — credential stack */}
        <div className="flex flex-col gap-8 pt-10 max-[768px]:flex-row max-[768px]:gap-6 max-[768px]:pt-0 max-[430px]:flex-col max-[430px]:gap-6">
          {credentials.map((cred, i) => (
            <ScrollReveal key={cred.label} delay={200 + i * 120} direction="up" distance={24}>
              <div>
                <div className="text-[20px] font-normal text-brand-ink max-[1024px]:text-[18px] max-[430px]:text-[17px]">
                  {cred.label}
                </div>
                <div className="mt-1 text-[13px] font-light text-brand-gray-66">
                  {cred.detail}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Full-width image */}
      <ScrollReveal delay={300} duration={900}>
        <div className="relative h-[520px] w-full max-[1024px]:h-[380px] max-[768px]:h-[280px] max-[430px]:h-[220px]">
          <Image
            src="/images/section-img.jpg"
            alt="Bespoke fitted interior by Brex Interiors"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </ScrollReveal>
    </section>
  );
}
