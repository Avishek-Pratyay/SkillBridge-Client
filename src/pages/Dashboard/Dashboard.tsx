import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import { getMyCourses } from "../../services/courseService";
import StudentDashboard from "./StudentDashboard";
const Dashboard = () => {

  const { user } = useAuth();
  if (user?.role === "student") {
  return <StudentDashboard />;
}

  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      const res = await getMyCourses();
      setCourses(res.data);
    } finally {
      setLoading(false);
    }
  };

  const totalCourses = courses.length;

  const averagePrice =
    totalCourses > 0
      ? (
          courses.reduce(
            (sum, course) => sum + Number(course.price),
            0
          ) / totalCourses
        ).toFixed(2)
      : "0";

  const averageRating =
    totalCourses > 0
      ? (
          courses.reduce(
            (sum, course) => sum + Number(course.rating),
            0
          ) / totalCourses
        ).toFixed(1)
      : "0";

  return (

    <section className="bg-slate-100 min-h-screen py-12">

      <div className="max-w-7xl mx-auto px-5">

        {/* Welcome */}

        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl shadow-xl text-white p-10">

          <h1 className="text-4xl font-bold">

            Welcome Back 👋

          </h1>

          <p className="mt-3 text-lg">

            {user?.email}

          </p>

          <p className="opacity-90 mt-2">

            Manage your courses from your personal dashboard.

          </p>

        </div>

                {/* Statistics */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

            <div className="text-5xl mb-4">
              📚
            </div>

            <h3 className="text-gray-500">
              Total Courses
            </h3>

            <p className="text-4xl font-bold text-blue-600 mt-3">
              {loading ? "..." : totalCourses}
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

            <div className="text-5xl mb-4">
              ⭐
            </div>

            <h3 className="text-gray-500">
              Average Rating
            </h3>

            <p className="text-4xl font-bold text-yellow-500 mt-3">
              {loading ? "..." : averageRating}
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

            <div className="text-5xl mb-4">
              💰
            </div>

            <h3 className="text-gray-500">
              Average Price
            </h3>

            <p className="text-4xl font-bold text-green-600 mt-3">
              ${loading ? "..." : averagePrice}
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

            <div className="text-5xl mb-4">
              🚀
            </div>

            <h3 className="text-gray-500">
              Status
            </h3>

            <p className="text-3xl font-bold text-purple-600 mt-3">
              Active
            </p>

          </div>

        </div>

        {/* Quick Actions */}

        <div className="bg-white rounded-3xl shadow-lg p-10 mt-10">

          <h2 className="text-3xl font-bold mb-8">

            Quick Actions

          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <Link
              to="/add-course"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl p-8 text-center transition"
            >

              <div className="text-5xl">
                ➕
              </div>

              <h3 className="text-xl font-bold mt-4">
                Add Course
              </h3>

            </Link>

            <Link
              to="/manage-courses"
              className="bg-green-600 hover:bg-green-700 text-white rounded-2xl p-8 text-center transition"
            >

              <div className="text-5xl">
                📖
              </div>

              <h3 className="text-xl font-bold mt-4">
                Manage Courses
              </h3>

            </Link>

            <Link
              to="/explore"
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-2xl p-8 text-center transition"
            >

              <div className="text-5xl">
                🌍
              </div>

              <h3 className="text-xl font-bold mt-4">
                Explore Courses
              </h3>

            </Link>

          </div>

        </div>
                {/* Recent Courses */}

        <div className="bg-white rounded-3xl shadow-lg p-10 mt-10">

          <h2 className="text-3xl font-bold mb-8">
            Recent Courses
          </h2>

          {loading ? (

            <div className="text-center py-10">

              <p className="text-lg text-gray-500">
                Loading courses...
              </p>

            </div>

          ) : totalCourses === 0 ? (

            <div className="text-center py-10">

              <div className="text-6xl mb-4">
                📚
              </div>

              <h3 className="text-2xl font-bold text-gray-700">
                No Courses Added Yet
              </h3>

              <p className="text-gray-500 mt-3">
                Start by creating your first course.
              </p>

              <Link
                to="/add-course"
                className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
              >
                Add Your First Course
              </Link>

            </div>

          ) : (

            <div className="space-y-5">

              {courses
                .slice()
                .reverse()
                .slice(0, 5)
                .map((course) => (

                  <div
                    key={course._id}
                    className="flex flex-col md:flex-row justify-between items-center gap-5 border rounded-2xl p-5 hover:bg-slate-50 transition"
                  >

                    <div>

                      <h3 className="text-xl font-bold text-gray-800">
                        {course.title}
                      </h3>

                      <p className="text-gray-500 mt-2">
                        {course.category}
                      </p>

                    </div>

                    <div className="flex items-center gap-8">

                      <div className="text-center">

                        <p className="text-gray-500 text-sm">
                          Rating
                        </p>

                        <p className="font-bold text-yellow-500">
                          ⭐ {course.rating}
                        </p>

                      </div>

                      <div className="text-center">

                        <p className="text-gray-500 text-sm">
                          Price
                        </p>

                        <p className="font-bold text-green-600">
                          ${course.price}
                        </p>

                      </div>

                    </div>

                  </div>

                ))}

            </div>

          )}

        </div>

      </div>

    </section>

  );
};

export default Dashboard;