"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Heart, Menu, X } from "lucide-react"
import { Button } from "./ui/button"

export function Navigation() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b border-orange-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-orange-500" />
            <span className="text-2xl font-bold text-orange-800">Hope for Children</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
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
            <Button asChild className="bg-orange-500 hover:bg-orange-600">
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-orange-600 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="mt-4 flex flex-col space-y-4 md:hidden">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`text-lg font-medium transition-colors hover:text-orange-600 ${
                pathname === "/" ? "text-orange-600" : "text-gray-700"
              }`}
            >
              Home
            </Link>
            <Link
              href="/gallery"
              onClick={() => setMenuOpen(false)}
              className={`text-lg font-medium transition-colors hover:text-orange-600 ${
                pathname === "/gallery" ? "text-orange-600" : "text-gray-700"
              }`}
            >
              Gallery
            </Link>
            <Button
              asChild
              className="w-full bg-orange-500 hover:bg-orange-600"
              onClick={() => setMenuOpen(false)}
            >
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
