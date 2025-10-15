"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full border-b transition-colors",
        scrolled
          ? "bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent border-transparent",
      ].join(" ")}
      aria-label="Primary navigation"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#home" className="text-sm font-semibold tracking-tight hover:opacity-90 transition-opacity">
          <span className="sr-only">Navigate to home</span>
          Rithik Kannaa K
        </a>

        {/* desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Skills
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            asChild
            className="hidden md:inline-flex"
            style={{ background: "var(--color-chart-2)", color: "white" }}
          >
            <a href="#projects" aria-label="View my projects">
              View Work
            </a>
          </Button>

          {/* mobile hamburger menu */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-40">
                <DropdownMenuItem asChild>
                  <a href="#about">About</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#projects">Projects</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#skills">Skills</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#contact">Contact</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}
