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
      title: "E-Commerce Frontend",
      description:
        "A modern, responsive e-commerce interface built with React and Tailwind CSS. Features product filtering, cart management, and smooth animations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Stripe API"],
      github: "https://github.com/vercel/next.js", // Replace with your actual GitHub
      live: "https://vocal-marshmallow-f7ef79.netlify.app/", // Replace with your actual live demo
      image: "/images/projects/ecommerce-project.jpg",
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
      title: "Modern Architecture Website",
      description:
        "A clean, responsive website showcasing architectural projects with interactive galleries, smooth animations, and optimized performance. Features project filtering, image lightboxes, and a minimalist design that highlights the architectural work through strategic typography and refined aesthetics..",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      github: "https://github.com/tailwindlabs/tailwindcss", // Replace with your actual GitHub
      live: "https://virtualworkslimited.netlify.app/", // Replace with your actual live demo
      image: "/images/projects/wallpaper4.jpg",
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
    <div className="min-h-screen bg-white">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-40 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="text-2xl font-bold text-gray-900">George W</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 font-medium hover:-translate-y-0.5 ${
                    activeSection === section
                      ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100 animate-in slide-in-from-top duration-300">
              {["home", "about", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-3 capitalize text-gray-600 hover:text-blue-600 transition-colors font-medium hover:translate-x-2"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-20">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-200 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>

        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="mb-12 animate-in zoom-in duration-700">
            <Avatar className="w-64 h-64 mx-auto border-4 border-blue-100 shadow-xl">
              <AvatarImage
                src="/images/IMAGE 2.jpeg"
                alt="George Wonuola - Frontend Developer"
                className="object-cover"
              />
              <AvatarFallback className="text-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                GW
              </AvatarFallback>
            </Avatar>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            George Wonuola
          </h1>

          <p className="text-xl md:text-2xl text-blue-600 mb-4 font-medium animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            Frontend Developer
          </p>

          <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-400">
            Based in Nigeria • I craft beautiful, responsive web interfaces with modern JavaScript frameworks.
            Passionate about clean code, performance optimization, and creating exceptional user experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-in fade-in slide-in-from-bottom duration-700 delay-500">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg px-8 py-3 hover:scale-105 transition-transform"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 bg-transparent hover:scale-105 transition-transform"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-8 mb-16 animate-in fade-in slide-in-from-bottom duration-700 delay-600">
            {[
              { icon: Github, href: "github.com/GeorgieW1", label: "GitHub" },
              { icon: Linkedin, href: "www.linkedin.com/in/wonuola-george-66416620a", label: "LinkedIn" },
              { icon: Mail, href: "georgewdevo@gmal.com", label: "Email" },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-blue-600 transition-all p-3 rounded-full hover:bg-blue-50 hover:scale-110 hover:-translate-y-1"
                aria-label={social.label}
              >
                <social.icon size={28} />
              </Link>
            ))}
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-blue-400" size={32} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-20">About Me</h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-blue-600 mb-8">Crafting Digital Experiences</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                With over 5 years of experience in frontend development, I specialize in building responsive, performant
                web applications using modern JavaScript frameworks. Based in Nigeria, I work with clients globally to
                bring their digital visions to life.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with the latest frontend
                technologies. Whether it's a complex single-page application or a simple landing page, I approach every
                project with attention to detail and a focus on user experience.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-8">
                {[
                  { icon: Code, text: "Clean Code", color: "blue" },
                  { icon: Smartphone, text: "Responsive Design", color: "purple" },
                  { icon: Zap, text: "Performance", color: "green" },
                  { icon: Globe, text: "Modern Frameworks", color: "orange" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  >
                    <item.icon size={24} className={`text-${item.color}-600`} />
                    <span className="font-medium text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl hover:scale-105 hover:rotate-1 transition-transform duration-300">
                <h4 className="text-2xl font-semibold mb-6">Quick Facts</h4>
                <ul className="space-y-4">
                  {[
                    "🎓 Computer Science Background",
                    "💻 5+ Years Frontend Experience",
                    "📍 Based in Nigeria",
                    "🌍 Working with Global Clients",
                    "⚡ Performance Optimization Expert",
                    "📱 Mobile-First Approach",
                  ].map((fact, index) => (
                    <li key={index} className="text-lg">
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-20">Skills & Technologies</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-full hover:-translate-y-2 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <skill.icon size={32} className="mx-auto mb-3 text-blue-600" />
                  <h3 className="text-gray-900 font-semibold text-lg mb-3">{skill.name}</h3>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors">
                    {skill.category}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-20">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 h-full overflow-hidden group hover:-translate-y-2 hover:scale-105"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={handleImageError}
                  />
                  {/* Fallback gradient background */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 hidden items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Monitor className="text-white/20" size={80} />
                  </div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle className="text-gray-900 group-hover:text-blue-600 transition-colors text-xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-blue-300 text-blue-700 hover:bg-blue-50 transition-colors hover:scale-110"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:scale-105 transition-transform"
                      onClick={() => {
                        if (project.live && project.live !== "#") {
                          window.open(project.live, "_blank", "noopener,noreferrer")
                        }
                      }}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-8">Let's Work Together</h2>

          <p className="text-xl text-gray-600 text-center mb-16 leading-relaxed">
            I'm always interested in new opportunities and exciting frontend projects. Let's discuss how we can bring
            your ideas to life with modern web technologies.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Get In Touch</h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, title: "Email", info: "georgewdevo@gmail.com" },
                  { icon: Linkedin, title: "LinkedIn", info: "linkedin.com/in/georgew" },
                  { icon: Github, title: "GitHub", info: "github.com/GeorgieW1" },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-6 rounded-xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all hover:translate-x-2"
                  >
                    <contact.icon className="text-blue-600" size={24} />
                    <div>
                      <h4 className="text-gray-900 font-semibold text-lg">{contact.title}</h4>
                      <p className="text-gray-600">{contact.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Ready to collaborate?</h3>
              <p className="text-lg text-gray-600 mb-8">
                Let's discuss your next project and bring your ideas to life.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg px-8 py-3 hover:scale-105 transition-transform"
                onClick={() => window.open("mailto:georgewdevo@gmail.com", "_blank")}
              >
                <Mail className="mr-2" size={20} />
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 text-lg">© 2024 George Wonuola. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
