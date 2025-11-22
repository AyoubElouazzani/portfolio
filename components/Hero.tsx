
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Download, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Cyber Grid Background */}
      <div className="absolute inset-0 z-0 bg-dark">
        <div 
            className="absolute inset-0 opacity-20"
            style={{
                backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
                transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) scale(1.5)',
            }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/90 to-transparent" />
        
        {/* Floating Orbs */}
        <motion.div 
          animate={{ x: [0, 100, 0], y: [0, -50, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/30 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ x: [0, -100, 0], y: [0, 50, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="overflow-hidden whitespace-nowrap mb-4"
          >
            <p className="text-primary font-mono text-lg md:text-xl tracking-wide border-r-2 border-primary pr-2 animate-pulse">
              Hello, world. I am
            </p>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-tight"
          >
            {PERSONAL_INFO.name}
            <span className="text-primary">.</span>
          </motion.h1>

          <motion.h2
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.7 }}
             className="text-3xl md:text-5xl font-bold text-slate-400 mb-8"
          >
             I engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Intelligence</span> into things.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed"
          >
            {PERSONAL_INFO.tagline} Specialized in Edge AI and High-Performance Embedded Systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap gap-6"
          >
            <a 
              href="#projects"
              className="group relative px-8 py-4 bg-primary text-white font-medium rounded-full overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="relative flex items-center gap-2">
                Explore Work <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </div>
            </a>
            
            <a 
              href="#contact"
              className="px-8 py-4 border border-slate-600 text-slate-300 rounded-full font-medium hover:border-white hover:text-white transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-16 flex gap-8"
          >
            <a href="https://github.com/AyoubElouazzani" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors hover:scale-110 transform duration-300">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/ayoub-elouazzani-4559b7202/" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors hover:scale-110 transform duration-300">
              <Linkedin size={28} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-500"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
