import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaGoogleDrive } from "react-icons/fa";
import projects from "../data/Projects";

const categoryStyles = {
  Fullstack:
    "from-emerald-500/20 to-cyan-500/20 text-emerald-300 border-emerald-400/20",
  "Full Stack":
    "from-emerald-500/20 to-cyan-500/20 text-emerald-300 border-emerald-400/20",
  Frontend:
    "from-blue-500/20 to-indigo-500/20 text-blue-300 border-blue-400/20",
  "Mern Stack":
    "from-green-500/20 to-lime-500/20 text-green-300 border-green-400/20",
  "Html/Css":
    "from-orange-500/20 to-pink-500/20 text-orange-300 border-orange-400/20",
};

const techColors = {
  "React.js": "text-cyan-300 bg-cyan-500/10 border-cyan-400/20",
  "React js": "text-cyan-300 bg-cyan-500/10 border-cyan-400/20",
  "Next.js": "text-slate-200 bg-slate-500/10 border-slate-400/20",
  "Node.js": "text-green-300 bg-green-500/10 border-green-400/20",
  "Express.js": "text-zinc-200 bg-zinc-500/10 border-zinc-400/20",
  MongoDB: "text-emerald-300 bg-emerald-500/10 border-emerald-400/20",
  "Tailwind CSS": "text-sky-300 bg-sky-500/10 border-sky-400/20",
  TypeScript: "text-blue-300 bg-blue-500/10 border-blue-400/20",
  "Socket.io": "text-purple-300 bg-purple-500/10 border-purple-400/20",
  "Framer Motion": "text-pink-300 bg-pink-500/10 border-pink-400/20",
  "Framer motion": "text-pink-300 bg-pink-500/10 border-pink-400/20",
  Firebase: "text-amber-300 bg-amber-500/10 border-amber-400/20",
};

const ActionButton = ({ href, label, variant = "secondary", icon }) => {
  const base =
    "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs sm:text-sm font-semibold transition border";
  const variants = {
    primary:
      "bg-blue-600 border-blue-500 text-white hover:bg-blue-500 hover:border-blue-400",
    secondary:
      "bg-white/5 border-white/10 text-slate-200 hover:bg-white/10 hover:border-white/20",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]}`}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

const Projects = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500 blur-3xl" />
        <div className="absolute bottom-0 left-8 h-40 w-40 rounded-full bg-purple-600 blur-3xl" />
        <div className="absolute top-20 right-8 h-40 w-40 rounded-full bg-emerald-500 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 sm:py-20">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold tracking-[0.18em] uppercase text-slate-300">
            Portfolio Projects
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Selected <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            Real projects with frontend, backend, real-time features, and production-style UI work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const categoryClass =
              categoryStyles[project.category] ||
              "from-slate-500/20 to-slate-400/10 text-slate-200 border-white/10";

            return (
              <motion.article
                key={`${project.num}-${project.title}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.8)] backdrop-blur-sm"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt || project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                  <div className="absolute left-3 right-3 top-3 flex items-start justify-between gap-2">
                    <span
                      className={`inline-flex rounded-full border bg-gradient-to-r px-3 py-1 text-[11px] font-semibold ${categoryClass}`}
                    >
                      {project.category}
                    </span>
                    <span className="rounded-full border border-white/10 bg-black/35 px-2.5 py-1 text-[11px] font-semibold text-slate-100 backdrop-blur-sm">
                      #{String(project.num).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <div className="mt-2 h-px w-16 bg-gradient-to-r from-cyan-400 to-transparent" />
                  </div>

                  <p className="mb-4 text-sm leading-6 text-slate-300">
                    {project.description}
                  </p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.stack?.slice(0, 6).map((tech, idx) => (
                      <span
                        key={`${project.title}-tech-${idx}`}
                        className={`rounded-full border px-2.5 py-1 text-[11px] font-medium ${
                          techColors[tech.name] ||
                          "text-slate-200 bg-white/5 border-white/10"
                        }`}
                      >
                        {tech.name}
                      </span>
                    ))}
                    {project.stack?.length > 6 && (
                      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300">
                        +{project.stack.length - 6} more
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.live && (
                      <ActionButton
                        href={project.live}
                        label="Live Demo"
                        variant="primary"
                        icon={<FaExternalLinkAlt className="text-xs" />}
                      />
                    )}
                    {project.github && (
                      <ActionButton
                        href={project.github}
                        label="GitHub"
                        icon={<FaGithub className="text-sm" />}
                      />
                    )}
                    {project.drive && (
                      <ActionButton
                        href={project.drive}
                        label="Drive"
                        icon={<FaGoogleDrive className="text-sm" />}
                      />
                    )}
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 opacity-0 transition group-hover:opacity-100" />
              </motion.article>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center backdrop-blur-sm">
          <p className="text-sm sm:text-base text-slate-300">
            If you want to see all of my projects, please visit my{" "}
            <a
              href="https://github.com/mahfujalarony"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cyan-300 underline decoration-cyan-400/60 underline-offset-4 hover:text-cyan-200"
            >
              GitHub profile
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
