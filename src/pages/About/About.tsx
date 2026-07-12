import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaUsers,
  FaAward,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-slate-50">

      {/* Hero */}

      <div className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl lg:text-6xl font-black">

            About SkillBridge

          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">

            Empowering learners worldwide through high-quality online education,
            practical skills, and experienced instructors.

          </p>

        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Mission */}

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
            alt="Students"
            className="rounded-3xl shadow-xl"
          />

          <div>

            <span className="text-blue-600 font-bold uppercase">

              Our Mission

            </span>

            <h2 className="text-4xl font-bold mt-4">

              Making Quality Education Accessible To Everyone

            </h2>

            <p className="mt-6 text-gray-600 leading-8">

              SkillBridge connects learners with industry professionals through
              engaging online courses designed for career growth and lifelong
              learning.

            </p>

          </div>

        </div>
              {/* Why Choose Us */}

      <div className="mt-28">

        <div className="text-center mb-16">

          <span className="text-blue-600 font-bold uppercase">
            Why Choose Us
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Everything You Need To Learn Better
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            We believe learning should be practical, engaging, and accessible to
            everyone.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}

          <div className="bg-white rounded-3xl shadow-lg p-10 hover:-translate-y-2 hover:shadow-2xl transition">

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">

              <FaGraduationCap className="text-blue-600 text-3xl" />

            </div>

            <h3 className="text-2xl font-bold mb-4">

              Quality Courses

            </h3>

            <p className="text-gray-600 leading-7">

              Learn from professionally designed courses created by experienced
              instructors using real-world projects.

            </p>

          </div>

          {/* Card 2 */}

          <div className="bg-white rounded-3xl shadow-lg p-10 hover:-translate-y-2 hover:shadow-2xl transition">

            <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6">

              <FaUsers className="text-green-600 text-3xl" />

            </div>

            <h3 className="text-2xl font-bold mb-4">

              Expert Mentors

            </h3>

            <p className="text-gray-600 leading-7">

              Learn directly from industry professionals who have years of
              practical experience.

            </p>

          </div>

          {/* Card 3 */}

          <div className="bg-white rounded-3xl shadow-lg p-10 hover:-translate-y-2 hover:shadow-2xl transition">

            <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-6">

              <FaAward className="text-orange-500 text-3xl" />

            </div>

            <h3 className="text-2xl font-bold mb-4">

              Career Focused

            </h3>

            <p className="text-gray-600 leading-7">

              Build practical skills that help you succeed in interviews,
              freelance work, and professional careers.

            </p>

          </div>

        </div>

      </div>

            {/* Our Values */}

      <div className="mt-28">

        <div className="text-center mb-16">

          <span className="text-blue-600 font-bold uppercase">
            Our Values
          </span>

          <h2 className="text-4xl font-bold mt-4">
            What We Believe
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Our mission goes beyond teaching—we inspire, support, and empower
            every learner to achieve their goals.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-blue-600 text-white rounded-3xl p-10 shadow-xl">

            <h3 className="text-2xl font-bold mb-4">
              Innovation
            </h3>

            <p className="leading-8 text-blue-100">
              We continuously improve our learning experience using modern
              technologies and practical teaching methods.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-10 shadow-lg">

            <h3 className="text-2xl font-bold mb-4">
              Accessibility
            </h3>

            <p className="leading-8 text-gray-600">
              Education should be affordable, flexible, and available to
              everyone regardless of location.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-10 shadow-lg">

            <h3 className="text-2xl font-bold mb-4">
              Excellence
            </h3>

            <p className="leading-8 text-gray-600">
              Every course is carefully designed to provide practical knowledge
              that helps learners grow professionally.
            </p>

          </div>

        </div>

      </div>

      {/* Meet Our Team */}

      <div className="mt-28">

        <div className="text-center mb-16">

          <span className="text-blue-600 font-bold uppercase">
            Meet Our Team
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Passionate Educators
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
            Behind SkillBridge is a team dedicated to helping learners succeed
            through quality education and innovation.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Team Member */}

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">

            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500"
              alt="Team Member"
              className="w-full h-72 object-cover"
            />

            <div className="p-6 text-center">

              <h3 className="text-2xl font-bold">
                Alex Johnson
              </h3>

              <p className="text-blue-600 mt-2">
                Founder & CEO
              </p>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">

            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500"
              alt="Team Member"
              className="w-full h-72 object-cover"
            />

            <div className="p-6 text-center">

              <h3 className="text-2xl font-bold">
                Sarah Williams
              </h3>

              <p className="text-green-600 mt-2">
                Head Instructor
              </p>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">

            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500"
              alt="Team Member"
              className="w-full h-72 object-cover"
            />

            <div className="p-6 text-center">

              <h3 className="text-2xl font-bold">
                David Miller
              </h3>

              <p className="text-orange-500 mt-2">
                Senior Mentor
              </p>

            </div>

          </div>

        </div>

      </div>

            {/* Call To Action */}

      <div className="mt-28">

        <div className="bg-gradient-to-r from-blue-700 to-cyan-500 rounded-[40px] px-8 py-16 text-center text-white shadow-2xl">

          <span className="bg-white/20 px-5 py-2 rounded-full text-sm font-semibold">
            🚀 Join Thousands of Learners
          </span>

          <h2 className="text-5xl font-black mt-8">
            Start Learning Today
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-blue-100 text-lg leading-8">

            Whether you're a beginner or an experienced professional,
            SkillBridge offers practical courses designed to help you
            achieve your goals and advance your career.

          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <Link
              to="/explore"
              className="bg-white text-blue-700 font-bold px-8 py-4 rounded-2xl hover:scale-105 transition duration-300"
            >
              Explore Courses
            </Link>

            <Link
              to="/register"
              className="border-2 border-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-700 transition duration-300"
            >
              Create Account
            </Link>

          </div>

        </div>

      </div>

    </div>

  </section>
  );
};

export default About;