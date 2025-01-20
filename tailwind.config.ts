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
          50: "#A3FFC8",
          15: "#263942"
        },
        gray: {
          50: "#97A0B9",
          75: "#3D3D3D",
          150: "#F2F2F280",
          250: "#A7A7A7",
          350: "#A9A9A9",
          450: "#B1AFAF",
          550: "#A8B2D1",
          650: "#BEB8B8"
        },
        blue: {
          50: "#16D7FF",
          55: "#0E0E1E"
        }
      },
      fontFamily: {
        brolimo: ["var(--font-brolimo)"],
        outfit: ["var(--font-outfit)"],
      },
      backgroundImage: {
        "project-bg": "background: radial-gradient(circle, rgba(37,37,37,1) 7%, rgba(16,16,16,1) 85%)",
      }
    },
  },
  plugins: [],
} satisfies Config;
