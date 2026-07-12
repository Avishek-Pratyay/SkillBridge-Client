import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaUserCircle,
  FaChevronDown,
} from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Explore",
      path: "/explore",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const dashboardLinks = [
    {
      name: "Add Course",
      path: "/add-course",
    },
    {
      name: "Manage Courses",
      path: "/manage-courses",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}

        <Link
          to="/"
          className="text-3xl font-extrabold text-blue-600"
        >
          SkillBridge
        </Link>

        {/* Desktop Menu */}

        <div className="hidden lg:flex items-center gap-7">

          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600 transition"
              }
            >
              {link.name}
            </NavLink>
          ))}

          {user &&
            dashboardLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600 transition"
                }
              >
                {link.name}
              </NavLink>
            ))}

        </div>

                {/* Right Side */}

        <div className="hidden lg:flex items-center gap-4">

          {!user ? (

            <>

              <Link
                to="/login"
                className="px-5 py-2 rounded-xl border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-5 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                Register
              </Link>

            </>

          ) : (

            <div className="relative">

              <button
                onClick={() =>
                  setDropdownOpen(!dropdownOpen)
                }
                className="flex items-center gap-3 hover:bg-gray-100 px-3 py-2 rounded-xl transition"
              >

                <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">

                  {user.email.charAt(0).toUpperCase()}

                </div>

                <div className="text-left">

                  <p className="font-semibold text-gray-800">

                    {user.email}

                  </p>

                  <p className="text-sm text-gray-500">
                    Student
                  </p>

                </div>

                <FaChevronDown />

              </button>

              {dropdownOpen && (

                <div className="absolute right-0 mt-4 w-56 bg-white rounded-2xl shadow-2xl overflow-hidden border">

                  <Link
                    to="/dashboard"
                    className="block px-5 py-3 hover:bg-blue-50"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Dashboard
                  </Link>

                  <Link
                    to="/manage-courses"
                    className="block px-5 py-3 hover:bg-blue-50"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Manage Courses
                  </Link>

                  <Link
                    to="/add-course"
                    className="block px-5 py-3 hover:bg-blue-50"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Add Course
                  </Link>

                  <hr />

                  <button
                    onClick={() => {
                      logout();
                      setDropdownOpen(false);
                    }}
                    className="w-full text-left px-5 py-3 text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>

                </div>

              )}

            </div>

          )}

        </div>

        {/* Mobile Menu Button */}

        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

            {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-white border-t shadow-md">

          <div className="flex flex-col px-6 py-5 space-y-4">

            {/* Main Links */}

            {links.map((link) => (

              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700"
                }
              >
                {link.name}
              </NavLink>

            ))}

            {/* Dashboard Links */}

            {user &&
              dashboardLinks.map((link) => (

                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700"
                  }
                >
                  {link.name}
                </NavLink>

              ))}

            <hr />

            {!user ? (

              <>

                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="bg-blue-600 text-white py-3 rounded-xl text-center font-semibold"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className="border border-blue-600 text-blue-600 py-3 rounded-xl text-center font-semibold"
                >
                  Register
                </Link>

              </>

            ) : (

              <>

                <div className="flex items-center gap-3">

                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">

                    {user.email.charAt(0).toUpperCase()}

                  </div>

                  <div>

                    <p className="font-semibold">
                      {user.email}
                    </p>

                    <p className="text-gray-500 text-sm">
                      Student
                    </p>

                  </div>

                </div>

                <button
                  onClick={() => {
                    logout();
                    setMenuOpen(false);
                  }}
                  className="bg-red-500 text-white py-3 rounded-xl font-semibold"
                >
                  Logout
                </button>

              </>

            )}

          </div>

        </div>

      )}

          </nav>
  );
};

export default Navbar;
