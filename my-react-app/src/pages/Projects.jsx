import { motion } from "framer-motion";
import projects from "../data/projects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function Projects() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-100 via-teal-50/30 to-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl font-bold text-teal-700">
            My Projects
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 text-lg">
              A selection of projects demonstrating my skills in modern <span className="text-teal-600 font-bold">frontend
              development</span>, <span className="text-teal-600 font-bold">clean UI design</span>, and  <span className="text-teal-600 font-bold">business driven scalable architecture</span>.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-gray-200 bg-white p-6 hover:scale-102 shadow-sm transition-shadow hover:shadow-lg"
            >
              {/* Image */}
              <div className="mb-5 overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900">
                {project.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-6 flex items-center gap-4">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-indigo-600 hover:underline"
                  >
                    Live Demo
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-700 hover:underline"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
