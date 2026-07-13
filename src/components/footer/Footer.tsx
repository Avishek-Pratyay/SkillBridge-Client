import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaGraduationCap,
} from "react-icons/fa";

const Footer = () => {
  return (
<footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-gray-300 mt-20">
     <div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>

<div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      {/* Top */}

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-4 md:grid-cols-2 gap-10">

        {/* Brand */}

        <div className="lg:col-span-1">

          <div className="flex items-center gap-3 mb-5">

            <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg">

              <FaGraduationCap className="text-2xl text-white" />

            </div>

            <div>

              <h2 className="text-3xl font-bold text-white">
                SkillBridge
              </h2>

              <p className="text-blue-400 text-sm">
                Learn • Grow • Succeed
              </p>

            </div>

          </div>

          <p className="leading-8 text-gray-400">

            SkillBridge is a modern online learning platform that helps
            students and professionals gain industry-ready skills through
            high-quality courses taught by experienced instructors.

          </p>

          {/* Newsletter */}

          <div className="mt-8">

            <h3 className="text-white font-semibold mb-4">
              Subscribe Newsletter
            </h3>

            <div className="flex overflow-hidden rounded-xl">

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 outline-none"
              />

              <button
                className="bg-blue-600 hover:bg-blue-700 px-5 transition"
              >
                <FaArrowRight />
              </button>

            </div>

          </div>

        </div>

                {/* Quick Links */}

        <div>

          <h3 className="text-xl font-bold text-white mb-6">
            Quick Links
          </h3>

          <div className="space-y-4">

            <Link
              to="/"
              className="block hover:text-blue-400 hover:translate-x-2 transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/explore"
              className="block hover:text-blue-400 hover:translate-x-2 transition duration-300"
            >
              Explore Courses
            </Link>

            <Link
              to="/about"
              className="block hover:text-blue-400 hover:translate-x-2 transition duration-300"
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className="block hover:text-blue-400 hover:translate-x-2 transition duration-300"
            >
              Contact
            </Link>

          </div>

        </div>

        {/* Useful Links */}

        <div>

          <h3 className="text-xl font-bold text-white mb-6">
            Useful Links
          </h3>

          <div className="space-y-4">

            <Link
              to="/dashboard"
              className="block hover:text-blue-400 hover:translate-x-2 transition duration-300"
            >
              Dashboard
            </Link>

            <Link
              to="/add-course"
              className="block hover:text-blue-400 hover:translate-x-2 transition duration-300"
            >
              Add Course
            </Link>

            <Link
              to="/manage-courses"
              className="block hover:text-blue-400 hover:translate-x-2 transition duration-300"
            >
              Manage Courses
            </Link>

            <Link
              to="/login"
              className="block hover:text-blue-400 hover:translate-x-2 transition duration-300"
            >
              Login
            </Link>

          </div>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-bold text-white mb-6">
            Contact Us
          </h3>

          <div className="space-y-5">

            <div className="flex items-start gap-4">

              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">

                <FaEnvelope className="text-white" />

              </div>

              <div>

                <p className="text-sm text-gray-400">
                  Email
                </p>

                <p className="text-white">
                  support@skillbridge.com
                </p>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">

                <FaPhoneAlt className="text-white" />

              </div>

              <div>

                <p className="text-sm text-gray-400">
                  Phone
                </p>

                <p className="text-white">
                  +880 1234-567890
                </p>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">

                <FaMapMarkerAlt className="text-white" />

              </div>

              <div>

                <p className="text-sm text-gray-400">
                  Address
                </p>

                <p className="text-white">
                  Dhaka, Bangladesh
                </p>

              </div>

            </div>

          </div>

          {/* Social Icons */}

          <div className="flex gap-4 mt-8">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition duration-300 hover:-translate-y-1"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full bg-slate-800 hover:bg-blue-700 flex items-center justify-center transition duration-300 hover:-translate-y-1"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-full bg-slate-800 hover:bg-gray-700 flex items-center justify-center transition duration-300 hover:-translate-y-1"
            >
              <FaGithub />
            </a>

          </div>

        </div>

              </div>

      {/* Bottom Footer */}

      <div className="border-t border-slate-700/70">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col lg:flex-row items-center justify-between gap-5">

          <p className="text-sm text-gray-400 text-center lg:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">
              SkillBridge
            </span>
            . All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">

            <Link
              to="/about"
              className="hover:text-blue-400 transition"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="hover:text-blue-400 transition"
            >
              Contact
            </Link>

            <Link
              to="/"
              className="hover:text-blue-400 transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/"
              className="hover:text-blue-400 transition"
            >
              Terms & Conditions
            </Link>

          </div>

          <p className="text-sm text-gray-400 text-center lg:text-right">
            Built with{" "}
            <span className="text-red-500">❤</span>{" "}
            using React, TypeScript, Express & MongoDB
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;