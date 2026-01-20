import { motion, scale } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaVuejs,
} from "react-icons/fa";
import { SiTailwindcss, SiVite, SiFigma, SiAdobeillustrator,SiAdobephotoshop  } from "react-icons/si";
import { DiBootstrap } from "react-icons/di";


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function HomePage() {
  return (
    <main className="bg-gray-100 min-h-screen">
      {/* =====================
          Hero Section
      ====================== */}
      <section className="px-6 pt-32 pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto max-w-6xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                Frontend Developer & UI/UX Designer
              </h1>

              <p className="mx-auto md:mx-0 mt-6 max-w-3xl text-lg text-gray-600">
                I design and build modern web interfaces using React and Vue,
                combining clean code with strong UI/UX principles to create
                meaningful digital experiences.
              </p>

              <div className="mt-10 flex flex-col md:flex-row justify-center md:justify-start gap-4">
                <Link
                  to="/projects"
                  className="rounded-lg bg-teal-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-teal-700 text-center"
                >
                  View Projects
                </Link>
                <Link
                  to="/contact"
                  className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-teal-700 transition hover:bg-gray-100 text-center"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden md:block"
            >
              <img
                src="graduationme.jpg"
                alt="Hero"
                className="rounded-2xl shadow-lg w-full h-135 object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* =====================
          Expertise Section
      ====================== */}
      <section className="bg-gray-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              What I Bring to the Table
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              A balanced mix of frontend engineering, design thinking, and
              business awareness.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Frontend */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <img src="coding.png" alt="Frontend" className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">
                Frontend Development
              </h3>
              <p className="mt-4 text-gray-600">
                Hands on experience building responsive, scalable web
                applications using <strong className="text-blue-700">React</strong> and <strong className="text-green-600">Vue</strong>.
                Focused on performance, component architecture, and maintainable
                codebases.
              </p>
            </motion.div>

            {/* UI/UX */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <img src="iti-logo-422x430.png" alt="UI/UX" className="h-12 w-12 mb-4 object-cover" />
              <h3 className="text-xl font-semibold text-gray-900">
                UI / UX Design
              </h3>
              <p className="mt-4 text-gray-600">
                Trained through the <strong className="text-red-700">ICC Program</strong> in collaboration
                with <strong className="text-red-700">ITI</strong> (UI/UX Development Track), enabling me
                to translate user needs into intuitive interfaces with strong
                visual hierarchy and usability.
              </p>
            </motion.div>

            {/* Business */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <img src="Bis-Logo.png" alt="Business" className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">
                Business Understanding
              </h3>
              <p className="mt-4 text-gray-600">
                Academic background in <strong className="text-blue-500">Business Information Systems </strong>
                at <strong className="text-blue-500"> Helwan University</strong>, allowing me to align
                technical solutions with business objectives, user value, and
                stakeholder expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* =====================
    Expertise Showcase
===================== */}
<section className="px-6 py-24">
  <div className="mx-auto max-w-6xl">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Technical Skills
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        A focused toolkit for building modern, performant, and maintainable
        web applications.
      </p>
    </motion.div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
      {[
        { icon: FaHtml5, label: "HTML5", color: "text-orange-600" },
        { icon: FaCss3Alt, label: "CSS3", color: "text-blue-600" },
        { icon: FaJs, label: "JavaScript", color: "text-yellow-500" },
        { icon: FaReact, label: "React", color: "text-blue-500" },
        { icon: SiTailwindcss, label: "Tailwind CSS", color: "text-blue-400" },
        { icon: FaVuejs, label: "Vue", color: "text-green-700" },
        { icon: FaGitAlt, label: "Git & GitHub" },
        { icon: SiVite, label: "Vite", color: "text-purple-500" },
        { icon: SiFigma, label: "Figma", color: "text-purple-600" },
        { icon: DiBootstrap, label: "Bootstrap", color: "text-purple-700" },
        { icon: SiAdobephotoshop, label: "Photoshop", color: "text-blue-700" },
        { icon: SiAdobeillustrator, label: "Illustrator", color: "text-yellow-600" },
      ].map((skill, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex flex-col items-center justify-center rounded-2xl bg-white p-8"
        >
          <skill.icon className={`text-4xl ${skill.color || "text-gray-900"}`} />
          <span className="mt-4 text-sm font-medium text-gray-700">
            {skill.label}
          </span>
        </motion.div>
      ))}
    </div>

  </div>
</section>

    </main>
  );
}

export default HomePage;
