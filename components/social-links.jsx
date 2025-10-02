import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function SocialLinks() {
  const socials = [
    { icon: Github, href: "https://github.com/MonsieurR05", label: "GitHub" },
    // { icon: Linkedin, href: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    // { icon: Twitter, href: "https://twitter.com/yourusername", label: "Twitter" },
    { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
  ]

  return (
    <div className="flex gap-4">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label={social.label}
        >
          <social.icon size={20} />
        </a>
      ))}
    </div>
  )
}
