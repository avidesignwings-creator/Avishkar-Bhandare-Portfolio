import { motion } from 'motion/react';
import { Mail, Globe, MessageSquare, Linkedin, ArrowUp } from 'lucide-react';

export function Contact() {
  const scrollToTop = () => {
    document.getElementById('main-scroll-container')?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-32 px-8 md:px-16 lg:px-24 bg-white overflow-hidden relative snap-start">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start border-t border-gray-100 pt-32">
          <div className="space-y-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[4rem] md:text-[6rem] font-bold text-gray-900 tracking-tight leading-none"
            >
              Get in touch
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="flex gap-6"
            >
              <motion.a 
                href="https://www.linkedin.com/in/avishkarbhandare/" 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-2xl bg-gray-50 text-gray-400 hover:text-[#9333ea] hover:bg-purple-50 transition-all duration-300 group"
                title="LinkedIn"
              >
                <Linkedin className="w-8 h-8 transition-transform group-hover:rotate-12" />
              </motion.a>
              <motion.a 
                href="https://www.behance.net/avishkarbh7aa5" 
                target="_blank" 
                rel="noopener noreferrer" 
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 rounded-2xl bg-gray-50 text-gray-400 hover:text-[#9333ea] hover:bg-purple-50 transition-all duration-300 group"
                title="Behance"
              >
                <Globe className="w-8 h-8 transition-transform group-hover:-rotate-12" />
              </motion.a>
            </motion.div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4 pt-4">
            <motion.a 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              href="mailto:avishkarbhandare21@gmail.com" 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#9333ea] break-words md:whitespace-nowrap hover:scale-[1.02] transition-transform origin-right"
            >
              avishkarbhandare21@gmail.com
            </motion.a>
            <motion.a 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              href="tel:+919145738361" 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#9333ea] hover:scale-[1.02] transition-transform origin-right"
            >
              +91 91457 38361
            </motion.a>
          </div>
        </div>

        <div className="pt-32 flex justify-center">
          <button 
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-4 py-8"
          >
            <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] group-hover:text-gray-900 transition-colors">Back to top</span>
            <div className="p-4 rounded-full border border-gray-100 group-hover:bg-gray-50 transition-colors">
              <ArrowUp className="w-6 h-6 text-[#9333ea]" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
