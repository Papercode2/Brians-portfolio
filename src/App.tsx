import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Philosophy } from './sections/Philosophy';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { CustomCursor } from './components/CustomCursor';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white overflow-x-hidden">
      <CustomCursor />
      <Navbar scrolled={false} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;