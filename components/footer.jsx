import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t mt-20">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Copyright */}
          <div className="text-sm text-muted-foreground">© {currentYear} Rahul Bagga. All rights reserved.</div>

          {/* Middle: Name & Title */}
          <div className="text-sm font-medium">Rahul Bagga • Software Developer</div>

          {/* Right: Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/MonsieurR05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:MonsieurR9@proton.me"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
