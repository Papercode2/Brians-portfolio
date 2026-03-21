import { useEffect, useRef } from 'react';
import { Smartphone, Globe, Server, Cloud, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Highlight {
  icon: React.ElementType;
  label: string;
}

const highlights: Highlight[] = [
  { icon: Smartphone, label: 'Mobile Development' },
  { icon: Globe, label: 'Web Applications' },
  { icon: Server, label: 'REST APIs' },
  { icon: Cloud, label: 'Cloud Architecture' },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-aos]');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-sm font-semibold text-indigo-400 uppercase tracking-wider mb-4">
            About Me
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Passionate About
            <br />
            <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              Building Great Products
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div data-aos="fade-right" className="relative group">
            <div className="relative">
              <img
                src="/images/profile.jpeg"
                alt="Brian Maweu"
                className="w-full max-w-md mx-auto rounded-2xl border border-zinc-800 shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-indigo-600 to-indigo-500 p-6 rounded-xl shadow-xl animate-float">
                <span className="font-display text-4xl font-bold block">5+</span>
                <span className="text-sm opacity-90">
                  Years
                  <br />
                  Experience
                </span>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute top-4 left-4 right-[-20px] bottom-[-20px] border-2 border-indigo-500/30 rounded-2xl -z-10 transition-all duration-500 group-hover:border-indigo-500/50" />
          </div>

          {/* Content Section */}
          <div data-aos="fade-left">
            <h3 className="font-display text-2xl font-bold mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Full Stack Developer @ PrimeTech Solutions
            </h3>
            <div className="space-y-4 text-zinc-400">
              <p>
  I'm a passionate Full Stack Developer and the CEO of{' '}
  <strong className="text-white">PrimeTech Solutions</strong>, where I lead the
  development of scalable web and mobile applications. I also work as a{' '}
  <strong className="text-white">Data Clerk at Brookside Limited</strong>, where
  I’ve gained strong experience in data management and attention to detail.

  I specialize in Kotlin with Jetpack Compose for Android, Laravel for web
  applications, and Django for building robust and scalable APIs.
</p>
              <p>
                My mission is simple:{' '}
                <strong className="text-white">Code that makes a difference.</strong>{' '}
                I believe in writing clean, maintainable code that solves real problems
                and delivers exceptional user experiences.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8 mb-8">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 p-4 bg-zinc-900/50 rounded-xl border border-zinc-800 hover:border-indigo-500/50 transition-all duration-300 hover:transform hover:translate-x-1 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <item.icon className="w-5 h-5 text-indigo-500 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>

            <Button
              onClick={() => scrollToSection('#projects')}
              className="group"
            >
              Learn More About Me
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}