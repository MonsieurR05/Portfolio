"use client"

import Link from "next/link"
import { ArrowRight, Code2, Server, Gamepad2, Cpu, Layers } from "lucide-react"
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

  const techStack = {
    frontend: ["React", "Next.js", "Astro", "Tailwind CSS", "JavaScript", "HTML/CSS"],
    backend: ["Python", "Flask", "REST API", "Node.js"],
    other: ["Unity", "C#", "Arduino", "C++", "SQLite", "Git"],
  }

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

      <div className="max-w-4xl w-full mx-auto text-center">
        <div className="space-y-8">
          <div
            className={`space-y-6 transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[1.1] tracking-tight overflow-visible pb-4">
                <span className="block text-muted-foreground/60 text-2xl md:text-3xl lg:text-4xl mb-2">
                  Software Engineer and a CS student
                </span>
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
                      <p className="font-semibold">{role.title}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Year 2 BSc Computer Science student at University of the Arts London, specializing in software
              development. Passionate about turning ideas into reality through code, exploring new technologies, and
              building projects that solve real-world problems.
            </p>
          </div>

          <div
            className={`pt-6 transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground">Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
              <div className="bg-card border border-border rounded-lg p-3 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-sm font-semibold text-primary mb-2">Frontend</h3>
                <div className="flex flex-wrap gap-1.5">
                  {techStack.frontend.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-background border border-border rounded text-xs font-medium hover:border-primary hover:bg-primary/5 transition-all duration-200 cursor-default hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-3 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-sm font-semibold text-primary mb-2">Backend</h3>
                <div className="flex flex-wrap gap-1.5">
                  {techStack.backend.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-background border border-border rounded text-xs font-medium hover:border-primary hover:bg-primary/5 transition-all duration-200 cursor-default hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-3 hover:border-primary hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-sm font-semibold text-primary mb-2">Other</h3>
                <div className="flex flex-wrap gap-1.5">
                  {techStack.other.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-background border border-border rounded text-xs font-medium hover:border-primary hover:bg-primary/5 transition-all duration-200 cursor-default hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 pt-4 justify-center transition-all duration-700 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <Button
              asChild
              size="lg"
              className="group text-base hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <Link href="/projects">
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base bg-transparent hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>

          <div
            className={`pt-8 flex justify-center transition-all duration-700 delay-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  )
}
