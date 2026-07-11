import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCourses } from "../../services/courseService";
import type { Course } from "../../types/course";
const FeaturedCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const data = await getCourses();

        console.log("Courses API:", data);

        if (data.success && Array.isArray(data.data)) {
          setCourses(data.data.slice(0, 4));
        }
      } catch (error) {
        console.log("Course loading error:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

if (loading) {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Featured Courses
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="rounded-2xl shadow-lg overflow-hidden animate-pulse"
          >
            <div className="h-52 bg-gray-300"></div>

            <div className="p-5">
              <div className="h-6 bg-gray-300 rounded mb-4"></div>

              <div className="h-4 bg-gray-300 rounded mb-2"></div>

              <div className="h-4 bg-gray-300 rounded w-2/3"></div>

              <div className="h-10 bg-gray-300 rounded mt-5"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        Featured Courses
      </h2>

      {courses.length === 0 ? (
        <p className="text-center text-gray-500">
          No courses available
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div
              key={course._id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={course.image}
                alt={course.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="font-bold text-xl">
                  {course.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  {course.shortDescription}
                </p>

                <div className="flex justify-between text-sm mt-4">
                  <span>
                    {course.category}
                  </span>

                  <span>
                    ⭐ {course.rating}
                  </span>
                </div>

                <div className="flex justify-between items-center mt-5">
                  <span className="font-bold text-blue-600">
                    ${course.price}
                  </span>

                  <Link
                    to={`/course/${course._id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                  >
                    Details
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedCourses;