"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const services = [
  "Bespoke Kitchens",
  "Fitted Bedrooms",
  "Interior Joinery",
  "Kitchen Islands",
  "Wardrobes",
  "Bookcases",
];

const channels = [
  {
    label: "Email",
    value: "info@brexinteriors.com",
    href: "mailto:info@brexinteriors.com",
  },
  {
    label: "Phone",
    value: "0044 7884 471610",
    href: "tel:+447884471610",
  },
];

/**
 * The dark, cinematic statement half of the contact page. Holds the oversized
 * headline, a live London clock, the studio's contact channels, and a pointer-
 * tracked light that plays over the photography. Purely presentational — the
 * actual enquiry happens in <ContactForm /> on the cream half.
 */
export function ContactStudioAside() {
  const panelRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState<string | null>(null);

  // Live London time. Initialised after mount to avoid hydration mismatch.
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Europe/London",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  // Pointer-tracked light. Writes CSS vars directly — no re-render per move.
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = panelRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <div
      ref={panelRef}
      onPointerMove={onPointerMove}
      className="group/panel relative isolate flex flex-col justify-between overflow-hidden bg-brand-ink-deep px-12 pb-24 pt-14 text-white max-[1024px]:px-10 max-[1024px]:pb-24 max-[1024px]:pt-12 max-[768px]:px-8 max-[768px]:pb-[88px] max-[768px]:pt-11 max-[430px]:px-5 max-[430px]:pb-20 max-[430px]:pt-9"
      style={
        { "--mx": "70%", "--my": "30%" } as React.CSSProperties
      }
    >
      {/* Photography */}
      <Image
        src="/images/kitchen-bg.jpg"
        alt=""
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 55vw"
        className="-z-20 object-cover opacity-[0.32] grayscale-[0.2]"
      />
      {/* Ink veil — keeps type crisp over the image */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-ink-deep/95 via-brand-ink-deep/85 to-brand-ink-deep/70" />
      {/* Pointer light */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover/panel:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx) var(--my), rgba(255,255,255,0.13), transparent 60%)",
        }}
      />
      {/* Grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Top — masthead + availability */}
      <div className="flex items-start justify-between">
        <div
          className="animate-reveal text-[11px] font-normal uppercase tracking-eyebrow text-white/70"
          style={{ animationDelay: "0.05s" }}
        >
          Brex Interiors
          <span className="mt-1 block text-[10px] tracking-caps text-white/40">
            Est. 1996 — London
          </span>
        </div>
        <div
          className="animate-reveal flex items-center gap-2.5 text-[10px] uppercase tracking-caps text-white/70"
          style={{ animationDelay: "0.15s" }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-pulse-ring rounded-full bg-brand-success" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-brand-success" />
          </span>
          Now booking · 2026
        </div>
      </div>

      {/* Center — statement */}
      <div className="py-16 max-[1024px]:py-12 max-[768px]:py-10">
        <h1 className="font-light leading-[1.05] tracking-[-0.01em] text-white">
          {["Let's build", "something"].map((line, i) => (
            <span
              key={line}
              className="block overflow-hidden pb-[0.08em] pt-[0.04em]"
            >
              <span
                className="block animate-rise-line text-[68px] max-[1280px]:text-[58px] max-[1024px]:text-[52px] max-[768px]:text-[46px] max-[430px]:text-[36px]"
                style={{ animationDelay: `${0.25 + i * 0.12}s` }}
              >
                {line}
              </span>
            </span>
          ))}
          <span className="block overflow-hidden pb-[0.14em] pr-[0.1em] pt-[0.04em]">
            <span
              className="block animate-rise-line font-display text-[72px] font-normal italic text-brand-cream max-[1280px]:text-[62px] max-[1024px]:text-[56px] max-[768px]:text-[50px] max-[430px]:text-[40px]"
              style={{ animationDelay: "0.49s" }}
            >
              worth keeping.
            </span>
          </span>
        </h1>
        <p
          className="animate-reveal mt-7 max-w-[34ch] text-[14px] font-light leading-relaxed text-white/65"
          style={{ animationDelay: "0.65s" }}
        >
          A free design visit — we measure, sketch and quote your space in
          person. No pressure, no obligation.
        </p>
      </div>

      {/* Bottom — studio index */}
      <div
        className="animate-reveal flex flex-col gap-7"
        style={{ animationDelay: "0.8s" }}
      >
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-caps text-white/45">
          <span className="tabular-nums text-white/75">
            {time ?? "--:--:--"}
          </span>
          <span className="h-px w-8 bg-white/20" />
          <span>London · UK · GMT</span>
        </div>

        <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="group/row flex items-center justify-between py-4 transition-colors hover:bg-white/[0.03]"
            >
              <span className="flex items-baseline gap-4">
                <span className="w-14 text-[10px] uppercase tracking-caps text-white/40">
                  {c.label}
                </span>
                <span className="text-[15px] font-light text-white transition-colors group-hover/row:text-brand-cream">
                  {c.value}
                </span>
              </span>
              <span
                aria-hidden
                className="translate-x-[-6px] text-white/40 opacity-0 transition-all duration-300 group-hover/row:translate-x-0 group-hover/row:text-white group-hover/row:opacity-100"
              >
                →
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Service ticker */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden border-t border-white/10 py-3.5">
        <div className="flex w-max animate-marquee whitespace-nowrap will-change-transform">
          {[0, 1].map((dup) => (
            <span key={dup} className="flex" aria-hidden={dup === 1}>
              {services.map((s) => (
                <span
                  key={s}
                  className="mx-6 text-[10px] uppercase tracking-caps text-white/35"
                >
                  {s}
                  <span className="ml-12 text-white/15">/</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
