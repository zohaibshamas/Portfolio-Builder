import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { ArrowRight, Github, Twitter, Linkedin, Mail, Code, Layout, Database, Sparkles, MapPin, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#skills" },
  { name: "Selected Work", href: "#projects" },
  { name: "Journey", href: "#experience" },
];

const PROJECTS = [
  {
    title: "Ochre Studio",
    category: "Web Application",
    description: "A digital sanctuary for creative professionals to showcase their portfolios. Built with an uncompromising focus on typography and subtle interactions.",
    image: "/images/project-1.png",
    link: "#",
    year: "2023"
  },
  {
    title: "Thread & Form",
    category: "E-Commerce",
    description: "An elegant, editorial shopping experience for a bespoke fashion brand. Featuring fluid page transitions and an immersive editorial layout.",
    image: "/images/project-2.png",
    link: "#",
    year: "2024"
  },
  {
    title: "Metrika",
    category: "Dashboard",
    description: "Financial intelligence simplified. A data visualization platform that turns complex datasets into beautiful, comprehensible insights.",
    image: "/images/project-3.png",
    link: "#",
    year: "2024"
  }
];

const EXPERIENCE = [
  {
    role: "Senior Frontend Engineer",
    company: "Vanguard Design",
    period: "2022 — Present",
    description: "Leading the frontend architecture for high-profile client projects. Establishing internal design systems and championing accessibility standards.",
  },
  {
    role: "Creative Developer",
    company: "Studio Blanc",
    period: "2019 — 2022",
    description: "Bridged the gap between design and engineering. Built award-winning promotional sites with complex WebGL experiences.",
  },
  {
    role: "Frontend Developer",
    company: "Nexus Interactive",
    period: "2017 — 2019",
    description: "Developed responsive web applications for enterprise clients. Focused on performance optimization and modern JavaScript frameworks.",
  }
];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const y = useTransform(smoothProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.replace('#', ''));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-background min-h-screen selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 md:py-8 mix-blend-difference text-white pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
          <a href="#" className="font-serif text-xl tracking-tight hover:opacity-70 transition-opacity">A.V.</a>
          <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide uppercase">
            {NAV_LINKS.map((link) => (
              <button 
                key={link.name} 
                onClick={() => scrollTo(link.href)}
                className="hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>
          <Button variant="outline" className="md:hidden border-white text-white hover:bg-white hover:text-black rounded-none">
            Menu
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        <motion.div style={{ y, opacity }} className="relative z-10 max-w-4xl mx-auto text-center mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="inline-block py-1 px-3 rounded-full border border-primary/30 text-primary text-xs font-medium uppercase tracking-widest mb-6">
              Available for new opportunities
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground leading-[1.1] tracking-tight mb-8"
          >
            Crafting digital <br className="hidden md:block"/> experiences with <span className="italic text-primary">intention.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light"
          >
            I am Adrian Vance, a design engineer bridging the gap between aesthetic vision and technical execution.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 flex items-center justify-center gap-6"
          >
            <Button onClick={() => scrollTo('#projects')} className="rounded-none px-8 py-6 text-sm uppercase tracking-widest bg-foreground hover:bg-primary transition-colors duration-500">
              View Work
            </Button>
            <Button onClick={() => scrollTo('#contact')} variant="outline" className="rounded-none px-8 py-6 text-sm uppercase tracking-widest border-border hover:bg-secondary">
              Let's Talk
            </Button>
          </motion.div>
        </motion.div>

        {/* Decorative background elements */}
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] rounded-full bg-primary/5 blur-[100px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-accent blur-[120px]" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 md:px-12 bg-secondary/30 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-center">
          <div className="w-full md:w-5/12 relative">
            <FadeIn>
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src="/images/profile.png" 
                  alt="Portrait of the designer in a warm workspace" 
                  className="object-cover w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10"></div>
              </div>
            </FadeIn>
            <motion.div 
              initial={{ rotate: -90, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 md:-right-12 w-32 h-32 md:w-40 md:h-40 bg-accent rounded-full flex items-center justify-center p-4 text-center z-10"
            >
              <p className="font-serif italic text-sm md:text-base text-foreground leading-tight">Design &<br/>Engineering</p>
            </motion.div>
          </div>
          
          <div className="w-full md:w-7/12">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-8">
                I believe software should feel <span className="italic text-primary">crafted</span>, not assembled.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
                <p>
                  With over 7 years of experience, I've cultivated a practice that sits perfectly at the intersection of design and engineering. I don't just write code; I translate feeling, brand, and intent into interactive mediums.
                </p>
                <p>
                  My work is rooted in typographic discipline, meaningful motion, and rigorous attention to detail. Whether it's a promotional site or a complex web application, I approach every project with the same devotion to quality.
                </p>
              </div>
              
              <div className="mt-12 flex items-center gap-6">
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 md:px-12 border-t border-border/40">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-center gap-4 mb-16">
              <div className="h-px bg-primary w-12"></div>
              <span className="uppercase tracking-widest text-xs font-semibold text-primary">Expertise</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif mb-20 max-w-2xl">
              Capabilities across the digital spectrum
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <FadeIn delay={0.1}>
              <div className="group">
                <div className="w-14 h-14 bg-secondary flex items-center justify-center mb-8 rounded-none group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <Layout className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif mb-4">Frontend Development</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Building robust, performant applications using React, Next.js, and modern CSS architectures. Focus on accessibility and fluid interactions.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="group">
                <div className="w-14 h-14 bg-secondary flex items-center justify-center mb-8 rounded-none group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif mb-4">Creative Coding</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Bringing interfaces to life with WebGL, Framer Motion, and GSAP. Creating memorable digital experiences that leave an impression.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="group">
                <div className="w-14 h-14 bg-secondary flex items-center justify-center mb-8 rounded-none group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif mb-4">Design Engineering</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Bridging design and code. Implementing rigorous design systems, typography scaling, and translating static designs into living products.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 md:px-12 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex justify-between items-end mb-20">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px bg-primary w-12"></div>
                  <span className="uppercase tracking-widest text-xs font-semibold text-primary">Selected Work</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif">Recent Projects</h2>
              </div>
              <Button variant="link" className="hidden md:flex text-background hover:text-primary items-center gap-2 pr-0">
                View Archive <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </FadeIn>

          <div className="space-y-32">
            {PROJECTS.map((project, index) => (
              <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center group`}>
                <div className="w-full md:w-7/12 overflow-hidden bg-background/5 p-4 md:p-8">
                  <FadeIn delay={0.1}>
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                      />
                      <div className="absolute inset-0 bg-foreground/10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none"></div>
                    </div>
                  </FadeIn>
                </div>
                
                <div className="w-full md:w-5/12">
                  <FadeIn delay={0.2}>
                    <div className="flex items-center gap-4 text-xs tracking-widest uppercase mb-6 text-muted font-medium">
                      <span>{project.year}</span>
                      <span className="w-1 h-1 rounded-full bg-primary"></span>
                      <span>{project.category}</span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-serif mb-6">{project.title}</h3>
                    <p className="text-muted-foreground font-light text-lg mb-10 leading-relaxed max-w-md">
                      {project.description}
                    </p>
                    <a href={project.link} className="inline-flex items-center gap-3 text-sm tracking-widest uppercase font-semibold group-hover:text-primary transition-colors">
                      View Project <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                    </a>
                  </FadeIn>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 md:hidden flex justify-center">
            <Button variant="link" className="text-background hover:text-primary items-center gap-2">
              View Archive <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 md:px-12 bg-background relative overflow-hidden">
        {/* Subtle background text */}
        <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.03] text-[15vw] font-serif leading-none whitespace-nowrap text-foreground">
          Experience History
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <FadeIn>
            <div className="flex items-center gap-4 mb-16">
              <div className="h-px bg-primary w-12"></div>
              <span className="uppercase tracking-widest text-xs font-semibold text-primary">Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-20">Career Timeline</h2>
          </FadeIn>

          <div className="space-y-16">
            {EXPERIENCE.map((exp, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="relative pl-8 md:pl-0">
                  {/* Timeline line */}
                  <div className="absolute left-[11px] top-2 bottom-[-4rem] w-px bg-border/60 md:hidden"></div>
                  
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    <div className="md:w-1/3 flex md:flex-col md:text-right gap-4 md:gap-1 items-start md:items-end">
                      <div className="absolute left-0 top-2 w-6 h-6 rounded-full border-4 border-background bg-primary md:hidden z-10"></div>
                      <h4 className="text-xl font-serif">{exp.company}</h4>
                      <span className="text-sm tracking-widest text-muted-foreground uppercase mt-1 md:mt-0">{exp.period}</span>
                    </div>
                    
                    <div className="hidden md:flex flex-col items-center relative">
                      <div className="w-px h-full bg-border/60 absolute"></div>
                      <div className="w-4 h-4 rounded-full border-2 border-primary bg-background z-10 mt-1.5"></div>
                    </div>
                    
                    <div className="md:w-1/2 pb-8 md:pb-0">
                      <h3 className="text-xl font-medium mb-4">{exp.role}</h3>
                      <p className="text-muted-foreground font-light leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 md:px-12 bg-accent/30 border-t border-border/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-1/2">
            <FadeIn>
              <h2 className="text-5xl md:text-7xl font-serif mb-8">Let's build<br/>something <span className="italic text-primary">beautiful.</span></h2>
              <p className="text-xl text-muted-foreground font-light mb-12 max-w-md">
                Currently accepting new projects and open to exciting opportunities. Reach out if you want to collaborate.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:hello@example.com" className="text-lg hover:text-primary transition-colors">adrian.vance@example.com</a>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-lg text-muted-foreground">San Francisco, CA (Remote)</span>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <div className="w-full md:w-1/2">
            <FadeIn delay={0.2}>
              <form className="space-y-6 bg-background p-8 md:p-10 shadow-xl shadow-black/5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm uppercase tracking-widest font-medium">Name</label>
                    <Input id="name" placeholder="John Doe" className="rounded-none border-b-2 border-t-0 border-x-0 border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary placeholder:text-muted-foreground/50 h-12" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm uppercase tracking-widest font-medium">Email</label>
                    <Input id="email" type="email" placeholder="john@example.com" className="rounded-none border-b-2 border-t-0 border-x-0 border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary placeholder:text-muted-foreground/50 h-12" />
                  </div>
                </div>
                <div className="space-y-2 pt-4">
                  <label htmlFor="message" className="text-sm uppercase tracking-widest font-medium">Project Details</label>
                  <Textarea id="message" placeholder="Tell me about your project..." className="rounded-none border-b-2 border-t-0 border-x-0 border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary placeholder:text-muted-foreground/50 min-h-[120px] resize-none" />
                </div>
                <div className="pt-6">
                  <Button type="button" className="w-full rounded-none h-14 text-sm uppercase tracking-widest bg-foreground hover:bg-primary transition-colors duration-300">
                    Send Message
                  </Button>
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 bg-foreground text-background border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-2xl tracking-tight">A.V.</div>
          <p className="text-sm text-muted font-light tracking-wide">
            © {new Date().getFullYear()} Adrian Vance. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm uppercase tracking-widest font-medium">
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">Github</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
