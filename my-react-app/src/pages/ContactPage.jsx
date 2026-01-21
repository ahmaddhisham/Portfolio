import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Linkedin,
  Github,
  MessageSquare,
  Clock,
  Globe,
  Briefcase,
  Calendar,
} from "lucide-react";

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
      delayChildren: 0.1,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setServerError("");
    setIsSubmitted(false);

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setServerError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data?.error || "Failed to send message.");
      }

      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setServerError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "ahmaddhisham5555@gmail.com",
      link: "mailto:ahmaddhisham5555@gmail.com",
      bgColor: "bg-teal-100",
      iconColor: "text-teal-700",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+20 1020751794",
      link: "tel:+201020751794",
      bgColor: "bg-teal-100",
      iconColor: "text-teal-700",
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Cairo, Egypt",
      link: "#",
      bgColor: "bg-teal-200/50",
      iconColor: "text-teal-700",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ahmad-hisham-a942a6221/",
      bgColor: "bg-teal-600",
      hoverColor: "hover:bg-teal-700",
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      href: "https://github.com/ahmaddhisham",
      bgColor: "bg-teal-600",
      hoverColor: "hover:bg-teal-700",
    },
    {
      icon: <MessageSquare size={20} />,
      label: "WhatsApp",
      href: "https://wa.me/+201020751794",
      bgColor: "bg-teal-600",
      hoverColor: "hover:bg-teal-700",
    },
  ];

  return (
    <main className="bg-gradient-to-b from-gray-100 via-teal-50/30 to-white">
      {/* =====================
          Header
      ====================== */}
      <section className="px-6 pt-32 pb-20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-50/40 to-emerald-50/40" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl" />

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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-6"
            >
              <MessageSquare size={16} />
              Let's Connect
            </motion.span>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
              Get In
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">
                Touch
              </span>
            </h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Have a project in mind? Let's discuss how we can bring your ideas to life
              with beautiful design and solid engineering.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* =====================
          Contact Content
      ====================== */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left Column - Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-1 space-y-8"
            >
              {/* Contact Methods */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
                <p className="text-gray-600">
                  Feel free to reach out through any of these channels. I typically respond within 24 hours.
                </p>

                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={index}
                      href={method.link}
                      variants={scaleIn}
                      whileHover={{ x: 5 }}
                      className={`flex items-center gap-4 p-4 rounded-2xl ${method.bgColor} border border-teal-100 hover:border-teal-200 transition-all duration-300 group`}
                    >
                      <div className={`p-3 rounded-lg ${method.iconColor} bg-white shadow-sm group-hover:shadow transition-shadow`}>
                        {method.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{method.title}</p>
                        <p className="font-medium text-gray-900">{method.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className={`${social.bgColor} ${social.hoverColor} text-white p-3 rounded-xl transition-all duration-300 shadow hover:shadow-lg`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <motion.div
                variants={scaleIn}
                className="bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-2xl p-6 border border-teal-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="font-medium text-gray-900">Currently Available</span>
                </div>
                <p className="text-sm text-gray-600">
                  Open for new projects and collaboration opportunities. Let's create something amazing together!
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-teal-100">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Send a Message</h3>
                  <p className="text-gray-600">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal-100 mb-6">
                      <CheckCircle size={40} className="text-teal-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h4>
                    <p className="text-gray-600 max-w-md mx-auto">
                      Thank you for reaching out. I've received your message and will respond within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {serverError && (
                      <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {serverError}
                      </div>
                    )}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border ${errors.name ? "border-red-300" : "border-gray-300"
                            } focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all`}
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border ${errors.email ? "border-red-300" : "border-gray-300"
                            } focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all`}
                          placeholder="you@example.com"
                        />
                        {errors.email && (
                          <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                        placeholder="Project inquiry"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full px-4 py-3 rounded-xl border ${errors.message ? "border-red-300" : "border-gray-300"
                          } focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all resize-none`}
                        placeholder="Tell me about your project..."
                      />
                      {errors.message && (
                        <p className="mt-2 text-sm text-red-600">{errors.message}</p>
                      )}
                    </div>

                    <div className="pt-4">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full flex items-center justify-center gap-3 py-4 px-8 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${isSubmitting ? "opacity-80 cursor-not-allowed" : ""
                          }`}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send size={20} />
                          </>
                        )}
                      </motion.button>

                      <p className="text-center text-sm text-gray-500 mt-4">
                        * Required fields. Your information is secure and will never be shared.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================
          FAQ/Quick Info Section
      ====================== */}
      <section className="px-6 pb-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-4xl"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Questions</h2>
            <p className="text-gray-600">Quick answers to things you might be wondering about.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "What's your typical response time?",
                answer: "I usually respond within 24 hours on weekdays. For urgent matters, please use the phone contact.",
                icon: <Clock size={24} className="text-teal-600" />,
              },
              {
                question: "Do you work with international clients?",
                answer: "Absolutely! I work with clients worldwide and can accommodate different time zones.",
                icon: <Globe size={24} className="text-teal-600" />,
              },
              {
                question: "What types of projects do you take on?",
                answer: "Web applications, landing pages, UI/UX design, and frontend development projects.",
                icon: <Briefcase size={24} className="text-teal-600" />,
              },
              {
                question: "What's your typical project timeline?",
                answer: "Timelines vary based on complexity, but most projects range from 2-8 weeks.",
                icon: <Calendar size={24} className="text-teal-600" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl border border-teal-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div>{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{item.question}</h4>
                    <p className="text-gray-600 text-sm">{item.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export default ContactPage;