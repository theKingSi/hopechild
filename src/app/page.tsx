import Link from "next/link"
import Image from "next/image"
import { Heart, Users, Globe, Smile } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold text-orange-800 leading-tight">
                Help a Child <span className="text-yellow-600">Smile Today</span>
              </h1>
              <p className="text-xl text-orange-700 leading-relaxed">
                Every child deserves love, care, and the chance to dream big. Your support can transform a child's life
                and bring hope to families in need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-6">
                  <Link href="/donate">
                    <Heart className="mr-2 h-5 w-5" />
                    Donate Now
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-orange-300 text-orange-700 hover:bg-orange-50 text-lg px-8 py-6 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Happy children playing together"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-orange-800">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              We believe every child deserves a chance at happiness, education, and a bright future. Through your
              generous donations, we provide essential resources, educational opportunities, and emotional support to
              children facing hardship around the world.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <Card className="border-orange-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <Users className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-orange-800 mb-2">Community Support</h3>
                  <p className="text-gray-600">Building strong communities that nurture and protect children</p>
                </CardContent>
              </Card>
              <Card className="border-orange-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <Globe className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-orange-800 mb-2">Global Reach</h3>
                  <p className="text-gray-600">Helping children in need across continents and cultures</p>
                </CardContent>
              </Card>
              <Card className="border-orange-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <Smile className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-orange-800 mb-2">Lasting Impact</h3>
                  <p className="text-gray-600">Creating positive change that lasts a lifetime</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-white">Your Donation Makes a Real Difference</h2>
            <p className="text-xl text-orange-100">
              Join thousands of caring individuals who are already making a positive impact. Together, we can give every
              child the chance they deserve.
            </p>
            <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-6">
              <Link href="/donate">Start Making a Difference</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
