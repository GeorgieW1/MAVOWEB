"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Smartphone,
  Globe,
  ChevronDown,
  Menu,
  X,
  Zap,
  Monitor,
  Server,
  Palette,
  Settings,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrollProgress, setScrollProgress] = useState(0)
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)

      // Update active section
      const sections = ["home", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  // Typewriter effect
  useEffect(() => {
    const rolesArray = ["Frontend Developer", "Web Developer", "Freelancer", "Problem Solver"]
    const currentRole = rolesArray[currentRoleIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting && currentText.length < currentRole.length) {
      // Typing
      timeout = setTimeout(() => {
        setCurrentText(currentRole.substring(0, currentText.length + 1))
      }, 100)
    } else if (!isDeleting && currentText.length === currentRole.length) {
      // Pause at end
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, 2000)
    } else if (isDeleting && currentText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setCurrentText(currentText.substring(0, currentText.length - 1))
      }, 50)
    } else if (isDeleting && currentText.length === 0) {
      // Move to next role
      setIsDeleting(false)
      setCurrentRoleIndex((prev) => (prev + 1) % rolesArray.length)
    }

    return () => clearTimeout(timeout)
  }, [currentText, currentRoleIndex, isDeleting])

  // 🎯 EDIT SKILLS HERE - ADD/REMOVE/MODIFY SKILLS
  const skills = [
    { name: "JavaScript", category: "Core", icon: Code },
    { name: "TypeScript", category: "Core", icon: Code },
    { name: "React", category: "Framework", icon: Code },
    { name: "Next.js", category: "Framework", icon: Code },
    { name: "HTML5", category: "Markup", icon: Globe },
    { name: "CSS3", category: "Styling", icon: Palette },
    { name: "Tailwind CSS", category: "Styling", icon: Palette },
    { name: "Bootstrap", category: "Styling", icon: Palette },
    { name: "GitHub", category: "Tools", icon: Settings },
    { name: "Responsive Design", category: "Concept", icon: Smartphone },
    { name: "Performance Optimization", category: "Concept", icon: Zap },
    { name: "API Integration", category: "Concept", icon: Server },
  ]

  // 🎯 EDIT PROJECTS HERE - ADD MORE PROJECTS AND IMAGES
  const projects = [
    {
      title: "BEOTY Skincare Platform",
      description:
        "A premium e-commerce platform for a luxury natural skincare brand designed for the Nigerian market. Built with Next.js 16 and React 19, it features high-performance SVG product visualizations, culturally relevant content, and immersive GPU-accelerated animations using Framer Motion.",
      technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion"],
      github: "",
      live: "https://beoty.vercel.app",
      image: "/images/projects/beoty-mockup.png",
    },
    {
      title: "Logos Ink Press – Digital Magazine & Community Hub",
      description:
        "Designed and engineered a modern content management system (CMS) and digital library for Logos Ink Press, a community-driven publication. The platform bridges the gap between traditional print and digital media, allowing users to read high-resolution magazines directly in the browser while fostering community engagement through daily quotes and articles.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion", "Vite"],
      github: "", // Private repository or add link if available
      live: "https://logos-magazine.vercel.app/",
      image: "/images/projects/logosmags.png",
    },

    {
      title: "Merry Trades - Trading Bot Landing Page",
      description:
        "A professional landing page for an automated forex trading bot service. Features subscription tiers, real trading proof, FAQ section, and Meta Pixel integration.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
      github: "",
      live: "https://merrytrades.vercel.app/",
      image: "/images/projects/maerrytrad.png",
    },
    {
      title: "E-Commerce Frontend",
      description:
        "A modern, responsive e-commerce interface built with React and Tailwind CSS. Features product filtering, cart management, and smooth animations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Stripe API"],
      github: "https://github.com/vercel/next.js", // Replace with your actual GitHub
      live: "https://vocal-marshmallow-f7ef79.netlify.app/", // Replace with your actual live demo
      image: "/images/projects/ecommerce-project.jpg",
    },
    {
      title: "Modern Architecture Website",
      description:
        "A clean, responsive website showcasing architectural projects with interactive galleries, smooth animations, and optimized performance. Features project filtering, image lightboxes, and a minimalist design that highlights the architectural work through strategic typography and refined aesthetics..",
      technologies: ["Vite", "HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/GeorgieW1/virtualworks-website",
      live: "https://www.virtualworkslimited.com.ng",
      image: "/images/projects/wallpaper4.jpg",
    },
    {
      title: "GeoLedger - Expense Tracker",
      description:
        "A modern expense tracking application with real-time data synchronization. Features transaction management, category filtering, and secure user authentication with Firebase.",
      technologies: ["React", "Tailwind CSS", "Firebase", "Firestore", "React Context"],
      github: "",
      live: "https://geoledger.vercel.app/",
      image: "/images/projects/geoexp.webp",
    },
    {
      title: "Landing Page Collection",
      description:
        "A collection of high-converting landing pages with smooth animations, optimized for performance and user experience.",
      technologies: ["next.js", "Tailwind CSS", "Vite"],
      github: "https://github.com/vuejs/vue", // Replace with your actual GitHub
      live: "https://streamline-landing-2.vercel.app/", // Replace with your actual live demo
      image: "/images/projects/landing-project.avif",
    },
    {
      title: "Weather App",
      description:
        "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      technologies: ["React", "OpenWeather API", "Mapbox", "Chart.js"],
      github: "https://github.com/microsoft/TypeScript", // Replace with your actual GitHub
      live: "https://professional-weather-daid.bolt.host/", // Replace with your actual live demo
      image: "/images/projects/weather-project.avif",
    },
    {
      title: "VORTEX - Premium Streetwear Brand",
      description:
        "Premium unisex streetwear brand website showcasing Nigerian style and fashion. Features product collections, nationwide delivery, and a modern e-commerce experience.",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
      github: "",
      live: "https://stark-roan.vercel.app/",
      image: "/images/projects/stark-hero-lifestyle.jpg",
    },

  ]


  // Handle image error with proper type safety
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget
    const fallbackElement = target.nextElementSibling as HTMLElement | null

    if (target && fallbackElement) {
      target.style.display = "none"
      fallbackElement.style.display = "flex"
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-border z-50">
        <div
          className="h-full bg-foreground transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background border-b border-border z-40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="text-lg font-mono font-semibold">GW</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6">
              {["home", "about", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-sm font-medium transition-colors ${activeSection === section
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              {["home", "about", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 capitalize text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center px-6 pt-20">
        <div className="max-w-5xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                George<br />Wonuola
              </h1>

              <div className="text-2xl md:text-3xl lg:text-4xl font-bold min-h-[2.5rem] md:min-h-[3rem] flex items-center">
                <span className="text-foreground">{currentText}</span>
                <span className="inline-block w-0.5 h-8 md:h-10 bg-foreground ml-1 animate-pulse"></span>
              </div>

              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Building web applications from Ibadan, Nigeria. Focused on clean code,
                performance, and user experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  size="lg"
                  className="bg-foreground text-background hover:bg-foreground/90 px-6 py-2 text-sm font-medium rounded-none"
                  onClick={() => scrollToSection("projects")}
                >
                  View Projects
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border border-foreground text-foreground hover:bg-foreground hover:text-background px-6 py-2 text-sm font-medium rounded-none"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </Button>
              </div>

              <div className="flex gap-4 pt-4">
                {[
                  { icon: Github, href: "https://github.com/GeorgieW1", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/wonuola-george-66416620a", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:georgewdevo@gmail.com", label: "Email" },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Column - Avatar */}
            <div className="flex justify-center md:justify-end">
              <Avatar className="w-64 h-64 border-2 border-foreground">
                <AvatarImage
                  src="/images/IMAGE 2.jpeg"
                  alt="George Wonuola"
                  className="object-cover"
                />
                <AvatarFallback className="text-2xl font-mono bg-muted">
                  GW
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">About</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Who I Am</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-muted-foreground">
                With over 5 years of experience in frontend development, I specialize in building responsive,
                performant web applications using modern JavaScript frameworks. Based in Nigeria, I work with
                clients globally to bring their digital visions to life.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                I believe in writing clean, maintainable code and staying up-to-date with the latest frontend
                technologies. Whether it's a complex single-page application or a simple landing page, I approach
                every project with attention to detail and a focus on user experience.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-4">
                {[
                  { icon: Code, text: "Clean Code" },
                  { icon: Smartphone, text: "Responsive" },
                  { icon: Zap, text: "Performance" },
                  { icon: Globe, text: "Modern Stack" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 border border-border hover:border-foreground transition-colors">
                    <item.icon size={18} className="text-foreground" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-border p-8">
              <h4 className="text-xl font-bold mb-6">Quick Facts</h4>
              <ul className="space-y-3">
                {[
                  { text: "Computer Science Background" },
                  { text: "5+ Years Frontend Experience" },
                  { text: "Based in Nigeria" },
                  { text: "Working with Global Clients" },
                  { text: "Performance Optimization Expert" },
                  { text: "Mobile-First Approach" },
                ].map((fact, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    {fact.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">Skills</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Technologies</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {skills.map((skill, index) => (
              <Card key={index} className="border border-border hover:border-foreground transition-colors">
                <CardContent className="p-4 text-center">
                  <skill.icon size={24} className="mx-auto mb-2 text-foreground" />
                  <h3 className="text-sm font-medium mb-1">{skill.name}</h3>
                  <Badge variant="outline" className="text-xs border-border">
                    {skill.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">Projects</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Featured Work</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="border border-border hover:border-foreground transition-colors overflow-hidden">
                <div className="aspect-video relative bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                    onError={handleImageError}
                  />
                </div>
                <CardHeader className="p-6">
                  <CardTitle className="text-lg font-bold mb-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-border"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.live && project.live !== "#" && (
                    <Button
                      size="sm"
                      className="bg-foreground text-background hover:bg-foreground/90 rounded-none text-xs"
                      onClick={() => {
                        window.open(project.live, "_blank", "noopener,noreferrer")
                      }}
                    >
                      <ExternalLink size={14} className="mr-2" />
                      View Live
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">Contact</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's Work Together</h2>
            <p className="text-base text-muted-foreground max-w-lg">
              I'm always interested in new opportunities and exciting frontend projects.
              Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
              {[
                { icon: Mail, title: "Email", info: "georgewdevo@gmail.com", href: "mailto:georgewdevo@gmail.com" },
                { icon: Linkedin, title: "LinkedIn", info: "linkedin.com/in/wonuola-george-66416620a", href: "https://www.linkedin.com/in/wonuola-george-66416620a" },
                { icon: Github, title: "GitHub", info: "github.com/GeorgieW1", href: "https://github.com/GeorgieW1" },
              ].map((contact, index) => (
                <Link
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 border border-border hover:border-foreground transition-colors"
                >
                  <contact.icon className="text-foreground" size={20} />
                  <div>
                    <div className="text-sm font-medium">{contact.title}</div>
                    <div className="text-xs text-muted-foreground">{contact.info}</div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="border border-border p-8">
              <h3 className="text-xl font-bold mb-4">Ready to collaborate?</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Let's discuss your next project and bring your ideas to life.
              </p>
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-none w-full"
                onClick={() => window.open("mailto:georgewdevo@gmail.com", "_blank")}
              >
                <Mail className="mr-2" size={18} />
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 George Wonuola. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
