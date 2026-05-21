import { motion } from 'motion/react';
import { Linkedin } from 'lucide-react';
import { FOCUS_TAGS } from '../constants';

interface FloatingTagProps {
  key?: string | number | null;
  text: string;
  delay: number;
  duration: number;
  x: string;
  y: string;
  size: string;
}

function FloatingTag({ text, delay, duration, x, y, size }: FloatingTagProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: [0, 0.4, 0.4, 0],
        scale: [0.8, 1.1, 1.1, 0.8],
        x: ['0px', '20px', '-10px', '5px'],
        y: ['0px', '-15px', '10px', '-5px']
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
      style={{
        position: 'absolute',
        left: x,
        top: y,
        fontSize: size,
      }}
      className="hidden lg:block font-bold text-[#9333ea]/30 select-none whitespace-nowrap pointer-events-none"
    >
      {text}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden bg-white snap-start">
      {/* Floating Background Tags */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {FOCUS_TAGS.map((tag, i) => (
          <FloatingTag
            key={tag}
            text={tag}
            delay={i * 1.5}
            duration={8 + (i % 4) * 2}
            x={`${65 + (i % 3) * 10}%`}
            y={`${15 + (i * 12) % 70}%`}
            size={`${1.5 + (i % 4) * 0.5}rem`}
          />
        ))}

        {/* Extra decorative circles */}
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[10%] w-64 h-64 rounded-full bg-[#9333ea]/5 blur-[100px]"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] right-[15%] w-80 h-80 rounded-full bg-blue-500/5 blur-[120px]"
        />
      </div>

      <div className="container relative z-10 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto space-y-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-lg md:text-xl font-bold text-[#9333ea]">
            Hi, I'm Avishkar Bhandare
          </span>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
           className="max-w-[75rem]"
        >
          <h1 className="text-[2.5rem] md:text-[4.5rem] font-bold leading-[1.1] tracking-tighter text-gray-900">
            Humanizing the <span className="text-[#9333ea]">Complexity</span> of Enterprise Software through Strategic Experience Design.
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="max-w-3xl text-base md:text-lg text-gray-500 font-medium"
        >
          Lead UX, UI & Product Designer at <span className="text-gray-900 font-bold border-b-2 border-[#9333ea]/20">KaGen</span> designing enterprise workflows, dashboards, and digital products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="flex flex-wrap gap-4 items-center"
        >
          {/* Behance */}
          <motion.a
             href="https://www.behance.net/avishkarbh7aa5"
             target="_blank"
             rel="noopener noreferrer"
             whileHover={{ 
               scale: 1.1,
               rotate: -2,
               boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
             }}
             whileTap={{ scale: 0.95 }}
             className="w-14 h-14 rounded-2xl bg-[#9333ea] flex items-center justify-center text-white font-bold text-xl shadow-lg transition-all"
          >
            Bē
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/avishkarbhandare/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.1,
              rotate: 2,
              boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            className="w-14 h-14 rounded-2xl bg-[#9333ea] flex items-center justify-center text-white font-bold text-xl shadow-lg transition-all"
          >
            in
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
