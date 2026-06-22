import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#2a241f",
        "bg-soft": "#342d27",
        ink: "#2c2620",
        "ink-soft": "#6e6358",
        muted: "#9e9286",
        line: "#e8dfd2",
        surface: "#fbf8f3",
        "surface-2": "#f1e8dc",
        brand: "#b0876a",
        "brand-2": "#8a6850",
        accent: "#c9a892",
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
        heading: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      maxWidth: {
        container: "1140px",
      },
      borderRadius: {
        card: "20px",
      },
      boxShadow: {
        card: "0 26px 60px -28px rgba(74, 58, 44, 0.35)",
        soft: "0 12px 30px -16px rgba(74, 58, 44, 0.28)",
      },
    },
  },
  plugins: [],
};

export default config;
