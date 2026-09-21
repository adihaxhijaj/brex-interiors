import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { portfolioProjects } from "@/lib/portfolio";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata {
  const project = portfolioProjects.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: `${project.title} — a bespoke ${project.category.toLowerCase().replace(/s$/, "")} project in ${project.location}, designed, crafted and fitted by Brex Interiors.`,
    openGraph: {
      title: `${project.title} — Brex Interiors`,
      description: project.description,
      images: [{ url: project.image, width: 1200, height: 630, alt: project.alt }],
    },
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: Params;
}) {
  const project = portfolioProjects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <Nav active="projects" />

      <article>
        {/* Hero image */}
        <div className="relative aspect-[21/9] w-full overflow-hidden max-[768px]:aspect-[16/9] max-[430px]:aspect-[4/3]">
          <Image
            src={project.image}
            alt={project.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 px-20 pb-14 max-[1024px]:px-12 max-[1024px]:pb-10 max-[768px]:px-6 max-[768px]:pb-8 max-[430px]:px-5 max-[430px]:pb-6">
            <span className="mb-2 inline-block text-[10px] uppercase tracking-eyebrow text-white/70">
              {project.style}
            </span>
            <h1 className="text-[48px] font-light text-white max-[1024px]:text-[40px] max-[768px]:text-[32px] max-[430px]:text-[26px]">
              {project.title}
            </h1>
            <p className="text-[14px] tracking-wide text-white/80">
              {project.location}
            </p>
          </div>
        </div>

        {/* Project details */}
        <div className="px-20 py-20 max-[1024px]:px-12 max-[1024px]:py-16 max-[768px]:px-6 max-[768px]:py-12 max-[430px]:px-5 max-[430px]:py-9">
          <ScrollReveal>
            <div className="mx-auto grid max-w-[1000px] grid-cols-[1fr_2fr] gap-16 max-[768px]:grid-cols-1 max-[768px]:gap-8">
              {/* Sidebar */}
              <div>
                <div className="mb-6 border-b border-brand-line pb-6">
                  <div className="mb-1 text-[10px] uppercase tracking-caps text-brand-muted">
                    Location
                  </div>
                  <div className="text-[14px] text-brand-ink">
                    {project.location}
                  </div>
                </div>

                <div className="mb-6 border-b border-brand-line pb-6">
                  <div className="mb-1 text-[10px] uppercase tracking-caps text-brand-muted">
                    Style
                  </div>
                  <div className="text-[14px] text-brand-ink">
                    {project.style}
                  </div>
                </div>

                <div>
                  <div className="mb-1 text-[10px] uppercase tracking-caps text-brand-muted">
                    Scope
                  </div>
                  <div className="text-[14px] text-brand-ink">
                    Design, Manufacture & Installation
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="mb-6 text-[15px] leading-[1.8] text-brand-gray-66">
                  {project.description}
                </p>
                <p className="text-[15px] leading-[1.8] text-brand-gray-66">
                  Every element was tailored to the client&apos;s lifestyle —
                  from the layout and cabinetry profiles to the choice of
                  materials and finishes. Designed, manufactured and installed
                  by the Brex Interiors team with the care and precision
                  we&apos;ve been known for since 1996.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Gallery */}
          {project.gallery.length > 0 && (
            <ScrollReveal delay={200}>
              <div className="mx-auto mt-20 grid max-w-[1000px] grid-cols-2 gap-4 max-[768px]:mt-12 max-[768px]:grid-cols-1">
                {project.gallery.map((src, i) => (
                  <div
                    key={src}
                    className="relative aspect-[4/3] overflow-hidden"
                  >
                    <Image
                      src={src}
                      alt={`${project.title} detail ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          )}

          {/* Back link */}
          <ScrollReveal delay={300}>
            <div className="mx-auto mt-16 max-w-[1000px] max-[768px]:mt-10">
              <Link
                href="/portfolio"
                className="inline-block border border-brand-ink bg-transparent px-[22px] py-[9px] text-[11px] uppercase tracking-nav text-brand-ink transition-colors hover:bg-brand-ink hover:text-white"
              >
                Back to Portfolio
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </article>

      <Footer />
    </>
  );
}
