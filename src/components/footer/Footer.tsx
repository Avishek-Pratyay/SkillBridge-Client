import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowUp,
  FaGraduationCap,
  FaBookOpen,
  FaUsers,
  FaChalkboardTeacher,
  FaStar,
} from "react-icons/fa";

const Footer = () => {

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (

    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-gray-300">

      {/* Background Blur */}

      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"></div>

      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-3xl"></div>

      {/* Back To Top */}

      {showTop && (

        <button
          onClick={scrollTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-xl flex justify-center items-center transition hover:-translate-y-1"
        >

          <FaArrowUp className="text-white text-lg" />

        </button>

      )}

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-4 md:grid-cols-2 gap-14">

        {/* =========================
            BRAND
        ========================== */}

        <div className="lg:col-span-1">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-2xl bg-blue-600 flex justify-center items-center shadow-lg">

              <FaGraduationCap className="text-white text-3xl"/>

            </div>

            <div>

              <h2 className="text-3xl font-bold text-white">

                SkillBridge

              </h2>

              <p className="text-blue-400">

                Learn • Build • Succeed

              </p>

            </div>

          </div>

          <p className="mt-8 leading-8 text-gray-400">

            SkillBridge is a modern learning platform where students gain
            real-world skills through expert-led online courses. Learn
            anytime, anywhere and advance your career with confidence.

          </p>

          {/* Statistics */}

          <div className="grid grid-cols-2 gap-4 mt-10">

            <div className="bg-slate-800/60 backdrop-blur rounded-xl p-4 border border-slate-700">

              <div className="flex items-center gap-3">

                <FaBookOpen className="text-blue-400"/>

                <span className="text-white font-bold">

                  120+

                </span>

              </div>

              <p className="text-sm text-gray-400 mt-2">

                Courses

              </p>

            </div>

            <div className="bg-slate-800/60 backdrop-blur rounded-xl p-4 border border-slate-700">

              <div className="flex items-center gap-3">

                <FaUsers className="text-green-400"/>

                <span className="text-white font-bold">

                  5K+

                </span>

              </div>

              <p className="text-sm text-gray-400 mt-2">

                Students

              </p>

            </div>

            <div className="bg-slate-800/60 backdrop-blur rounded-xl p-4 border border-slate-700">

              <div className="flex items-center gap-3">

                <FaChalkboardTeacher className="text-yellow-400"/>

                <span className="text-white font-bold">

                  40+

                </span>

              </div>

              <p className="text-sm text-gray-400 mt-2">

                Instructors

              </p>

            </div>

            <div className="bg-slate-800/60 backdrop-blur rounded-xl p-4 border border-slate-700">

              <div className="flex items-center gap-3">

                <FaStar className="text-orange-400"/>

                <span className="text-white font-bold">

                  4.9

                </span>

              </div>

              <p className="text-sm text-gray-400 mt-2">

                Rating

              </p>

            </div>

          </div>

        </div>

        {/* =========================
            QUICK LINKS
        ========================== */}

        <div>

          <h3 className="text-2xl text-white font-bold mb-7">

            Quick Links

          </h3>

          <div className="space-y-4">

            <Link
              to="/"
              className="block hover:text-blue-400 transition hover:translate-x-2"
            >
              Home
            </Link>

            <Link
              to="/explore"
              className="block hover:text-blue-400 transition hover:translate-x-2"
            >
              Explore Courses
            </Link>

            <Link
              to="/dashboard"
              className="block hover:text-blue-400 transition hover:translate-x-2"
            >
              Dashboard
            </Link>

            <Link
              to="/about"
              className="block hover:text-blue-400 transition hover:translate-x-2"
            >
              About SkillBridge
            </Link>

            <Link
              to="/contact"
              className="block hover:text-blue-400 transition hover:translate-x-2"
            >
              Contact
            </Link>

          </div>

        </div>
                {/* =========================
            LEARNING RESOURCES
        ========================== */}

        <div>

          <h3 className="text-2xl font-bold text-white mb-7">

            Learning Resources

          </h3>

          <div className="space-y-4">

            <Link
              to="/explore"
              className="block hover:text-cyan-400 transition hover:translate-x-2"
            >
              Browse All Courses
            </Link>

            <Link
              to="/dashboard"
              className="block hover:text-cyan-400 transition hover:translate-x-2"
            >
              Student Dashboard
            </Link>

            <Link
              to="/add-course"
              className="block hover:text-cyan-400 transition hover:translate-x-2"
            >
              Become an Instructor
            </Link>

            <Link
              to="/manage-courses"
              className="block hover:text-cyan-400 transition hover:translate-x-2"
            >
              Manage Courses
            </Link>

            <Link
              to="/login"
              className="block hover:text-cyan-400 transition hover:translate-x-2"
            >
              My Account
            </Link>

          </div>

          {/* Small Card */}

          <div className="mt-10 rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 p-6">

            <h4 className="text-white text-lg font-bold">

              Why Choose SkillBridge?

            </h4>

            <ul className="mt-4 space-y-2 text-sm text-gray-300">

              <li>✔ Lifetime course access</li>

              <li>✔ Expert instructors</li>

              <li>✔ Secure Stripe payments</li>

              <li>✔ Learn anytime, anywhere</li>

            </ul>

          </div>

        </div>

        {/* =========================
            CONTACT
        ========================== */}

        <div>

          <h3 className="text-2xl font-bold text-white mb-7">

            Get in Touch

          </h3>

          <div className="space-y-6">

            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-xl bg-blue-600 flex justify-center items-center">

                <FaEnvelope className="text-white"/>

              </div>

              <div>

                <p className="text-sm text-gray-400">

                  Email

                </p>

                <p className="text-white font-medium">

                  hello@skillbridge.dev

                </p>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-xl bg-green-600 flex justify-center items-center">

                <FaPhoneAlt className="text-white"/>

              </div>

              <div>

                <p className="text-sm text-gray-400">

                  Phone

                </p>

                <p className="text-white font-medium">

                  +880 1700-000000

                </p>

              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-xl bg-red-500 flex justify-center items-center">

                <FaMapMarkerAlt className="text-white"/>

              </div>

              <div>

                <p className="text-sm text-gray-400">

                  Address

                </p>

                <p className="text-white font-medium">

                  Dhaka, Bangladesh

                </p>

              </div>

            </div>

          </div>

          {/* Social Icons */}

          <div className="flex gap-4 mt-10">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-blue-600 hover:scale-110 transition-all duration-300 flex justify-center items-center shadow-lg"
            >

              <FaFacebookF/>

            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-blue-700 hover:scale-110 transition-all duration-300 flex justify-center items-center shadow-lg"
            >

              <FaLinkedinIn/>

            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-gray-700 hover:scale-110 transition-all duration-300 flex justify-center items-center shadow-lg"
            >

              <FaGithub/>

            </a>

          </div>

        </div>

      </div>

      {/* =========================
            CTA SECTION
      ========================== */}

      <div className="max-w-7xl mx-auto px-6">

        <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 px-10 py-12 flex flex-col lg:flex-row justify-between items-center gap-8 shadow-2xl">

          <div>

            <h2 className="text-4xl font-bold text-white">

              Ready to Build Your Future?

            </h2>

            <p className="text-blue-100 mt-4 max-w-2xl">

              Join thousands of learners who are building real-world skills,
              earning certificates, and advancing their careers with
              SkillBridge.

            </p>

          </div>

          <Link
            to="/explore"
            className="bg-white text-blue-700 font-bold px-8 py-4 rounded-2xl hover:scale-105 transition"
          >

            Explore Courses →

          </Link>

        </div>

      </div>
            {/* =========================
          BOTTOM FOOTER
      ========================== */}

      <div className="border-t border-slate-800 mt-20">

        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col lg:flex-row items-center justify-between gap-6">

          {/* Left */}

          <div className="text-center lg:text-left">

            <p className="text-gray-400 text-sm">

              © {new Date().getFullYear()}{" "}

              <span className="font-semibold text-white">

                SkillBridge

              </span>

              . All rights reserved.

            </p>

            <p className="text-xs text-gray-500 mt-2">

              Empowering learners through modern online education.

            </p>

          </div>

          {/* Middle */}

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
              Terms of Service
            </Link>

            <Link
              to="/explore"
              className="hover:text-blue-400 transition"
            >
              Courses
            </Link>

          </div>

          {/* Right */}

          <div className="text-center lg:text-right">

            <p className="text-sm text-gray-400">

              Built with{" "}

              <span className="text-red-500">❤</span>{" "}

              using

            </p>

            <p className="text-xs text-gray-500 mt-2">

              React • TypeScript • Tailwind CSS • Express • MongoDB • Stripe

            </p>

          </div>

        </div>

      </div>

    </footer>

  );
};

export default Footer;