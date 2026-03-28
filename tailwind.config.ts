import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // App-level
        "app-bg": "#030712",
        // Widget surfaces (Issue 29 spec)
        "surface": "#111827",
        "surface-border": "#1F2937",
        "surface-elevated": "#1F2937",
        // Primary / focus ring color (Issue 29 spec)
        "primary": "#0EA5E9",
        "primary-hover": "#0284C7",
        // Text
        "text-primary": "#F9FAFB",
        "text-secondary": "#9CA3AF",
        "text-muted": "#6B7280",
        // Status
        "success": "#10B981",
        "error": "#EF4444",
        "warning": "#F59E0B",
        "info": "#0EA5E9",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontWeight: {
        // Issue 29 spec: headings 600/700, body 400/500
        "heading": "600",
        "heading-bold": "700",
        "body": "400",
        "body-medium": "500",
      },
      animation: {
        shimmer: "shimmer 1.5s infinite",
        "fade-in": "fadeIn 0.2s ease-in-out",
        "slide-up": "slideUp 0.2s ease-out",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "skeleton-gradient":
          "linear-gradient(90deg, #1F2937 25%, #374151 50%, #1F2937 75%)",
      },
    },
  },
  plugins: [],
};

export default config;
