import { useState } from "react";
import type { FormEvent } from "react";
import Swal from "sweetalert2";
import {
  FaBookOpen,
  FaImage,
  FaDollarSign,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

import { addCourse } from "../../services/courseService";

const AddCourse = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState("");

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const course = {
      title: formData.get("title"),
      category: formData.get("category"),
      image: formData.get("image"),
      shortDescription: formData.get("shortDescription"),
      fullDescription: formData.get("fullDescription"),
      price: Number(formData.get("price")),
      rating: Number(formData.get("rating")),
    };

    try {
      setLoading(true);

      await addCourse(course);

      Swal.fire({
        icon: "success",
        title: "Course Published!",
        text: "Your course has been published successfully.",
        timer: 2000,
        showConfirmButton: false,
      });

      form.reset();
      setImage("");
    } catch {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Unable to publish the course.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-linear-to-br from-slate-100 via-blue-50 to-indigo-100 py-16 px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

        {/* Left Panel */}

        <div className="bg-linear-to-br from-blue-700 to-indigo-700 rounded-3xl p-10 text-white shadow-2xl">

          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-8">

            <FaBookOpen className="text-4xl" />

          </div>

          <h1 className="text-5xl font-bold leading-tight">

            Publish Your
            <br />
            Next Course

          </h1>

          <p className="mt-6 text-blue-100 text-lg leading-8">

            Share your expertise with learners around the world.
            Create engaging online courses and grow your teaching
            career through SkillBridge.

          </p>

          <div className="mt-10 space-y-6">

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-green-300 text-xl" />
              <span>Create unlimited premium courses</span>
            </div>

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-green-300 text-xl" />
              <span>Manage everything from one dashboard</span>
            </div>

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-green-300 text-xl" />
              <span>Reach thousands of students</span>
            </div>

            <div className="flex items-center gap-4">
              <FaCheckCircle className="text-green-300 text-xl" />
              <span>Build your instructor portfolio</span>
            </div>

          </div>

          <div className="mt-12 bg-white/10 rounded-2xl p-6 backdrop-blur">

            <h2 className="text-2xl font-semibold mb-4">
              Tips for Success
            </h2>

            <ul className="space-y-3 text-blue-100">

              <li>✔ Choose a clear and attractive title.</li>

              <li>✔ Upload a high-quality thumbnail.</li>

              <li>✔ Write detailed descriptions.</li>

              <li>✔ Set a competitive price.</li>

            </ul>

          </div>

        </div>

        {/* Right Panel */}

        <div className="bg-white rounded-3xl shadow-2xl p-10">

          <div className="mb-8">

            <h2 className="text-4xl font-bold text-gray-800">
              Add New Course
            </h2>

            <p className="text-gray-500 mt-2">
              Fill in the information below to publish your course.
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
                        {/* Course Title */}

            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                Course Title
              </label>

              <input
                type="text"
                name="title"
                required
                placeholder="e.g. Complete React Development Bootcamp"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none transition"
              />
            </div>

            {/* Category */}

            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                Category
              </label>

              <select
                name="category"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-4 focus:ring-blue-200 outline-none"
              >
                <option value="">Select Category</option>

                <option>Web Development</option>

                <option>Mobile Development</option>

                <option>Programming</option>

                <option>Artificial Intelligence</option>

                <option>Data Science</option>

                <option>Cyber Security</option>

                <option>Cloud Computing</option>

                <option>UI/UX Design</option>

                <option>Business</option>

                <option>Marketing</option>

              </select>
            </div>

            {/* Image */}

            <div>

              <label className="block font-semibold text-gray-700 mb-2">
                Course Thumbnail
              </label>

              <div className="relative">

                <FaImage className="absolute left-4 top-4 text-gray-400" />

                <input
                  type="text"
                  name="image"
                  required
                  placeholder="Paste image URL"
                  onChange={(e) => setImage(e.target.value)}
                  className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 focus:ring-4 focus:ring-blue-200 outline-none"
                />

              </div>

            </div>

            {/* Preview */}

            <div>

              <p className="font-semibold text-gray-700 mb-3">
                Thumbnail Preview
              </p>

              <div className="h-64 rounded-2xl overflow-hidden border-2 border-dashed border-gray-300 bg-gray-100 flex items-center justify-center">

                {image ? (

                  <img
                    src={image}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />

                ) : (

                  <div className="text-center text-gray-400">

                    <FaImage className="text-6xl mx-auto mb-3" />

                    <p>Image preview will appear here</p>

                  </div>

                )}

              </div>

            </div>

            {/* Price + Rating */}

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="block font-semibold text-gray-700 mb-2">
                  Price ($)
                </label>

                <div className="relative">

                  <FaDollarSign className="absolute left-4 top-4 text-gray-400" />

                  <input
                    type="number"
                    name="price"
                    required
                    placeholder="49"
                    className="w-full rounded-xl border border-gray-300 py-3 pl-10 pr-4 focus:ring-4 focus:ring-blue-200 outline-none"
                  />

                </div>

              </div>

              <div>

                <label className="block font-semibold text-gray-700 mb-2">
                  Rating
                </label>

                <div className="relative">

                  <FaStar className="absolute left-4 top-4 text-yellow-500" />

                  <input
                    type="number"
                    name="rating"
                    required
                    min="1"
                    max="5"
                    step="0.1"
                    placeholder="4.8"
                    className="w-full rounded-xl border border-gray-300 py-3 pl-10 pr-4 focus:ring-4 focus:ring-blue-200 outline-none"
                  />

                </div>

              </div>

            </div>

            {/* Short Description */}

            <div>

              <label className="block font-semibold text-gray-700 mb-2">
                Short Description
              </label>

              <textarea
                rows={3}
                name="shortDescription"
                required
                placeholder="A short summary of your course..."
                className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none focus:ring-4 focus:ring-blue-200 outline-none"
              />

            </div>

            {/* Full Description */}

            <div>

              <label className="block font-semibold text-gray-700 mb-2">
                Full Description
              </label>

              <textarea
                rows={6}
                name="fullDescription"
                required
                placeholder="Describe your course in detail..."
                className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none focus:ring-4 focus:ring-blue-200 outline-none"
              />
            </div>

                        {/* Submit Button */}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 text-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Publishing Course..." : "🚀 Publish Course"}
            </button>

            {/* Footer */}

            <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5">

              <h3 className="font-semibold text-blue-700 mb-2">
                Before Publishing
              </h3>

              <ul className="space-y-2 text-sm text-gray-600">

                <li>✔ Double-check your course title.</li>

                <li>✔ Use a high-quality thumbnail image.</li>

                <li>✔ Write clear and engaging descriptions.</li>

                <li>✔ Choose the correct category.</li>

                <li>✔ Give learners accurate pricing information.</li>

              </ul>

            </div>

          </form>

        </div>

      </div>

    </section>
  );
};

export default AddCourse;