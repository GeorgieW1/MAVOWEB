import { Analytics } from "@vercel/analytics/react"
import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "George Wonuola - Frontend Developer",
  description: "Frontend Developer based in Nigeria. Specializing in React, Next.js, and modern web technologies.",
  keywords: ["Frontend Developer", "React", "Next.js", "JavaScript", "TypeScript", "Web Development"],
  authors: [{ name: "George Wonuola" }],
  creator: "George Wonuola",
  openGraph: {
    title: "George Wonuola - Frontend Developer",
    description: "Frontend Developer based in Nigeria. Specializing in React, Next.js, and modern web technologies.",
    url: "https://georgew.dev",
    siteName: "George Wonuola Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "George Wonuola - Frontend Developer",
    description: "Frontend Developer based in Nigeria. Specializing in React, Next.js, and modern web technologies.",
    creator: "@georgew",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
