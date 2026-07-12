import { Link } from "react-router-dom";
import { FaHome, FaSearch } from "react-icons/fa";

const NotFound = () => {
  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center px-6">

      <div className="max-w-3xl text-center">

        <h1 className="text-8xl md:text-9xl font-black text-blue-600">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-bold text-gray-800">
          Oops! Page Not Found
        </h2>

        <p className="mt-6 text-gray-600 text-lg leading-8">

          The page you're looking for doesn't exist,
          may have been removed, or the URL might be incorrect.

        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-10">

          <Link
            to="/"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-2xl font-semibold transition"
          >
            <FaHome />
            Back Home
          </Link>

          <Link
            to="/explore"
            className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-7 py-4 rounded-2xl font-semibold transition"
          >
            <FaSearch />
            Explore Courses
          </Link>

        </div>

      </div>

    </section>
  );
};

export default NotFound;