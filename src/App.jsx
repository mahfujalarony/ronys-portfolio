import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '@fontsource/raleway';
import Button from './Components/ProjectButton';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import '@fontsource/montserrat';
import '@fontsource/michroma';
import skills from './data/Skill';
import Projects from './Components/Projects';


const App = () => {


  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleProjectsClick = () => {
    navigate('/projects');
  };

  const contacts = [
    {
      name: 'GitHub',
      icon: <FaGithub className="text-white group-hover:text-gray-400 text-2xl" />,
      link: 'https://github.com/mahfujalarony',
      bg: 'bg-[#24292e]'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-white group-hover:text-[#0A66C2] text-2xl" />,
      link: 'https://www.linkedin.com/in/mahfuj-alam-rony-b14458248/',
      bg: 'bg-[#0A66C2]'
    },
    {
      name: 'LeetCode',
      icon: <SiLeetcode className="text-white group-hover:text-[#FFA116] text-2xl" />,
      link: 'https://leetcode.com/u/mahhfujalamrony/',
      bg: 'bg-[#FFA116]'
    },
    {
      name: 'Facebook',
      icon: <FaFacebook className="text-white group-hover:text-[#1877F2] text-2xl" />,
      link: 'https://www.facebook.com/mahaphuja.alama.rani.2025/',
      bg: 'bg-[#1877F2]'
    },
    {
      name: 'Email',
      icon: <FaEnvelope className="text-white group-hover:text-red-500 text-2xl" />,
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=mahfujalamrony07@gmail.com',
      bg: 'bg-[#D44638]'
    }
  ];

  return (
    <div className="relative bg-gray-800">
      <div className="opacity-60">
        <div className="bg-lines">
          <div className="bg-line"></div>
          <div className="bg-line"></div>
          <div className="bg-line"></div>
          <div className="bg-line"></div>
          <div className="bg-line"></div>
          <div className="bg-line"></div>
          <div className="bg-line"></div>
          <div className="bg-line"></div>
          <div className="bg-line"></div>
          <div className="bg-line"></div>
          <div className="bg-line"></div>
        </div>
      </div>

      <div className="min-h-screen relative z-10"> 
        <nav className="flex justify-around items-center md:py-4 shadow-sm">
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

        <main className="container mx-auto px-4 py-12 text-center">  
          <h1 className="text-2xl sm:text-3xl md:text-4xl  font-bold mb-3 sm:mb-4 md:mt-8 lg:mt-10 font-raleway text-center">
            <span className="bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#f472b6] bg-clip-text text-transparent leading-snug">
              Mahfuj Alam Rony
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-2xl mt-3 sm:mt-6 font-raleway text-gray-100 leading-relaxed text-center">
            Hello, I am a <span className="italic text-sky-400">Full Stack Developer</span>.
          </p>

          <p className="text-base sm:text-lg md:text-2xl mt-2 font-raleway text-gray-100 leading-relaxed text-center">
            I have experience with{" "}
            <span className="italic text-indigo-400">React/Next.js</span>,{" "}
            <span className="italic text-emerald-400">Node.js</span>,{" "}
            <span className="italic text-purple-400">PostgreSQL</span>, and{" "}
            <span className="italic text-pink-400">MongoDB</span>.
          </p>



          <div className="btn-g mt-10 flex gap-4 justify-center">
            <span className="br">
              <a
                href="mailto:mahfujalamrony07@gmail.com?subject=From Portfolio"
                className="clink flex items-center gap-2"
              >
                <i className="fa-solid fa-envelope" />
                <span className="text-lg lg:text-xl">Contact Me</span>
              </a>
            </span>

            <span className="br">
              <a 
                className="clink flex items-center gap-2"  
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/15ul3EEEGJfWgzPMgc9DYmcedlOzp2ysg/view?usp=drive_link"
              >
                <i className="fa-solid fa-file" />
                <span className="text-lg md:text-xl">My Resume</span>
              </a>
            </span>
          </div>
        </main>
      </div>

      <div className="w-full relative bg-white">
        <div className="wave">
          <div className="w w-1"></div>
          <div className="w w-2"></div>
          <div className="w w-3"></div>
          <div className="w w-4"></div>
        </div>
      </div>

      {/* About Me */}

      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-700 to-gray-800 text-white px-4 py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
          <div className="rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/40 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex-shrink-0 hover:scale-105 transition-transform duration-500">
            <img
              src="/rony.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          
          <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-michroma font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h1>

            <p className="text-gray-300 font-montserrat text-base sm:text-lg md:text-xl leading-relaxed hover:scale-102 transition-transform duration-300">
              Hello! I&apos;m a passionate <span className="italic text-sky-400">Full Stack Developer</span> currently pursuing 
              Computer Science &amp; Technology at Kishoregonj Polytechnic Institute.
            </p>

            <p className="text-gray-300 font-montserrat text-base sm:text-lg md:text-xl leading-relaxed hover:scale-102 transition-transform duration-300">
              I build modern, scalable web applications using <span className="italic text-indigo-400">React.js</span>, 
              <span className="italic text-purple-400"> Next.js</span>, and efficient state management tools.
            </p>

            <p className="text-gray-300 font-montserrat text-base sm:text-lg md:text-xl leading-relaxed hover:scale-102 transition-transform duration-300">
              On the backend, I work with <span className="italic text-emerald-400">Node.js</span>, 
              <span className="italic text-green-400"> Express.js</span>, 
              <span className="italic text-pink-400"> MongoDB</span>, and 
              <span className="italic text-yellow-400"> PostgreSQL</span> to build secure and efficient APIs.
            </p>

            <p className="text-gray-300 font-montserrat text-base sm:text-lg md:text-xl leading-relaxed hover:scale-102 transition-transform duration-300">
              My goal is to create end-to-end solutions with clean architecture, smooth user experience, and continuous learning of new technologies.
            </p>
          </div>

        </div>
      </section>


      {/* Skills  */}
      <div className="min-h-screen py-20 px-4 bg-gray-700 text-white relative">
        <div className="relative z-10 max-w-4xl mx-auto">
        
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              My Skills
            </h1>
          </div>

        
          <div className="relative">
          
            <div className="absolute left-4 sm:left-6 md:left-8 lg:left-10 w-[2px] bg-purple-400 top-0 bottom-0"></div>

            {skills.map((skill, index) => (
              <div key={index} className="relative mb-12 pl-12 sm:pl-16 md:pl-20 lg:pl-24">
              
                <div className="absolute left-0 top-2 w-4 h-4 bg-purple-400 rounded-full border-4 border-gray-700"></div>

              
                <div className="bg-slate-800 p-4 sm:p-6 rounded-xl shadow-lg">
                  <h3 className="text-green-400 text-lg sm:text-xl font-bold">{skill.name}</h3>
                  <span className="text-xs sm:text-sm text-purple-400 font-medium">{skill.category}</span>

                  <p className="text-slate-300 mt-3 mb-4 text-sm sm:text-base">{skill.description}</p>

                
                  <div>
                    <div className="flex justify-between items-center mb-2 text-xs sm:text-sm">
                      <span className="font-medium text-slate-400">Proficiency</span>
                      <span className="font-bold text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden relative">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      

      {/* Projects */}

      <div className="relative z-20">
        <Projects />
      </div>

      

      {/* Contact */}

      <div className="min-h-[50vh] flex flex-col items-center justify-center text-white p-4 bg-gray-800">
        <div className="flex flex-wrap justify-center gap-8 max-w-3xl">
          {contacts.map((contact, index) => {
            const gradientBg = {
              GitHub: "bg-gradient-to-r from-gray-700 via-gray-900 to-black",
              LinkedIn: "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700",
              LeetCode: "bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400",
              Facebook: "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600",
              Email: "bg-gradient-to-r from-red-500 via-red-600 to-pink-500",
            };

            return (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center p-6 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg ${gradientBg[contact.name]} z-10`}
              >
                <div className="mb-2">
                  {React.cloneElement(contact.icon, {
                    className: `text-white group-hover:text-gray-300 text-2xl transition-colors duration-300`
                  })}
                </div>
                <span className="text-lg font-medium text-white group-hover:text-gray-300 transition-colors duration-300">
                  {contact.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>

    </div>
  )
}

export default App