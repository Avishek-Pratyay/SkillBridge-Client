import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 text-white">
      <div className="max-w-7xl mx-auto min-h-[75vh] px-6 py-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:w-1/2"
        >
          <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
            🚀 Learn Skills. Build Careers.
          </span>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mt-6">
            Master In-Demand
            <br />
            Skills With
            <span className="text-yellow-300"> SkillBridge</span>
          </h1>

          <p className="mt-6 text-lg text-gray-100">
            Explore high-quality courses taught by experienced instructors.
            Learn at your own pace, build real-world skills, and take the next
            step in your career.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              to="/explore"
              className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:scale-105 duration-300"
            >
              Explore Courses
            </Link>

            <Link
              to="/register"
              className="border-2 border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-700 duration-300"
            >
              Join Now
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900"
            alt="Students Learning"
            className="rounded-3xl shadow-2xl w-full max-w-lg"
          />
        </motion.div>
      </div>

      {/* Statistics */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 pb-16 px-6">

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <h2 className="text-3xl font-bold text-blue-600">500+</h2>
          <p className="text-gray-600 mt-2">Courses</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <h2 className="text-3xl font-bold text-emerald-600">10K+</h2>
          <p className="text-gray-600 mt-2">Students</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <h2 className="text-3xl font-bold text-orange-500">200+</h2>
          <p className="text-gray-600 mt-2">Instructors</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <h2 className="text-3xl font-bold text-blue-600">95%</h2>
          <p className="text-gray-600 mt-2">Success Rate</p>
        </div>

      </div>
    </section>
  );
};

export default Hero;