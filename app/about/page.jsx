import SocialLinks from "@/components/social-links"
import { Card } from "@/components/ui/card"
import { ExternalLink, GraduationCap, Award, Code2 } from "lucide-react"

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
      period: "2023 - Present",
      status: "Year 2",
      description:
        "Studying computer science with a focus on creative technology and digital innovation. Engaging in hands-on projects spanning web development, game design, IoT systems, and data visualization.",
    },
  ]

  return (
    <div className="min-h-screen py-20 px-4 md:px-8 md:pl-32">
      <div className="max-w-4xl mx-auto space-y-20">
        {/* Header */}
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent text-center">
            About Me
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            A computer science student specializing in software development, passionate about building innovative
            digital experiences.
          </p>
        </div>

        {/* Bio */}
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-primary rounded-full" />
            <h2 className="text-3xl font-bold text-foreground">Background</h2>
          </div>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm currently in my second year studying Computer Science at University of the Arts London, specializing
              in software development. My journey in tech has been driven by curiosity and a desire to build projects
              that solve real-world problems.
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
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Education</h2>
          </div>
          <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
            {education.map((edu, index) => (
              <div key={index} className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-2xl font-bold text-foreground">{edu.degree}</h3>
                  <span className="text-base text-muted-foreground font-medium">{edu.period}</span>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-xl text-primary font-semibold">{edu.institution}</p>
                  <span className="px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-sm font-bold">
                    {edu.status}
                  </span>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </Card>
        </div>

        {/* Achievements */}
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Achievements</h2>
          </div>
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-card border-2 border-primary/30 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3 flex-1">
                  <h3 className="text-2xl font-bold text-foreground leading-tight">
                    Decolonizing Computer Science: The Immersive Elevator Experience
                  </h3>
                  <p className="text-lg text-muted-foreground font-medium">Co-authored ACM research publication</p>
                </div>
                <a
                  href="https://dl.acm.org/doi/10.1145/3698061.3733978"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-base font-semibold shrink-0"
                >
                  View Publication
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <div className="pt-2">
                <span className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-bold">
                  Research
                </span>
              </div>
            </div>
          </Card>
        </div>

        {/* Tech Stack */}
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
          <div className="flex items-center gap-3">
            <Code2 className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Tech Stack</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 space-y-4 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-bold text-primary">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.frontend.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-md text-xs font-medium hover:bg-secondary hover:scale-105 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-6 space-y-4 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-bold text-primary">Backend & Database</h3>
              <div className="flex flex-wrap gap-2">
                {[...techStack.backend, ...techStack.database].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-md text-xs font-medium hover:bg-secondary hover:scale-105 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-6 space-y-4 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-bold text-primary">Game Development</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.gameDev.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-md text-xs font-medium hover:bg-secondary hover:scale-105 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-6 space-y-4 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-bold text-primary">Hardware & IoT</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.hardware.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-md text-xs font-medium hover:bg-secondary hover:scale-105 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            <Card className="p-6 space-y-4 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="text-xl font-bold text-primary">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.tools.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-md text-xs font-medium hover:bg-secondary hover:scale-105 transition-all duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="pt-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1000">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-primary rounded-full" />
            <h2 className="text-3xl font-bold text-foreground">Let's Connect</h2>
          </div>
          <p className="text-xl text-muted-foreground">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <SocialLinks />
        </div>
      </div>
    </div>
  )
}
