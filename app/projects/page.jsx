import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { projects } from "@/lib/projects-data"
import { Button } from "@/components/ui/button"

export default function Projects() {
  return (
    <div className="min-h-screen py-20 px-4 md:px-8">
      <div className="space-y-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I've built, ranging from web applications to open source contributions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Status Badge */}
                <div className="absolute top-2 right-2">
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-medium ${
                      project.status === "Active" ? "bg-green-500/90 text-white" : "bg-blue-500/90 text-white"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4 space-y-3">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-1">
                  {project.github && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 hover:scale-105 transition-transform bg-transparent"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2" size={16} />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button asChild size="sm" className="flex-1 hover:scale-105 transition-transform">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2" size={16} />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
