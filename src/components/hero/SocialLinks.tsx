import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import { personalInfo } from '../../data/personalInfo';

export const SocialLinks = () => {
  return (
    <motion.div variants={fadeInUp} className="flex gap-6">
      <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" 
         className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
        <Github className="w-6 h-6" />
      </a>
      <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer"
         className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
        <Linkedin className="w-6 h-6" />
      </a>
      <a href={`mailto:${personalInfo.social.email}`}
         className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
        <Mail className="w-6 h-6" />
      </a>
    </motion.div>
  );
};