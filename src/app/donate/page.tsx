"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Heart, DollarSign } from "lucide-react"

export default function DonatePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    alert(`Thank you ${formData.name}! Your donation of $${formData.amount} will make a real difference.`)
    // Reset form
    setFormData({ name: "", email: "", amount: "" })
  }

  const quickAmounts = [25, 50, 100, 250]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-12">
      <div className="container mx-auto px-4">
        {/* Back to Home Link */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="text-orange-700 hover:text-orange-800 hover:bg-orange-100">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Heart className="h-16 w-16 text-orange-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-orange-800 mb-4">Make a Donation</h1>
            <p className="text-xl text-orange-700">
              Your generosity brings hope and happiness to children who need it most.
            </p>
          </div>

          {/* Donation Form */}
          <Card className="shadow-xl border-orange-200">
            <CardHeader className="bg-orange-500 text-white rounded-t-lg">
              <CardTitle className="text-2xl flex items-center">
                <DollarSign className="mr-2 h-6 w-6" />
                Donation Details
              </CardTitle>
              <CardDescription className="text-orange-100">
                Every dollar counts and makes a real difference
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-orange-800 font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-orange-800 font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Quick Amount Buttons */}
                <div className="space-y-2">
                  <Label className="text-orange-800 font-medium">Quick Select Amount</Label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {quickAmounts.map((amount) => (
                      <Button
                        key={amount}
                        type="button"
                        variant="outline"
                        className="border-orange-300 text-orange-700 hover:bg-orange-500 hover:text-white bg-transparent"
                        onClick={() => setFormData((prev) => ({ ...prev, amount: amount.toString() }))}
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Amount Field */}
                <div className="space-y-2">
                  <Label htmlFor="amount" className="text-orange-800 font-medium">
                    Donation Amount ($)
                  </Label>
                  <Input
                    id="amount"
                    name="amount"
                    type="number"
                    min="1"
                    step="0.01"
                    value={formData.amount}
                    onChange={handleInputChange}
                    required
                    className="border-orange-200 focus:border-orange-500 focus:ring-orange-500"
                    placeholder="Enter amount"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white text-lg py-6"
                  disabled={!formData.name || !formData.email || !formData.amount}
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Donate ${formData.amount || "0"}
                </Button>
              </form>

              {/* Security Note */}
              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <p className="text-sm text-orange-700 text-center">
                  🔒 Your donation is secure and will be processed safely. You will receive a confirmation email shortly
                  after your donation.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Impact Message */}
          <div className="mt-8 text-center">
            <Card className="border-yellow-200 bg-yellow-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Your Impact</h3>
                <p className="text-yellow-700">
                  $25 provides school supplies for one child • $50 feeds a family for a week • $100 supports a child's
                  education for a month
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
