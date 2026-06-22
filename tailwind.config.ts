import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b1020",
        "bg-soft": "#111834",
        ink: "#0f172a",
        "ink-soft": "#475569",
        muted: "#64748b",
        line: "#e2e8f0",
        surface: "#ffffff",
        "surface-2": "#f5f7fb",
        brand: "#4f6bff",
        "brand-2": "#7c4dff",
        accent: "#22d3ee",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1140px",
      },
      borderRadius: {
        card: "16px",
      },
      boxShadow: {
        card: "0 20px 45px -20px rgba(15, 23, 42, 0.35)",
        soft: "0 8px 24px -12px rgba(15, 23, 42, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
