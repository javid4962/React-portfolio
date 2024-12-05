import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn, slideIn } from '../utils/animations';
import { personalInfo } from '../data/personalInfo';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-32 overflow-hidden">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/2 translate-y-1/2"
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <motion.h2 
                variants={slideIn}
                className="text-lg font-semibold text-indigo-200 mb-2"
              >
                Welcome to my portfolio
              </motion.h2>
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
              >
                Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-indigo-300">
                  {personalInfo.name}
                </span>
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-indigo-100 leading-relaxed"
              >
                {personalInfo.title}
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-2 mt-4 text-indigo-200"
              >
                <MapPin size={20} />
                <span className="text-sm">{personalInfo.location}</span>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-pink-500 to-indigo-500 px-8 py-3 rounded-lg font-semibold shadow-lg text-center"
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-lg font-semibold bg-white/10 hover:bg-white/20 backdrop-blur-sm transition text-center"
              >
                Contact Me
              </motion.a>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="flex items-center space-x-6"
            >
              {[
                { icon: <Github size={24} />, href: personalInfo.socialLinks.github },
                { icon: <Linkedin size={24} />, href: personalInfo.socialLinks.linkedin },
                { icon: <Mail size={24} />, href: `mailto:${personalInfo.email}` }
              ].map((social, index) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, rotate: -12 }}
              animate={{ opacity: 1, rotate: -6 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-gradient-to-tr from-pink-500/30 to-indigo-500/30 rounded-2xl scale-105"
            />
            <motion.img
              src="/profile-image.jpg"
              alt={personalInfo.name}
              className="relative rounded-2xl shadow-2xl w-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}