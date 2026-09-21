"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { reviews, type Review } from "@/lib/reviews";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import styles from "./Stats.module.css";

const half = Math.ceil(reviews.length / 2);
const row1 = reviews.slice(0, half);
const row2 = reviews.slice(half);

function Bubble({ review }: { review: Review }) {
  return (
    <div className="relative mb-3 flex w-[clamp(190px,22vw,270px)] flex-shrink-0 flex-col rounded-[10px] bg-white px-5 pb-3.5 pt-[18px] after:absolute after:-bottom-2.5 after:left-5 after:h-0 after:w-0 after:border-x-[9px] after:border-t-[10px] after:border-x-transparent after:border-t-white after:content-[''] max-[768px]:w-[clamp(180px,68vw,260px)] max-[430px]:w-[clamp(170px,76vw,240px)]">
      <p className="mb-3.5 flex-1 text-[12px] font-light leading-[1.7] text-brand-gray-44 max-[430px]:text-[11px]">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-end justify-between gap-2">
        <div>
          <div className="mb-px text-[12px] font-medium text-brand-ink-deep">
            {review.name}
          </div>
          <div className="text-[11px] font-light text-brand-muted">
            {review.location}
          </div>
        </div>
        <div className="flex-shrink-0 text-[12px] tracking-[1px] text-brand-star">
          ★★★★★
        </div>
      </div>
    </div>
  );
}

export function Stats() {
  const [playState, setPlayState] = useState<"running" | "paused" | null>(null);
  const toggle = () =>
    setPlayState((p) => (p === "paused" ? "running" : "paused"));
  const trackStyle = playState ? { animationPlayState: playState } : undefined;

  return (
    <section className="overflow-hidden bg-brand-sand">
      {/* Stats row */}
      <div className="flex items-start gap-0 px-[72px] pb-12 pt-[52px] max-[1024px]:px-12 max-[1024px]:pb-10 max-[1024px]:pt-11 max-[768px]:flex-col max-[768px]:gap-6 max-[768px]:px-6 max-[768px]:pb-8 max-[768px]:pt-9 max-[430px]:gap-5 max-[430px]:px-5 max-[430px]:pb-6 max-[430px]:pt-7">
        <ScrollReveal className="flex-1" delay={0}>
          <div className="text-[clamp(44px,6vw,72px)] font-medium leading-none text-brand-ink-deep max-[430px]:text-[40px]">
            <AnimatedCounter target={25} suffix="+" duration={2000} />
          </div>
          <div className="mt-1 text-[13px] font-light text-brand-gray-77">
            years experience
          </div>
        </ScrollReveal>

        <ScrollReveal className="flex-1" delay={150}>
          <div className="mb-0.5 text-[15px] font-light leading-none text-brand-gray-55">
            Over
          </div>
          <div className="text-[clamp(44px,6vw,72px)] font-medium leading-none text-brand-ink-deep max-[430px]:text-[40px]">
            <AnimatedCounter target={300} suffix="+" duration={2200} />
          </div>
          <div className="mt-1 text-[13px] font-light text-brand-gray-77">
            Projects
          </div>
        </ScrollReveal>

        <ScrollReveal className="flex-1" delay={300}>
          <div className="text-[clamp(44px,6vw,72px)] font-medium leading-none text-brand-ink-deep max-[430px]:text-[40px]">
            London
          </div>
          <div className="mt-1 text-[13px] font-light text-brand-gray-77">
            &amp;surrounding areas
          </div>
        </ScrollReveal>
      </div>

      {/* Reviews */}
      <div className="flex items-start gap-5 px-[72px] pb-14 max-[1024px]:gap-4 max-[1024px]:px-12 max-[1024px]:pb-12 max-[768px]:flex-col max-[768px]:px-6 max-[768px]:pb-11 max-[430px]:px-0 max-[430px]:pb-9">
        <ScrollReveal direction="left">
          <div className="flex h-[220px] w-[200px] min-w-[200px] flex-col self-stretch rounded-xl bg-white px-6 pb-6 pt-7 shadow-[0_8px_24px_rgba(0,0,0,0.08)] max-[1024px]:w-[180px] max-[1024px]:min-w-[180px] max-[768px]:h-auto max-[768px]:w-full max-[768px]:flex-row max-[768px]:flex-wrap max-[768px]:items-center max-[768px]:gap-3 max-[768px]:p-5 max-[430px]:rounded-none max-[430px]:p-5">
            <div className="max-[768px]:order-none">
              <svg
                width="44"
                height="34"
                viewBox="0 0 44 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 34V20.8C0 14.8 1.4 10 4.2 6.4C7 2.8 11.2 0.8 16.8 0.4V6C13.6 6.4 11.2 7.6 9.6 9.6C8 11.6 7.2 14 7.2 16.8H14V34H0ZM24 34V20.8C24 14.8 25.4 10 28.2 6.4C31 2.8 35.2 0.8 40.8 0.4V6C37.6 6.4 35.2 7.6 33.6 9.6C32 11.6 31.2 14 31.2 16.8H38V34H24Z"
                  fill="#1a1a1a"
                />
              </svg>
            </div>
            <div className="mb-6 mt-5 text-[clamp(15px,1.6vw,18px)] font-medium leading-[1.4] text-brand-ink-deep max-[768px]:order-1 max-[768px]:m-0 max-[768px]:flex-1 max-[768px]:text-[16px]">
              What our customers are saying
            </div>
            <div className="flex items-center border-t border-brand-muted-soft pt-3.5 max-[768px]:order-2 max-[768px]:w-full max-[768px]:pt-3">
              <button
                type="button"
                aria-label="Pause or resume reviews"
                onClick={toggle}
                className="flex-shrink-0 cursor-pointer border-none bg-transparent p-0 text-[16px] leading-none text-brand-ink-deep"
              >
                &#8592;
              </button>
              <div className="mx-2.5 h-px flex-1 bg-brand-muted" />
              <button
                type="button"
                aria-label="Pause or resume reviews"
                onClick={toggle}
                className="flex-shrink-0 cursor-pointer border-none bg-transparent p-0 text-[16px] leading-none text-brand-ink-deep"
              >
                &#8594;
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div className="flex min-w-0 flex-1 flex-col gap-2.5 max-[768px]:w-full">
          <div className={styles.trackOuter}>
            <div
              className={cn(styles.track, styles.goLeft)}
              style={trackStyle}
            >
              {[...row1, ...row1].map((review, i) => (
                <Bubble key={`r1-${i}`} review={review} />
              ))}
            </div>
          </div>
          <div className={styles.trackOuter}>
            <div
              className={cn(styles.track, styles.goRight)}
              style={trackStyle}
            >
              {[...row2, ...row2].map((review, i) => (
                <Bubble key={`r2-${i}`} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
