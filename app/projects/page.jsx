import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { projects } from "@/lib/projects-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Projects() {
  return (
    <div className="min-h-screen py-20 px-4 md:px-8 md:pl-32">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">Projects</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A collection of projects I've built, ranging from web applications to open source contributions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden group">
              <div className="relative h-48 overflow-hidden bg-card">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-contain transition-transform group-hover:scale-105"
                />
              </div>
              <CardHeader className="space-y-2 pb-3">
                <CardTitle className="text-foreground text-lg">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-3 pt-0">
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
