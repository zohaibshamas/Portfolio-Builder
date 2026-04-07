import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Cloud, Code2, Database, GitBranch, Layers, Settings2, Award, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const NAV_LINKS = [
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Experience", href: "experience" },
  { name: "Contact", href: "contact" },
];

const CERTIFICATIONS = [
  "Salesforce Certified Administrator",
  "Platform Developer I",
  "Platform Developer II",
  "Sales Cloud Consultant",
  "Service Cloud Consultant",
];

const SKILLS = [
  {
    icon: Code2,
    title: "Apex Development",
    description: "Writing clean, bulkified Apex classes, triggers, and asynchronous patterns — Batch, Queueable, Future, and Scheduled jobs — following Salesforce best practices.",
  },
  {
    icon: Layers,
    title: "Lightning Web Components",
    description: "Building modern, reusable LWC components and Aura components with seamless org integration, strong UX focus, and accessibility standards.",
  },
  {
    icon: GitBranch,
    title: "Flows & Automation",
    description: "Architecting complex business logic with Flow Builder, Process Builder, and Workflow Rules — reducing code where declarative tools do the job better.",
  },
  {
    icon: Cloud,
    title: "Salesforce Clouds",
    description: "Hands-on delivery across Sales Cloud, Service Cloud, Experience Cloud, and Marketing Cloud with deep knowledge of standard and custom object models.",
  },
  {
    icon: Database,
    title: "SOQL & Data Management",
    description: "Writing optimized SOQL/SOSL queries, designing data models, managing data migrations, and integrating with Data Loader and third-party ETL tools.",
  },
  {
    icon: Settings2,
    title: "Integrations & APIs",
    description: "Building REST and SOAP API integrations, Named Credentials, Connected Apps, and middleware connectors — keeping Salesforce the single source of truth.",
  },
];

const PROJECTS = [
  {
    title: "Field Service Automation",
    category: "Service Cloud",
    description: "End-to-end automation of a field service workflow for a 500-technician enterprise. Built custom Apex scheduling engine, LWC dispatcher console, and automated SLA tracking — cutting average response time by 38%.",
    image: "/images/project-1.png",
    tags: ["Apex", "LWC", "Service Cloud", "Flow"],
    year: "2024",
  },
  {
    title: "Partner Portal Rebuild",
    category: "Experience Cloud",
    description: "Re-architected a legacy Visualforce partner portal into a modern Experience Cloud site with custom LWC components, role-based access, and real-time deal registration. Onboarded 200+ partners on launch day.",
    image: "/images/project-2.png",
    tags: ["Experience Cloud", "LWC", "Apex", "SOQL"],
    year: "2023",
  },
  {
    title: "Revenue Intelligence Dashboard",
    category: "Sales Cloud",
    description: "Built a custom analytics layer on top of Sales Cloud using Apex REST services and Einstein Analytics — giving leadership a live pipeline view with forecast accuracy improved by 22%.",
    image: "/images/project-3.png",
    tags: ["Sales Cloud", "Apex REST", "Einstein Analytics", "SOQL"],
    year: "2023",
  },
];

