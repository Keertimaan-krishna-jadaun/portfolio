import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028',
    tech: ['React', 'Node.js', 'MongoDB', 'Docker'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'AI Task Manager',
    description: 'Smart task management app with AI-powered prioritization.',
    image: 'https://images.unsplash.com/photo-1671726203638-83742a2721a1',
    tech: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Cloud Analytics Dashboard',
    description: 'Real-time analytics dashboard for cloud infrastructure monitoring.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    tech: ['Vue.js', 'AWS', 'GraphQL', 'D3.js'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
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
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-sm bg-cyan-500 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                       className="p-2 hover:text-cyan-400 transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                       className="p-2 hover:text-cyan-400 transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};