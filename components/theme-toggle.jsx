"use client"

import { Sun, Moon, Monitor, ChevronDown } from "lucide-react"
import { useTheme } from "./theme-provider"
import { useState, useEffect, useRef } from "react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const getIcon = () => {
    if (theme === "light") return <Sun size={20} />
    if (theme === "dark") return <Moon size={20} />
    return <Monitor size={20} />
  }

  const getLabel = () => {
    if (theme === "light") return "Light"
    if (theme === "dark") return "Dark"
    return "System"
  }

  const handleThemeSelect = (selectedTheme) => {
    setTheme(selectedTheme)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted hover:bg-accent transition-colors text-foreground"
        aria-label="Select theme"
      >
        {getIcon()}
        <span className="text-sm font-medium">{getLabel()}</span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-lg bg-card border border-border shadow-lg overflow-hidden z-50">
          <button
            onClick={() => handleThemeSelect("light")}
            className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-accent transition-colors text-left ${
              theme === "light" ? "bg-accent" : ""
            }`}
          >
            <Sun size={18} />
            <span className="text-sm font-medium">Light</span>
          </button>
          <button
            onClick={() => handleThemeSelect("dark")}
            className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-accent transition-colors text-left ${
              theme === "dark" ? "bg-accent" : ""
            }`}
          >
            <Moon size={18} />
            <span className="text-sm font-medium">Dark</span>
          </button>
          <button
            onClick={() => handleThemeSelect("system")}
            className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-accent transition-colors text-left ${
              theme === "system" ? "bg-accent" : ""
            }`}
          >
            <Monitor size={18} />
            <span className="text-sm font-medium">System</span>
          </button>
        </div>
      )}
    </div>
  )
}
