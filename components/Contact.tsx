import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-dark to-slate-900">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-mono mb-4">05. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            I am currently open to new opportunities in Embedded AI and Data Science. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
              {PERSONAL_INFO.email}
            </a>
            <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-3 text-slate-300 hover:text-primary transition-colors">
              <Phone className="w-5 h-5" />
              {PERSONAL_INFO.phone}
            </a>
             <div className="flex items-center gap-3 text-slate-300">
              <MapPin className="w-5 h-5" />
              {PERSONAL_INFO.location}
            </div>
          </div>

          <motion.a
            href={`mailto:${PERSONAL_INFO.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-transparent border border-primary text-primary px-8 py-4 rounded-md font-mono text-sm hover:bg-primary/10 transition-all"
          >
            Say Hello <Send size={16} />
          </motion.a>
        </motion.div>

        <footer className="mt-24 text-slate-500 text-sm font-mono">
          <p>Designed & Built by {PERSONAL_INFO.name}</p>
          <p className="mt-2">© {new Date().getFullYear()}</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;