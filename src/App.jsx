import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '@fontsource/raleway';
import { motion, AnimatePresence } from 'framer-motion'
import Button from './Components/ProjectButton';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import '@fontsource/montserrat';
import '@fontsource/michroma';
import skills from './data/Skill';
import Projects from './Components/Projects';

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools', 'DSA'];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 10 } }
  };

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
    <div className="relative bg-gradient-to-b from-[#525283] via-[#23234b] to-[#0f3460]">
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

        <main className="container mx-auto px-4 py-12 text-center">  
          <h1 className="text-4xl md:mt-10 font-bold mb-4 font-raleway">
            <span className="bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#f472b6] bg-clip-text text-transparent leading-[2.1]">
              Mahfuj Alam Rony
            </span>
          </h1>
          <p className="text-2xl md:text-3xl mt-10 font-raleway text-gray-100">
            I am a <span className="font-bold">frontend developer</span>, and I also have <span className="font-bold">backend skills</span>.
          </p>

          <div className="btn-g mt-10 flex gap-4 justify-center">
            <span className="br">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mahfujalamrony07@gmail.com&su=from portfolio"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-envelope" />
                <span className="text-lg lg:text-xl">Contact Me</span>
              </a>
            </span>
            <span className="br">
              <a 
                className="clink flex items-center gap-2"  
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/142xaY2mVgLMoqJ_vWQeX3Vg9H4xk4aW4/view?usp=sharing"
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

      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-700 to-gray-800 text-white px-4 py-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/40 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 flex-shrink-0 hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/rony.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="flex-1 space-y-6 md:space-y-8 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-michroma font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h1>

            <motion.p
              className="text-gray-300 font-montserrat text-base sm:text-lg md:text-xl leading-relaxed"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Hello! I&apos;m a passionate frontend developer currently pursuing Computer Science & Technology at Kishoregonj Polytechnic Institute.
            </motion.p>

            <motion.p
              className="text-gray-300 font-montserrat text-base sm:text-lg md:text-xl leading-relaxed"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
            >
              I specialize in building modern, high-performance web applications using React.js and state management tools like Redux Toolkit and React Query.
            </motion.p>

            <motion.p
              className="text-gray-300 font-montserrat text-base sm:text-lg md:text-xl leading-relaxed"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
            >
              I love creating interactive UIs with Tailwind CSS, Material UI, and Framer Motion. I also know backend development using Node.js, Express.js, and MongoDB.
            </motion.p>

            <motion.p
              className="text-gray-300 font-montserrat text-base sm:text-lg md:text-xl leading-relaxed"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, delay: 0.3 }}
            >
              My goal is to create seamless user experiences with clean, efficient code while continuously learning new technologies.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className="min-h-screen py-20 px-4 bg-gray-700 text-white relative">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20"
              animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.5, 1] }}
              transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear" }}
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              My Skills
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Crafting digital experiences with modern technologies and creative problem-solving
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div key={selectedCategory} variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredSkills.map((skill, index) => (
                <motion.div key={skill.name} variants={itemVariants} className="group relative" onHoverStart={() => setHoveredSkill(skill.name)} onHoverEnd={() => setHoveredSkill(null)}>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 h-[380px] flex flex-col justify-between">
                    <div className="flex items-center mb-4">
                      <motion.div className="text-4xl mr-6 p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30" whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.5 }}>
                        {skill.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">{skill.name}</h3>
                        <span className="text-xs text-purple-400 font-medium">{skill.category}</span>
                      </div>
                    </div>

                    <p className="text-white text-sm leading-relaxed mb-6 overflow-auto max-h-40 pr-2">{skill.description}</p>

                    <div className="mt-auto">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-medium text-slate-400">Proficiency</span>
                        <span className="text-xs font-bold text-purple-400">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden relative">
                        <motion.div className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400" initial={{ width: 0 }} animate={{ width: `${skill.level}%` }} transition={{ duration: 1.5, delay: index * 0.05, ease: "easeOut" }} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <Projects />

      <div className="min-h-[50vh] flex flex-col items-center justify-center text-white p-4 bg-gray-800">
        <div className="flex flex-wrap justify-center gap-8 max-w-3xl">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center p-6 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg ${contact.bg} z-10`}
            >
              <div className="mb-2">
                {React.cloneElement(contact.icon, {
                  className: `text-white group-hover:text-gray-300 text-2xl transition-colors duration-300`
                })}
              </div>
              <span className="text-lg font-medium text-white group-hover:text-gray-300 transition-colors duration-300">{contact.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App