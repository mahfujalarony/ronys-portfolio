import React from 'react';
import projects from '../data/Projects';
import { motion } from 'framer-motion';

const Projects = () => {



  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">
            My <span className="text-[#2df17c]">Work</span>
          </h1>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={project.num} 
              className="rounded-lg border-[#55cc55] border-t-8 border-2 overflow-hidden shadow-lg transition-transform hover:border hover:border-[#1d4ed8] hover:transition-all hover:duration-500 bg-gray-800"
              initial={{ opacity: 0, rotateY: -20 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1, duration: 1.2 }}
            >
              <img 
                src={project.image} 
                alt={project.alt} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium px-2 py-1 rounded bg-gray-700 text-blue-400">
                    {project.category}
                  </span>
                  <span className="text-sm font-medium">{project.num}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4 text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 rounded bg-gray-700 text-blue-300">
                      {tech.name}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded text-sm font-medium bg-gray-700 hover:bg-gray-600"
                    >
                      GitHub
                    </a>
                  )}
                  {project.drive && (
                    <a 
                      href={project.drive} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-3 py-1 rounded text-sm font-medium bg-gray-700 hover:bg-gray-600"
                    >
                      Drive
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
   
  );
};

export default Projects;
