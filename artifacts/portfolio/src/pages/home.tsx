import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Cloud, Code2, Database, GitBranch, Layers, Settings2, Award, MapPin, ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const NAV_LINKS = [
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Projects", href: "projects" },
  { name: "Certifications", href: "certifications" },
  { name: "Contact", href: "contact" },
];

const CERTIFICATIONS = [
  "Salesforce Administrator",
  "Platform Developer I",
  "Sales Cloud Consultant",
  "Associate AI",
  "B2C Commerce Developer",
];

const SUMMARY_POINTS = [
  "4+ years designing and implementing Salesforce CRM solutions",
  "Hands-on across Sales Cloud, Service Cloud, and Experience Cloud",
  "Expert in Apex, LWC, Aura Components, SOQL, and JavaScript",
  "Salesforce integrations via REST APIs and SAP",
  "Lead-to-order lifecycle, opportunity management, and sales automation",
  "Case management, SLA/escalation, and omni-channel Service Cloud support",
  "Apex Triggers with handler frameworks for scalable automation",
  "Flows, Process Builder, and declarative automation",
  "Data migration, transformation, and integrity management",
  "Test classes with mock callouts and high code coverage",
  "Deployment using change sets and Salesforce DX best practices",
  "Agile methodology and cross-functional team collaboration",
];

const SKILLS = [
  {
    icon: Code2,
    title: "Apex & Backend",
    tags: ["Apex", "Apex Triggers", "Handler Frameworks", "Test Classes", "Mock Callouts", "Async Apex"],
    description: "Scalable, bulkified Apex development including triggers, batch jobs, and handler patterns. High code coverage with mock callout strategies.",
  },
  {
    icon: Layers,
    title: "Lightning & UI",
    tags: ["LWC", "Aura Components", "Visualforce", "JavaScript", "HTML", "CSS"],
    description: "Dynamic, user-friendly UI with Lightning Web Components and Aura. Responsive, accessible interfaces for internal and partner/community users.",
  },
  {
    icon: GitBranch,
    title: "Automation & Flows",
    tags: ["Flow Builder", "Process Builder", "Workflow Rules", "Approval Processes", "Assignment Rules", "Escalation Rules"],
    description: "Complex business process automation using declarative tools — reducing code where flows do the job, enforcing SLAs, and automating routing.",
  },
  {
    icon: Cloud,
    title: "Salesforce Clouds",
    tags: ["Sales Cloud", "Service Cloud", "Experience Cloud"],
    description: "Deep delivery experience across Sales, Service, and Experience Cloud — from partner communities to omni-channel service centers.",
  },
  {
    icon: Database,
    title: "Data & Security",
    tags: ["SOQL", "SOSL", "Data Migration", "Profiles", "Permission Sets", "Sharing Rules", "Role Hierarchy"],
    description: "Optimized queries, data migration, and integrity management. Security model expertise — profiles, permission sets, and sharing configurations.",
  },
  {
    icon: Settings2,
    title: "Integrations & DevOps",
    tags: ["REST APIs", "SAP Integration", "Change Sets", "SFDX", "Git", "VS Code"],
    description: "REST API integrations, SAP bi-directional sync, and Commerce Cloud data pipelines. Structured deployments using SFDX and change sets.",
  },
];

const PROJECTS = [
  {
    title: "Honda CRM",
    category: "Sales Cloud & Partner Community",
    description:
      "Designed and implemented the Salesforce Partner Community for Honda, enabling seamless collaboration between Honda and its dealer network. Built custom LWC components for sales performance tracking and reporting. Integrated Salesforce with Honda's SAP systems for real-time data sync and configured sharing rules for secure partner data access.",
    image: "/images/project-1.png",
    tags: ["Sales Cloud", "Partner Community", "LWC", "SAP Integration", "Sharing Rules", "Apex"],
    highlights: [
      "Salesforce Partner Community for Honda dealer network",
      "Custom LWC order creation interfaces",
      "Real-time SAP integration for data accuracy",
      "Configured sharing rules for structured partner access",
    ],
    year: "Project 1",
  },
  {
    title: "Sapphire Retail Limited",
    category: "Service Cloud",
    description:
      "Full Service Cloud implementation for a retail CRM. Configured Email-to-Case and Web-to-Case for multi-channel case creation. Built REST APIs for Commerce Cloud bi-directional sync and implemented Order Management flows including cancellation, exchange, and returns. Led legacy data migration ensuring full data integrity.",
    image: "/images/project-2.png",
    tags: ["Service Cloud", "REST APIs", "Commerce Cloud", "OMS Flows", "Apex Triggers", "Data Migration"],
    highlights: [
      "Email-to-Case and Web-to-Case automation",
      "Bi-directional Commerce Cloud data sync",
      "OMS flows: cancellations, exchanges, returns",
      "Apex Triggers with handler framework",
      "Led legacy data migration and validation",
    ],
    year: "Project 2",
  },
  {
    title: "Associated Press Portal",
    category: "Experience Cloud",
    description:
      "Implemented a Self-Service Portal using Experience Cloud, enabling users to manage cases and access knowledge articles independently. Developed custom Lightning components for case creation, self-registration, and knowledge management. Managed QA testing across multiple sandbox environments and deployments via change sets.",
    image: "/images/project-3.png",
    tags: ["Experience Cloud", "Self-Service Portal", "LWC", "Knowledge Management", "Change Sets", "QA"],
    highlights: [
      "Self-service portal with Knowledge article access",
      "Custom LWC: case creation, self-registration",
      "Role hierarchy, profiles, and sharing configuration",
      "QA across multiple sandbox environments",
    ],
    year: "Project 3",
  },
  {
    title: "Loangility CRM",
    category: "Sales Cloud",
    description:
      "Designed and developed reports and dashboards for business stakeholder insights. Automated business processes using Apex Triggers and handler classes. Worked extensively with Leads, Opportunities, Accounts, and Cases. Strengthened data security and access control using profiles, permission sets, and sharing configurations.",
    image: "/images/project-1.png",
    tags: ["Sales Cloud", "Reports & Dashboards", "Apex Triggers", "Leads", "Opportunities", "Permission Sets"],
    highlights: [
      "Custom reports and dashboards for stakeholders",
      "Apex Triggers with handler classes",
      "Customized page layouts, fields, and business processes",
      "Profiles, permission sets, and sharing configurations",
    ],
    year: "Project 4",
  },
];

