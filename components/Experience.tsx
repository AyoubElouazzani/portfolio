import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Briefcase, GraduationCap, Calendar, MapPin, Building2 } from 'lucide-react';
import { Experience as ExperienceType } from '../types';

const ExperienceCard: React.FC<{ item: ExperienceType; index: number }> = ({ item, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`mb-12 flex justify-between items-center w-full ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Spacer for desktop alignment */}
      <div className="hidden md:block w-5/12" />

      {/* Timeline Node */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="z-20 flex items-center justify-center w-12 h-12 bg-dark border-4 border-slate-800 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:border-primary transition-colors"
      >
        <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
      </motion.div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full md:w-5/12 pl-8 md:pl-0"
      >
        <div 
          className={`
            relative p-6 rounded-2xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50
            hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]
            ${isEven ? 'md:text-left' : 'md:text-left'} 
          `}
        >
          {/* Decorative gradient blob */}
          <div className="absolute -inset-px bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className={`p-2 rounded-lg ${item.type === 'education' ? 'bg-blue-500/10 text-blue-400' : 'bg-purple-500/10 text-purple-400'}`}>
                {item.type === 'education' ? <GraduationCap size={20} /> : <Briefcase size={20} />}
              </span>
              <span className="text-sm font-mono text-slate-400 flex items-center gap-2 border border-slate-700 rounded-full px-3 py-1 bg-slate-900/50">
                <Calendar size={12} />
                {item.period}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
              {item.role}
            </h3>
            
            <div className="flex items-center gap-2 text-slate-300 font-medium mb-4">
              <Building2 size={16} className="text-slate-500" />
              {item.company}
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              {item.description}
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono pt-4 border-t border-slate-700/50">
              <MapPin size={12} />
              {item.location}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-32 bg-dark relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-40 right-0 text-[200px] font-bold text-slate-800/20 pointer-events-none select-none leading-none opacity-10 rotate-90 md:rotate-0">
        HISTORY
      </div>

      <div className="container mx-auto px-6" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            My Journey
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A timeline of my academic achievements and professional contributions in the world of tech.
          </p>
        </motion.div>

        <div className="relative">
          {/* Central Timeline Line (Desktop) */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 transform md:-translate-x-1/2">
             <motion.div 
                style={{ height }} 
                className="w-full bg-gradient-to-b from-primary via-secondary to-primary origin-top"
             />
          </div>

          <div className="relative z-10 pl-8 md:pl-0">
            {EXPERIENCE.map((item, index) => (
              <ExperienceCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;