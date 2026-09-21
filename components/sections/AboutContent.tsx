"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const values = [
  {
    title: "Craftsmanship",
    description:
      "Every joint is precision-cut, every surface hand-finished. We don&apos;t take shortcuts — quality is built into every detail.",
  },
  {
    title: "Honesty",
    description:
      "Transparent pricing, realistic timelines, and straight-talking advice. We treat every home as if it were our own.",
  },
  {
    title: "Precision",
    description:
      "From the first measurement to the final fitting, accuracy matters. Our work is built to last decades, not just pass inspection.",
  },
  {
    title: "Personal Service",
    description:
      "You deal directly with the people who design and build your project. One team, one point of contact, start to finish.",
  },
];

const milestones = [
  { year: "1996", event: "Founded in Watford, Hertfordshire" },
  { year: "2000s", event: "Expanded into full kitchen design & installation" },
  { year: "2010s", event: "Grew to serve London and the Home Counties" },
  { year: "Today", event: "Three decades of bespoke craftsmanship and counting" },
];

export function AboutContent() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="px-20 pb-20 pt-28 max-[1024px]:px-12 max-[1024px]:pb-16 max-[1024px]:pt-24 max-[768px]:px-6 max-[768px]:pb-12 max-[768px]:pt-16 max-[430px]:px-5 max-[430px]:pb-10 max-[430px]:pt-12">
        <ScrollReveal direction="none" duration={600}>
          <div className="mb-5 text-[11px] font-normal uppercase tracking-eyebrow text-brand-muted">
            About Us
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <h1 className="mb-10 max-w-[720px] text-[42px] font-light leading-[1.3] text-brand-ink max-[1024px]:text-[36px] max-[768px]:mb-8 max-[768px]:text-[30px] max-[430px]:mb-6 max-[430px]:text-[26px]">
            A family business built on{" "}
            <strong className="font-medium">craft</strong>,{" "}
            <strong className="font-medium">care</strong>, and nearly three
            decades of experience.
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="max-w-[600px] text-[15px] leading-[1.8] text-brand-gray-55 max-[430px]:text-[13px]">
            Brex Interiors has been designing, building and fitting bespoke
            kitchens and interiors since 1996. What started as a small carpentry
            workshop in Hertfordshire has grown into a trusted name across London
            and the surrounding areas — but the approach has never changed: measure
            twice, cut once, and always finish to the highest standard.
          </p>
        </ScrollReveal>
      </section>

      {/* ── Full-width image ── */}
      <ScrollReveal delay={200} duration={900}>
        <div className="relative mx-20 h-[480px] max-[1024px]:mx-12 max-[1024px]:h-[360px] max-[768px]:mx-6 max-[768px]:h-[260px] max-[430px]:mx-5 max-[430px]:h-[200px]">
          <Image
            src="/images/section-img.jpg"
            alt="Brex Interiors workshop — bespoke craftsmanship"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </ScrollReveal>

      {/* ── Our Story ── */}
      <section className="px-20 py-28 max-[1024px]:px-12 max-[1024px]:py-24 max-[768px]:px-6 max-[768px]:py-16 max-[430px]:px-5 max-[430px]:py-12">
        <div className="grid grid-cols-[1fr_1fr] gap-20 max-[1024px]:gap-14 max-[768px]:grid-cols-1 max-[768px]:gap-10">
          <div>
            <ScrollReveal direction="none" duration={600}>
              <div className="mb-5 text-[11px] font-normal uppercase tracking-eyebrow text-brand-muted">
                Our Story
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <h2 className="mb-8 text-[32px] font-light leading-[1.35] text-brand-ink max-[1024px]:text-[28px] max-[768px]:text-[24px] max-[430px]:text-[22px]">
                From a Hertfordshire workshop to homes across London
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <p className="mb-6 text-[15px] leading-[1.8] text-brand-gray-55 max-[430px]:text-[13px]">
                Brex Interiors was founded in 1996 with a simple belief: that
                well-made things last. Over the years we&apos;ve fitted hundreds of
                kitchens, bedrooms, and living spaces — each one designed from
                scratch and built by hand.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <p className="text-[15px] leading-[1.8] text-brand-gray-55 max-[430px]:text-[13px]">
                We&apos;re still family-run, still hands-on, and still driven by the
                same principle that started it all: do the job properly, and the
                work speaks for itself.
              </p>
            </ScrollReveal>
          </div>

          {/* Timeline */}
          <div className="flex flex-col gap-8 pt-14 max-[768px]:pt-0">
            {milestones.map((m, i) => (
              <ScrollReveal key={m.year} delay={200 + i * 120} direction="up" distance={24}>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 text-[20px] font-normal text-brand-ink max-[430px]:text-[17px]">
                    {m.year}
                  </div>
                  <div className="mt-1 text-[13px] font-light leading-[1.6] text-brand-gray-66">
                    {m.event}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-brand-ink-deep px-20 py-24 max-[1024px]:px-12 max-[1024px]:py-20 max-[768px]:px-6 max-[768px]:py-16 max-[430px]:px-5 max-[430px]:py-12">
        <ScrollReveal>
          <div className="mb-5 text-[11px] font-normal uppercase tracking-eyebrow text-white/40">
            What We Stand For
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="mb-20 max-w-[500px] text-[32px] font-light leading-[1.35] text-white max-[1024px]:mb-16 max-[1024px]:text-[28px] max-[768px]:mb-12 max-[768px]:text-[24px] max-[430px]:mb-10 max-[430px]:text-[22px]">
            Built on principles, not just plans
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-16 max-[1024px]:gap-10 max-[768px]:grid-cols-1 max-[768px]:gap-12 max-[430px]:gap-10">
          {values.map((value, i) => (
            <ScrollReveal key={value.title} delay={200 + i * 120} direction="up">
              <div>
                <h3 className="mb-4 text-[22px] font-normal text-white max-[430px]:text-[19px]">
                  {value.title}
                </h3>
                <p className="max-w-[440px] text-[13px] leading-[1.8] text-white/50">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="px-20 py-28 max-[1024px]:px-12 max-[1024px]:py-24 max-[768px]:px-6 max-[768px]:py-16 max-[430px]:px-5 max-[430px]:py-12">
        <div className="grid grid-cols-[1fr_auto] items-start gap-20 max-[1024px]:gap-16 max-[768px]:grid-cols-1 max-[768px]:gap-10 max-[430px]:gap-8">
          <div>
            <ScrollReveal direction="none" duration={600}>
              <div className="mb-5 text-[11px] font-normal uppercase tracking-eyebrow text-brand-muted">
                Why Brex
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <h2 className="mb-8 text-[32px] font-light leading-[1.35] text-brand-ink max-[1024px]:text-[28px] max-[768px]:text-[24px] max-[430px]:text-[22px]">
                One team, from design to install
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <p className="mb-6 max-w-[580px] text-[15px] leading-[1.8] text-brand-gray-55 max-[430px]:text-[13px]">
                Unlike larger firms, you deal directly with the people who will
                design and build your project. There&apos;s no sales team, no
                outsourced fitters — just experienced craftsmen who take
                ownership from first sketch to final snagging.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={350}>
              <p className="max-w-[580px] text-[15px] leading-[1.8] text-brand-gray-55 max-[430px]:text-[13px]">
                We keep our operation lean so we can give every project the
                attention it deserves. That means realistic timelines, honest
                pricing, and work we&apos;re proud to stand behind.
              </p>
            </ScrollReveal>
          </div>

          <div className="flex flex-col gap-8 pt-10 max-[768px]:flex-row max-[768px]:gap-6 max-[768px]:pt-0 max-[430px]:flex-col max-[430px]:gap-6">
            {[
              { label: "25+ Years", detail: "Of hands-on experience" },
              { label: "Family-Run", detail: "Personal service, always" },
              { label: "London & Beyond", detail: "Hertfordshire to the Home Counties" },
            ].map((cred, i) => (
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
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-cream px-20 py-16 max-[1024px]:px-12 max-[1024px]:py-14 max-[768px]:px-6 max-[768px]:py-11 max-[430px]:px-5 max-[430px]:py-9">
        <ScrollReveal>
          <p className="mb-6 max-w-[640px] text-[15px] leading-[1.75] text-brand-gray-55 max-[430px]:text-[13px]">
            We&apos;d love to hear about your project. Whether you have detailed plans
            or just an idea, get in touch and we&apos;ll talk it through — no pressure,
            no obligation.
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
    </>
  );
}
