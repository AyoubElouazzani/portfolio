
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, Bot, Video, Flame, BarChart2, MessageSquare, ArrowUpRight, ArrowRight } from 'lucide-react';
import { getIconUrl } from '../utils';
import { Project } from '../types';

// Project visual placeholder logic since we don't have real screenshots
const getProjectIcon = (title: string) => {
  const lower = title.toLowerCase();
  if (lower.includes('agent') || lower.includes('chat')) return <Bot size={48} className="text-white" />;
  if (lower.includes('detection') || lower.includes('vision')) return <Video size={48} className="text-white" />;
  if (lower.includes('fire') || lower.includes('iot')) return <Flame size={48} className="text-white" />;
  if (lower.includes('analysis')) return <BarChart2 size={48} className="text-white" />;
  return <MessageSquare size={48} className="text-white" />;
};

const getProjectGradient = (index: number) => {
  const gradients = [
    'from-blue-600 to-violet-600',
    'from-emerald-500 to-teal-600',
    'from-orange-500 to-red-600',
    'from-pink-500 to-rose-600',
    'from-cyan-500 to-blue-600'
  ];
  return gradients[index % gradients.length];
};

const ProjectCard: React.FC<{ project: Project; index: number; isFeatured?: boolean }> = ({ project, index, isFeatured = false }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={divRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={`relative group rounded-3xl overflow-hidden bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 ${
        isFeatured ? 'md:col-span-2 md:row-span-2 min-h-[400px] md:min-h-[500px]' : 'min-h-[350px]'
      }`}
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
        }}
      />

      {/* Decorative Gradient Background */}
      <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${getProjectGradient(index)} z-0`} />

      <div className="relative z-20 p-8 h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div className={`p-4 rounded-2xl bg-gradient-to-br ${getProjectGradient(index)} shadow-lg shadow-black/20`}>
            {getProjectIcon(project.title)}
          </div>
          <div className="flex gap-4">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="p-2 bg-slate-800/80 rounded-full text-slate-400 hover:text-white hover:bg-primary hover:scale-110 transition-all">
                <ExternalLink size={20} />
              </a>
            )}
            <div className="p-2 bg-slate-800/80 rounded-full text-slate-400 hover:text-white hover:bg-black hover:scale-110 transition-all cursor-pointer">
              <Github size={20} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mb-auto">
            <div className="flex items-center gap-3 mb-2">
                 <h3 className={`font-bold text-white group-hover:text-primary transition-colors ${isFeatured ? 'text-3xl' : 'text-xl'}`}>
                    {project.title}
                 </h3>
                 {isFeatured && <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-mono rounded-full border border-primary/30">Featured</span>}
            </div>
            
          <p className="text-slate-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-8 pt-6 border-t border-slate-700/50">
          <div className="flex flex-wrap gap-3 items-center">
            {project.tags.map(tag => {
               const iconUrl = getIconUrl(tag);
               return (
                 <div key={tag} className="group/icon relative flex items-center justify-center p-2 bg-slate-900/50 rounded-lg border border-slate-700/50 hover:border-primary/50 transition-colors">
                    {iconUrl ? (
                        <img src={iconUrl} alt={tag} className="w-5 h-5 object-contain" />
                    ) : (
                        <span className="text-xs font-mono text-slate-400 px-1">#{tag}</span>
                    )}
                    
                    {/* Tooltip */}
                    {iconUrl && (
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap border border-slate-700 pointer-events-none">
                            {tag}
                        </span>
                    )}
                 </div>
               );
            })}
          </div>
        </div>
        
        {isFeatured && (
            <motion.div 
                className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
            >
                <ArrowUpRight className="w-12 h-12 text-white/20" />
            </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  // Sort projects so "Academic" types or specifically "Al Mardia" is first
  const sortedProjects = [...PROJECTS].sort((a, b) => {
      if (a.title.includes("Al Mardia")) return -1;
      return 0;
  });

  return (
    <section id="projects" className="py-32 bg-dark relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute right-0 top-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="h-1 w-24 bg-primary rounded-full mb-4" />
            <p className="text-slate-400 max-w-xl text-lg">
                A showcase of my technical explorations in AI agents, Computer Vision, and IoT systems.
            </p>
          </div>
          
          <a href="https://github.com/AyoubElouazzani" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-primary hover:text-white transition-colors font-mono group">
             View Full Archive <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProjects.map((project, idx) => (
            <ProjectCard 
                key={idx} 
                project={project} 
                index={idx} 
                isFeatured={idx === 0} // First project gets featured styling
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
