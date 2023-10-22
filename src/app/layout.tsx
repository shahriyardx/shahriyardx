import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "react-hot-toast"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Shahriyar Alam",
    template: "%s | Md Shahriyar Alam",
  },
  description:
    "⚡️ Web instructor @ Programming Hero | Full-Stack Web Developer with knowledge of JavaScript and Python.",
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
} // TODO: Improve the metadata with more info

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  )
}