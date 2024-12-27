import React from 'react';
import { motion } from 'framer-motion';
import { Book } from 'lucide-react';
import { fadeInUp, staggerContainer, slideIn } from '../utils/animations';
import { education } from '../data/education';

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <motion.h2 
          variants={fadeInUp}
          className="text-4xl font-bold text-center mb-16"
        >
          Education
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              variants={slideIn}
              className="relative pl-8 pb-12 group"
            >
              {index !== education.length - 1 && (
                <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-300 group-hover:bg-cyan-500 transition-colors" />
              )}
              <div className="absolute left-0 top-0 w-8 h-8 bg-white rounded-full border-2 border-gray-300 group-hover:border-cyan-500 transition-colors flex items-center justify-center">
                <Book className="w-4 h-4 text-gray-500 group-hover:text-cyan-500 transition-colors" />
              </div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "tween" }}
                className="bg-white p-6 rounded-lg shadow-lg ml-4"
              >
                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                <div className="text-cyan-600 mb-2">{edu.institution}</div>
                <div className="text-gray-500 mb-2">{edu.period || edu.year}</div>
                {edu.percentage && (
                  <div className="text-gray-600">Percentage: {edu.percentage}</div>
                )}
                {edu.status && (
                  <div className="text-gray-600">Status: {edu.status}</div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};