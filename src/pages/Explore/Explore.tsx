import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getCourses } from "../../services/courseService";
import CourseSkeleton from "../../components/CourseSkeleton";
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
  const [allCourses, setAllCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("newest");

  // Debounce Search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // Fetch Courses
  useEffect(() => {
    fetchCourses();

  }, [debouncedSearch, category, sort]);

const fetchCourses = async () => {
  try {
    setLoading(true);

    const res = await getCourses(
      debouncedSearch,
      category,
      sort
    );

    setCourses(res.data);

    if (!debouncedSearch && !category) {
      setAllCourses(res.data);
    }
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      setLoading(false);
    }, 400); // Makes the skeleton visible briefly
  }
};

  // Dynamic Categories
  const categories = useMemo(() => {
    return [
      ...new Set(
        allCourses.map(
          (course) => course.category
        )
      ),
    ];
  }, [allCourses]);

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
              placeholder="Search courses..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded-xl px-4 py-3 focus:ring-4 focus:ring-blue-200 outline-none"
            />

            {/* Category */}

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border rounded-xl px-4 py-3"
            >
              <option value="">
                All Categories
              </option>

              {categories.map((cat) => (
                <option
                  key={cat}
                  value={cat}
                >
                  {cat}
                </option>
              ))}

            </select>

            {/* Sort */}

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
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
                Newest First
              </option>

            </select>

          </div>

          {/* Loading Spinner */}



        </div>
                {/* Course Grid */}

{/* Course Grid */}

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

  {loading ? (

    [...Array(8)].map((_, index) => (
      <CourseSkeleton key={index} />
    ))

  ) : courses.length === 0 ? (

    <div className="col-span-full">

      <div className="bg-white rounded-3xl shadow-lg p-12 text-center">

        <div className="text-6xl mb-5">
          📚
        </div>

        <h2 className="text-3xl font-bold text-gray-800">
          No Courses Found
        </h2>

        <p className="text-gray-500 mt-3">
          Try changing your search or selecting another category.
        </p>

        <button
          onClick={() => {
            setSearch("");
            setCategory("");
            setSort("newest");
          }}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Clear Filters
        </button>

      </div>

    </div>

  ) : (

    courses.map((course) => (

      <div
        key={course._id}
        className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
      >

        <img
          src={course.image}
          alt={course.title}
          className="w-full h-56 object-cover"
        />

        <div className="p-6">

          <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
            {course.category}
          </span>

          <h2 className="text-2xl font-bold text-gray-800 mb-3 line-clamp-2">
            {course.title}
          </h2>

          <p className="text-gray-600 mb-5 line-clamp-3">
            {course.shortDescription}
          </p>

          <div className="flex justify-between items-center mb-6">

            <span className="text-yellow-500 font-bold">
              ⭐ {course.rating}
            </span>

            <span className="text-green-600 text-xl font-bold">
              ${course.price}
            </span>

          </div>

          <Link
            to={`/course/${course._id}`}
            className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
          >
            View Details
          </Link>

        </div>

      </div>

    ))

  )}

</div>
                {/* Bottom Section */}

        <div className="mt-16 text-center">

          <h2 className="text-3xl font-bold text-gray-800">
            Keep Learning 🚀
          </h2>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">

            New professional courses are added regularly.
            Continue exploring and build your skills with SkillBridge.

          </p>


        </div>


      </div>

    </section>
  );
};


export default Explore;

