import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaPlayCircle,
  FaStar,
  FaUsers,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 text-white">

      {/* Background Blur */}

      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-cyan-300/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto min-h-[85vh] px-6 py-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-14">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          className="lg:w-1/2"
        >

          <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2 rounded-full text-sm border border-white/20">

            <FaStar className="text-yellow-300" />

            Trusted by 10,000+ Learners

          </span>

          <h1 className="mt-7 text-5xl lg:text-7xl font-black leading-tight">

            Learn.

            <br />

            Build.

            <br />

            <span className="text-yellow-300">
              Succeed.
            </span>

          </h1>

          <p className="mt-7 text-lg text-blue-100 leading-8">

            SkillBridge helps you master today's most valuable skills through
            industry-ready courses taught by experienced instructors.

          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <Link
              to="/explore"
              className="bg-white text-blue-700 px-7 py-4 rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition"
            >

              Explore Courses

              <FaArrowRight />

            </Link>

            <button
              className="border-2 border-white/70 px-7 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-white hover:text-blue-700 transition"
            >

              <FaPlayCircle />

              Watch Demo

            </button>

          </div>

          {/* Trust */}

          <div className="flex flex-wrap gap-8 mt-12">

            <div>

              <h3 className="text-3xl font-bold">
                10K+
              </h3>

              <p className="text-blue-100">
                Active Students
              </p>

            </div>

            <div>

              <h3 className="text-3xl font-bold">
                500+
              </h3>

              <p className="text-blue-100">
                Premium Courses
              </p>

            </div>

            <div>

              <h3 className="text-3xl font-bold">
                95%
              </h3>

              <p className="text-blue-100">
                Success Rate
              </p>

            </div>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="relative lg:w-1/2 flex justify-center"
        >

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
            alt="Students"
            className="rounded-[35px] shadow-2xl border-8 border-white/20 w-full max-w-xl"
          />

          {/* Floating Card */}

          <div className="absolute -bottom-6 left-5 bg-white rounded-2xl shadow-xl px-6 py-4 text-gray-800">

            <div className="flex items-center gap-3">

              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white">

                <FaUsers />

              </div>

              <div>

                <h3 className="font-bold">
                  200+ Experts
                </h3>

                <p className="text-sm text-gray-500">
                  Industry Mentors
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;