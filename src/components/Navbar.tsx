import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Home, User, FolderGit2, Code2, Mail, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  scrolled: boolean;
}

const navLinks = [
  { name: 'Home', href: '#home', number: '01', icon: Home },
  { name: 'About', href: '#about', number: '02', icon: User },
  { name: 'Projects', href: '#projects', number: '03', icon: FolderGit2 },
  { name: 'Skills', href: '#skills', number: '04', icon: Code2 },
  { name: 'Contact', href: '#contact', number: '05', icon: Mail },
];

export function Navbar({ scrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [, setIsHovered] = useState(false);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0f0f1a]/95 backdrop-blur-xl py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-b border-white/5'
            : 'bg-transparent py-5'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with Enhanced Animation */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="group relative flex items-center gap-2 font-display font-bold text-2xl"
            >
              {/* Animated Background Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-cyan-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <span className="relative bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                BM
              </span>
              <span className="relative w-2 h-2 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full animate-pulse shadow-lg shadow-indigo-500/50" />
              
              {/* Floating Particles Effect */}
              <div className="absolute -top-1 -right-1">
                <Sparkles className="w-3 h-3 text-indigo-500 animate-pulse" />
              </div>
            </a>

            {/* Desktop Navigation with Enhanced Styling */}
            <div className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                const Icon = link.icon;
                
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={`group relative px-4 py-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'text-white'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {/* Active Indicator Background */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-cyan-400/20 rounded-full blur-sm" />
                    )}
                    
                    <div className="relative flex items-center gap-2">
                      {/* Icon with Animation */}
                      <Icon className={`w-4 h-4 transition-all duration-300 ${
                        isActive ? 'text-indigo-500' : 'text-zinc-500 group-hover:text-indigo-400'
                      }`} />
                      
                      {/* Number */}
                      <span className={`font-mono text-xs transition-all duration-300 ${
                        isActive ? 'text-indigo-500' : 'text-zinc-600 group-hover:text-indigo-400'
                      }`}>
                        {link.number}
                      </span>
                      
                      {/* Name */}
                      <span className="text-sm font-medium">{link.name}</span>
                      
                      {/* Hover Underline Animation */}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
                    </div>
                    
                    {/* Tooltip on Hover */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-zinc-900 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap border border-indigo-500/30">
                        Go to {link.name}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* CTA Button with Enhanced Design */}
            <div className="hidden md:block">
              <Button
                onClick={() => scrollToSection('#contact')}
                className="group relative bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 overflow-hidden"
              >
                {/* Shine Effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                
                <span className="relative flex items-center gap-2">
                  Let's Talk
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900/50 backdrop-blur-sm border border-white/10 hover:border-indigo-500/50 transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-400/20 opacity-0 hover:opacity-100 transition-opacity" />
              {mobileMenuOpen ? (
                <X className="relative w-5 h-5 text-white" />
              ) : (
                <Menu className="relative w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Menu with Animation */}
      <div
        className={`fixed inset-0 z-40 bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a] transition-all duration-500 md:hidden ${
          mobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Background Decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="relative flex flex-col items-center justify-center h-full gap-8 px-4">
          {navLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="group relative w-full max-w-xs transform transition-all duration-500 hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: mobileMenuOpen ? 'slideUpFade 0.5s ease-out forwards' : 'none',
                  opacity: 0,
                  transform: 'translateY(20px)',
                }}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-cyan-400/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex items-center gap-6 p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-white/10 group-hover:border-indigo-500/50 transition-all duration-300">
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-indigo-500" />
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-sm text-indigo-500">{link.number}</span>
                      <span className="text-xs text-zinc-500">•</span>
                      <span className="text-xs text-zinc-500 uppercase tracking-wider">
                        Section
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                      {link.name}
                    </h3>
                  </div>
                  
                  {/* Arrow Icon */}
                  <ChevronRight className="w-5 h-5 text-zinc-500 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </a>
            );
          })}
          
          {/* Mobile CTA Button */}
          <Button
            onClick={() => scrollToSection('#contact')}
            className="mt-8 w-full max-w-xs bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white shadow-lg shadow-indigo-500/25 group"
          >
            <span>Let's Start a Project</span>
            <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}