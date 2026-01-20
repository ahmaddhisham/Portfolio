import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Code, Palette, TrendingUp, Target, Sparkles, ChevronRight, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { icon: <Code size={24} />, label: "React & Vue", desc: "Modern frameworks" },
    { icon: <Palette size={24} />, label: "UI/UX Design", desc: "User-centered design" },
    { icon: <TrendingUp size={24} />, label: "Business Strategy", desc: "Value-driven solutions" },
    { icon: <Target size={24} />, label: "Problem Solving", desc: "Analytical approach" },
  ];

  return (
    <main className="bg-gradient-to-b from-white via-gray-50 to-white">
      {/* =====================
          Enhanced Header
      ====================== */}
      <section className="px-6 pt-32 pb-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200/10 rounded-full blur-3xl" />
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto max-w-6xl relative"
        >
          <motion.div variants={fadeUp} className="text-center">
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-teal-700 text-sm font-medium mb-6"
            >
              <Sparkles size={16} />
              Frontend Developer & UI/UX Designer
            </motion.span>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
              Crafting Digital
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-teal-900">
                Experiences
              </span>
            </h1>
            
            <motion.p 
              variants={fadeUp}
              className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              I bridge the gap between <strong className="text-gray-900">beautiful design</strong>,{" "}
              <strong className="text-gray-900">solid engineering</strong>, and{" "}
              <strong className="text-gray-900">business value</strong> to create products that users love and businesses need.
            </motion.p>
          </motion.div>

          {/* Skills Highlights */}
          <motion.div
            variants={staggerContainer}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="text-teal-600 mb-3">{skill.icon}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {skill.label}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* =====================
          Enhanced Content Sections
      ====================== */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-6xl space-y-20">
          
          {/* Who I Am - Enhanced */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="relative"
          >
            <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-teal-500 to-teal-800 rounded-full" />
            <div className="pl-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-100 to-gray-100 flex items-center justify-center">
                  <Code className="text-teal-600" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Technical Foundation
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-gray-600 max-w-3xl">
                I build modern, scalable web applications using{" "}
                <strong className="text-gray-900">React</strong> and{" "}
                <strong className="text-gray-900">Vue.js</strong>, with a focus on clean architecture, 
                performance optimization, and maintainable code. My development process incorporates 
                modern tools like <strong className="text-gray-900">Javascript</strong>,{" "}
                <strong className="text-gray-900">Tailwind CSS</strong>, and{" "}
                <strong className="text-gray-900">Next.js</strong> to deliver robust solutions.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-3">
                {["React", "Vue.js", "TypeScript","Javascript", "Next.js", "Tailwind", "Framer Motion","Figma"].map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* UI/UX Background - Enhanced */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="bg-gradient-to-r from-teal-50/50 to-green-50/80 rounded-3xl p-10 md:p-12"
          >
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Palette className="text-teal-600" size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Design Thinking & UI/UX
                  </h2>
                </div>
                <p className="text-lg leading-relaxed text-gray-600">
                  Through the <strong className="text-gray-900">ICC Program</strong> in collaboration with{" "}
                  <strong className="text-gray-900">ITI</strong>, I've mastered the art of creating 
                  user-centered interfaces. My design process involves:
                </p>
                <ul className="mt-6 space-y-4 font-bold">
                  {[
                    "User research and persona development",
                    "Wireframing and prototyping",
                    "Usability testing and iteration",
                    "Accessibility and responsive design",
                    "Design systems implementation"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-600">
                      <ChevronRight size={20} className="text-gray-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/3">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="font-bold text-gray-900 mb-3">Certification</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">ICC Program - UI/UX Development Track</p>
                    <p className="text-xs text-gray-500">Information Technology Institute (ITI)</p>
                    <div className="pt-3">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        Completed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Business Background - Enhanced */}
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
  variants={fadeUp}
  className="grid md:grid-cols-2 gap-10 items-center"
>
  <div>
    <div className="flex items-center gap-3 mb-6">
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-100 to-blue-100 flex items-center justify-center">
        <GraduationCap className="text-green-600" size={24} />
      </div>
      <h2 className="text-3xl font-bold text-gray-900">
        Business Foundation
      </h2>
    </div>
    <p className="text-lg leading-relaxed text-gray-600">
      I hold a <strong className="text-gray-900">Bachelor's degree in Business Information Systems</strong> from{" "}
      <strong className="text-gray-900">Helwan University</strong>, which equipped me with a solid understanding of 
      how technology integrates with and drives business processes. This formal education enables me to:
    </p>
    <ul className="mt-6 space-y-3">
      {[
        "Translate business requirements into technical solutions",
        "Analyze systems from both operational and strategic perspectives",
        "Optimize digital products for measurable ROI and business impact",
        "Bridge communication between technical teams and business stakeholders",
        "Apply data-driven decision making to development processes"
      ].map((item, index) => (
        <motion.li 
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors group"
        >
          <div className="flex-shrink-0 mt-0.5">
            <Target size={18} className="text-green-500 group-hover:scale-110 transition-transform" />
          </div>
          <span className="text-gray-700">{item}</span>
        </motion.li>
      ))}
    </ul>
    
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-100"
    >
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
          <GraduationCap size={20} className="text-green-600" />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-900">Bachelor of Business Information Systems</p>
          <p className="text-xs text-gray-600">Helwan University | Graduated</p>
        </div>
      </div>
    </motion.div>
  </div>
  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
        <Target size={20} />
      </div>
      <h3 className="text-2xl font-bold">The Strategic Edge</h3>
    </div>
    <p className="text-gray-300 mb-8">
      My business education provides a competitive advantage in developing solutions that align 
      technical excellence with organizational objectives and market needs.
    </p>
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-300">Technical Implementation</span>
          <span className="font-bold text-green-400">100%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2.5 rounded-full"
          ></motion.div>
        </div>
      </div>
      
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-300">Business Alignment</span>
          <span className="font-bold text-purple-400">100%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="bg-gradient-to-r from-purple-500 to-pink-400 h-2.5 rounded-full"
          ></motion.div>
        </div>
      </div>
      
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-300">Strategic Impact</span>
          <span className="font-bold text-yellow-400">100%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="bg-gradient-to-r from-green-500 to-yellow-400 h-2.5 rounded-full"
          ></motion.div>
        </div>
      </div>
    </div>
    
    <div className="mt-8 pt-6 border-t border-gray-700">
      <p className="text-sm text-gray-400 italic">
        "Understanding the why behind the what transforms good code into valuable products."
      </p>
    </div>
  </div>
</motion.div>

          {/* Philosophy - Enhanced */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
            className="relative overflow-hidden rounded-3xl bg-linear-to-r from-slate-400 to-sky-700 p-10 text-white"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-48 translate-y-48" />
            
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-700 backdrop-blur-sm mb-6">
                <Sparkles size={16} />
                <span className="text-sm font-medium">My Philosophy</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-6">
                Building What Matters
              </h2>
              
              <p className="text-xl leading-relaxed text-white mb-8">
                I believe exceptional digital products emerge when technical excellence, 
                thoughtful design, and business acumen converge. Every line of code, 
                every design decision, and every feature should serve a purpose
                solving real problems and creating meaningful value.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/projects")}
                  className="px-8 py-3 bg-sky-700 text-white rounded-full font-semibold hover:shadow-lg transition-shadow"
                >
                  View My Work
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/contact")}
                  className="px-8 py-3 bg-transparent border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
                >
                  Let's Connect
                </motion.button>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}

export default AboutMe;