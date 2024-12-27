import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, slideIn } from '../utils/animations';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Corp',
    period: '2021 - Present',
    description: 'Led development of cloud-native applications, mentored junior developers, and implemented CI/CD pipelines.',
  },
  {
    title: 'Software Engineer',
    company: 'Innovation Labs',
    period: '2018 - 2021',
    description: 'Developed scalable microservices and contributed to the modernization of legacy systems.',
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Inc',
    period: '2016 - 2018',
    description: 'Built responsive web applications and implemented RESTful APIs.',
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
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
          Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={slideIn}
              className="relative pl-8 pb-12 group"
            >
              {index !== experiences.length - 1 && (
                <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-300 group-hover:bg-cyan-500 transition-colors" />
              )}
              <div className="absolute left-0 top-0 w-8 h-8 bg-white rounded-full border-2 border-gray-300 group-hover:border-cyan-500 transition-colors flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-gray-500 group-hover:text-cyan-500 transition-colors" />
              </div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: "tween" }}
                className="bg-white p-6 rounded-lg shadow-lg ml-4"
              >
                <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                <div className="text-cyan-600 mb-2">{exp.company}</div>
                <div className="text-gray-500 mb-4">{exp.period}</div>
                <p className="text-gray-600">{exp.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};