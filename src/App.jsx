import React from 'react'
import { useNavigate } from 'react-router-dom';
import '@fontsource/raleway';
import Button from './Components/ProjectButton';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaDatabase, FaCode, FaServer, FaTools, FaLayerGroup, FaArrowUp } from 'react-icons/fa';
import { SiLeetcode, SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiMui, SiFramer, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiTypescript, SiGit, SiAntdesign, SiSocketdotio, SiPrisma } from 'react-icons/si';
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

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      link: 'https://www.linkedin.com/in/mahfuj-alam-rony/',
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

  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category || "Other";
    if (!acc[category]) acc[category] = [];
    acc[category].push(skill);
    return acc;
  }, {});

  const getLevelLabel = (level) => {
    if (level >= 85) return "Advanced";
    if (level >= 65) return "Comfortable";
    if (level >= 45) return "Working";
    return "Learning";
  };

  const skillIconMap = {
    HTML: SiHtml5,
    CSS: SiCss3,
    JavaScript: SiJavascript,
    React: SiReact,
    'Next.js': SiNextdotjs,
    'Tailwind CSS': SiTailwindcss,
    'Material UI': SiMui,
    'Ant Design': SiAntdesign,
    'shadcn/ui': FaLayerGroup,
    'Framer Motion': SiFramer,
    'Node.js': SiNodedotjs,
    'Express.js': SiExpress,
    'Socket.IO': SiSocketdotio,
    MongoDB: SiMongodb,
    Mongoose: FaDatabase,
    Prisma: SiPrisma,
    postgreSQL: SiPostgresql,
    TypeScript: SiTypescript,
    Git: SiGit,
    GitHub: FaGithub,
    DSA: FaCode,
  };

  const categoryIconMap = {
    Frontend: FaCode,
    Backend: FaServer,
    Database: FaDatabase,
    Tools: FaTools,
    DSA: SiLeetcode,
    Other: FaCode,
  };

  return (
    <div className="relative bg-slate-900 text-white">
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
        <nav className="sticky top-0 z-30 border-b border-white/10 bg-slate-900/70 backdrop-blur-md shadow-sm">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex justify-around items-center py-2 md:py-3">
          <div className="mt-1 md:mt-2 hover:scale-95 transition duration-300 cursor-pointer flex items-center gap-2">
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
          </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-10 sm:py-12 text-center">
          <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 px-4 py-8 sm:px-6 sm:py-10 md:px-10 backdrop-blur-md shadow-[0_30px_120px_-50px_rgba(0,0,0,0.8)]">
            <p className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-slate-300">
              Full Stack Developer
            </p>

            <h1 className="mt-5 font-raleway text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05] text-center">
              <span className="block text-white/95">Hi, I&apos;m</span>
              <span className="block mt-2 bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
                Mahfuj Alam Rony
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-[15px] sm:text-lg md:text-xl font-montserrat text-slate-200 leading-8">
              I build modern web applications with
              <span className="font-semibold text-cyan-300"> React/Next.js</span>,
              <span className="font-semibold text-emerald-300"> Node.js</span>,
              <span className="font-semibold text-purple-300"> PostgreSQL</span>, and
              <span className="font-semibold text-pink-300"> MongoDB</span>.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1.5 text-xs sm:text-sm text-cyan-200">
                UI + API Development
              </span>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-xs sm:text-sm text-emerald-200">
                Real Projects
              </span>
              <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs sm:text-sm text-violet-200">
                Available for Hire
              </span>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2">
                  <FaCode className="text-cyan-300" />
                  <p className="text-sm font-semibold text-white">Frontend</p>
                </div>
                <p className="mt-2 text-xs text-slate-400 leading-5">React, Next.js, Tailwind, Motion, UI libraries</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2">
                  <FaServer className="text-emerald-300" />
                  <p className="text-sm font-semibold text-white">Backend</p>
                </div>
                <p className="mt-2 text-xs text-slate-400 leading-5">Node.js, Express, REST APIs, Socket.IO</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2">
                  <FaDatabase className="text-purple-300" />
                  <p className="text-sm font-semibold text-white">Database</p>
                </div>
                <p className="mt-2 text-xs text-slate-400 leading-5">MongoDB, Mongoose, Prisma, PostgreSQL</p>
              </div>
            </div>

            <div className="btn-g mt-8 flex gap-4 justify-center">
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
                href="https://docs.google.com/document/d/10KST_KE4N7Tc8nS2zg4lYLfYeXMhG1hsJK532btbSgY/edit?usp=drive_link"
                target="_blank"
              >
                <i className="fa-solid fa-file" />
                <span className="text-lg md:text-xl">My Resume</span>
              </a>
            </span>
            </div>
          </div>
        </main>
      </div>

      <div className="w-full relative bg-slate-950">
        <div className="wave">
          <div className="w w-1"></div>
          <div className="w w-2"></div>
          <div className="w w-3"></div>
          <div className="w w-4"></div>
        </div>
      </div>

      {/* About Me */}

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white px-4 py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute left-8 top-12 h-44 w-44 rounded-full bg-cyan-500 blur-3xl" />
          <div className="absolute right-8 bottom-10 h-48 w-48 rounded-full bg-violet-600 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-10 lg:gap-14 items-center">
          <div className="mx-auto">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-500/20 blur-xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-3 backdrop-blur-md shadow-2xl">
                <div className="rounded-[1.4rem] overflow-hidden ring-2 ring-cyan-400/30 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
                  <img
                    src="/ronynew.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2">
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center">
                <p className="text-lg font-bold text-cyan-300">Full</p>
                <p className="text-[11px] text-slate-400">Stack</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center">
                <p className="text-lg font-bold text-emerald-300">API</p>
                <p className="text-[11px] text-slate-400">Backend</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center">
                <p className="text-lg font-bold text-purple-300">UI</p>
                <p className="text-[11px] text-slate-400">Frontend</p>
              </div>
            </div>
          </div>

              <div className="text-center lg:text-left">
                <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-slate-300">
                  About Me
                </p>

                <h1 className="mt-4 font-raleway text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-extrabold leading-[1.1] tracking-tight bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text text-transparent">
                  Building modern web products end-to-end
                </h1>

                <div className="mt-6 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-sm text-left mx-auto lg:mx-0">
                  <p className="font-montserrat text-[15px] sm:text-[16px] md:text-[17px] leading-8 text-slate-100">
                    Hello! I&apos;m a passionate <span className="font-semibold text-sky-300">Full Stack Developer</span> currently pursuing
                    <span className="text-white"> Computer Science &amp; Technology</span> at Kishoregonj Polytechnic Institute.
                  </p>

                  <p className="mt-4 font-montserrat text-[15px] sm:text-[16px] md:text-[17px] leading-8 text-slate-300">
                    I build scalable applications using <span className="font-semibold text-indigo-300">React.js / Next.js</span> on the frontend and
                    <span className="font-semibold text-emerald-300"> Node.js / Express.js</span> on the backend with
                    <span className="font-semibold text-pink-300"> MongoDB</span> and <span className="font-semibold text-yellow-300">PostgreSQL</span>.
                  </p>

                  <div className="mt-4 rounded-xl border-l-2 border-cyan-300/60 bg-slate-900/40 px-4 py-3">
                    <p className="font-montserrat text-[14px] sm:text-[15px] md:text-[16px] leading-7 text-slate-200">
                      I focus on clean architecture, smooth user experience, and continuous improvement through real-world projects.
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">Problem Solving</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">Clean Code</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">Responsive UI</span>
                  </div>
                </div>

            </div>
          </div>
        </section>


      {/* Skills  */}
      <div className="min-h-screen py-20 px-4 bg-gray-700 text-white relative">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              My Skills
            </h1>
            <p className="text-gray-300 text-sm sm:text-base">
              Skills grouped by category for quick overview
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <div
                key={category}
                className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-5 sm:p-6 shadow-xl border border-slate-700/80"
              >
                {(() => {
                  const CategoryIcon = categoryIconMap[category] || FaCode;
                  return (
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/20 flex items-center justify-center">
                          <CategoryIcon className="text-lg text-cyan-300" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-white leading-tight">{category}</h2>
                          <p className="text-xs text-slate-400">Core technologies</p>
                        </div>
                      </div>
                      <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 font-semibold border border-purple-400/20">
                        {categorySkills.length} items
                      </span>
                    </div>
                  );
                })()}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {categorySkills.map((skill) => (
                    (() => {
                      const SkillIcon = skillIconMap[skill.name] || FaCode;
                      return (
                        <div
                          key={`${category}-${skill.name}`}
                          title={skill.description}
                          className="group rounded-xl border border-slate-700 bg-slate-900/90 p-3 hover:border-cyan-400/60 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.15)] transition"
                        >
                          <div className="flex items-start gap-3">
                            <div className="h-9 w-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 group-hover:border-cyan-400/40">
                              <SkillIcon className="text-lg text-cyan-300" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-sm font-semibold text-slate-100 truncate">{skill.name}</span>
                                <span className="text-[11px] font-semibold text-purple-300 shrink-0">{skill.level}%</span>
                              </div>
                              <div className="mt-1 flex items-center justify-between gap-2">
                                <span className="text-[11px] text-slate-400">{getLevelLabel(skill.level)}</span>
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                                  {category}
                                </span>
                              </div>
                              <div className="mt-2 h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
                                <div
                                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                                  style={{ width: `${skill.level}%` }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })()
                  ))}
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

      <footer className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-black to-slate-950 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -top-8 left-10 h-36 w-36 rounded-full bg-cyan-500 blur-3xl" />
          <div className="absolute bottom-0 right-10 h-36 w-36 rounded-full bg-purple-600 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-md shadow-[0_20px_80px_-40px_rgba(0,0,0,0.85)]">
            <div className="text-center">
              <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold tracking-[0.15em] uppercase text-slate-300">
                Let&apos;s Connect
              </p>
              <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold">
                Build Something <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">Amazing</span> Together
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
                Available for hiring. If your company is looking for a full-stack developer, feel free to contact me.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 hover:border-white/20 transition"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/20">
                    {React.cloneElement(contact.icon, {
                      className: "text-white text-xl transition group-hover:scale-110"
                    })}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white truncate">{contact.name}</p>
                    <p className="text-xs text-slate-400">Open link</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10 pt-5 text-xs sm:text-sm text-slate-400">
              <p>© {new Date().getFullYear()} Mahfuj Alam Rony. All rights reserved.</p>
              <p>Built with React, Tailwind CSS, and Framer Motion</p>
            </div>
          </div>
        </div>
      </footer>

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

export default App
