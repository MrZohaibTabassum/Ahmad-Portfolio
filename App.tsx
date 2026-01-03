
import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ArrowRight, Bot, BarChart3, PenTool, Target, 
  Linkedin, Mail, Github, ExternalLink, Play, CheckCircle2, 
  ChevronRight, Award, BookOpen, MessageSquare, Briefcase
} from 'lucide-react';
import { NAV_ITEMS, SKILLS, PORTFOLIO, TESTIMONIALS } from './constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll Spying Logic
      const sections = ['home', 'about', 'expertise', 'portfolio', 'resources', 'testimonials'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Navbar height offset
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-zinc-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 bg-lime-400 flex items-center justify-center rounded-lg group-hover:rotate-12 transition-transform">
            <Bot className="w-5 h-5 text-black" />
          </div>
          <span className="text-xl font-bold tracking-tight">SAIM<span className="text-lime-400">.</span>AHMAD</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a 
                key={item.label} 
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium transition-all duration-300 relative group ${isActive ? 'text-lime-400' : 'text-zinc-400 hover:text-white'}`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-lime-400 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            );
          })}
          <a href="mailto:saimahmadpervaiz@gmail.com" className="px-5 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-lime-400 transition-colors">
            Let's Chat
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-6 py-8 absolute top-20 left-0 right-0 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={(e) => handleNavClick(e, item.href)} 
              className={`text-lg font-medium transition-colors ${activeSection === item.href.replace('#', '') ? 'text-lime-400' : 'text-zinc-300'}`}
            >
              {item.label}
            </a>
          ))}
          <a href="mailto:saimahmadpervaiz@gmail.com" onClick={() => setMobileMenuOpen(false)} className="px-6 py-3 bg-lime-400 text-black text-center font-bold rounded-xl">
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center scroll-mt-20">
    <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 text-xs font-medium mb-8 animate-in fade-in slide-in-from-bottom-2 duration-700">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400"></span>
      </span>
      BS Digital Marketing at UCP
    </div>
    <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-1000">
      Grow your business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-emerald-400">latest digital strategy</span>
    </h1>
    <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 font-light leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
      Helping B2B SaaS & E-commerce brands grow through strategic content systems and AI-powered automation workflows.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
      <a 
        href="#portfolio" 
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById('portfolio');
          if(el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
        }}
        className="px-8 py-4 bg-lime-400 text-black font-bold rounded-full hover:shadow-[0_0_20px_rgba(163,230,53,0.4)] transition-all flex items-center gap-2 group"
      >
        Explore My Work
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </a>
      <a 
        href="#expertise" 
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById('expertise');
          if(el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
        }}
        className="px-8 py-4 bg-zinc-900 text-white font-bold rounded-full border border-zinc-800 hover:bg-zinc-800 transition-all"
      >
        My Expertise
      </a>
    </div>

    {/* Featured logos */}
    <div className="mt-24 w-full border-t border-zinc-900 pt-12 flex flex-col items-center">
      <span className="text-zinc-600 text-[10px] uppercase tracking-[0.2em] font-bold mb-8">Trusted by visionary teams</span>
      <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale contrast-125">
        <div className="text-2xl font-black italic">TECHFLOW</div>
        <div className="text-2xl font-black italic">AURORA</div>
        <div className="text-2xl font-black italic">NEXUS</div>
        <div className="text-2xl font-black italic">QUANTUM</div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-24">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div className="aspect-square bg-zinc-900 rounded-[3rem] overflow-hidden border border-zinc-800 relative group">
        <img src="https://picsum.photos/seed/saim-bio/800/800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Saim Ahmad" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-10 left-10">
          <p className="text-lime-400 font-bold tracking-widest uppercase text-xs mb-2">Based in Lahore</p>
          <h3 className="text-3xl font-bold">Saim Ahmad</h3>
        </div>
      </div>
      <div>
        <h2 className="text-4xl md:text-6xl font-bold mb-8">Creative Marketer <br/>& AI Architect<span className="text-lime-400">.</span></h2>
        <div className="space-y-6 text-zinc-400 text-lg font-light leading-relaxed">
          <p>
            Currently pursuing a <span className="text-white font-bold italic">BS in Digital Marketing at UCP</span>, I bridge the gap between human storytelling and autonomous growth engines.
          </p>
          <p>
            I specialize in building complex n8n workflows that handle everything from lead scoring to automated content distribution, allowing brands to scale without increasing headcount.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-12">
          <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
            <Award className="text-lime-400 w-8 h-8 mb-4" />
            <h3 className="text-white font-bold mb-1">UCP Scholar</h3>
            <p className="text-zinc-500 text-sm">Deepening digital marketing foundations.</p>
          </div>
          <div className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
            <Briefcase className="text-lime-400 w-8 h-8 mb-4" />
            <h3 className="text-white font-bold mb-1">Consultancy</h3>
            <p className="text-zinc-500 text-sm">Helping SaaS startups scale ROI.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Expertise = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot': return <Bot className="w-8 h-8" />;
      case 'BarChart3': return <BarChart3 className="w-8 h-8" />;
      case 'PenTool': return <PenTool className="w-8 h-8" />;
      case 'Target': return <Target className="w-8 h-8" />;
      default: return <Target className="w-8 h-8" />;
    }
  };

  return (
    <section id="expertise" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Core Expertise</h2>
          <p className="text-zinc-400 text-xl max-w-md">The perfect blend of marketing psychology and tech automation.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((skill) => (
          <div key={skill.name} className="card-blur p-10 rounded-[2.5rem] hover:border-lime-400/30 transition-all group">
            <div className="mb-8 w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center border border-zinc-800 text-lime-400 group-hover:scale-110 group-hover:bg-lime-400 group-hover:text-black transition-all duration-500">
              {getIcon(skill.icon)}
            </div>
            <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
            <p className="text-zinc-400 text-base leading-relaxed mb-6">{skill.description}</p>
            <div className="h-1 w-12 bg-zinc-800 group-hover:w-full group-hover:bg-lime-400 transition-all duration-500 rounded-full"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Portfolio = () => (
  <section id="portfolio" className="py-24 px-6 bg-zinc-950 scroll-mt-24">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Selected Case Studies</h2>
        <p className="text-zinc-400 text-xl max-w-2xl">Proven results across automation and strategy-led projects.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PORTFOLIO.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 border border-zinc-800">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
              <div className="absolute top-6 left-6 bg-lime-400 text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                {item.category}
              </div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex gap-2 mb-3">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[10px] text-white/60 bg-white/10 backdrop-blur-md px-2 py-0.5 rounded border border-white/10 uppercase font-medium">{tag}</span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold text-white group-hover:text-lime-400 transition-colors mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm line-clamp-2">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Resources = () => (
  <section id="resources" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-24">
    <div className="card-blur rounded-[4rem] p-10 md:p-20 border-lime-400/20 bg-gradient-to-br from-zinc-900 to-black overflow-hidden relative">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-lime-400/10 rounded-full blur-[120px]"></div>
      <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-lime-400 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">Growth Vault</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Download My Free <br/>AI Marketing Kit</h2>
          <p className="text-zinc-400 text-xl mb-10 font-light leading-relaxed">
            Stop doing manual work. Get the exact n8n blueprints and storytelling frameworks I use for B2B SaaS growth.
          </p>
          <ul className="space-y-6 mb-12">
            {[
              { icon: <Bot size={20}/>, text: 'n8n Lead Gen Blueprint (worth $199)' },
              { icon: <BookOpen size={20}/>, text: 'Content-to-Conversion Cheat Sheet' },
              { icon: <Target size={20}/>, text: 'The B2B Storytelling Framework' }
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-zinc-300">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-lime-400 border border-zinc-700">
                  {item.icon}
                </div>
                <span className="font-medium">{item.text}</span>
              </li>
            ))}
          </ul>
          <button className="px-10 py-5 bg-white text-black font-extrabold rounded-full hover:bg-lime-400 transition-all flex items-center gap-3 text-lg">
            Access The Vault <ArrowRight className="w-6 h-6" />
          </button>
        </div>
        <div className="relative group">
          <div className="w-full aspect-[4/5] bg-zinc-950 border border-zinc-800 rounded-[2.5rem] flex flex-col items-center justify-center relative shadow-2xl overflow-hidden">
            <img src="https://picsum.photos/seed/vault/600/750" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] flex items-center justify-center opacity-100 group-hover:opacity-40 transition-opacity">
               <div className="w-24 h-24 bg-lime-400 rounded-full flex items-center justify-center text-black shadow-[0_0_40px_rgba(163,230,53,0.5)]">
                  <Play className="w-10 h-10 fill-black" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="testimonials" className="py-24 px-6 bg-zinc-950 scroll-mt-24">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Partner Feedback</h2>
        <p className="text-zinc-400 text-xl max-w-2xl">Collaborating with visionary founders to build autonomous growth systems.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="card-blur p-10 rounded-[2.5rem] border-zinc-800 hover:border-lime-400/20 transition-all flex flex-col">
             <MessageSquare className="text-lime-400/10 w-12 h-12 mb-8" />
             <p className="text-zinc-300 text-lg italic font-light leading-relaxed mb-10 flex-grow">"{t.content}"</p>
             <div className="flex items-center gap-5 mt-auto border-t border-zinc-800 pt-8">
                <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full border border-zinc-800 object-cover" />
                <div>
                   <h4 className="font-bold text-white text-lg">{t.name}</h4>
                   <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">{t.role} @ {t.company}</p>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-24 px-6 border-t border-zinc-900 bg-black">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="col-span-1 md:col-span-2">
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-12 bg-lime-400 flex items-center justify-center rounded-2xl">
              <Bot className="w-7 h-7 text-black" />
            </div>
            <span className="text-3xl font-black tracking-tight uppercase">Saim Ahmad</span>
          </a>
          <p className="text-zinc-400 max-w-md mb-10 text-xl font-light leading-relaxed">
            Transforming brands with data-backed storytelling and next-gen AI automation workflows. Let's make your brand future-ready.
          </p>
          <div className="flex gap-5">
            {[
              { icon: <Linkedin className="w-6 h-6" />, href: "https://linkedin.com" },
              { icon: <Mail className="w-6 h-6" />, href: "mailto:saimahmadpervaiz@gmail.com" },
              { icon: <Github className="w-6 h-6" />, href: "https://github.com" }
            ].map((social, i) => (
              <a key={i} href={social.href} className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center hover:bg-lime-400 hover:text-black transition-all group">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Explore</h4>
          <ul className="space-y-5 text-zinc-500 font-medium">
            {NAV_ITEMS.map(item => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(item.href.replace('#', ''));
                    if(el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
                  }}
                  className="hover:text-lime-400 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Let's Connect</h4>
          <p className="text-zinc-500 mb-2 font-medium">Lahore, Punjab, Pakistan</p>
          <a href="mailto:saimahmadpervaiz@gmail.com" className="text-lime-400 font-black hover:underline text-lg">saimahmadpervaiz@gmail.com</a>
          <div className="mt-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-lime-400/10 border border-lime-400/20 rounded-full text-lime-400 text-[10px] font-bold uppercase">
              Open for Collaborations
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-zinc-600 text-xs font-bold uppercase tracking-[0.2em]">
        <p>© 2025 Saim Ahmad. Engineered for Growth.</p>
        <div className="flex gap-12">
          <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Work</a>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-lime-400 selection:text-black scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Portfolio />
      <Resources />
      <Testimonials />
      <Footer />
      
      {/* Sticky Bottom CTA */}
      <a 
        href="mailto:saimahmadpervaiz@gmail.com"
        className="fixed bottom-8 right-8 bg-lime-400 text-black px-8 py-4 rounded-full font-black shadow-[0_10px_40px_rgba(163,230,53,0.3)] green-glow flex items-center gap-3 group z-40 hover:scale-105 transition-all"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-30"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
        </span>
        Scale Your Brand
      </a>
    </div>
  );
};

export default App;