const CERT_DETAILS = [
  { name: "Salesforce Administrator", icon: "⚙️" },
  { name: "Salesforce Platform Developer I", icon: "💻" },
  { name: "Salesforce Sales Cloud Consultant", icon: "📈" },
  { name: "Salesforce Associate AI", icon: "🤖" },
  { name: "Salesforce B2C Commerce Developer", icon: "🛍️" },
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
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
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
            4+ Years of Salesforce Development
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
            Specializing in Apex, Lightning Web Components, and cross-cloud implementations across Sales, Service, and Experience Cloud — turning complex business requirements into scalable Salesforce solutions.
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
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-start">
          <div className="w-full md:w-5/12 sticky top-24">
            <FadeIn>
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                  <img
                    src="/images/profile.png"
                    alt="Salesforce Developer"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                    data-testid="img-profile"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 bg-primary text-primary-foreground rounded-2xl px-5 py-4 shadow-xl">
                  <p className="text-3xl font-bold font-serif leading-none">4+</p>
                  <p className="text-xs font-medium opacity-90 mt-1">Years Salesforce</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="w-full md:w-7/12">
            <FadeIn>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px bg-primary w-10" />
                <span className="text-primary text-xs font-semibold uppercase tracking-widest">Professional Summary</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                Turning business requirements into<br />
                <span className="text-primary">scalable Salesforce solutions.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                Salesforce Developer with 4+ years of experience designing and implementing CRM solutions. Strong hands-on expertise across Sales Cloud, Service Cloud, and Experience Cloud — from lead-to-order automation to self-service portals and REST API integrations with external systems including SAP and Commerce Cloud.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="grid grid-cols-1 gap-3" data-testid="summary-list">
                {SUMMARY_POINTS.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span className="text-sm text-muted-foreground leading-snug">{point}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex gap-4">
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
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  data-testid="link-github"
                >
                  <Github className="w-4 h-4" />
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
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Technologies & Skills</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 max-w-2xl">
              Full-stack Salesforce expertise
            </h2>
            <p className="text-muted-foreground text-lg mb-16 max-w-xl">
              From declarative automation to custom Apex development, REST integrations, and Lightning UI.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((skill, index) => (
              <FadeIn key={skill.title} delay={index * 0.07}>
                <div
                  className="group p-8 bg-card border border-border rounded-2xl hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  data-testid={`skill-card-${index}`}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <skill.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold font-serif mb-3">{skill.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{skill.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] bg-primary/8 text-primary border border-primary/15 rounded-full px-2.5 py-0.5 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Projects</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              CRM implementations that delivered
            </h2>
            <p className="text-background/60 text-lg mb-20 max-w-xl">
              4 enterprise Salesforce projects across Honda, Sapphire Retail, Associated Press, and Loangility.
            </p>
          </FadeIn>

          <div className="space-y-24">
            {PROJECTS.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} gap-12 md:gap-20 items-center group`}
                data-testid={`project-card-${index}`}
              >
                <div className="w-full md:w-1/2 overflow-hidden rounded-2xl">
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

                <div className="w-full md:w-1/2">
                  <FadeIn delay={0.2}>
                    <div className="flex items-center gap-3 text-xs tracking-widest uppercase mb-4 text-background/50 font-medium">
                      <span>{project.year}</span>
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      <span>{project.category}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold mb-5">{project.title}</h3>
                    <p className="text-background/65 text-base mb-7 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="space-y-2 mb-7">
                      {project.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span className="text-sm text-background/70">{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-background/20 text-background/60 text-xs rounded-full px-3"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </FadeIn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-32 px-6 md:px-12 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px bg-primary w-10" />
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">Certifications</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Salesforce Certified
            </h2>
            <p className="text-muted-foreground text-lg mb-16 max-w-xl">
              5 active Salesforce certifications across administration, development, and consulting tracks.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERT_DETAILS.map((cert, index) => (
              <FadeIn key={cert.name} delay={index * 0.08}>
                <div
                  className="flex items-center gap-5 p-6 bg-card border border-border rounded-2xl hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  data-testid={`cert-card-${index}`}
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold font-serif text-foreground leading-snug">{cert.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">Salesforce Certified</p>
                  </div>
                </div>
              </FadeIn>
            ))}
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
                Looking for a Salesforce developer for your next project? I'd love to hear what you're working on and how I can help.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <a
                    href="mailto:hello@example.com"
                    className="text-base hover:text-primary transition-colors"
                    data-testid="link-email-contact"
                  >
                    hello@example.com
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
                    placeholder="e.g. Sales Cloud, LWC Development, Integration"
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
            <a href="mailto:hello@example.com" className="hover:text-primary transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
