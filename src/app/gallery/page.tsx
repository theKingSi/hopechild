"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Heart } from "lucide-react"

interface GalleryItem {
  id: number
  title: string
  description: string
  image: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "New School Supplies",
    description: "Children receiving notebooks, pencils, and educational materials funded by donations.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Nutritious Meals Program",
    description: "Daily hot meals ensuring children get proper nutrition for healthy growth.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Clean Water Access",
    description: "New water wells and filtration systems bringing clean water to communities.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Medical Care & Checkups",
    description: "Regular health checkups and medical care keeping children healthy and strong.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Safe Learning Environment",
    description: "Renovated classrooms providing safe, comfortable spaces for learning.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    title: "Warm Clothing & Shoes",
    description: "Essential clothing and footwear protecting children from harsh weather.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 7,
    title: "Playground & Recreation",
    description: "Safe play areas where children can enjoy childhood and develop social skills.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 8,
    title: "Technology & Learning",
    description: "Computers and tablets opening up digital learning opportunities.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 9,
    title: "Emergency Shelter",
    description: "Safe housing for families displaced by natural disasters or conflict.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Camera className="h-16 w-16 text-orange-500 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-orange-800 mb-4">Impact Gallery</h1>
          <p className="text-xl text-orange-700 max-w-3xl mx-auto">
            See how your donations are making a real difference in children's lives around the world. Every contribution
            creates lasting change and brings hope to those who need it most.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {galleryItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-orange-200"
            >
              <div className="relative">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-orange-800 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Make Your Own Impact?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join thousands of donors who are already changing lives. Your contribution, no matter the size, creates real
            and lasting change for children in need.
          </p>
          <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-6">
            <a href="/donate">
              <Heart className="mr-2 h-5 w-5" />
              Start Your Impact Today
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
