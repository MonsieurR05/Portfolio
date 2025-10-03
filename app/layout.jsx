import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import Navigation from "@/components/navigation"
import "./globals.css"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Rahul Bagga - Full Stack Developer",
  description:
    "Portfolio of Your Name - Full Stack Developer specializing in React, Next.js, and modern web technologies",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Navigation />
            <main className="pt-16 md:pt-20">{children}</main>
          </Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
