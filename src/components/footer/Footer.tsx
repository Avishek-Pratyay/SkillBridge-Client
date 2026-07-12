import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Logo */}

        <div>

          <h2 className="text-3xl font-bold text-white">

            SkillBridge

          </h2>

          <p className="mt-6 leading-8">

            SkillBridge is a modern online learning platform where
            students can discover quality courses, improve their skills,
            and build successful careers.

          </p>

        </div>

        {/* Quick Links */}

        <div>

          <h3 className="text-xl font-semibold text-white mb-5">

            Quick Links

          </h3>

          <div className="flex flex-col gap-3">

            <Link to="/">Home</Link>

            <Link to="/explore">Explore</Link>

            <Link to="/about">About</Link>

            <Link to="/contact">Contact</Link>

          </div>

        </div>
                {/* Useful Links */}

        <div>

          <h3 className="text-xl font-semibold text-white mb-5">

            Useful Links

          </h3>

          <div className="flex flex-col gap-3">

            <Link to="/dashboard">
              Dashboard
            </Link>

            <Link to="/add-course">
              Add Course
            </Link>

            <Link to="/manage-courses">
              Manage Courses
            </Link>

            <Link to="/login">
              Login
            </Link>

          </div>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-semibold text-white mb-5">

            Contact

          </h3>

          <div className="space-y-4">

            <div className="flex items-center gap-3">

              <FaEnvelope className="text-blue-400" />

              <span>
                support@skillbridge.com
              </span>

            </div>

            <p>
              Dhaka, Bangladesh
            </p>

            <p>
              +880 1234-567890
            </p>

          </div>

          {/* Social */}

          <div className="flex gap-4 mt-8">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:scale-110 transition"
            >
              <FaFacebookF className="text-white" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center hover:scale-110 transition"
            >
              <FaLinkedinIn className="text-white" />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:scale-110 transition"
            >
              <FaGithub className="text-white" />
            </a>

          </div>

        </div>
              </div>

      {/* Bottom */}

      <div className="border-t border-slate-700">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-400">

            © {new Date().getFullYear()} SkillBridge. All rights reserved.

          </p>

          <p className="text-sm text-gray-400">

            Built with ❤️ using React, TypeScript, Express & MongoDB

          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;