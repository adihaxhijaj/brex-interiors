"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!parallaxRef.current) return;
      const y = window.scrollY;
      parallaxRef.current.style.transform = `translate3d(0, ${y * 0.3}px, 0) scale(1.1)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative flex h-screen items-end overflow-hidden">
      {/* Background photo with parallax */}
      <div ref={parallaxRef} className="absolute inset-[-10%] transition-none" style={{ transform: "translate3d(0, 0px, 0) scale(1.1)" }}>
        <Image
          src="/images/kitchen-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Darkening overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.15)_50%,rgba(0,0,0,0.15)_100%)]" />

      {/* Centered brand mark — fade in */}
      <div className="absolute inset-0 z-[2] flex items-center justify-center">
        <Image
          src="/images/logo-big-white.svg"
          alt="Brex Interiors"
          width={546}
          height={188}
          priority
          className="h-auto w-[420px] max-w-[60vw] [filter:brightness(0)_invert(1)] max-[1024px]:w-[340px] max-[1024px]:max-w-[55vw] max-[768px]:w-[260px] max-[768px]:max-w-[68vw] max-[430px]:w-[200px] max-[430px]:max-w-[75vw]"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "scale(1)" : "scale(0.95)",
            transition: "opacity 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s, transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s",
          }}
        />
      </div>

      {/* Bottom-left copy — staggered fade in */}
      <div className="relative z-[2] px-12 pb-12 max-[1024px]:px-10 max-[1024px]:pb-11 max-[768px]:px-7 max-[768px]:pb-9 max-[430px]:px-5 max-[430px]:pb-7">
        <p
          className="mb-1.5 text-[18px] font-normal tracking-[0.04em] text-white max-[1024px]:text-[17px] max-[768px]:text-[15px] max-[430px]:text-[14px]"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s, transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s",
          }}
        >
          Bespoke Kitchens &amp; Interior Joinery
        </p>
        <p
          className="text-[13px] font-light text-white/70 max-[768px]:text-[12px]"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.1s, transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.1s",
          }}
        >
          Designed, crafted and fitted with precision since 1996.
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-6 left-1/2 z-[2] -translate-x-1/2 max-[768px]:hidden"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 1s ease 1.8s",
        }}
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1.5">
          <div className="h-2 w-0.5 animate-bounce rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
