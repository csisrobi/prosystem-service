'use client'

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Home, FileText, BadgeIcon as Certificate, Image, Phone, Link2 } from 'lucide-react'

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
}

const items: NavItem[] = [
  { title: "Acasă", href: "#home", icon: <Home className="h-4 w-4" /> },
  { title: "Referințe", href: "#references", icon: <FileText className="h-4 w-4" /> },
  { title: "Calificare", href: "#qualification", icon: <Certificate className="h-4 w-4" /> },
  { title: "Galerie Foto", href: "#gallery", icon: <Image className="h-4 w-4" /> },
  { title: "Contact", href: "#contact", icon: <Phone className="h-4 w-4" /> },
  { title: "Linkuri", href: "#links", icon: <Link2 className="h-4 w-4" /> },
]

export function Navigation() {
  const [activeSection, setActiveSection] = React.useState("home")

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      const sections = document.querySelectorAll("section[id]")
      let currentSection = ""

      sections.forEach((section) => {
        if (section instanceof HTMLElement) {
          const sectionTop = section.offsetTop
          const sectionHeight = section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id") || ""
          }
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-center gap-4 px-4">
        {items.map((item) => (
          <Button
            key={item.href}
            variant={activeSection === item.href.slice(1) ? "default" : "ghost"}
            size="sm"
            className={cn(
              "gap-2",
              activeSection === item.href.slice(1) ? "" : "text-muted-foreground"
            )}
            asChild
          >
            <a href={item.href}>
              {item.icon}
              <span className="hidden sm:inline">{item.title}</span>
            </a>
          </Button>
        ))}
      </div>
    </nav>
  )
}

