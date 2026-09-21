import type { Metadata } from "next";
import { Jost, Fraunces } from "next/font/google";

import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-jost",
});

// Editorial display accent — used sparingly (italic) for emphasis words.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces",
});

const siteUrl = "https://www.brexinteriors.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Brex Interiors — Bespoke Kitchens & Interior Joinery",
    template: "%s — Brex Interiors",
  },
  description:
    "Brex Interiors designs, crafts and fits bespoke kitchens and fitted interiors with precision. Family-run, London & surrounding areas, since 1996.",
  keywords: [
    "bespoke kitchens",
    "interior joinery",
    "fitted bedrooms",
    "carpentry",
    "London",
    "Watford",
  ],
  openGraph: {
    type: "website",
    siteName: "Brex Interiors",
    title: "Brex Interiors — Bespoke Kitchens & Interior Joinery",
    description:
      "Designed, crafted and fitted with precision since 1996. Bespoke kitchens and fitted interiors across London & surrounding areas.",
    url: siteUrl,
    locale: "en_GB",
    images: [
      {
        url: "/images/kitchen-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Brex Interiors bespoke kitchen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brex Interiors — Bespoke Kitchens & Interior Joinery",
    description:
      "Designed, crafted and fitted with precision since 1996. Bespoke kitchens and fitted interiors across London & surrounding areas.",
    images: ["/images/kitchen-bg.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
