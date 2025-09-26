import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "JobGuard - Detect Fake Job Postings Instantly",
  description:
    "AI-powered fake job posting detector. Protect yourself from fraudulent job listings with our advanced machine learning technology.",
  generator: "v0.app",
  keywords: ["fake job detector", "job scam protection", "AI job verification", "employment fraud detection"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Navigation />
        <main className="min-h-screen">
          <Suspense>{children}</Suspense>
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
