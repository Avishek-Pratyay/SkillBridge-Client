import { useEffect, useMemo, useState } from "react";
import Swal from "sweetalert2";
import {
  FaBook,
  FaSearch,
  FaStar,
  FaDollarSign,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import {
  getMyCourses,
  deleteCourse,
} from "../../services/courseService";
import { Link } from "react-router-dom";

type Course = {
  _id: string;
  title: string;
  category: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  rating: number;
  createdAt: string;
};

const ManageCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      setLoading(true);

      const res = await getMyCourses();

      setCourses(res.data || []);
    } catch {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to load your courses.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Delete this course?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, Delete",
    });

    if (!result.isConfirmed) return;

    try {
      await deleteCourse(id);

      setCourses((prev) =>
        prev.filter((course) => course._id !== id)
      );

      Swal.fire({
        icon: "success",
        title: "Deleted!",
        timer: 1800,
        showConfirmButton: false,
      });
    } catch {
      Swal.fire({
        icon: "error",
        title: "Delete Failed",
      });
    }
  };

  const filteredCourses = useMemo(() => {
    return courses.filter((course) =>
      course.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [courses, search]);

  const totalValue = courses.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  const averageRating =
    courses.length > 0
      ? (
          courses.reduce(
            (sum, item) => sum + Number(item.rating),
            0
          ) / courses.length
        ).toFixed(1)
      : "0";

  return (
    <section className="min-h-screen bg-slate-100 py-10 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-8">

          <div>

            <h1 className="text-4xl font-bold text-gray-800">
              My Courses
            </h1>

            <p className="text-gray-500 mt-2">
              Manage all your published courses in one place.
            </p>

          </div>

          <div className="relative w-full md:w-80">

            <FaSearch className="absolute left-4 top-4 text-gray-400" />

            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full border rounded-xl py-3 pl-11 pr-4 focus:ring-4 focus:ring-blue-200 outline-none"
            />

          </div>

        </div>

        {/* Dashboard Cards */}

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <FaBook className="text-4xl text-blue-600 mb-4" />

            <p className="text-gray-500">
              Total Courses
            </p>

            <h2 className="text-4xl font-bold mt-2">
              {courses.length}
            </h2>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <FaStar className="text-4xl text-yellow-500 mb-4" />

            <p className="text-gray-500">
              Average Rating
            </p>

            <h2 className="text-4xl font-bold mt-2">
              {averageRating}
            </h2>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <FaDollarSign className="text-4xl text-green-600 mb-4" />

            <p className="text-gray-500">
              Total Course Value
            </p>

            <h2 className="text-4xl font-bold mt-2">
              ${totalValue}
            </h2>

          </div>

        </div>

        {/* Course Grid */}

        {loading ? (
          <div className="text-center text-xl font-semibold py-20">
            Loading your courses...
          </div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                        {filteredCourses.length === 0 ? (

              <div className="col-span-full bg-white rounded-3xl shadow-lg py-20 text-center">

                <FaBook className="text-7xl text-blue-500 mx-auto mb-6" />

                <h2 className="text-3xl font-bold text-gray-700">
                  No Courses Found
                </h2>

                <p className="text-gray-500 mt-3">
                  You haven't published any courses yet.
                </p>

              </div>

            ) : (

              filteredCourses.map((course) => (

                <div
                  key={course._id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
                >

                  {/* Thumbnail */}

                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-56 w-full object-cover"
                  />

                  {/* Content */}

                  <div className="p-6">

                    <div className="flex justify-between items-center mb-4">

                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {course.category}
                      </span>

                      <span className="flex items-center gap-1 text-yellow-500 font-semibold">

                        <FaStar />

                        {course.rating}

                      </span>

                    </div>

                    <h2 className="text-2xl font-bold text-gray-800 line-clamp-2">
                      {course.title}
                    </h2>

                    <p className="text-gray-500 mt-3 line-clamp-3">
                      {course.shortDescription}
                    </p>

                    <div className="flex justify-between items-center mt-6">

                      <div>

                        <p className="text-sm text-gray-500">
                          Price
                        </p>

                        <h3 className="text-2xl font-bold text-green-600">
                          ${course.price}
                        </h3>

                      </div>

                      <div className="text-right">

                        <p className="text-sm text-gray-500">
                          Published
                        </p>

                        <p className="font-semibold">
                          {new Date(
                            course.createdAt
                          ).toLocaleDateString()}
                        </p>

                      </div>

                    </div>

                    {/* Buttons */}

                    <div className="grid grid-cols-2 gap-4 mt-8">

                      <Link
  to={`/update-course/${course._id}`}
  className="flex justify-center items-center gap-2 rounded-xl bg-blue-600 text-white py-3 hover:bg-blue-700 transition"
>
  <FaEdit />
  Update
</Link>

                      <button
                        onClick={() =>
                          handleDelete(course._id)
                        }
                        className="flex justify-center items-center gap-2 rounded-xl bg-red-500 text-white py-3 hover:bg-red-600 transition"
                      >
                        <FaTrash />
                        Delete
                      </button>

                    </div>

                  </div>

                </div>

              ))

            )}

                      </div>
        )}

        {/* Footer */}

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">

          <h3 className="text-xl font-bold text-gray-800 mb-3">
            Instructor Tips
          </h3>

          <ul className="space-y-2 text-gray-600">

            <li>✅ Keep your course title clear and descriptive.</li>

            <li>✅ Use a high-quality thumbnail to attract learners.</li>

            <li>✅ Update course content regularly.</li>

            <li>✅ Maintain a high rating by improving your course.</li>

            <li>✅ Keep pricing competitive.</li>

          </ul>

        </div>

      </div>

    </section>
  );
};

export default ManageCourses;