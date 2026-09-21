import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "What We Do",
    links: [
      { label: "Bespoke Kitchens", href: "#" },
      { label: "Fitted Bedrooms", href: "#" },
      { label: "Living Room Furniture", href: "#" },
      { label: "Interior Joinery", href: "#" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Projects", href: "/portfolio" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Socials",
    links: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-brand-ink-deep px-7 pb-5 pt-9 max-[1024px]:px-8 max-[768px]:px-6 max-[768px]:pb-[18px] max-[768px]:pt-8 max-[430px]:px-5 max-[430px]:pb-4 max-[430px]:pt-7">
      <div className="mb-7 flex items-center gap-2.5 max-[430px]:mb-5">
        <Image
          src="/images/logo.png"
          alt="Brex Interiors"
          width={4096}
          height={1411}
          className="h-[45px] w-auto object-contain mix-blend-screen"
        />
      </div>

      <div className="mb-5 grid grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-6 border-b border-white/[0.07] pb-7 max-[1024px]:grid-cols-2 max-[1024px]:gap-x-6 max-[1024px]:gap-y-7 max-[768px]:gap-x-4 max-[768px]:gap-y-6 max-[430px]:grid-cols-1 max-[430px]:gap-5">
        {columns.map((col) => (
          <div key={col.title}>
            <div className="mb-3 text-[10px] font-normal uppercase tracking-caps text-brand-gray-aa">
              {col.title}
            </div>
            <ul className="flex list-none flex-col gap-[7px]">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[12px] text-brand-gray-aa transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <div className="mb-3 text-[10px] font-normal uppercase tracking-caps text-brand-gray-aa">
            Contact
          </div>
          <p className="text-[12px] leading-[1.8] text-brand-gray-aa">
            07788 471618
            <br />
            07984 111666
            <br />
            info@brexinteriors.com
            <br />
            Watford, Hertfordshire
            <br />
            United Kingdom
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between max-[768px]:flex-col max-[768px]:items-start max-[768px]:gap-2">
        <span className="text-[11px] text-brand-gray-aa">
          © 2026 Brex Interiors. All rights reserved.
        </span>
        <a
          href="#"
          className="text-[11px] text-brand-gray-aa transition-colors hover:text-white"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
