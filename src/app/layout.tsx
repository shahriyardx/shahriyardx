import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Shahriyar Alam",
    template: "%s | Md Shahriyar Alam",
  },
  description:
    "Full-Stack Web Developer with knowledge of JavaScript and Python. Currently living in Bangladesh and open for jobs.",
  authors: {
    name: "Md Shahriyar Alam",
    url: "https://shahriyar.dev",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  keywords: [
    "shahriyardx",
    "MD Shahriyar Alam",
    "@shahriyardx",
    "#shahriyardx",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
