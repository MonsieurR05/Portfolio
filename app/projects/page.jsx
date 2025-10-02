import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { projects } from "@/lib/projects-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Projects() {
  return (
    <div className="min-h-screen py-20 px-4 md:px-8 md:pl-32">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">Projects</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            A collection of projects I've built, ranging from web applications to open source contributions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden group">
              <div className="relative h-48 overflow-hidden bg-secondary">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button asChild variant="outline" size="sm">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" size={16} />
                    Code
                  </a>
                </Button>
                <Button asChild size="sm">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2" size={16} />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
