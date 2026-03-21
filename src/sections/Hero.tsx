import { useEffect, useState } from 'react';
import { ArrowRight, Github, Linkedin, Twitter, Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const roles = [
  'Full Stack Developer',
  'Mobile Developer',
  'Kotlin Enthusiast',
  'Laravel Expert',
  'Problem Solver',
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentRole(role.substring(0, currentRole.length + 1));
          if (currentRole === role) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setCurrentRole(role.substring(0, currentRole.length - 1));
          if (currentRole === '') {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentRole, isDeleting, roleIndex]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // Track download event (optional)
    console.log('Resume downloaded from Hero section');
    
    // Add your Google Analytics or custom tracking here
    // gtag('event', 'download_resume', { 'location': 'hero_section' });
    
    // Open resume in new tab
    window.open('/resume/brian-maweu-resume.pdf', '_blank');
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      {/* Background Effects (same as before) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-[-150px] left-[-100px] w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-[100px] animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[100px] animate-pulse" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div
              className="flex items-center gap-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400" />
              <span className="text-zinc-400 uppercase tracking-widest text-sm">
                Hello, I&apos;m
              </span>
            </div>

            <h1
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="block">Brian</span>
              <span className="block bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                Maweu
              </span>
            </h1>

            <div
              className="flex items-center gap-3 text-xl"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span className="text-zinc-400">I&apos;m a</span>
              <span className="font-display font-semibold text-amber-500">
                {currentRole}
                <span className="animate-blink">|</span>
              </span>
            </div>

            <p
              className="text-zinc-400 text-lg max-w-lg"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              A Full Stack Developer at <strong className="text-white">PrimeTech Solutions Ltd</strong> &{' '}
              <strong className="text-white">Brookside</strong>{' '}
              specializing in building scalable web & mobile applications.
              Passionate about creating code that makes a difference.
            </p>

            {/* Enhanced Button Group with Resume Button */}
            <div
              className="flex flex-wrap gap-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              {/* Primary CTA - View Projects */}
              <Button
                size="lg"
                onClick={() => scrollToSection('#projects')}
                className="bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white group shadow-lg shadow-indigo-500/25"
              >
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              {/* Secondary CTA - Get In Touch */}
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#contact')}
                className="border-zinc-700 hover:border-indigo-500 hover:bg-indigo-500/10"
              >
                Get In Touch
              </Button>
              
              {/* Download Resume Button - NEW */}
              <Button
                size="lg"
                variant="outline"
                onClick={handleDownloadResume}
                className="border-indigo-500/30 hover:border-indigo-500 hover:bg-indigo-500/10 group relative overflow-hidden"
              >
                <Download className="mr-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-indigo-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Button>
            </div>

            {/* Optional: Resume Stats Badge */}
            <div
              className="flex items-center gap-3 text-sm text-zinc-500"
              data-aos="fade-up"
              data-aos-delay="550"
            >
              <FileText className="w-4 h-4 text-indigo-500" />
              <span>PDF Format • Updated March 2026 • 2 Pages</span>
            </div>

            {/* Social Links */}
            <div
              className="flex items-center gap-4 pt-4"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <a
                href="https://github.com/Papercode2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-indigo-600 hover:text-white transition-all group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-indigo-600 hover:text-white transition-all group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-indigo-600 hover:text-white transition-all group"
              >
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Stats */}
            <div
              className="flex gap-8 pt-6"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="group cursor-pointer" onClick={handleDownloadResume}>
                <span className="font-display text-3xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                  5+
                </span>
                <span className="block text-zinc-500 text-sm group-hover:text-indigo-400 transition-colors">
                  Years Experience
                </span>
              </div>
              <div>
                <span className="font-display text-3xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                  50+
                </span>
                <span className="block text-zinc-500 text-sm">Projects Completed</span>
              </div>
              <div>
                <span className="font-display text-3xl font-bold bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
                  20+
                </span>
                <span className="block text-zinc-500 text-sm">Happy Clients</span>
              </div>
            </div>
          </div>

          {/* Right Content - Code Window (same as before) */}
          <div className="hidden lg:block" data-aos="fade-left" data-aos-delay="400">
            <div className="bg-[#1e1e3f] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-black/30 border-b border-zinc-800">
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="mx-auto text-zinc-500 text-sm font-mono">
                  developer.py
                </span>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm overflow-x-auto">
                <pre className="leading-relaxed">
                  <code>
                    <span className="text-purple-400">class</span>{' '}
                    <span className="text-yellow-400">Developer</span>:
                    {'\n'} {'  '}
                    <span className="text-purple-400">def</span>{' '}
                    <span className="text-blue-400">__init__</span>
                    <span className="text-zinc-400">(</span>
                    <span className="text-zinc-400">self</span>
                    <span className="text-zinc-400">):</span>
                    {'\n'} {'    '}self.name ={' '}
                    <span className="text-green-400">&quot;Brian Maweu&quot;</span>
                    {'\n'} {'    '}self.role ={' '}
                    <span className="text-green-400">&quot;Full Stack Dev&quot;</span>
                    {'\n'} {'    '}self.stack = [
                    {'\n'} {'      '}
                    <span className="text-green-400">&quot;Kotlin&quot;</span>,{' '}
                    <span className="text-green-400">&quot;Jetpack Compose&quot;</span>,
                    {'\n'} {'      '}
                    <span className="text-green-400">&quot;Laravel&quot;</span>,{' '}
                    <span className="text-green-400">&quot;Django&quot;</span>,
                    {'\n'} {'      '}
                    <span className="text-green-400">&quot;Python&quot;</span>,{' '}
                    <span className="text-green-400">&quot;PHP&quot;</span>,
                    {'\n'} {'      '}
                    <span className="text-green-400">&quot;Java&quot;</span>,{' '}
                    <span className="text-green-400">&quot;MySQL&quot;</span>
                    {'\n'} {'    '}]
                    {'\n'} {'  '}
                    <span className="text-purple-400">def</span>{' '}
                    <span className="text-blue-400">build_awesome</span>
                    <span className="text-zinc-400">(</span>
                    <span className="text-zinc-400">self</span>
                    <span className="text-zinc-400">):</span>
                    {'\n'} {'    '}
                    <span className="text-purple-400">return</span>{' '}
                    <span className="text-green-400">
                      &quot;Code that makes a difference!&quot;
                    </span>
                    {'\n'} {'  '}
                    <span className="text-purple-400">def</span>{' '}
                    <span className="text-blue-400">download_resume</span>
                    <span className="text-zinc-400">(</span>
                    <span className="text-zinc-400">self</span>
                    <span className="text-zinc-400">):</span>
                    {'\n'} {'    '}
                    <span className="text-green-400">
                      &quot;📄 Click the button above to get my full CV!&quot;
                    </span>
                  </code>
                </pre>
              </div>
            </div>

            {/* Floating Icons */}
            <div className="relative mt-6">
              <div className="absolute -top-4 right-4 w-12 h-12 bg-[#1e1e3f] rounded-full flex items-center justify-center text-2xl border border-zinc-700 animate-float shadow-lg">
                <span className="text-[#3776ab]">Py</span>
              </div>
              <div className="absolute top-8 -left-4 w-12 h-12 bg-[#1e1e3f] rounded-full flex items-center justify-center text-2xl border border-zinc-700 animate-float-reverse shadow-lg">
                <span className="text-[#007396]">Ja</span>
              </div>
              <div className="absolute -bottom-2 right-1/3 w-12 h-12 bg-[#1e1e3f] rounded-full flex items-center justify-center text-2xl border border-zinc-700 animate-float shadow-lg">
                <span className="text-[#3ddc84]">An</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 text-sm">
        <div className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-zinc-500 rounded-full animate-scroll" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}