
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { TECHNICAL_SKILLS, SPOKEN_LANGUAGES } from '../constants';
import { Code, Database, Brain, Layers, Globe, Cpu } from 'lucide-react';
import { getIconUrl } from '../utils';

const getCategoryIcon = (category: string) => {
  if (category.includes("Programming")) return <Code className="w-6 h-6 text-blue-400" />;
  if (category.includes("AI")) return <Brain className="w-6 h-6 text-purple-400" />;
  if (category.includes("Web")) return <Layers className="w-6 h-6 text-green-400" />;
  if (category.includes("Database")) return <Database className="w-6 h-6 text-orange-400" />;
  return <Cpu className="w-6 h-6 text-slate-400" />;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 200, damping: 15 }
  }
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-slate-900/50">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Technical Arsenal
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A robust set of tools and technologies I use to build intelligent, scalable systems.
          </p>
        </motion.div>

        <div className="grid gap-16">
          {TECHNICAL_SKILLS.map((category, catIdx) => (
            <div key={category.name} className="relative">
              <div className="flex items-center gap-4 mb-8">
                 <div className="h-px flex-1 bg-slate-800" />
                 <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700/50 backdrop-blur-sm shadow-lg">
                    {getCategoryIcon(category.name)}
                    <span className="text-lg font-semibold text-slate-200">{category.name}</span>
                 </div>
                 <div className="h-px flex-1 bg-slate-800" />
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
              >
                {category.skills.map((skill, index) => {
                  const iconUrl = getIconUrl(skill);
                  const randomDuration = 3 + Math.random() * 2;
                  const randomDelay = Math.random() * 2;
                  
                  return (
                    <motion.div
                      key={skill}
                      variants={itemVariants}
                      className="group relative"
                    >
                       <motion.div
                         animate={{ 
                           y: [-8, 8],
                           rotate: [-2, 2]
                         }}
                         transition={{ 
                           duration: randomDuration,
                           repeat: Infinity,
                           repeatType: "reverse",
                           ease: "easeInOut",
                           delay: randomDelay
                         }}
                         className="relative bg-slate-800/40 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50 hover:border-primary/50 transition-all duration-500 flex flex-col items-center justify-center gap-4 h-full hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:-translate-y-2 z-10"
                       >
                          {/* Icon Container */}
                          <div className="relative w-16 h-16 flex items-center justify-center">
                             {iconUrl ? (
                               <img src={iconUrl} alt={skill} className="w-full h-full object-contain drop-shadow-2xl filter grayscale-[0.3] group-hover:grayscale-0 transition-all duration-300" />
                             ) : (
                               <div className="text-xl font-bold text-slate-500 group-hover:text-white">{skill.substring(0, 2)}</div>
                             )}
                          </div>
                          
                          {/* Skill Name */}
                          <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors text-center">
                            {skill}
                          </span>

                          {/* Glow Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none" />
                       </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Spoken Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-32"
        >
           <div className="flex items-center gap-4 mb-12 justify-center">
              <Globe className="text-secondary w-8 h-8 animate-bounce duration-[3000ms]" />
              <h3 className="text-2xl md:text-3xl font-bold text-white">Global Communication</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {SPOKEN_LANGUAGES.map((lang, idx) => {
              let percentage = 0;
              if (lang.proficiency === 'Native') percentage = 100;
              else if (lang.proficiency === 'Upper Intermediate') percentage = 80;
              else percentage = 50;

              return (
                <motion.div 
                  key={lang.language}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="relative bg-gradient-to-b from-slate-800/60 to-slate-900/60 backdrop-blur-xl p-6 rounded-2xl border border-slate-700/50 hover:border-secondary/50 transition-all duration-300 group overflow-hidden shadow-xl"
                >
                  {/* Background Flag Blur */}
                  <img 
                    src={`https://flagcdn.com/w320/${lang.flagCode.toLowerCase()}.png`} 
                    className="absolute -right-10 -top-10 w-40 h-40 opacity-5 blur-xl rotate-12 group-hover:opacity-10 transition-opacity duration-500"
                    alt="Decor"
                  />

                  <div className="flex items-center gap-5 mb-6 relative z-10">
                    <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg border-2 border-slate-600 group-hover:border-secondary transition-colors relative">
                      <img 
                        src={`https://flagcdn.com/w160/${lang.flagCode.toLowerCase()}.png`} 
                        alt={`${lang.language} Flag`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 shadow-[inset_0_0_10px_rgba(0,0,0,0.5)]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-secondary transition-colors">{lang.language}</h4>
                      <p className="text-sm text-slate-400">{lang.proficiency}</p>
                    </div>
                  </div>
                  
                  {/* Proficiency Bar */}
                  <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800 relative z-10">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full bg-gradient-to-r from-blue-500 via-secondary to-purple-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
