import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XpressDM Pricing Page",
  description:
    "A responsive pricing page built with Next.js, Tailwind CSS, and TypeScript as part of the XpressDM frontend assignment. Includes pricing plans and a feature comparison table based on a provided Figma design.",

  keywords: [
    "XpressDM",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Pricing Page",
    "Frontend Assignment",
    "Responsive UI",
    "Figma to Code",
  ],

  authors: [{ name: "Devanshu Pandey" }],

  openGraph: {
    title: "XpressDM Pricing Page",
    description:
      "Responsive pricing page built using Next.js, Tailwind CSS, and TypeScript from a Figma design.",
    type: "website",
    url: "https://your-deployment-url.com",
    siteName: "XpressDM Assignment",
  },
};

export const nacelle = localfont({
  src: "../fonts/nacelle_100/Nacelle-Bold.otf",
  variable: "--font-nacelle",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
