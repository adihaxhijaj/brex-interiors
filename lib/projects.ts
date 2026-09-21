/**
 * Recent-projects carousel data for the homepage. Mirrors the real projects
 * shown in the portfolio (see lib/portfolio.ts).
 */
export type Project = {
  /** Image under /public/images/projects */
  image: string;
  alt: string;
  name: string;
  location: string;
  description: string;
};

export const projects: Project[] = [
  {
    image: "/images/projects/kitchen-new-malden.jpg",
    alt: "Ivory in-frame Shaker kitchen with a marble-clad island in New Malden",
    name: "New Malden Kitchen",
    location: "New Malden, Surrey",
    description:
      "A grand in-frame Shaker kitchen in soft ivory, anchored by a marble-clad waterfall island with seating for four. Brushed-brass hardware, slimline pendants and a full-height marble splashback lift it to showpiece status.",
  },
  {
    image: "/images/projects/kitchen-slough-1.jpg",
    alt: "Dark wood-grain kitchen with a natural-stone waterfall island in Slough",
    name: "Slough Kitchen",
    location: "Slough, Berkshire",
    description:
      "Dark wood-grain cabinetry meets a natural-stone waterfall island. Matte-black wall units and black tapware keep the look sharp, while Crittall-style sliding doors open the space onto the garden.",
  },
  {
    image: "/images/projects/kitchen-mill-hill.jpg",
    alt: "Handleless kitchen with stone-effect tall units and a taupe island in Mill Hill",
    name: "Mill Hill Kitchen",
    location: "Mill Hill, London",
    description:
      "A bold handleless kitchen pairing textured stone-effect tall units with a soft taupe island and pale quartz worktops, finished with sculptural chrome ring pendants over a garden-facing sink.",
  },
  {
    image: "/images/projects/bedroom-uxbridge-1.jpg",
    alt: "Wood-effect fitted bedroom with a built-in dressing table in Uxbridge",
    name: "Uxbridge Fitted Bedroom",
    location: "Uxbridge, London",
    description:
      "A wall-to-wall fitted bedroom in a warm wood-effect finish — tall wardrobes, an integrated chest of drawers and a built-in dressing table with a backlit mirror, all in one seamless run.",
  },
  {
    image: "/images/projects/bedroom-mill-hill-1.jpg",
    alt: "Fitted wardrobes built into the eaves of a loft bedroom in Mill Hill",
    name: "Mill Hill Loft Bedroom",
    location: "Mill Hill, London",
    description:
      "Floor-to-ceiling fitted wardrobes built into the eaves of a loft conversion, following the slope of the ceiling to turn awkward roof angles into full-height, clutter-free storage.",
  },
  {
    image: "/images/projects/kitchen-modern-3.jpg",
    alt: "Contemporary handleless kitchen with a Calacatta-marble island and cream cabinetry",
    name: "Statement Handleless Kitchen",
    location: "Design Visualisation",
    description:
      "A contemporary handleless kitchen from our design studio — matte cream cabinetry, a Calacatta-marble waterfall island and full-height splashback, set against black cone pendants and herringbone flooring.",
  },
];
