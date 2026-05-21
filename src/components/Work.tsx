import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { cn } from '../lib/utils';
import { ProjectIcon } from './ProjectIcon';

export function Work() {
  const navigate = useNavigate();

  return (
    <section id="work" className="py-24 px-8 md:px-16 lg:px-24 bg-white overflow-hidden snap-start">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">Recent Work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.21, 1.11, 0.81, 0.99]
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className={cn(
                "group cursor-pointer rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-start h-full space-y-8 transition-all hover:shadow-2xl border border-transparent hover:border-white/20",
              )}
              style={{ backgroundColor: project.color }}
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <div className="space-y-8">
                <motion.div 
                  initial={{ translateZ: -20, opacity: 0 }}
                  whileInView={{ translateZ: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="flex items-center space-x-4"
                >
                   <ProjectIcon type={project.icon} />
                </motion.div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-[1.2] tracking-tight">
                    {project.title}
                  </h3>
                  
                  <div className="space-y-3">
                    <p className="text-xs md:text-sm font-medium text-gray-500 leading-relaxed max-w-xl">
                      {project.tags.join(", ")}
                    </p>
                    
                    <div className="pt-1">
                      <motion.div 
                        whileHover={{ x: 5 }}
                        className="inline-block text-base font-bold text-gray-900 underline underline-offset-4 decoration-current transition-all"
                      >
                        {project.type === 'article' ? 'Read Article' : 'Read Case Study'}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
