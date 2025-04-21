import React from 'react';
import ProjectCard from './ProjectCard';
import  projects  from '../data/projects'; 

const Projects = () => {
  return (
    <section className="snap-start h-screen py-24 px-6 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>

      <div className="relative overflow-hidden group">
        <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused] gap-8">
          {[...projects].map((project, index) => (
            <div className="min-w-[300px] max-w-[300px] flex-shrink-0" key={index}>
              <ProjectCard
                title={project.title}
                image={project.image}
                alt={project.alt}
                description={project.description}
                deployed={project.deployed}
                github={project.github}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
