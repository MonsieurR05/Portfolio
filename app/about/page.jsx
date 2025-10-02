import SocialLinks from "@/components/social-links"

export default function About() {
  const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
    "Git",
    "REST APIs",
    "Responsive Design",
  ]

  const experience = [
    {
      title: "Example tile",
      company: "example company",
      period: "YEAR - Present",
      description:
        "Example description",
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4 md:px-8 md:pl-32">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">About Me</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I'm a passionate developer who loves creating beautiful, functional web experiences.
          </p>
        </div>

        {/* Bio */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Background</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              example text
            </p>
            <p>
              example text
            </p>
            <p>
              example text
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                  <span className="text-sm text-muted-foreground">{job.period}</span>
                </div>
                <p className="text-primary font-medium">{job.company}</p>
                <p className="text-muted-foreground leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm font-medium"
              >
                {skill}
              </span>
            ))}
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
