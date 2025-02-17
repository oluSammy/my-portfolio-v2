import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const brolimo = localFont({
  src: [
    {
      path: "../../public/brolimo/brolimo-brolimo-black-800.ttf",
      weight: "800",
      style: "black",
    },
    {
      path: "../../public/brolimo/brolimo-brolimo-bold-700.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/brolimo/brolimo-brolimo-demibold-600.ttf",
      weight: "600",
      style: "demibold",
    },
    {
      path: "../../public/brolimo/brolimo-brolimo-extrabold-800.ttf",
      weight: "800",
      style: "extrabold",
    },
    {
      path: "../../public/brolimo/brolimo-brolimo-extralight-100.ttf",
      weight: "100",
      style: "extralight",
    },
    {
      path: "../../public/brolimo/brolimo-brolimo-heavy-800.ttf",
      weight: "800",
      style: "heavy",
    },
    {
      path: "../../public/brolimo/brolimo-brolimo-light-200.ttf",
      weight: "200",
      style: "light",
    },
    {
      path: "../../public/brolimo/brolimo-brolimo-medium-500.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/brolimo/brolimo-brolimo-normal-400.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/brolimo/brolimo-brolimo-regular-400.ttf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../../public/brolimo/brolimo-brolimo-semibold-600.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../../public/brolimo/brolimo-brolimo-thin-200.ttf",
      weight: "200",
      style: "thin",
    },
    {
      path: "../../public/brolimo/brolimo-brolimo-ultrabold-800.ttf",
      weight: "800",
      style: "ultrabold",
    },
    {
      path: "../../public/brolimo/brolimo-brolimo-ultralight-100.ttf",
      weight: "100",
      style: "ultralight",
    },
  ],
  variable: "--font-brolimo",
});

export const metadata: Metadata = {
  title: "Olumorin Samuel",
  description: "Olumorin Samuel - Engineer proficient in a wide spectrum of technologies spanning front-end, backend, and cloud-based systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${brolimo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
