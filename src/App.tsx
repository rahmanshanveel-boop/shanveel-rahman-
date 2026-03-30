/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  ArrowUpRight, 
  ChevronRight, 
  Mail, 
  Linkedin, 
  Instagram, 
  ExternalLink, 
  BarChart3, 
  Target, 
  Search, 
  Zap, 
  Layers,
  Menu,
  X,
  Globe,
  Cpu,
  MousePointer2,
  TrendingUp
} from 'lucide-react';
import { PROJECTS, EXPERIENCES, SERVICES, TOOL_CATEGORIES, PROCESS, TESTIMONIALS } from './constants';
import { Project, Service, Testimonial } from './types';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).tagName === 'BUTTON') {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent pointer-events-none z-[9999] hidden md:block"
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: isHovering ? 2 : 1,
        backgroundColor: isHovering ? 'rgba(255, 0, 0, 0.1)' : 'transparent',
      }}
      transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.5 }}
    />
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 glass border-b border-white/5' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-display text-2xl font-bold tracking-tighter">
          SR<span className="text-accent">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] uppercase tracking-[0.2em] font-bold text-text-muted hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} /> }
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-black p-12 flex flex-col justify-center gap-8 md:hidden"
          >
            <button className="absolute top-8 right-8 text-white" onClick={() => setIsOpen(false)}>
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-4xl font-display font-bold hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1px] w-12 bg-accent" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">
            Digital Marketing Specialist
          </span>
        </div>
        <h1 className="text-6xl md:text-9xl font-bold leading-[0.85] mb-12 text-gradient">
          I Engineer <br />
          <span className="text-white">Growth Engines.</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-muted max-w-2xl mb-16 leading-relaxed font-light">
          Strategic digital marketing for brands that demand measurable ROI. No vanity metrics, just growth.
        </p>
        <div className="flex flex-wrap gap-6 mb-16">
          <a href="#work" className="btn-primary">
            View Selected Work <ArrowUpRight size={16} />
          </a>
          <a href="#contact" className="btn-secondary">
            Hire Me
          </a>
        </div>
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-bg bg-surface flex items-center justify-center text-[8px]">
                {i}
              </div>
            ))}
          </div>
          <span>Trusted by 10+ Global Brands</span>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-24 items-start">
        <div className="sticky top-32">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-8 block">About Me</span>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Results over <br />
            <span className="text-white/20 italic">vanity metrics.</span>
          </h2>
        </div>
        <div className="space-y-12">
          <p className="text-2xl md:text-3xl text-white leading-snug font-light">
            I bridge the gap between creative ideas and commercial success. By combining data-driven SEO with high-performance marketing, I build systems that don't just reach people—they convert them. Simple strategies, engineered for impact.
          </p>
          
          <div className="pt-12 border-t border-white/10">
            <div className="grid grid-cols-2 gap-12">
              <div>
                <div className="text-5xl font-bold mb-2">3x</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-text-muted">Avg. ROAS</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">+120%</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-text-muted">Traffic Growth</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">+40%</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-text-muted">Conversion Increase</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">10+</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-text-muted">Global Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ServiceBlockProps {
  service: Service;
  index: number;
}

