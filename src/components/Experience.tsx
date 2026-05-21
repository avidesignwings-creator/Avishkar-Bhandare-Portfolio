import { motion } from 'motion/react';
import { EXPERIENCE } from '../constants';
import { Building2, Calendar } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-24 px-8 md:px-16 lg:px-24 bg-white overflow-hidden snap-start">
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-[38px] left-0 right-0 h-1 bg-[#9333ea] opacity-20 origin-left" 
          />
          
          <div className="flex overflow-x-auto gap-8 pb-8 pt-4 px-2 hide-scrollbar">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={exp.company + index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex-shrink-0 w-56 space-y-4 group"
              >
                {/* Date above */}
                <div className="text-[10px] font-bold text-[#9333ea] opacity-60 group-hover:opacity-100 transition-opacity uppercase tracking-widest h-6">
                  {exp.duration}
                </div>
                
                {/* Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 15, delay: index * 0.15 + 0.5 }}
                  className="relative z-10 w-4 h-4 bg-[#9333ea] rounded-sm transform translate-y-[2px]" 
                />
                
                {/* Company & Role below */}
                <div className="space-y-1 transform group-hover:translate-x-1 transition-transform">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">
                    {exp.company}
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">
                    {exp.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
