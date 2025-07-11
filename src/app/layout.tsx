import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hope for Children - Making a Difference",
  description: "Help us bring hope and happiness to children in need around the world.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-orange-50 py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p className="text-orange-800">© 2024 Hope for Children. Making a difference, one child at a time.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
