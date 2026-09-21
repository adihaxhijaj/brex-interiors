"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";

const services = [
  {
    title: "Bespoke Kitchens",
    description:
      "Handcrafted kitchens designed around your space, lifestyle and taste. Every detail considered, every joint precision-cut.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2} className="h-10 w-10">
        <rect x="4" y="20" width="40" height="20" rx="1" />
        <line x1="4" y1="28" x2="44" y2="28" />
        <line x1="18" y1="28" x2="18" y2="40" />
        <rect x="8" y="8" width="32" height="12" rx="1" />
        <circle cx="14" cy="14" r="2" />
        <circle cx="34" cy="14" r="2" />
        <line x1="20" y1="33" x2="24" y2="33" />
        <line x1="8" y1="33" x2="12" y2="33" />
      </svg>
    ),
  },
  {
    title: "Fitted Bedrooms",
    description:
      "Wardrobes, dressing rooms and storage solutions that maximise every inch. Soft-close, clean lines, built to last.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2} className="h-10 w-10">
        <rect x="6" y="6" width="36" height="36" rx="1" />
        <line x1="24" y1="6" x2="24" y2="42" />
        <line x1="18" y1="20" x2="18" y2="28" />
        <line x1="30" y1="20" x2="30" y2="28" />
        <line x1="6" y1="42" x2="6" y2="46" />
        <line x1="42" y1="42" x2="42" y2="46" />
      </svg>
    ),
  },
  {
    title: "Living Spaces",
    description:
      "TV walls, bookshelves, home bars and entertainment units. Bespoke furniture that transforms how you use your room.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2} className="h-10 w-10">
        <rect x="4" y="10" width="40" height="24" rx="1" />
        <line x1="4" y1="28" x2="44" y2="28" />
        <rect x="8" y="14" width="14" height="10" rx="0.5" />
        <line x1="28" y1="16" x2="38" y2="16" />
        <line x1="28" y1="20" x2="38" y2="20" />
        <line x1="28" y1="24" x2="34" y2="24" />
        <line x1="16" y1="34" x2="12" y2="40" />
        <line x1="32" y1="34" x2="36" y2="40" />
      </svg>
    ),
  },
  {
    title: "Interior Joinery",
    description:
      "Architectural joinery for staircases, panelling, doors and specialist cabinetry. Precision work for distinctive spaces.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2} className="h-10 w-10">
        <path d="M8 42L20 6" />
        <path d="M20 6L32 42" />
        <line x1="12" y1="30" x2="28" y2="30" />
        <rect x="30" y="18" width="12" height="24" rx="1" />
        <line x1="36" y1="26" x2="36" y2="30" />
      </svg>
    ),
  },
  {
    title: "Bespoke Storage",
    description:
      "Custom shelving, utility rooms and alcove solutions designed to use every inch. Practical storage that looks as good as it works.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2} className="h-10 w-10">
        <rect x="6" y="4" width="36" height="40" rx="1" />
        <line x1="6" y1="16" x2="42" y2="16" />
        <line x1="6" y1="28" x2="42" y2="28" />
        <line x1="24" y1="28" x2="24" y2="44" />
        <line x1="16" y1="10" x2="20" y2="10" />
        <line x1="16" y1="22" x2="20" y2="22" />
        <line x1="14" y1="36" x2="18" y2="36" />
        <line x1="30" y1="36" x2="34" y2="36" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section className="px-20 py-24 max-[1024px]:px-12 max-[1024px]:py-20 max-[768px]:px-6 max-[768px]:py-16 max-[430px]:px-5 max-[430px]:py-12">
      <ScrollReveal>
        <div className="mb-5 text-[11px] font-normal uppercase tracking-eyebrow text-brand-muted">
          What We Do
        </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <h2 className="mb-16 max-w-[600px] text-[32px] font-light leading-[1.35] text-brand-ink max-[1024px]:mb-12 max-[1024px]:text-[28px] max-[768px]:mb-10 max-[768px]:text-[24px] max-[430px]:mb-8 max-[430px]:text-[22px]">
          Craftsmanship across every room in your home
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-4 grid-rows-[auto_auto] gap-8 max-[1024px]:grid-cols-2 max-[1024px]:gap-6 max-[768px]:gap-5 max-[430px]:grid-cols-1 max-[430px]:gap-4">
        {/* Featured first card — spans 2 columns */}
        <ScrollReveal delay={150} direction="up" className="col-span-2 max-[430px]:col-span-1">
          <div className="group flex h-full flex-col border border-brand-line-soft p-10 transition-all duration-500 hover:border-brand-ink hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] max-[768px]:p-6 max-[430px]:p-5">
            <div className="mb-8 text-brand-muted transition-colors duration-500 group-hover:text-brand-ink max-[430px]:mb-4">
              {services[0].icon}
            </div>
            <h3 className="mb-3 text-[22px] font-normal text-brand-ink max-[1024px]:text-[20px] max-[430px]:text-[16px]">
              {services[0].title}
            </h3>
            <p className="max-w-[400px] text-[14px] leading-[1.75] text-brand-gray-66 max-[430px]:text-[13px]">
              {services[0].description}
            </p>
          </div>
        </ScrollReveal>

        {/* Middle cards — single column */}
        {services.slice(1, 3).map((service, i) => (
          <ScrollReveal key={service.title} delay={250 + i * 100} direction="up">
            <div className="group flex h-full flex-col border border-brand-line-soft p-8 transition-all duration-500 hover:border-brand-ink hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] max-[768px]:p-6 max-[430px]:p-5">
              <div className="mb-6 text-brand-muted transition-colors duration-500 group-hover:text-brand-ink max-[430px]:mb-4">
                {service.icon}
              </div>
              <h3 className="mb-3 text-[18px] font-normal text-brand-ink max-[430px]:text-[16px]">
                {service.title}
              </h3>
              <p className="text-[13px] leading-[1.75] text-brand-gray-66">
                {service.description}
              </p>
            </div>
          </ScrollReveal>
        ))}

        {/* Bottom row cards — each spans 2 columns */}
        {services.slice(3).map((service, i) => (
          <ScrollReveal key={service.title} delay={450 + i * 100} direction="up" className="col-span-2 max-[430px]:col-span-1">
            <div className="group flex h-full flex-col border border-brand-line-soft p-8 transition-all duration-500 hover:border-brand-ink hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] max-[768px]:p-6 max-[430px]:p-5">
              <div className="mb-6 text-brand-muted transition-colors duration-500 group-hover:text-brand-ink max-[430px]:mb-4">
                {service.icon}
              </div>
              <h3 className="mb-3 text-[18px] font-normal text-brand-ink max-[430px]:text-[16px]">
                {service.title}
              </h3>
              <p className="text-[13px] leading-[1.75] text-brand-gray-66">
                {service.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
