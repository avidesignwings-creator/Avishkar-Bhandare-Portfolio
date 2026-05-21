import { useParams, useNavigate, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { motion } from 'motion/react';
import { 
  ArrowLeft
} from 'lucide-react';
import { useEffect } from 'react';
import { ProjectIcon } from '../components/ProjectIcon';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">Project not found</h1>
        <Link to="/" className="text-[#9333ea] font-medium underline">Return Home</Link>
      </div>
    );
  }

  const nextProject = PROJECTS[(PROJECTS.findIndex(p => p.id === id) + 1) % PROJECTS.length];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#FFFDF0] selection:bg-purple-100 selection:text-purple-900"
    >
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFFDF0]/80 backdrop-blur-md border-b border-black/5 px-8 md:px-16 lg:px-24 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-900 font-bold text-xs uppercase tracking-widest hover:text-[#9333ea] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </button>
          <div className="flex gap-8">
            <Link to="/" className="text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors">Home</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 space-y-12 mb-16">
          {/* Logo/Icon */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <ProjectIcon type={project.icon} />
          </motion.div>
          
          <div className="space-y-6">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-bold uppercase tracking-[0.4em] text-[#9333ea]"
            >
              Product Design Case Study
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F172A] leading-[1.1] tracking-tight max-w-5xl"
            >
              {project.title}
            </motion.h1>
          </div>

          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
             className="flex flex-wrap gap-4"
          >
            {project.tags.map(tag => (
              <span key={tag} className="px-6 py-3 rounded-full bg-white border border-gray-100 text-[11px] font-bold text-gray-700 uppercase tracking-widest shadow-sm">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24"
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-sm border border-black/5">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto block"
            />
          </div>
        </motion.div>

        {/* Project Content */}
        <div className="max-w-4xl mx-auto px-8 md:px-16 lg:px-24 mt-24 space-y-24">
          {/* Overview */}
          {(project.content as any).overview && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#9333ea]">Overview</h2>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                {(project.content as any).overview}
              </p>
            </motion.div>
          )}

          {/* Timeline & Industry */}
          {((project.content as any).timeline || (project.content as any).industry) && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-y border-gray-100"
            >
               {(project.content as any).industry && (
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Industry</p>
                  <p className="text-lg font-bold text-gray-900">{(project.content as any).industry}</p>
                </div>
               )}
               <div className="space-y-2">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Role</p>
                  <p className="text-lg font-bold text-gray-900">{project.role}</p>
               </div>
            </motion.div>
          )}

          {/* Problems & Solutions */}
          {(project.content as any).problems && (
            <div className="space-y-12">
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#9333ea]">Key Challenges</h2>
              <div className="grid grid-cols-1 gap-8">
                {(project.content as any).problems.map((p: any, i: number) => (
                  <motion.div 
                    key={p.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 rounded-[2rem] bg-white border border-gray-100 space-y-4"
                  >
                    <h3 className="text-xl font-bold text-gray-900">{p.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{p.description}</p>
                    <div className="pt-4 border-t border-gray-50">
                      <p className="text-sm font-bold text-[#9333ea] uppercase tracking-wider mb-2">Solution</p>
                      <p className="text-gray-900 font-medium">{p.solution}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Old Simple Content Support */}
          {!(project.content as any).problems && (
            <div className="space-y-16">
              {(project.content as any).problem && (
                <div className="space-y-4">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-[#9333ea]">The Problem</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">{(project.content as any).problem}</p>
                </div>
              )}
              {(project.content as any).process && (
                <div className="space-y-4">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-[#9333ea]">The Process</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">{(project.content as any).process}</p>
                </div>
              )}
            </div>
          )}

          {/* Outcomes */}
          {(project.content as any).outcomes && (
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="p-12 rounded-[3rem] bg-[#9333ea] text-white space-y-6 shadow-2xl shadow-purple-200"
            >
              <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-70">Impact & Results</h2>
              <p className="text-2xl md:text-3xl font-bold leading-tight">
                {(project.content as any).outcomes}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-24 border-t border-gray-100/50">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-12"
        >
            <div className="text-center space-y-4">
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em]">Ready for More?</p>
               <h3 className="text-4xl font-bold text-gray-900 tracking-tight">Next Case Study</h3>
            </div>
            
            <button 
              onClick={() => {
                navigate(`/project/${nextProject.id}`);
              }}
              className="group relative flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 group-hover:border-[#9333ea] group-hover:text-[#9333ea] transition-all duration-500 overflow-hidden">
                  <ArrowLeft className="w-8 h-8 rotate-180 transform group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-purple-50 translate-y-full group-hover:translate-y-0 transition-transform duration-500 -z-10" />
              </div>
              <div className="mt-8 text-center max-w-2xl px-4">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <ProjectIcon type={nextProject.icon} />
                  </div>
                  <p className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-[#9333ea] transition-colors leading-relaxed">
                    {nextProject.title}
                  </p>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-4">View Portfolio Piece</p>
              </div>
            </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

