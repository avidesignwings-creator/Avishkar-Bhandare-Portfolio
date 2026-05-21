import { motion } from 'motion/react';
import { SKILLS } from '../constants';
import { cn } from '../lib/utils';
import { Palette, Layers, Chrome, Layout, Users, Lightbulb, Smartphone, Settings, Monitor, PenTool } from 'lucide-react';

const SKILL_ICONS = {
  'Product Design': Layout,
  'UX Research': Users,
  'User Journey': Lightbulb,
  'Interaction Design': Smartphone,
  'Prototyping': Settings,
  'Design Systems': Layout,
  'Usability Testing': Users,
  'SaaS Product Design': Settings,
  'Mobile App Design': Smartphone,
  'Heuristic Evaluation': Chrome,
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-8 md:px-16 lg:px-24 bg-white overflow-hidden text-center snap-start">
      <div className="max-w-5xl mx-auto space-y-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Things I'm good at
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 text-left items-start">
          {/* Core Skills Pills */}
          <div className="flex flex-wrap gap-2.5 max-w-2xl">
            {SKILLS.core.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={cn(
                  "px-4 py-2 rounded-full border text-xs md:text-sm font-medium transition-all hover:brightness-95",
                  skill.bgColor,
                  skill.borderColor,
                  skill.textColor
                )}
              >
                {skill.name}
              </motion.div>
            ))}
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-6">
            {SKILLS.tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center transition-all group-hover:scale-110 group-hover:rotate-6 shadow-sm border border-gray-100 overflow-hidden p-1.5">
                   {(tool.icon.startsWith('http') || tool.icon.startsWith('/')) ? (
                     <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                   ) : (
                     <span className="text-[10px] font-bold text-[#9333ea] uppercase">{tool.name.substring(0, 1)}</span>
                   )}
                </div>
                <span className="text-base font-bold text-gray-700 group-hover:text-[#9333ea] transition-colors">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
