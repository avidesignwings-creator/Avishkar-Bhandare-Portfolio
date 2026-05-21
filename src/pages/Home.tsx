import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Work } from '../components/Work';
import { Experience } from '../components/Experience';
import { Contact } from '../components/Contact';
import { motion, useScroll, useSpring } from 'motion/react';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent-purple origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <main 
        ref={containerRef}
        id="main-scroll-container"
        className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth"
      >
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
    </div>
  );
}
