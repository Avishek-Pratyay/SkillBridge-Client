import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getCourses } from "../../services/courseService";

type Course = {
  _id: string;
  title: string;
  category: string;
  image: string;
  shortDescription: string;
  price: number;
  rating: number;
};

const Explore = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetchCourses();
  }, [search, category, sort]);

  const fetchCourses = async () => {
    setLoading(true);

    try {
      const res = await getCourses(
        search,
        category,
        sort
      );

      setCourses(res.data);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-3xl font-bold">
          Loading Courses...
        </h2>
      </div>
    );
  }

  return (
    <section className="bg-slate-100 min-h-screen py-12">

      <div className="max-w-7xl mx-auto px-5">
                {/* Header */}

        <div className="text-center mb-10">

          <h1 className="text-5xl font-bold text-gray-800">
            Explore Courses
          </h1>

          <p className="text-gray-500 mt-4 text-lg">
            Discover professional courses from expert instructors.
          </p>

        </div>

        {/* Search & Filter */}

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-10">

          <div className="grid md:grid-cols-3 gap-5">

            {/* Search */}

            <input
              type="text"
              placeholder="Search course..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="border rounded-xl px-4 py-3 focus:ring-4 focus:ring-blue-200 outline-none"
            />

            {/* Category */}

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              className="border rounded-xl px-4 py-3"
            >

              <option value="">
                All Categories
              </option>

              <option value="Web Development">
                Web Development
              </option>

              <option value="Programming">
                Programming
              </option>

              <option value="Design">
                Design
              </option>

              <option value="Business">
                Business
              </option>

              <option value="Marketing">
                Marketing
              </option>

              <option value="Photography">
                Photography
              </option>

            </select>

            {/* Sort */}

            <select
              value={sort}
              onChange={(e) =>
                setSort(e.target.value)
              }
              className="border rounded-xl px-4 py-3"
            >

              <option value="">
                Sort Courses
              </option>

              <option value="priceLow">
                Price: Low → High
              </option>

              <option value="priceHigh">
                Price: High → Low
              </option>

              <option value="newest">
                Newest
              </option>

            </select>

          </div>

        </div>

        {/* Course Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.length === 0 ? (

            <div className="col-span-full text-center py-20">

              <h2 className="text-3xl font-bold text-gray-700">
                No Courses Found
              </h2>

              <p className="text-gray-500 mt-3">
                Try changing your search or filters.
              </p>

            </div>

          ) : (

            courses.map((course) => (

              <div
                key={course._id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
              >

                {/* Course Image */}

                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-56 object-cover"
                />

                {/* Card Body */}

                <div className="p-6">

                  {/* Category */}

                  <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                    {course.category}
                  </span>

                  {/* Title */}

                  <h2 className="text-2xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {course.title}
                  </h2>

                  {/* Description */}

                  <p className="text-gray-600 mb-5 line-clamp-3">
                    {course.shortDescription}
                  </p>

                  {/* Rating & Price */}

                  <div className="flex justify-between items-center mb-6">

                    <span className="text-yellow-500 font-bold">
                      ⭐ {course.rating}
                    </span>

                    <span className="text-green-600 font-bold text-xl">
                      ${course.price}
                    </span>

                  </div>

                  {/* Details Button */}

                  <Link
                    to={`/course/${course._id}`}
                    className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
                  >
                    View Details
                  </Link>

                </div>

              </div>

            ))

          )}
                  </div>

        {/* Footer */}

        <div className="mt-16 text-center">

          <h2 className="text-2xl font-bold text-gray-800">
            Keep Learning 🚀
          </h2>

          <p className="text-gray-500 mt-3">
            New professional courses are added regularly. Explore and level up
            your skills today.
          </p>

        </div>

      </div>

    </section>
  );
};

export default Explore;