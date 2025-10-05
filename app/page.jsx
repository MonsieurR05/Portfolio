"use client"

import Link from "next/link"
import { ArrowRight, Code2, Sparkles, Server, Gamepad2, Cpu, Layers } from "lucide-react"
import SocialLinks from "@/components/social-links"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  const roles = [
    { title: "Software Engineer", icon: Code2 },
    { title: "Full Stack Dev", icon: Layers },
    { title: "Backend Dev", icon: Server },
    { title: "Games Dev", icon: Gamepad2 },
    { title: "IoT Dev", icon: Cpu },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [roles.length])

  const CurrentIcon = roles[currentRoleIndex].icon

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 pt-16 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="gradient-mesh" />
      </div>

      <div className="max-w-4xl w-full mx-auto text-center relative z-10">
        <div className="space-y-8">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Available for new opportunities</span>
          </div>

          <div
            className={`space-y-6 transition-all duration-700 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[1.2] tracking-tight overflow-visible pb-4">
                <span className="block text-muted-foreground/60">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Rahul Bagga
                </span>
              </h1>
              <div className="flex items-center justify-center gap-3 text-2xl md:text-4xl text-muted-foreground h-16 relative">
                {roles.map((role, index) => {
                  const Icon = role.icon
                  return (
                    <div
                      key={role.title}
                      className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-500 ${
                        index === currentRoleIndex
                          ? "opacity-100 translate-y-0"
                          : index < currentRoleIndex
                            ? "opacity-0 -translate-y-4"
                            : "opacity-0 translate-y-4"
                      }`}
                    >
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                      <p className="font-medium">{role.title}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Year 2 BSc Computer Science student at University of the Arts London. Passionate about turning ideas into
              reality through code, exploring new technologies, and building projects that solve real-world problems.
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 pt-4 justify-center transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <Button asChild size="lg" className="group text-base">
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base bg-transparent">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>

          <div
            className={`pt-8 flex justify-center transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  )
}
