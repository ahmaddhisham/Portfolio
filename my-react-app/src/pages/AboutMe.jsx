import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function AboutMe() {
  return (
    <main className="bg-white">
      {/* =====================
          Header
      ====================== */}
      <section className="px-6 pt-32 pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto max-w-4xl text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900">
            About Me
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            A frontend developer and UI/UX designer with a strong technical
            foundation and a business-oriented mindset.
          </p>
        </motion.div>
      </section>

      {/* =====================
          About Content
      ====================== */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl space-y-16">

          {/* Who I Am */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-2xl font-semibold text-gray-900">
              Who I Am
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-gray-600">
              I am a frontend developer passionate about crafting modern,
              intuitive web interfaces. My work focuses on building scalable
              applications using <strong>React</strong> and <strong>Vue</strong>,
              while maintaining clean architecture and strong attention to user
              experience.
            </p>
          </motion.div>

          {/* UI UX Background */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-2xl font-semibold text-gray-900">
              UI / UX & Design Thinking
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-gray-600">
              I enhanced my design skills through the <strong>ICC Program</strong>
              in collaboration with <strong>ITI</strong>, specializing in the
              UI/UX Development Track. This experience trained me to approach
              problems from a user-centered perspective, ensuring that interfaces
              are not only visually appealing but also intuitive and usable.
            </p>
          </motion.div>

          {/* Business Background */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-2xl font-semibold text-gray-900">
              Business-Oriented Background
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-gray-600">
              I am currently studying <strong>Business Information Systems</strong>
              at <strong>Helwan University</strong>, which enables me to understand
              how technology supports business processes, decision-making, and
              strategic goals. This background allows me to build solutions that
              deliver real value beyond code.
            </p>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-3xl bg-gray-50 p-10"
          >
            <h2 className="text-2xl font-semibold text-gray-900">
              My Approach
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-gray-600">
              I believe great digital products sit at the intersection of
              thoughtful design, solid engineering, and business awareness.
              My goal is to deliver interfaces that are clean, performant,
              user-focused, and aligned with real-world needs.
            </p>
          </motion.div>

        </div>
      </section>
    </main>
  );
}

export default AboutMe;
