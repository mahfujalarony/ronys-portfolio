import React from 'react'
import Projects from './Projects'
import { useNavigate } from 'react-router-dom';
import Button from './ProjectButton';

const ProjectsRoute = () => {
    const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleProjectsClick = () => {
    navigate('/projects');
  };

  return (
    <div className="min-h-screen bg-gray-600">
           <nav className="flex justify-around items-center py-4 shadow-sm">
              <div className="mt-5 hover:scale-95 transition duration-300 cursor-pointer flex items-center gap-2">
                  <img
                   width={65}
                   height={65}
                   src="https://img.icons8.com/stencil/32/m.png"
                   alt="M logo"
                   className="h-[65px] w-[65px]"
              />
                 <p className="hidden md:block text-white text-3xl font-semibold">
                   Mahfuj
               </p>
               <p className="hidden md:block text-4xl text-white font-semibold">
                   Alam
               </p>
               </div> 
                <div className="flex mt-5 gap-6">
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
    </div>
  )
}

export default ProjectsRoute
