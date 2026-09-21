"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home", key: "home" },
  { href: "/about", label: "About", key: "about" },
  { href: "/portfolio", label: "Projects", key: "projects" },
  { href: "/contact", label: "Contact", key: "contact" },
] as const;

type NavProps = {
  active?: "home" | "about" | "projects" | "contact";
  /**
   * When the page opens on a full-screen hero, the header floats transparently
   * over it and only condenses into a solid bar once the user scrolls. Pages
   * without a hero leave this off and show the solid container from the top.
   */
  overlay?: boolean;
};

export function Nav({ active, overlay = false }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!overlay) return; // solid pages never change state
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  // Transparent only while floating over the hero and still at the top.
  const transparent = overlay && !scrolled;

  return (
    <nav
      className={cn(
        "z-[100] flex items-center justify-between transition-[background-color,border-color,padding,box-shadow] duration-300 ease-editorial",
        overlay ? "fixed inset-x-0 top-0" : "sticky top-0",
        transparent
          ? "border-b border-transparent bg-transparent px-10 py-7 max-[1024px]:px-8 max-[1024px]:py-6 max-[768px]:px-6 max-[768px]:py-5 max-[430px]:px-5 max-[430px]:py-4"
          : "border-b border-brand-line bg-white/95 px-10 py-5 shadow-[0_1px_24px_-12px_rgba(0,0,0,0.18)] backdrop-blur-md max-[1024px]:px-8 max-[1024px]:py-4 max-[768px]:px-6 max-[768px]:py-3.5 max-[430px]:px-5 max-[430px]:py-3",
      )}
    >
      {/* Legibility scrim — only while transparent over the hero photo */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 -z-10 h-[220%] bg-gradient-to-b from-black/35 to-transparent transition-opacity duration-300",
          transparent ? "opacity-100" : "opacity-0",
        )}
      />

      <Link href="/" aria-label="Brex Interiors — home" className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="Brex Interiors"
          width={4096}
          height={1411}
          priority
          className={cn(
            "w-auto object-contain transition-[filter,height] duration-300 ease-editorial",
            transparent
              ? "h-[48px] [filter:brightness(0)_invert(1)]"
              : "h-[42px]",
          )}
        />
      </Link>

      <ul className="flex list-none flex-row gap-6 max-[768px]:gap-[18px] max-[430px]:gap-3.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className={cn(
                "text-[14px] tracking-nav transition-colors duration-300 max-[430px]:text-[13px]",
                transparent
                  ? "text-white/85 hover:text-white"
                  : "text-brand-ink hover:text-brand-muted",
                active && l.key === active && "font-medium",
              )}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
