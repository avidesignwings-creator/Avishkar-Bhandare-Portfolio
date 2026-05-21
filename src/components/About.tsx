import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-24 px-8 md:px-16 lg:px-24 bg-white overflow-hidden snap-start">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center"
        >
          A little about me
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-medium">
              {[
                "Hi, I'm Avishkar — a Lead UX, UI & Product Designer with 9+ years of experience working on enterprise, fintech, SaaS, and digital products. I currently work at KaGen, designing product experiences for complex enterprise platforms and workflows.",
                "Over the years, I've worked on fintech dashboards, SaaS platforms, automotive interfaces, and business systems used by operations and enterprise teams. I enjoy simplifying complex workflows and making products easier and more efficient to use.",
                "My work includes user research, interaction design, design systems, prototyping, and visual UI design. I work closely with product, engineering, and business teams throughout the design process.",
                "Previously, I worked at Successive Digital, leading UX work across multiple enterprise and fintech products.",
                "Outside of work, I enjoy digital illustration, photography, visual storytelling, and exploring art and design inspiration. 📸"
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </div>

          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="relative"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-square max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl border-8 border-white group"
            >
              <img 
                src="/assets/images/profile.png" 
                alt="Avishkar Bhandare" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
