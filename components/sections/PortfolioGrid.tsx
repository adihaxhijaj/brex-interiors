"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { portfolioProjects, CATEGORIES, type Category } from "@/lib/portfolio";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

// ease-out-quart: gentle start, soft settle — reads smooth on hover zoom
const ease = "cubic-bezier(0.25, 1, 0.5, 1)";

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [animating, setAnimating] = useState(false);

  const filtered =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  const handleFilter = useCallback(
    (category: Category) => {
      if (category === activeCategory) return;
      setAnimating(true);
      setTimeout(() => {
        setActiveCategory(category);
        setTimeout(() => setAnimating(false), 50);
      }, 280);
    },
    [activeCategory],
  );

  return (
    <>
      {/* Filter row — editorial underline tabs + live count */}
      <ScrollReveal delay={150}>
        <div className="mb-14 flex items-end justify-between border-b border-brand-line max-[768px]:mb-10 max-[430px]:mb-8">
          <div className="flex gap-8 max-[430px]:gap-5">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleFilter(category)}
                className={cn(
                  "relative pb-4 text-[11px] uppercase tracking-nav transition-colors duration-300 max-[430px]:text-[10px]",
                  activeCategory === category
                    ? "text-brand-ink"
                    : "text-brand-muted hover:text-brand-ink",
                )}
              >
                {category}
                <span
                  className={cn(
                    "absolute -bottom-px left-0 h-[2px] w-full origin-left bg-brand-ink transition-transform duration-300 ease-out",
                    activeCategory === category ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </button>
            ))}
          </div>

          <div className="pb-4 text-[11px] uppercase tracking-label tabular-nums text-brand-muted-soft max-[430px]:hidden">
            {String(filtered.length).padStart(2, "0")}{" "}
            {filtered.length === 1 ? "Project" : "Projects"}
          </div>
        </div>
      </ScrollReveal>

      {/* Editorial index — staggered two columns, calm imagery, numbered */}
      <div
        className={cn(
          "grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-24",
          animating && "pointer-events-none",
        )}
      >
        {filtered.map((project, i) => {
          const offset = i % 2 === 1;
          return (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className={cn(
                "group block",
                offset && "md:mt-28",
              )}
              style={{
                opacity: animating ? 0 : 1,
                transform: animating ? "translateY(14px)" : "translateY(0)",
                transition: `opacity 450ms ${ease} ${i * 60}ms, transform 450ms ${ease} ${i * 60}ms`,
              }}
            >
              {/* Image — restrained 4/3, photo carries the colour */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-cream">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 will-change-transform group-hover:scale-[1.04]"
                  style={{ transitionTimingFunction: ease }}
                />
              </div>

              {/* Caption — hairline rule, index numeral, title, meta */}
              <div className="mt-5 flex items-start gap-5 border-t border-brand-line pt-4">
                <span className="select-none text-[13px] font-light leading-none tabular-nums text-brand-muted-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="text-[20px] font-normal leading-tight text-brand-ink max-[430px]:text-[18px]">
                    <span className="relative inline-block">
                      {project.title}
                      <span
                        className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-brand-ink transition-transform duration-700 group-hover:scale-x-100"
                        style={{ transitionTimingFunction: ease }}
                      />
                    </span>
                  </h3>
                  <p className="mt-1 text-[13px] text-brand-muted">
                    {project.location}
                  </p>
                </div>

                <span className="whitespace-nowrap pt-1 text-[10px] uppercase tracking-caps text-brand-muted-soft">
                  {project.category}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
