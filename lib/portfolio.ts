export const CATEGORIES = ["All", "Kitchens", "Bedrooms"] as const;
export type Category = (typeof CATEGORIES)[number];
export type ProjectCategory = Exclude<Category, "All">;

export type PortfolioProject = {
  slug: string;
  title: string;
  location: string;
  category: ProjectCategory;
  /** Short descriptor shown as an eyebrow label, e.g. "Contemporary". */
  style: "Contemporary" | "Classic" | "Shaker";
  /** Hero / card image under /public/images/projects. */
  image: string;
  alt: string;
  /** Full project write-up shown on the detail page. */
  description: string;
  /** Extra images shown in the detail-page gallery (excludes the hero). */
  gallery: string[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "new-malden-kitchen",
    title: "New Malden Kitchen",
    location: "New Malden, Surrey",
    category: "Kitchens",
    style: "Shaker",
    image: "/images/projects/kitchen-new-malden.jpg",
    alt: "Ivory in-frame Shaker kitchen with a marble-clad island in New Malden",
    description:
      "A grand in-frame Shaker kitchen in soft ivory, anchored by a marble-clad waterfall island with seating for four and an integrated induction hob. Brushed-brass hardware and slimline pendants warm the scheme, while illuminated open shelving and a full-height marble splashback lift it to showpiece status.",
    gallery: [],
  },
  {
    slug: "slough-kitchen",
    title: "Slough Kitchen",
    location: "Slough, Berkshire",
    category: "Kitchens",
    style: "Contemporary",
    image: "/images/projects/kitchen-slough-1.jpg",
    alt: "Dark wood-grain kitchen with a natural-stone waterfall island in Slough",
    description:
      "Dark wood-grain cabinetry meets a natural-stone waterfall island in this open-plan kitchen. Matte-black wall units, integrated lighting and black tapware keep the look sharp, while Crittall-style sliding doors open the whole space onto the garden.",
    gallery: ["/images/projects/kitchen-slough-2.jpg"],
  },
  {
    slug: "mill-hill-kitchen",
    title: "Mill Hill Kitchen",
    location: "Mill Hill, London",
    category: "Kitchens",
    style: "Contemporary",
    image: "/images/projects/kitchen-mill-hill.jpg",
    alt: "Handleless kitchen with stone-effect tall units and a taupe island in Mill Hill",
    description:
      "A bold handleless kitchen pairing textured stone-effect tall units with a soft taupe island and pale quartz worktops. Fully integrated appliances, sculptural chrome ring pendants and a garden-facing window over the sink make it as practical as it is striking.",
    gallery: [],
  },
  {
    slug: "statement-handleless-kitchen",
    title: "Statement Handleless Kitchen",
    location: "Design Visualisation",
    category: "Kitchens",
    style: "Contemporary",
    image: "/images/projects/kitchen-modern-3.jpg",
    alt: "Contemporary handleless kitchen with a Calacatta-marble island and cream cabinetry",
    description:
      "A contemporary handleless kitchen rendered in our design studio — matte cream cabinetry, a Calacatta-marble waterfall island and full-height splashback, a gas hob and twin built-in ovens. Black cone pendants and herringbone flooring add contrast against the bright, minimal palette.",
    gallery: [
      "/images/projects/kitchen-modern-1.jpg",
      "/images/projects/kitchen-modern-2.jpg",
      "/images/projects/kitchen-modern-4.jpg",
      "/images/projects/kitchen-modern-5.jpg",
      "/images/projects/kitchen-modern-6.jpg",
      "/images/projects/kitchen-modern-7.jpg",
      "/images/projects/kitchen-modern-8.jpg",
    ],
  },
  {
    slug: "mill-hill-loft-bedroom",
    title: "Mill Hill Loft Bedroom",
    location: "Mill Hill, London",
    category: "Bedrooms",
    style: "Contemporary",
    image: "/images/projects/bedroom-mill-hill-1.jpg",
    alt: "Fitted wardrobes built into the eaves of a loft bedroom in Mill Hill",
    description:
      "Floor-to-ceiling fitted wardrobes built into the eaves of a loft conversion. The handleless dove-grey doors follow the line of the sloped ceiling, turning awkward roof angles into full-height storage while keeping the room calm, bright and completely uncluttered.",
    gallery: ["/images/projects/bedroom-mill-hill-2.jpg"],
  },
  {
    slug: "uxbridge-fitted-bedroom",
    title: "Uxbridge Fitted Bedroom",
    location: "Uxbridge, London",
    category: "Bedrooms",
    style: "Contemporary",
    image: "/images/projects/bedroom-uxbridge-1.jpg",
    alt: "Wood-effect fitted bedroom with a built-in dressing table in Uxbridge",
    description:
      "A wall-to-wall fitted bedroom in a warm wood-effect finish — tall hinged wardrobes, an integrated six-drawer chest and a built-in dressing table with a backlit mirror. A recessed niche frames a wall-mounted TV, tying storage, display and dressing into one seamless run.",
    gallery: ["/images/projects/bedroom-uxbridge-2.jpg"],
  },
];
