import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-slate-50 min-h-screen">

      {/* Hero */}

      <div className="bg-gradient-to-r from-blue-700 to-cyan-500 py-24 text-white">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl lg:text-6xl font-black">

            Contact Us

          </h1>

          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">

            We'd love to hear from you. Whether you have a question about
            courses, instructors, or anything else, our team is ready to help.

          </p>

        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Contact Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Email */}

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition">

            <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center mb-5">

              <FaEnvelope className="text-3xl text-blue-600" />

            </div>

            <h3 className="text-2xl font-bold mb-3">
              Email
            </h3>

            <p className="text-gray-600">
              support@skillbridge.com
            </p>

          </div>

          {/* Phone */}

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition">

            <div className="w-16 h-16 mx-auto rounded-2xl bg-green-100 flex items-center justify-center mb-5">

              <FaPhoneAlt className="text-3xl text-green-600" />

            </div>

            <h3 className="text-2xl font-bold mb-3">
              Phone
            </h3>

            <p className="text-gray-600">
              +880 1234-567890
            </p>

          </div>

          {/* Address */}

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition">

            <div className="w-16 h-16 mx-auto rounded-2xl bg-orange-100 flex items-center justify-center mb-5">

              <FaMapMarkerAlt className="text-3xl text-orange-500" />

            </div>

            <h3 className="text-2xl font-bold mb-3">
              Address
            </h3>

            <p className="text-gray-600">
              Dhaka, Bangladesh
            </p>

          </div>

          {/* Office Hours */}

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition">

            <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-100 flex items-center justify-center mb-5">

              <FaClock className="text-3xl text-purple-600" />

            </div>

            <h3 className="text-2xl font-bold mb-3">
              Office Hours
            </h3>

            <p className="text-gray-600">
              Mon - Fri <br />
              9:00 AM - 6:00 PM
            </p>

          </div>

        </div>
              {/* Contact Form */}

      <div className="mt-24 grid lg:grid-cols-2 gap-14 items-center">

        {/* Left */}

        <div>

          <span className="text-blue-600 font-bold uppercase">
            Get In Touch
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Send Us A Message
          </h2>

          <p className="text-gray-600 mt-6 leading-8">

            Have a question about our courses or need assistance?
            Fill out the form and our team will get back to you
            as soon as possible.

          </p>

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900"
            alt="Contact"
            className="rounded-3xl shadow-xl mt-10"
          />

        </div>

        {/* Right */}

        <div className="bg-white rounded-3xl shadow-xl p-10">

          <form className="space-y-6">

            <div>

              <label className="font-semibold block mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

            </div>

            <div>

              <label className="font-semibold block mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

            </div>

            <div>

              <label className="font-semibold block mb-2">
                Subject
              </label>

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
              />

            </div>

            <div>

              <label className="font-semibold block mb-2">
                Message
              </label>

              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full border rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              ></textarea>

            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
            {/* Google Map */}

      <div className="mt-24">

        <h2 className="text-4xl font-bold text-center mb-10">
          Find Us
        </h2>

        <div className="rounded-3xl overflow-hidden shadow-2xl">

          <iframe
            title="SkillBridge Location"
            src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            className="border-0"
          ></iframe>

        </div>

      </div>

      {/* CTA */}

      <div className="mt-24">

        <div className="bg-gradient-to-r from-blue-700 to-cyan-500 rounded-[40px] px-8 py-16 text-center text-white shadow-2xl">

          <span className="bg-white/20 px-5 py-2 rounded-full text-sm font-semibold">
            🌍 Let's Learn Together
          </span>

          <h2 className="text-5xl font-black mt-8">
            Build Your Future With SkillBridge
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-blue-100 text-lg leading-8">

            Join thousands of students learning modern skills from expert
            instructors. Your learning journey starts today.

          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <a
              href="/explore"
              className="bg-white text-blue-700 font-bold px-8 py-4 rounded-2xl hover:scale-105 transition"
            >
              Explore Courses
            </a>

            <a
              href="/register"
              className="border-2 border-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-700 transition"
            >
              Join Now
            </a>

          </div>

        </div>

      </div>

    </div>

  </section>
  );
};

export default Contact;