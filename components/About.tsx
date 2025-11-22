import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Cpu, Database, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-primary">01.</span> About Me
          </h2>
          <div className="h-px w-32 bg-slate-700" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-300 leading-relaxed mb-6 text-lg">
              {PERSONAL_INFO.bio}
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              My academic journey has taken me from the fundamentals of Software Engineering to the cutting edge of 
              <span className="text-primary font-semibold"> Data Science</span> and <span className="text-secondary font-semibold">Embedded AI</span>. 
              I thrive on the challenge of optimizing algorithms for resource-constrained environments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="p-4 bg-slate-800 rounded-lg border border-slate-700 text-center hover:border-primary transition-colors">
                    <Cpu className="w-8 h-8 text-primary mx-auto mb-2" />
                    <span className="text-white font-medium">Embedded AI</span>
                </div>
                <div className="p-4 bg-slate-800 rounded-lg border border-slate-700 text-center hover:border-primary transition-colors">
                    <Database className="w-8 h-8 text-secondary mx-auto mb-2" />
                    <span className="text-white font-medium">Big Data</span>
                </div>
                <div className="p-4 bg-slate-800 rounded-lg border border-slate-700 text-center hover:border-primary transition-colors">
                    <Globe className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <span className="text-white font-medium">Full Stack</span>
                </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-primary rounded-lg transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            <div className="relative z-10 bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
                <img 
                    src="https://picsum.photos/600/400?grayscale" 
                    alt="Ayoub Working" 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;