const EXPERIENCE = [
  {
    role: "Senior Salesforce Developer",
    company: "Apex Solutions Group",
    period: "2022 — Present",
    description: "Technical lead for enterprise Salesforce implementations. Own architecture decisions, mentor a team of 4 developers, and drive cross-cloud delivery from scoping to go-live.",
  },
  {
    role: "Salesforce Developer",
    company: "CloudBridge Consulting",
    period: "2019 — 2022",
    description: "Delivered 12 Salesforce projects across Sales, Service, and Experience Cloud. Specialized in complex Apex integrations and LWC component libraries used across the firm.",
  },
  {
    role: "Junior Salesforce Administrator",
    company: "TechForce Systems",
    period: "2017 — 2019",
    description: "Managed org configuration, user administration, and declarative automation. Transitioned into development by building custom Apex triggers and Visualforce pages.",
  },
];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const heroY = useTransform(smoothProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.25], [1, 0]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-background min-h-screen overflow-x-hidden text-foreground">

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 h-[3px] bg-primary z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex justify-between items-center">
          <button
            onClick={() => scrollTo("hero")}
            className="font-serif text-xl font-bold tracking-tight text-primary hover:opacity-80 transition-opacity"
            data-testid="nav-logo"
          >
            SF<span className="text-foreground">Dev</span>
          </button>
          <nav className="hidden md:flex gap-8 text-sm font-medium" data-testid="nav-links">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                data-testid={`nav-link-${link.name.toLowerCase()}`}
                className="text-muted-foreground hover:text-primary transition-colors tracking-wide"
              >
                {link.name}
              </button>
            ))}
          </nav>
          <Button
            onClick={() => scrollTo("contact")}
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5 text-sm"
            data-testid="btn-hire-me"
          >
            Hire Me
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-5xl mx-auto text-center pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm text-primary font-medium mb-8"
            data-testid="hero-badge"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Open to new Salesforce projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif text-foreground leading-[1.08] tracking-tight mb-8"
            data-testid="hero-headline"
          >
            Salesforce Developer<br />
            <span className="text-primary">Building What Matters.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12"
            data-testid="hero-subtext"
          >
            I design and build scalable Salesforce solutions — from complex Apex architectures to polished Lightning Web Components — that help businesses move faster and smarter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={() => scrollTo("projects")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 font-semibold text-base gap-2"
              data-testid="btn-view-work"
            >
              View My Work <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              onClick={() => scrollTo("contact")}
              variant="outline"
              size="lg"
              className="rounded-full px-8 font-medium text-base border-border hover:border-primary hover:text-primary"
              data-testid="btn-contact-hero"
            >
              Get in Touch
            </Button>
          </motion.div>

          {/* Cert badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-2"
            data-testid="cert-badges"
          >
            {CERTIFICATIONS.map((cert) => (
              <span
                key={cert}
                className="inline-flex items-center gap-1.5 bg-secondary border border-border rounded-full px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                <Award className="w-3 h-3 text-primary" />
                {cert}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6 md:px-12 bg-secondary/40 border-t border-border/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center">
          <div className="w-full md:w-5/12">
            <FadeIn>
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                  <img
                    src="/images/profile.png"
                    alt="Salesforce Developer portrait"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                    data-testid="img-profile"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-primary text-primary-foreground rounded-2xl px-5 py-4 shadow-xl">
                  <p className="text-3xl font-bold font-serif leading-none">7+</p>
                  <p className="text-xs font-medium opacity-90 mt-1">Years Salesforce</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="w-full md:w-7/12">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px bg-primary w-10" />
                <span className="text-primary text-xs font-semibold uppercase tracking-widest">About Me</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                I turn Salesforce into a<br />
                <span className="text-primary">competitive advantage.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                <p>
                  With 7+ years of hands-on Salesforce development, I've delivered solutions across enterprise Sales, Service, and Experience Cloud implementations. I write Apex that scales, build LWCs that users actually want to use, and architect integrations that keep data flowing reliably.
                </p>
                <p>
                  I hold multiple Salesforce certifications and stay current with every release cycle. Whether it's a greenfield org build, a complex migration, or untangling legacy technical debt — I've seen it and solved it.
                </p>
              </div>
              <div className="mt-10 flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  data-testid="link-github"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  data-testid="link-linkedin"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:hello@example.com"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  data-testid="link-email-about"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-32 px-6 md:px-12 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px bg-primary w-10" />
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 max-w-2xl">
              What I bring to every Salesforce project
            </h2>
            <p className="text-muted-foreground text-lg mb-16 max-w-xl">
              A full-stack Salesforce skill set — from declarative automations to production-grade custom development.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((skill, index) => (
              <FadeIn key={skill.title} delay={index * 0.07}>
                <div
                  className="group p-8 bg-card border border-border rounded-2xl hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  data-testid={`skill-card-${index}`}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <skill.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold font-serif mb-3">{skill.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 px-6 md:px-12 bg-foreground text-background border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px bg-primary w-10" />
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Selected Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-20">
              Projects that made a difference
            </h2>
          </FadeIn>

          <div className="space-y-28">
            {PROJECTS.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} gap-12 md:gap-20 items-center group`}
                data-testid={`project-card-${index}`}
              >
                <div className="w-full md:w-7/12 overflow-hidden rounded-2xl">
                  <FadeIn delay={0.1}>
                    <div className="aspect-[16/10] overflow-hidden relative rounded-2xl bg-background/5">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                      />
                      <div className="absolute inset-0 bg-foreground/10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none rounded-2xl" />
                    </div>
                  </FadeIn>
                </div>

                <div className="w-full md:w-5/12">
                  <FadeIn delay={0.2}>
                    <div className="flex items-center gap-3 text-xs tracking-widest uppercase mb-5 text-muted font-medium">
                      <span>{project.year}</span>
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      <span>{project.category}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold mb-5">{project.title}</h3>
                    <p className="text-background/70 text-base mb-8 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-background/20 text-background/70 text-xs rounded-full px-3"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
                      data-testid={`project-link-${index}`}
                    >
                      View Case Study
                      <ExternalLink className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </FadeIn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-32 px-6 md:px-12 border-t border-border/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] rounded-full bg-primary/3 blur-[150px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px bg-primary w-10" />
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-20">Career Timeline</h2>
          </FadeIn>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border/60 md:-translate-x-px" />

            <div className="space-y-16">
              {EXPERIENCE.map((exp, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className={`relative flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 md:gap-16 items-start md:items-center pl-8 md:pl-0`}>
                    {/* Dot */}
                    <div className="absolute left-0 md:left-1/2 top-1 md:top-1/2 w-5 h-5 rounded-full border-4 border-primary bg-background md:-translate-x-1/2 md:-translate-y-1/2 z-10" />

                    <div className={`w-full md:w-[calc(50%-2.5rem)] ${index % 2 === 0 ? "md:text-right" : ""}`} data-testid={`exp-item-${index}`}>
                      <span className="text-xs font-semibold text-primary uppercase tracking-widest">{exp.period}</span>
                      <h4 className="text-xl font-serif font-bold mt-1">{exp.company}</h4>
                    </div>

                    <div className="w-full md:w-[calc(50%-2.5rem)]">
                      <h3 className="text-lg font-semibold mb-2">{exp.role}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{exp.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 md:px-12 bg-secondary/40 border-t border-border/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="w-full md:w-1/2">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px bg-primary w-10" />
                <span className="text-primary text-xs font-semibold uppercase tracking-widest">Contact</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                Let's build something<br />
                <span className="text-primary">on Salesforce.</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-md leading-relaxed">
                Looking for a senior Salesforce developer for your next project or team? I'd love to hear what you're working on.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <a
                    href="mailto:hello@sfdev.example.com"
                    className="text-base hover:text-primary transition-colors"
                    data-testid="link-email-contact"
                  >
                    hello@sfdev.example.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-base text-muted-foreground">Remote — Available Worldwide</span>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="w-full md:w-1/2">
            <FadeIn delay={0.2}>
              <form
                className="bg-card border border-border rounded-2xl p-8 md:p-10 space-y-6 shadow-xl shadow-black/5"
                onSubmit={(e) => e.preventDefault()}
                data-testid="contact-form"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input
                      id="name"
                      placeholder="Your Name"
                      className="border-border bg-background focus-visible:ring-primary"
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      className="border-border bg-background focus-visible:ring-primary"
                      data-testid="input-email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Project Type</label>
                  <Input
                    id="subject"
                    placeholder="e.g. LWC Development, Org Implementation, Integration"
                    className="border-border bg-background focus-visible:ring-primary"
                    data-testid="input-subject"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Tell me about your project</label>
                  <Textarea
                    id="message"
                    placeholder="Describe your Salesforce project, current challenges, or what you need built..."
                    className="border-border bg-background focus-visible:ring-primary min-h-[130px] resize-none"
                    data-testid="textarea-message"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 font-semibold text-base rounded-xl"
                  data-testid="btn-submit-contact"
                >
                  Send Message
                </Button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 md:px-12 bg-foreground text-background border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif font-bold text-xl">
            SF<span className="text-primary">Dev</span>
          </div>
          <p className="text-sm text-background/50 tracking-wide">
            &copy; {new Date().getFullYear()} Salesforce Developer Portfolio. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
            <a href="mailto:hello@sfdev.example.com" className="hover:text-primary transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
