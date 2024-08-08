import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        dark: {
          1: "#2f2235",
          2: "#3f3244",
          3: "#60495a",
        },
        blue: {
          1: "#832161",
          2: "#f686bd",
        },
        sky: {
          1: "#C9DDFF",
          2: "#ECF0FF",
          3: "#e5e5e5",
        },
        orange: {
          1: "#e54b4b",
        },
        purple: {
          1: "#725ac1",
        },
        yellow: {
          1: "#e3b23c",
        },
      },
      backgroundImage: {
        hero: "url('/images/background2.jpg')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
