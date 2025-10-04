import SocialLinks from "@/components/social-links"
import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export default function About() {
  const techStack = {
    frontend: ["React", "Astro", "JavaScript", "HTML", "CSS", "JSX", "Tailwind CSS", "Vite"],
    backend: ["Flask", "Python", "REST API", "CORS"],
    database: ["SQLite"],
    gameDev: ["Unity", "C#", "2D Game Development"],
    hardware: ["Arduino", "C++", "IoT", "Sensors", "Automation"],
    tools: ["Jupyter", "Git", "GitHub"],
  }

  const education = [
    {
      degree: "BSc Computer Science",
      institution: "University of the Arts London",
      period: "2024 - Present",
      status: "Year 2",
      description:
        "Studying computer science with a focus on creative technology and digital innovation. Engaging in hands-on projects spanning web development, game design, IoT systems, and data visualization.",
    },
  ]

  return (
    <div className="min-h-screen py-20 px-4 md:px-8 md:pl-32">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">About Me</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A computer science student passionate about building innovative digital experiences.
          </p>
        </div>

        {/* Bio */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Background</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm currently in my second year studying Computer Science at University of the Arts London, where I'm
              exploring the intersection of technology and creativity. My journey in tech has been driven by curiosity
              and a desire to build projects that solve real-world problems.
            </p>
            <p>
              From developing IoT systems and game development to building full-stack web applications and data
              visualization tools, I enjoy working across different domains of computer science. I believe in learning
              by doing, which is why I've built a diverse portfolio of projects that showcase my skills.
            </p>
            <p>
              I'm particularly interested in web development, game design, and emerging technologies. I'm always eager
              to learn new frameworks, contribute to meaningful projects, and collaborate with others in the tech
              community.
            </p>
          </div>
        </div>

        {/* Education */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                  <span className="text-sm text-muted-foreground">{edu.period}</span>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-primary font-medium">{edu.institution}</p>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                    {edu.status}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Achievements</h2>
          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    Decolonizing Computer Science: The Immersive Elevator Experience
                  </h3>
                  <p className="text-muted-foreground">Co-authored ACM research publication</p>
                </div>
                <a
                  href="https://dl.acm.org/doi/10.1145/3698061.3733978"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                >
                  View Publication
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="pt-2">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">Research</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Tech Stack */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="p-5 space-y-3 bg-card border-border hover:border-primary/50 transition-colors">
              <h3 className="text-lg font-semibold text-primary">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.frontend.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-5 space-y-3 bg-card border-border hover:border-primary/50 transition-colors">
              <h3 className="text-lg font-semibold text-primary">Backend & Database</h3>
              <div className="flex flex-wrap gap-2">
                {[...techStack.backend, ...techStack.database].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-5 space-y-3 bg-card border-border hover:border-primary/50 transition-colors">
              <h3 className="text-lg font-semibold text-primary">Game Development</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.gameDev.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-5 space-y-3 bg-card border-border hover:border-primary/50 transition-colors">
              <h3 className="text-lg font-semibold text-primary">Hardware & IoT</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.hardware.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-5 space-y-3 bg-card border-border hover:border-primary/50 transition-colors">
              <h3 className="text-lg font-semibold text-primary">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.tools.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-md text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="pt-8 space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Let's Connect</h2>
          <p className="text-muted-foreground">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <SocialLinks />
        </div>
      </div>
    </div>
  )
}
