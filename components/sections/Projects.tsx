"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { projects } from "@/lib/projects";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const AUTOPLAY_MS = 4000;

export function Projects() {
  const total = projects.length;
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(
    undefined,
  );
  const touchStartX = useRef(0);

  const startTimer = useCallback(() => {
    timerRef.current = setInterval(
      () => setCurrent((c) => (c + 1) % total),
      AUTOPLAY_MS,
    );
  }, [total]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    startTimer();
  }, [startTimer]);

  const goTo = useCallback(
    (n: number) => {
      setCurrent((n + total) % total);
      resetTimer();
    },
    [total, resetTimer],
  );

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) goTo(dx < 0 ? current + 1 : current - 1);
  };

  return (
    <section className="flex h-screen flex-col px-20 py-20 max-[1024px]:h-auto max-[1024px]:px-12 max-[1024px]:py-16 max-[768px]:px-6 max-[768px]:py-12 max-[430px]:px-5 max-[430px]:py-9">
      <ScrollReveal>
        <div className="mb-[60px] text-[11px] font-normal uppercase tracking-eyebrow text-brand-muted max-[1024px]:mb-11 max-[768px]:mb-7 max-[430px]:mb-[22px]">
          Recent Projects
        </div>
      </ScrollReveal>

      <div className="relative flex min-h-0 flex-1 flex-col">
        <div className="min-h-0 flex-1 overflow-hidden">
          <div
            className="flex h-full transition-transform duration-carousel ease-carousel max-[1024px]:h-auto max-[768px]:items-start"
            style={{ transform: `translateX(-${current * 100}%)` }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {projects.map((project, i) => {
              const reverse = i % 2 === 1;
              return (
                <div
                  key={project.image}
                  className="grid h-full min-w-full grid-cols-2 items-center gap-[60px] max-[1024px]:h-auto max-[1024px]:gap-10 max-[768px]:grid-cols-1 max-[768px]:items-start max-[768px]:gap-5 max-[430px]:gap-4"
                >
                  <div
                    className={cn(
                      "group aspect-square w-full overflow-hidden max-[768px]:aspect-[4/3] max-[430px]:aspect-[3/2]",
                      reverse && "order-2 max-[768px]:order-none",
                    )}
                  >
                    <div className="relative h-full w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                    </div>
                  </div>

                  <div
                    className={cn(
                      "py-1",
                      reverse && "order-1 max-[768px]:order-none",
                    )}
                  >
                    <div className="mb-[18px] text-[11px] font-normal tracking-label text-brand-muted max-[430px]:mb-3">
                      {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                    </div>
                    <div className="mb-1.5 text-[22px] font-normal text-brand-ink max-[1024px]:text-[20px] max-[768px]:text-[18px] max-[430px]:text-[17px]">
                      {project.name}
                    </div>
                    <div className="mb-[14px] text-[13px] text-brand-muted">
                      {project.location}
                    </div>
                    <p className="text-[13px] leading-[1.75] text-brand-gray-66">
                      {project.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-11 flex items-center gap-4 max-[1024px]:mt-8 max-[768px]:mt-6 max-[768px]:flex-wrap max-[768px]:gap-3 max-[430px]:gap-2.5">
          <button
            type="button"
            aria-label="Previous project"
            onClick={() => goTo(current - 1)}
            className="group flex h-10 w-10 flex-shrink-0 items-center justify-center border border-brand-ink bg-transparent text-brand-ink transition-colors hover:bg-brand-ink hover:text-white max-[430px]:h-9 max-[430px]:w-9"
          >
            <svg viewBox="0 0 14 14" className="h-3.5 w-3.5">
              <path
                d="M9 2L4 7l5 5"
                stroke="currentColor"
                strokeWidth={1.5}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next project"
            onClick={() => goTo(current + 1)}
            className="group flex h-10 w-10 flex-shrink-0 items-center justify-center border border-brand-ink bg-transparent text-brand-ink transition-colors hover:bg-brand-ink hover:text-white max-[430px]:h-9 max-[430px]:w-9"
          >
            <svg viewBox="0 0 14 14" className="h-3.5 w-3.5">
              <path
                d="M5 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth={1.5}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {projects.map((project, i) => (
              <button
                key={project.image}
                type="button"
                aria-label={`Go to project ${i + 1}`}
                aria-current={i === current}
                onClick={() => goTo(i)}
                className={cn(
                  "h-px cursor-pointer bg-brand-gray-dd transition-all",
                  i === current ? "w-10 bg-brand-ink" : "w-5",
                )}
              />
            ))}
          </div>

          <Link
            href="/portfolio"
            className="ml-auto inline-block border border-brand-ink bg-transparent px-[22px] py-[9px] text-[11px] font-normal uppercase tracking-nav text-brand-ink transition-colors hover:bg-brand-ink hover:text-white max-[768px]:ml-0 max-[768px]:w-full max-[768px]:text-center"
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
