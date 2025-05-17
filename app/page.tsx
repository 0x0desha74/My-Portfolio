"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, Mail, Github, Linkedin, ExternalLink, Code, Terminal } from "lucide-react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { useMobile } from "@/hooks/use-mobile"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  const isMobile = useMobile()
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-200">
      <ParticleBackground />

      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-[#0a0a0f]/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl text-purple-400">
            Mustafa<span className="text-white">.dev</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {["home", "about", "skills", "projects", "experience", "contact"].map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                  activeSection === section ? "text-purple-400" : "text-slate-400"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </nav>
          <Button
            variant="outline"
            className="md:hidden border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
          >
            Menu
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center">
        <div className="container py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-block mb-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium border border-purple-500/20">
              .NET Backend Developer
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 text-white">
              Hi, I'm <span className="text-purple-400">Mustafa Elsayed</span>
            </h1>
            <div className="text-xl md:text-2xl text-slate-400 mb-6 h-16">
              <TypeAnimation
                sequence={[
                  "Building scalable backend solutions",
                  2000,
                  "Crafting clean architecture",
                  2000,
                  "Developing RESTful APIs",
                  2000,
                  "Creating efficient database designs",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
              />
            </div>
            <p className="text-slate-400 mb-8 max-w-2xl">
              Aspiring backend developer with a solid foundation in .NET technologies and web development. Passionate
              about creating efficient and maintainable solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                <Link href="#contact">Get in touch</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
              >
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Link href="#about">
            <ChevronDown className="h-8 w-8 text-purple-400" />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f18]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center justify-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-2 text-white">About Me</h2>
              <div className="w-16 h-1 bg-purple-500 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-lg text-slate-300">
                  Aspiring backend developer with a solid foundation in .NET technologies and web development.
                  Experienced in building scalable applications using ASP.NET Core and Entity Framework.
                </p>
                <p className="text-lg text-slate-300">
                  Passionate about creating efficient and maintainable solutions. Seeking opportunities to contribute
                  and grow in a professional development role.
                </p>
                <div className="flex gap-4 mt-6">
                  <Button
                    variant="outline"
                    asChild
                    className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
                  >
                    <a href="https://github.com/0x0desha74" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800"
                  >
                    <a href="https://www.linkedin.com/in/0x0desha74" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                    </a>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 gap-6">
                  <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/80 transition-colors">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-white text-lg">Education</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-purple-400 font-medium">Bachelor of Engineering</p>
                      <p className="text-sm text-slate-400">Electronics and Communication, Zagazig University</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/80 transition-colors">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-white text-lg">Location</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-purple-400 font-medium">Cairo, Egypt</p>
                      <p className="text-sm text-slate-400">Open to remote opportunities</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/80 transition-colors">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-white text-lg">Contact</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-purple-400 font-medium">demustafa74@gmail.com</p>
                      <p className="text-sm text-slate-400">+201124058064</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-[#0f0f18]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center justify-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-2 text-white">Technical Skills</h2>
              <div className="w-16 h-1 bg-purple-500 rounded-full"></div>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <motion.div variants={item}>
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/80 transition-all hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white flex items-center">
                      <Code className="mr-2 h-5 w-5 text-purple-400" /> Backend Technologies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">C#</Badge>
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">ASP.NET Core</Badge>
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">Web API</Badge>
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">MVC</Badge>
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">.NET 6</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/80 transition-all hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white flex items-center">
                      <Terminal className="mr-2 h-5 w-5 text-purple-400" /> Database Technologies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">SQL Server</Badge>
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">PostgreSQL</Badge>
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">
                        Entity Framework
                      </Badge>
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">LINQ</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/80 transition-all hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-5 w-5 text-purple-400"
                      >
                        <path d="M18 21a8 8 0 0 0-16 0" />
                        <circle cx="10" cy="8" r="5" />
                        <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
                      </svg>{" "}
                      Software Architecture
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">
                        N-Tier Architecture
                      </Badge>
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">
                        Onion Architecture
                      </Badge>
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">
                        Repository Pattern
                      </Badge>
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">
                        SOLID Principles
                      </Badge>
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">CQRS Pattern</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/80 transition-all hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-5 w-5 text-purple-400"
                      >
                        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                      </svg>{" "}
                      Frameworks & Tools
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">AutoMapper</Badge>
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">
                        Dependency Injection
                      </Badge>
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">Identity</Badge>
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">
                        JWT Authentication
                      </Badge>
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">
                        Fluent Validation
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/80 transition-all hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-5 w-5 text-purple-400"
                      >
                        <circle cx="18" cy="18" r="3" />
                        <circle cx="6" cy="6" r="3" />
                        <path d="M13 6h3a2 2 0 0 1 2 2v7" />
                        <path d="M11 18H8a2 2 0 0 1-2-2V9" />
                      </svg>{" "}
                      Computer Science
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">Data Structures</Badge>
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">Algorithms</Badge>
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">Problem Solving</Badge>
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">OOP</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={item}>
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/80 transition-all hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-white flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-5 w-5 text-purple-400"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M7 7h10" />
                        <path d="M7 12h10" />
                        <path d="M7 17h10" />
                      </svg>{" "}
                      Frontend Technologies
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">HTML</Badge>
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">CSS</Badge>
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">JavaScript</Badge>
                      <Badge className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30">Bootstrap</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12"
            >
              <h3 className="text-xl font-semibold mb-4 text-center text-white">Personal Skills</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline" className="text-sm py-1.5 border-purple-500/30 text-purple-300">
                  Problem Solving
                </Badge>
                <Badge variant="outline" className="text-sm py-1.5 border-purple-500/30 text-purple-300">
                  Communication Skills
                </Badge>
                <Badge variant="outline" className="text-sm py-1.5 border-purple-500/30 text-purple-300">
                  Teamwork
                </Badge>
                <Badge variant="outline" className="text-sm py-1.5 border-purple-500/30 text-purple-300">
                  Time Management
                </Badge>
                <Badge variant="outline" className="text-sm py-1.5 border-purple-500/30 text-purple-300">
                  Critical Thinking
                </Badge>
                <Badge variant="outline" className="text-sm py-1.5 border-purple-500/30 text-purple-300">
                  Work Under Pressure
                </Badge>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-b from-[#0f0f18] to-[#0a0a0f]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center justify-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-2 text-white">Projects</h2>
              <div className="w-16 h-1 bg-purple-500 rounded-full"></div>
            </div>

            <Tabs defaultValue="talabat" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-slate-800/50 border border-slate-700">
                <TabsTrigger
                  value="talabat"
                  className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-300 text-slate-400"
                >
                  Talabat
                </TabsTrigger>
                <TabsTrigger
                  value="bookly"
                  className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-300 text-slate-400"
                >
                  Bookly
                </TabsTrigger>
                <TabsTrigger
                  value="employees"
                  className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-300 text-slate-400"
                >
                  Employees Management
                </TabsTrigger>
                <TabsTrigger
                  value="gamezone"
                  className="data-[state=active]:bg-purple-500/20 data-[state=active]:text-purple-300 text-slate-400"
                >
                  GameZone
                </TabsTrigger>
              </TabsList>

              <TabsContent value="talabat" className="mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3 bg-gradient-to-br from-purple-900/30 to-slate-900 p-6 flex items-center justify-center">
                        <div className="text-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="80"
                            height="80"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mx-auto text-purple-400 mb-4"
                          >
                            <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
                            <circle cx="12" cy="10" r="3" />
                            <circle cx="12" cy="12" r="10" />
                          </svg>
                          <h3 className="text-xl font-bold text-white">Talabat</h3>
                          <p className="text-purple-300 text-sm">E-Commerce API</p>
                        </div>
                      </div>
                      <div className="md:w-2/3 p-6">
                        <CardHeader>
                          <CardTitle className="text-white">Talabat (E-Commerce API)</CardTitle>
                          <CardDescription className="text-slate-400">
                            A scalable RESTful API for e-commerce operations
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="text-slate-300">
                          <p className="mb-4">
                            Developed a scalable RESTful API using ASP.NET Core 6 and Onion Architecture to manage
                            e-commerce operations efficiently.
                          </p>
                          <h4 className="font-semibold mb-2 text-white">Key Features:</h4>
                          <ul className="list-disc pl-5 space-y-1 mb-4 text-slate-300">
                            <li>Product Management: Adding, updating, and organizing products</li>
                            <li>Order Processing: Handling customer orders with seamless transactions</li>
                            <li>User Authentication: Secure login and role-based access control</li>
                          </ul>
                          <h4 className="font-semibold mb-2 text-white">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="bg-purple-500/20 text-purple-300">ASP.NET Core Web API</Badge>
                            <Badge className="bg-purple-500/20 text-purple-300">EF Core</Badge>
                            <Badge className="bg-purple-500/20 text-purple-300">AutoMapper</Badge>
                            <Badge className="bg-purple-500/20 text-purple-300">Identity</Badge>
                            <Badge className="bg-purple-500/20 text-purple-300">JWT</Badge>
                            <Badge className="bg-purple-500/20 text-purple-300">LINQ</Badge>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10"
                            asChild
                          >
                            <a href="https://github.com/0x0desha74/Talabat.API" target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" /> View Project
                            </a>
                          </Button>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="bookly" className="mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3 bg-gradient-to-br from-indigo-900/30 to-slate-900 p-6 flex items-center justify-center">
                        <div className="text-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="80"
                            height="80"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mx-auto text-indigo-400 mb-4"
                          >
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                          </svg>
                          <h3 className="text-xl font-bold text-white">Bookly</h3>
                          <p className="text-indigo-300 text-sm">Library Management System</p>
                        </div>
                      </div>
                      <div className="md:w-2/3 p-6">
                        <CardHeader>
                          <CardTitle className="text-white">Bookly (Library Management System API)</CardTitle>
                          <CardDescription className="text-slate-400">
                            A scalable Library Management System
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="text-slate-300">
                          <p className="mb-4">
                            Developed a scalable Library Management System using ASP.NET Core to streamline the
                            management of books, users, and lending operations.
                          </p>
                          <h4 className="font-semibold mb-2 text-white">Key Features:</h4>
                          <ul className="list-disc pl-5 space-y-1 mb-4 text-slate-300">
                            <li>Book Management: Efficiently adding, updating, and cataloging books</li>
                            <li>User Management: Registration and role-based access control for staff and members</li>
                            <li>Book Issuance & Return: Tracking issued books and managing return deadlines</li>
                            <li>Fine Calculation: Automated fine calculation for overdue books</li>
                          </ul>
                          <h4 className="font-semibold mb-2 text-white">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="bg-indigo-500/20 text-indigo-300">ASP.NET Core</Badge>
                            <Badge className="bg-indigo-500/20 text-indigo-300">Entity Framework Core</Badge>
                            <Badge className="bg-indigo-500/20 text-indigo-300">AutoMapper</Badge>
                            <Badge className="bg-indigo-500/20 text-indigo-300">JWT</Badge>
                            <Badge className="bg-indigo-500/20 text-indigo-300">LINQ</Badge>
                            <Badge className="bg-indigo-500/20 text-indigo-300">SQL Server</Badge>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10"
                            asChild
                          >
                            <a href="https://github.com/0x0desha74/Library-Management-System" target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" /> View Project
                            </a>
                          </Button>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="employees" className="mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3 bg-gradient-to-br from-cyan-900/30 to-slate-900 p-6 flex items-center justify-center">
                        <div className="text-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="80"
                            height="80"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mx-auto text-cyan-400 mb-4"
                          >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                          <h3 className="text-xl font-bold text-white">Employees</h3>
                          <p className="text-cyan-300 text-sm">Management System</p>
                        </div>
                      </div>
                      <div className="md:w-2/3 p-6">
                        <CardHeader>
                          <CardTitle className="text-white">Employees Management System</CardTitle>
                          <CardDescription className="text-slate-400">
                            A web application for managing employee and department records
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="text-slate-300">
                          <p className="mb-4">
                            Developed a scalable web application using ASP.NET Core MVC and .NET 6 to manage employee
                            and department records through full CRUD functionality.
                          </p>
                          <h4 className="font-semibold mb-2 text-white">Key Features:</h4>
                          <ul className="list-disc pl-5 space-y-1 mb-4 text-slate-300">
                            <li>Employee Management: Add, update, delete, and view employee records</li>
                            <li>Department Management: Manage and update department details</li>
                            <li>User Interface: Responsive, user-friendly interface built with Bootstrap</li>
                            <li>
                              Data Security: Ensured secure data handling with proper validation and user authentication
                            </li>
                          </ul>
                          <h4 className="font-semibold mb-2 text-white">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="bg-cyan-500/20 text-cyan-300">ASP.NET Core MVC</Badge>
                            <Badge className="bg-cyan-500/20 text-cyan-300">Entity Framework Core</Badge>
                            <Badge className="bg-cyan-500/20 text-cyan-300">SQL Server</Badge>
                            <Badge className="bg-cyan-500/20 text-cyan-300">.NET 6</Badge>
                            <Badge className="bg-cyan-500/20 text-cyan-300">Bootstrap</Badge>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10"
                            asChild
                          >
                            <a href="https://github.com/0x0desha74/Employees-Management-System" target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" /> View Project
                            </a>
                          </Button>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="gamezone" className="mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3 bg-gradient-to-br from-pink-900/30 to-slate-900 p-6 flex items-center justify-center">
                        <div className="text-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="80"
                            height="80"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mx-auto text-pink-400 mb-4"
                          >
                            <rect width="20" height="12" x="2" y="6" rx="2" />
                            <path d="M6 12h.01" />
                            <path d="M10 12h.01" />
                            <path d="M15 12h.01" />
                            <path d="M19 12h.01" />
                            <path d="M8 6v4" />
                            <path d="M16 6v4" />
                            <path d="M12 2v4" />
                            <path d="M12 18v4" />
                          </svg>
                          <h3 className="text-xl font-bold text-white">GameZone</h3>
                          <p className="text-pink-300 text-sm">Game Management System</p>
                        </div>
                      </div>
                      <div className="md:w-2/3 p-6">
                        <CardHeader>
                          <CardTitle className="text-white">GameZone (Game Management System)</CardTitle>
                          <CardDescription className="text-slate-400">
                            A CRUD-based web application for managing video game information
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="text-slate-300">
                          <p className="mb-4">
                            Built a CRUD-based web application using ASP.NET Core MVC to manage and display video game
                            information.
                          </p>
                          <h4 className="font-semibold mb-2 text-white">Key Features:</h4>
                          <ul className="list-disc pl-5 space-y-1 mb-4 text-slate-300">
                            <li>Game Management: Add, edit, delete, and view game details</li>
                            <li>Category System: Organize games by genre and type</li>
                            <li>User Interaction: Allow users to browse and search for games</li>
                          </ul>
                          <h4 className="font-semibold mb-2 text-white">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            <Badge className="bg-pink-500/20 text-pink-300">ASP.NET Core MVC</Badge>
                            <Badge className="bg-pink-500/20 text-pink-300">Entity Framework</Badge>
                            <Badge className="bg-pink-500/20 text-pink-300">LINQ</Badge>
                            <Badge className="bg-pink-500/20 text-pink-300">Bootstrap</Badge>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-pink-500/30 text-pink-300 hover:bg-pink-500/10"
                            asChild
                          >
                            <a href="https://github.com/0x0desha74/GameZone" target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" /> View Project
                            </a>
                          </Button>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-[#0a0a0f]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center justify-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-2 text-white">Experience</h2>
              <div className="w-16 h-1 bg-purple-500 rounded-full"></div>
            </div>

            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative border-l border-purple-500/30 pl-8 pb-12"
              >
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-purple-500 -translate-x-1/2 glow"></div>
                <div className="mb-2">
                  <h3 className="text-xl font-semibold text-white">Backend .Net Web Development</h3>
                  <p className="text-purple-400">Route Academy</p>
                </div>
                <p className="text-sm text-slate-400 mb-4">08/2024 – 01/2025</p>
                <div className="prose prose-invert max-w-none">
                  <p className="text-slate-300">
                    Internship focused on .NET backend development skills and practices. Worked on real-world projects
                    and gained hands-on experience with ASP.NET Core, Entity Framework, and database design.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative border-l border-purple-500/30 pl-8"
              >
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-purple-500 -translate-x-1/2 glow"></div>
                <div className="mb-2">
                  <h3 className="text-xl font-semibold text-white">Backend .Net Web Development</h3>
                  <p className="text-purple-400">Digital Egypt Pioneers Initiative - DEPI</p>
                </div>
                <p className="text-sm text-slate-400 mb-4">10/2023 – 03/2024</p>
                <div className="prose prose-invert max-w-none">
                  <p className="text-slate-300">
                    Participated in an intensive training program focused on .NET technologies and backend development.
                    Collaborated with team members on various projects and learned industry best practices.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-[#0a0a0f] to-[#0f0f18]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center justify-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-2 text-white">Get In Touch</h2>
              <div className="w-16 h-1 bg-purple-500 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm h-full">
                  <CardHeader>
                    <CardTitle className="text-white">Contact Information</CardTitle>
                    <CardDescription className="text-slate-400">
                      Reach out to me through any of these channels
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Email</p>
                        <p className="text-white">demustafa74@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-purple-400"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Phone</p>
                        <p className="text-white">+201124058064</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-purple-400"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Location</p>
                        <p className="text-white">Cairo, Egypt</p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <p className="text-slate-400 mb-4">Connect with me on social media</p>
                      <div className="flex gap-4">
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-purple-500/50"
                          asChild
                        >
                          <a href="https://github.com/0x0desha74" target="_blank" rel="noopener noreferrer">
                            <Github className="h-5 w-5" />
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-purple-500/50"
                          asChild
                        >
                          <a href="https://www.linkedin.com/in/0x0desha74" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-5 w-5" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Send Me a Message</CardTitle>
                    <CardDescription className="text-slate-400">
                      I'll get back to you as soon as possible
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-slate-300">
                            Name
                          </label>
                          <input
                            id="name"
                            type="text"
                            className="w-full px-3 py-2 bg-slate-900/50 border border-slate-700 rounded-md text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            placeholder="Your name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-slate-300">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="w-full px-3 py-2 bg-slate-900/50 border border-slate-700 rounded-md text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            placeholder="Your email"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium text-slate-300">
                            Message
                          </label>
                          <textarea
                            id="message"
                            className="w-full px-3 py-2 bg-slate-900/50 border border-slate-700 rounded-md text-white min-h-[120px] focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                            placeholder="Your message"
                          ></textarea>
                        </div>
                      </div>
                      <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-[#080810] text-slate-400 border-t border-slate-800">
        <div className="container text-center">
          <p>© {new Date().getFullYear()} Mustafa Elsayed. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
