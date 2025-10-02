"use client"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SocialLinks from "@/components/social-links"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log("Form submitted:", formData)
    alert("Thanks for reaching out! I'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen py-20 px-4 md:px-8 md:pl-32">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">Get In Touch</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      MonsieurR9@proton.me
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                      07365225028
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="text-primary mt-1" size={20} />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Southampton</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Social Links</CardTitle>
              </CardHeader>
              <CardContent>
                <SocialLinks />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
