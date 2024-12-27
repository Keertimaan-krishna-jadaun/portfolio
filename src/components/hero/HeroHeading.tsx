import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';
import { personalInfo } from '../../data/personalInfo';

export const HeroHeading = () => {
  return (
    <>
      <motion.h1 
        variants={fadeInUp}
        className="text-5xl md:text-7xl font-bold mb-6"
      >
        Hi, I'm <span className="text-cyan-400">{personalInfo.name}</span>
      </motion.h1>
      <motion.h2 
        variants={fadeInUp}
        className="text-2xl md:text-4xl text-gray-300 mb-8"
      >
        {personalInfo.title}
      </motion.h2>
      <motion.p 
        variants={fadeInUp}
        className="text-xl text-gray-400 mb-12 max-w-2xl"
      >
        {personalInfo.bio}
      </motion.p>
    </>
  );
};