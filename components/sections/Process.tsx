"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";

const steps = [
  {
    number: "01",
    title: "Design",
    description:
      "We visit your home, understand your space and how you live. Together we shape a design that fits your lifestyle, taste and budget.",
  },
  {
    number: "02",
    title: "Craft",
    description:
      "Every piece is built by hand in our workshop. We select materials carefully and cut every joint with precision — no shortcuts.",
  },
  {
    number: "03",
    title: "Install",
    description:
      "Our team fits everything on-site with the same care it was built with. Clean, precise, and finished to the highest standard.",
  },
];

export function Process() {
  return (
    <section className="bg-brand-ink-deep px-20 py-24 max-[1024px]:px-12 max-[1024px]:py-20 max-[768px]:px-6 max-[768px]:py-16 max-[430px]:px-5 max-[430px]:py-12">
      <ScrollReveal delay={100}>
        <h2 className="mb-20 max-w-[500px] text-[32px] font-light leading-[1.35] text-white max-[1024px]:mb-16 max-[1024px]:text-[28px] max-[768px]:mb-12 max-[768px]:text-[24px] max-[430px]:mb-10 max-[430px]:text-[22px]">
          From first visit to final finish
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-3 gap-16 max-[1024px]:gap-10 max-[768px]:grid-cols-1 max-[768px]:gap-12 max-[430px]:gap-10">
        {steps.map((step, i) => (
          <ScrollReveal key={step.number} delay={200 + i * 150} direction="up">
            <div className="relative">
              <div className="mb-6 text-[64px] font-light leading-none text-white/10 max-[430px]:mb-4 max-[430px]:text-[48px]">
                {step.number}
              </div>
              <h3 className="mb-4 text-[22px] font-normal text-white max-[430px]:text-[19px]">
                {step.title}
              </h3>
              <p className="text-[13px] leading-[1.8] text-white/50">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-8 hidden h-px w-[60%] bg-white/10 max-[768px]:hidden min-[769px]:block" />
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
