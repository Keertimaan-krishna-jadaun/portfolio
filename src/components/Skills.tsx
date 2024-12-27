import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';
import { skills, achievements } from '../data/skills';

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-center mb-16">
          Skills & Achievements
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div variants={scaleIn} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-cyan-600">Technical Skills</h3>
            <div className="space-y-3">
              {skills.technical.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-cyan-500 h-2.5 rounded-full"
                      style={{ width: `${Math.random() * 30 + 70}%` }}
                    />
                  </div>
                  <span className="ml-4 text-gray-600 min-w-[120px]">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={scaleIn} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-cyan-600">Soft Skills</h3>
            <div className="space-y-3">
              {skills.soft.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-cyan-500 h-2.5 rounded-full"
                      style={{ width: `${Math.random() * 30 + 70}%` }}
                    />
                  </div>
                  <span className="ml-4 text-gray-600 min-w-[120px]">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-cyan-600">Sports Achievements</h3>
            <ul className="space-y-4">
              {achievements.sports.map((sport, index) => (
                <motion.li 
                  key={index}
                  variants={scaleIn}
                  className="border-l-4 border-cyan-500 pl-4"
                >
                  <h4 className="font-semibold">{sport.title}</h4>
                  <p className="text-gray-600">{sport.level}</p>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-cyan-600">Other Achievements</h3>
            <ul className="space-y-4">
              {achievements.other.map((achievement, index) => (
                <motion.li 
                  key={index}
                  variants={scaleIn}
                  className="border-l-4 border-cyan-500 pl-4"
                >
                  <h4 className="font-semibold">{achievement.title}</h4>
                  <p className="text-gray-600">{achievement.description || achievement.achievement}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};