import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#1d3a42",
        "bg-soft": "#244852",
        ink: "#0f172a",
        "ink-soft": "#475569",
        muted: "#64748b",
        line: "#e2e8f0",
        surface: "#ffffff",
        "surface-2": "#eef3fc",
        brand: "#0cc0df",
        "brand-2": "#264a54",
        accent: "#22d3ee",
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
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
