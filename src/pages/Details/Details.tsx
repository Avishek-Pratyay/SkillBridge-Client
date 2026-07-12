import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

import { getCourse } from "../../services/courseService";

type Course = {
  _id: string;
  title: string;
  category: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  rating: number;
  createdBy: string;
};

const Details = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    try {
      const res = await getCourse(id!);

      setCourse(res.data);
    } catch {
      Swal.fire({
        icon: "error",
        title: "Course Not Found",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-3xl font-bold">
          Loading Course...
        </h2>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-3xl font-bold text-red-600">
          Course Not Found
        </h2>
      </div>
    );
  }

  return (
    <section className="bg-slate-100 min-h-screen py-12">

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

                {/* Hero Image */}

        <img
          src={course.image}
          alt={course.title}
          className="w-full h-[450px] object-cover"
        />

        {/* Content */}

        <div className="p-8 lg:p-12">

          <div className="flex flex-col lg:flex-row justify-between gap-6">

            <div className="flex-1">

              <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold mb-4">
                {course.category}
              </span>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                {course.title}
              </h1>

              <p className="text-gray-600 text-lg mt-6 leading-8">
                {course.shortDescription}
              </p>

            </div>

            {/* Course Info Card */}

            <div className="w-full lg:w-80 bg-slate-50 rounded-2xl shadow-lg p-6 border">

              <div className="flex items-center justify-between mb-5">

                <span className="text-gray-500">
                  Rating
                </span>

                <span className="text-yellow-500 font-bold text-xl">
                  ⭐ {course.rating}
                </span>

              </div>

              <div className="flex items-center justify-between mb-5">

                <span className="text-gray-500">
                  Price
                </span>

                <span className="text-green-600 font-bold text-3xl">
                  ${course.price}
                </span>

              </div>

              <div className="flex items-center justify-between mb-8">

                <span className="text-gray-500">
                  Category
                </span>

                <span className="font-semibold">
                  {course.category}
                </span>

              </div>

              <button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-lg font-semibold transition"
              >
                Enroll Now
              </button>

            </div>

          </div>

          {/* About Course */}

          <div className="mt-12">

            <h2 className="text-3xl font-bold text-gray-800 mb-5">
              About This Course
            </h2>

            <p className="text-gray-600 leading-9 text-lg whitespace-pre-line">
              {course.fullDescription}
            </p>

          </div>

          {/* Instructor Section */}

          <div className="mt-12 bg-slate-50 rounded-2xl p-8 border">

            <h2 className="text-2xl font-bold mb-5">
              Instructor
            </h2>

            <div className="flex items-center gap-5">

              <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl font-bold">
                {course.createdBy?.charAt(0).toUpperCase()}
              </div>

              <div>

                <h3 className="text-xl font-bold">
                  {course.createdBy}
                </h3>

                <p className="text-gray-500">
                  Course Instructor
                </p>

              </div>

            </div>

          </div>

                    {/* Extra Information */}

          <div className="mt-12 grid md:grid-cols-3 gap-6">

            <div className="bg-blue-50 rounded-2xl p-6 text-center">

              <h3 className="text-3xl font-bold text-blue-600">
                {course.rating}
              </h3>

              <p className="text-gray-600 mt-2">
                Average Rating
              </p>

            </div>

            <div className="bg-green-50 rounded-2xl p-6 text-center">

              <h3 className="text-3xl font-bold text-green-600">
                ${course.price}
              </h3>

              <p className="text-gray-600 mt-2">
                Course Price
              </p>

            </div>

            <div className="bg-purple-50 rounded-2xl p-6 text-center">

              <h3 className="text-3xl font-bold text-purple-600">
                Lifetime
              </h3>

              <p className="text-gray-600 mt-2">
                Access
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Details;