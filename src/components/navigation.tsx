"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-white shadow-sm border-b border-orange-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold text-orange-800">Hope for Children</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link
              href="/"
              className={`text-lg font-medium transition-colors hover:text-orange-600 ${
                pathname === "/" ? "text-orange-600" : "text-gray-700"
              }`}
            >
              Home
            </Link>
            <Link
              href="/gallery"
              className={`text-lg font-medium transition-colors hover:text-orange-600 ${
                pathname === "/gallery" ? "text-orange-600" : "text-gray-700"
              }`}
            >
              Gallery
            </Link>
            <Link
              href="/donate"
              className={`text-lg font-medium transition-colors hover:text-orange-600 ${
                pathname === "/donate" ? "text-orange-600" : "text-gray-700"
              }`}
            >
              Donate
            </Link>
            <Button asChild className="bg-orange-500 hover:bg-orange-600">
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
