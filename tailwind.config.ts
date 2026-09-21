import type { Config } from "tailwindcss";

/**
 * Design tokens extracted from the original static BREX Interiors CSS
 * (_legacy/CSS/*.css). Brand values live under the `brand` namespace so they
 * never collide with shadcn/ui's semantic color names (border, input, ring,
 * primary, muted, …) which are driven by CSS variables in app/globals.css.
 */
const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        // ── Brand palette (extracted from legacy CSS) ──
        brand: {
          ink: "#2c2c2c", // primary body text, dark buttons
          "ink-deep": "#1a1a1a", // headings, footer bg, stat numbers, quote icon
          cream: "#f6f3ef", // warm off-white section / form background
          sand: "#edeae5", // warm grey reviews surface
          line: "#ece9e4", // nav border / hairlines
          "line-soft": "#e5e1dc", // input & icon borders
          muted: "#767676", // eyebrows, section labels, nav hover (WCAG AA on white)
          "muted-soft": "#bbbbbb", // counters, faint labels
          success: "#4a7c6f", // form success feedback
          danger: "#c0392b", // form error feedback
          star: "#1a6eb5", // review star rating
          // incidental greys preserved as tokens (avoid hardcoding)
          "gray-44": "#444444",
          "gray-55": "#555555",
          "gray-66": "#666666",
          "gray-77": "#777777",
          "gray-aa": "#aaaaaa",
          "gray-cc": "#cccccc",
          "gray-dd": "#dddddd",
        },
        // ── shadcn/ui semantic tokens (CSS variables) ──
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        // Jost is loaded via next/font in app/layout.tsx → --font-jost
        sans: ["var(--font-jost)", "ui-sans-serif", "system-ui", "sans-serif"],
        // Fraunces (italic) editorial accent → --font-fraunces
        display: ["var(--font-fraunces)", "Georgia", "Cambria", "serif"],
      },
      letterSpacing: {
        // recurring tracking values from the legacy CSS
        nav: "0.08em",
        btn: "0.12em",
        caps: "0.15em",
        label: "0.2em",
        eyebrow: "0.25em",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      transitionDuration: {
        // motion timings from the legacy CSS
        nav: "400ms", // sticky-nav slide-in
        carousel: "550ms", // project carousel slide
      },
      transitionTimingFunction: {
        carousel: "cubic-bezier(0.65, 0, 0.35, 1)",
        // expressive ease for entrance reveals & focus underlines
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        // staggered entrance for the contact composition
        reveal: {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // clip-up reveal for oversized headline lines
        "rise-line": {
          "0%": { transform: "translateY(130%)" },
          "100%": { transform: "translateY(0)" },
        },
        // slow ticker of service words
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        // expanding ring behind the availability dot
        "pulse-ring": {
          "0%": { transform: "scale(0.7)", opacity: "0.65" },
          "100%": { transform: "scale(2.6)", opacity: "0" },
        },
        // success checkmark stroke draw (path uses pathLength=1)
        draw: {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        reveal: "reveal 0.9s cubic-bezier(0.22,1,0.36,1) both",
        "rise-line": "rise-line 0.95s cubic-bezier(0.22,1,0.36,1) both",
        marquee: "marquee 32s linear infinite",
        "pulse-ring": "pulse-ring 2.6s ease-out infinite",
        draw: "draw 0.9s ease forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
