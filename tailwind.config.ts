import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          100: "#05051CD6",
          150: "#05051F"
        },
        green: {
          100: "#05FF69",
          50: "#A3FFC8"
        },
        gray: {
          50: "#97A0B9",
          150: "#F2F2F280",
          250: "#A7A7A7",
          350: "#A9A9A9",
          450: "#B1AFAF",
          550: "#A8B2D1",
          650: "#BEB8B8"
        },
        blue: {
          50: "#16D7FF"
        }
      },
      fontFamily: {
        brolimo: ["var(--font-brolimo)"],
        outfit: ["var(--font-outfit)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