const ServiceBlock: React.FC<ServiceBlockProps> = ({ service, index }) => (
  <div className="group py-12 border-b border-white/10 flex flex-col md:flex-row md:items-start justify-between gap-8 hover:bg-white/[0.02] transition-colors px-4">
    <div className="flex items-start gap-8">
      <span className="text-text-muted font-display text-sm mt-2">0{index + 1}</span>
      <div>
        <h3 className="text-3xl font-bold group-hover:text-accent transition-colors">{service.title}</h3>
        <p className="text-text-muted mt-2 max-w-md">{service.description}</p>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-12 md:text-right">
      <div>
        <span className="text-[10px] uppercase tracking-widest font-bold text-accent block mb-2">Outcome</span>
        <p className="text-white font-medium text-sm">{service.outcome}</p>
      </div>
      <div>
        <span className="text-[10px] uppercase tracking-widest font-bold text-white/20 block mb-2">Business Impact</span>
        <p className="text-text-muted text-sm">{service.impact}</p>
      </div>
    </div>
  </div>
);

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group relative">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface mb-8">
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-12">
          <button 
            onClick={() => setIsExpanded(true)}
            className="btn-primary"
          >
            View Case Study
          </button>
        </div>
      </div>
      
      <div className="space-y-2">
        <span className="text-[10px] uppercase tracking-widest font-bold text-accent">{project.category}</span>
        <h3 className="text-2xl font-bold">{project.name}</h3>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-surface w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-none p-12 md:p-20 relative border border-white/5"
            >
              <button 
                onClick={() => setIsExpanded(false)}
                className="absolute top-12 right-12 text-white/50 hover:text-white transition-colors"
              >
                <X size={40} strokeWidth={1} />
              </button>

              <div className="grid md:grid-cols-2 gap-20">
                <div>
                  <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-8 block">{project.category}</span>
                  <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-12">{project.name}</h2>
                  
                  <div className="space-y-12">
                    <div>
                      <h4 className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-4">The Problem</h4>
                      <p className="text-xl leading-relaxed font-light">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-4">The Strategy</h4>
                      <p className="text-xl leading-relaxed font-light">{project.strategy}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-4">Execution</h4>
                      <p className="text-xl leading-relaxed font-light">{project.execution}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-16">
                  <div className="p-12 bg-white/[0.02] border border-white/5">
                    <h4 className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-8">Results</h4>
                    <div className="space-y-8">
                      {project.results.map((res, i) => (
                        <div key={i}>
                          <div className="text-5xl font-bold text-white mb-1">{res.value}</div>
                          <div className="text-[10px] text-text-muted uppercase tracking-widest font-bold">{res.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-6">Stack</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.tools.map((tool, i) => (
                        <span key={i} className="px-4 py-2 bg-white/5 text-[10px] uppercase tracking-widest font-bold border border-white/5">{tool}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative bg-bg overflow-x-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[10001]"
        style={{ scaleX }}
      />
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        
        <About />

        <section className="py-20 border-y border-white/5 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center gap-24 px-12">
                {['TECHSCALE', 'AURA FASHION', 'GROWTHFLOW', 'FINEDGE', 'VANTAGE', 'LUMINA', 'NEXUS'].map((brand) => (
                  <span key={brand} className="text-4xl md:text-6xl font-bold text-white/5 font-display tracking-tighter">
                    {brand}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-20">
            <div className="lg:col-span-1">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-8 block">Tools & Stack</span>
              <h2 className="text-4xl md:text-6xl font-bold">The Growth <br />Toolkit</h2>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-12">
              {TOOL_CATEGORIES.map((cat, i) => (
                <div key={i} className="space-y-6">
                  <h4 className="text-[10px] uppercase tracking-widest font-bold text-accent">{cat.category}</h4>
                  <ul className="space-y-3">
                    {cat.tools.map((tool, j) => (
                      <li key={j} className="text-text-muted hover:text-white transition-colors cursor-default text-sm">{tool}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="services" className="py-32 px-6 max-w-7xl mx-auto border-t border-white/10">
          <div className="mb-20">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-8 block">Services</span>
            <h2 className="text-4xl md:text-6xl font-bold">Strategic Expertise</h2>
          </div>
          <div className="border-t border-white/10">
            {SERVICES.map((service, i) => (
              <ServiceBlock key={i} service={service} index={i} />
            ))}
          </div>
        </section>

        <section id="process" className="py-32 px-6 max-w-7xl mx-auto border-t border-white/10">
          <div className="grid lg:grid-cols-4 gap-12">
            {PROCESS.map((p, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="space-y-6"
              >
                <div className="text-accent font-display text-4xl font-bold opacity-20">{p.step}</div>
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <p className="text-text-muted leading-relaxed text-sm">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-32 px-6 max-w-7xl mx-auto border-t border-white/10">
          <div className="grid md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-12 bg-surface border border-white/5 relative">
                <div className="text-accent text-6xl font-serif absolute top-8 left-8 opacity-10">"</div>
                <p className="text-lg text-white mb-12 italic leading-relaxed relative z-10">
                  {t.quote}
                </p>
                <div>
                  <div className="font-bold text-white">{t.author}</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-text-muted">{t.position}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="py-32 px-6 max-w-7xl mx-auto border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-8 block">Selected Work</span>
              <h2 className="text-4xl md:text-6xl font-bold">Case Studies</h2>
            </div>
            <p className="text-text-muted max-w-md text-lg font-light">
              A selection of high-performance campaigns engineered for maximum ROI and market dominance.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section id="experience" className="py-32 px-6 max-w-7xl mx-auto border-t border-white/10">
          <div className="grid md:grid-cols-3 gap-20">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent mb-8 block">Experience</span>
              <h2 className="text-4xl md:text-6xl font-bold">Track Record</h2>
            </div>
            <div className="md:col-span-2 space-y-20">
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="relative pl-12 border-l border-white/10">
                  <div className="absolute top-0 left-[-5px] w-[10px] h-[10px] bg-accent" />
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-text-muted">{exp.period}</span>
                  </div>
                  <h4 className="text-accent font-bold text-sm mb-6 uppercase tracking-widest">{exp.company}</h4>
                  <ul className="space-y-4">
                    {exp.achievements.map((ach, j) => (
                      <li key={j} className="text-text-muted flex gap-4 text-sm leading-relaxed">
                        <span className="text-accent mt-1.5">•</span>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-32 px-6 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-surface p-12 md:p-32 text-center border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-accent" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-12 block">Final Call</span>
            <h2 className="text-5xl md:text-9xl font-bold mb-16 tracking-tighter leading-none">
              Let's build something <br />
              <span className="text-white/20 italic">that actually converts.</span>
            </h2>
            <p className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto mb-20 font-light">
              Ready to scale your brand with data-driven strategies? Let’s connect and engineer your next success story.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <a href="mailto:rahman@shanveel.com" className="btn-primary text-lg px-12 py-6">
                Start a Project <ArrowUpRight size={20} />
              </a>
              <div className="flex gap-6">
                <a href="#" className="p-4 border border-white/10 hover:border-accent transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="p-4 border border-white/10 hover:border-accent transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="py-12 px-6 max-w-7xl mx-auto border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-widest font-bold text-text-muted">
        <div>© 2026 Shanveel Rahman. All rights reserved.</div>
        <div className="flex gap-12">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
        <div className="flex items-center gap-2">
          Engineered for <span className="text-accent">Performance</span>.
        </div>
      </footer>
    </div>
  );
}
