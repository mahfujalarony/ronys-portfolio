import React from 'react'
import Projects from './Projects'
import { useNavigate } from 'react-router-dom';
import Button from './ProjectButton';
import { FaArrowUp } from 'react-icons/fa';

const ProjectsRoute = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleProjectsClick = () => {
    navigate('/projects');
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white transition-colors duration-300">
           <nav className="flex justify-around items-center py-2 md:py-3 shadow-sm">
              <div
                onClick={handleHomeClick}
                className="mt-1 md:mt-2 hover:scale-95 transition duration-300 cursor-pointer flex items-center gap-2"
              >
                  <img
                   width={65}
                   height={65}
                   src="https://img.icons8.com/stencil/32/m.png"
                   alt="M logo"
                   className="h-[52px] w-[52px] md:h-[58px] md:w-[58px]"
              />
                 <p className="hidden md:block text-white text-2xl font-semibold">
                   Mahfuj
               </p>
               <p className="hidden md:block text-3xl text-white font-semibold">
                   Alam
               </p>
               </div> 
                <div className="flex mt-1 md:mt-2 gap-3 md:gap-5">
                <Button 
                    text="home" 
                   onClick={handleHomeClick} 
                   className="cursor-pointer hover:scale-95 transition duration-300"
               />
                <Button 
                   text="projects" 
                   onClick={handleProjectsClick} 
                   className="cursor-pointer hover:scale-95 transition duration-300"
                />
                </div>
           </nav>
      <Projects />
      <button
        type="button"
        onClick={handleBackToTop}
        className="fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-slate-900/80 text-white shadow-lg backdrop-blur-md transition hover:-translate-y-0.5 hover:border-cyan-300/40 hover:text-cyan-300"
        aria-label="Back to top"
        title="Back to top"
      >
        <FaArrowUp className="text-sm" />
      </button>
    </div>
  )
}

export default ProjectsRoute
