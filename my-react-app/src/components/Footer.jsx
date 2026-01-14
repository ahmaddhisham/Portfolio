import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-12 md:grid-cols-3"
        >
          {/* Brand / Intro */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Ahmad Hisham
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-600">
              Frontend Developer & UI/UX Designer specializing in building clean,
              scalable web interfaces using React and Vue, with a strong
              business-oriented mindset.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>
                <Link
                  to="/"
                  className="transition hover:text-gray-900"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="transition hover:text-gray-900"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="transition hover:text-gray-900"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="transition hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Professional Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              Professional
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>
                <Link
                  to="/"
                  className="transition hover:text-gray-900"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="transition hover:text-gray-900"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="transition hover:text-gray-900"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Ahmad Hisham. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              to="/"
              className="transition hover:text-gray-900"
            >
              Privacy Policy
            </Link>
            <Link
              to="/"
              className="transition hover:text-gray-900"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
