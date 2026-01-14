import { motion, scale } from "framer-motion";
import { Link } from "react-router-dom";

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
    <main className="bg-white">
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
                  to="/contacts"
                  className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-800 transition hover:bg-gray-100 text-center"
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
                src="heroportfolio.jpg"
                alt="Hero"
                className="rounded-2xl shadow-lg w-full h-auto"
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
              <h3 className="text-xl font-semibold text-gray-900">
                Frontend Development
              </h3>
              <p className="mt-4 text-gray-600">
                Hands-on experience building responsive, scalable web
                applications using <strong>React</strong> and <strong>Vue</strong>.
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
              <h3 className="text-xl font-semibold text-gray-900">
                UI / UX Design
              </h3>
              <p className="mt-4 text-gray-600">
                Trained through the <strong>ICC Program</strong> in collaboration
                with <strong>ITI</strong> (UI/UX Development Track), enabling me
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
              <h3 className="text-xl font-semibold text-gray-900">
                Business Understanding
              </h3>
              <p className="mt-4 text-gray-600">
                Academic background in <strong>Business Information Systems</strong>
                at <strong>Helwan University</strong>, allowing me to align
                technical solutions with business objectives, user value, and
                stakeholder expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================
          Closing Statement
      ====================== */}
      <section className="px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Bridging Design, Code, and Business
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            I aim to deliver digital products that are not only visually refined
            and technically sound, but also aligned with real business needs.
          </p>
        </motion.div>
      </section>
      {/* =====================
    Expertise Showcase
===================== */}
<section className="px-6 py-24">
  <div className="mx-auto max-w-6xl space-y-16">

    {/* Frontend */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}

      className="relative overflow-hidden rounded-3xl bg-gray-100 min-h-75 flex items-center"
    >
      <img
        src="webdev.jpg"
        alt="Frontend Development"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative bg-white/95 p-10 md:p-14 z-10 w-full md:w-1/2">
        <h3 className="text-2xl font-bold text-gray-900">
          Frontend Development
        </h3>
        <p className="mt-4 max-w-2xl text-gray-600">
          I build scalable, responsive web applications using React and Vue,
          focusing on clean architecture, performance optimization, and reusable
          component design.
        </p>
      </div>
    </motion.div>

    {/* UI / UX */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}

      className="relative overflow-hidden rounded-3xl bg-gray-100 min-h-75 flex items-center"
    >
      <img
        src="karakibme.jpg  "
        alt="UI UX Design"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative bg-white/95 p-10 md:p-14 z-10 w-full md:w-1/2 md:ml-auto">
        <h3 className="text-2xl font-bold text-gray-900">
          UI / UX Design
        </h3>
        <p className="mt-4 text-gray-600">
          Through the ICC program with ITI (UI/UX Development Track), I learned
          how to apply user-centered design principles, usability testing, and
          visual consistency to create intuitive digital experiences.
        </p>
      </div>
    </motion.div>

    {/* Business */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
      className="relative overflow-hidden rounded-3xl bg-gray-100 min-h-75 flex items-center"
    >
      <img
        src="graduationme.jpg"
        alt="Business Understanding"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="relative bg-white/95 p-10 md:p-14 z-10 w-full md:w-1/2">
        <h3 className="text-2xl font-bold text-gray-900">
          Business-Oriented Thinking
        </h3>
        <p className="mt-4 max-w-2xl text-gray-600">
          Studying Business Information Systems at Helwan University enables me
          to approach development with an understanding of business processes,
          stakeholder needs, and value-driven decision making.
        </p>
      </div>
    </motion.div>

  </div>
</section>

    </main>
  );
}

export default HomePage;
