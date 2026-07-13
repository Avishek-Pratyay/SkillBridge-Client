import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
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

  const instructorLinks = [
    {
      name: "Add Course",
      path: "/add-course",
    },
    {
      name: "Manage Courses",
      path: "/manage-courses",
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

        <div className="hidden lg:flex items-center gap-8">

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

          {user?.role === "instructor" &&

            instructorLinks.map((link) => (

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

          {user && (

            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600 transition"
              }
            >
              Dashboard
            </NavLink>

          )}

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
                className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-gray-100 transition"
              >

                <div className="w-11 h-11 rounded-full overflow-hidden bg-blue-600 flex items-center justify-center">

                  {user.photoURL ? (

                    <img
                      src={user.photoURL}
                      alt={user.name}
                      className="w-full h-full object-cover"
                    />

                  ) : (

                    <span className="text-white font-bold text-lg">

                      {user.name.charAt(0).toUpperCase()}

                    </span>

                  )}

                </div>

                <div className="text-left">

                  <p className="font-semibold">

                    {user.name}

                  </p>

                  <p className="text-xs text-gray-500">

                    {user.email}

                  </p>

                  <p className="text-xs text-blue-600 capitalize">

                    {user.role}

                  </p>

                </div>

                <FaChevronDown />

              </button>

              {dropdownOpen && (

                <div className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-2xl border overflow-hidden">

                  <div className="px-5 py-4 bg-slate-50">

                    <h3 className="font-bold">

                      {user.name}

                    </h3>

                    <p className="text-sm text-gray-500">

                      {user.email}

                    </p>

                    <span className="inline-block mt-2 bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full capitalize">

                      {user.role}

                    </span>

                  </div>

                  <Link
                    to="/dashboard"
                    onClick={() => setDropdownOpen(false)}
                    className="block px-5 py-3 hover:bg-blue-50"
                  >
                    Dashboard
                  </Link>

                  {user.role === "instructor" && (

                    <>
                                          <Link
                        to="/manage-courses"
                        onClick={() => setDropdownOpen(false)}
                        className="block px-5 py-3 hover:bg-blue-50"
                      >
                        Manage Courses
                      </Link>

                      <Link
                        to="/add-course"
                        onClick={() => setDropdownOpen(false)}
                        className="block px-5 py-3 hover:bg-blue-50"
                      >
                        Add Course
                      </Link>

                    </>

                  )}

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

        <div className="lg:hidden border-t bg-white shadow-md">

          <div className="flex flex-col px-6 py-5 space-y-4">

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

            {user?.role === "instructor" &&

              instructorLinks.map((link) => (

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

            {user && (

              <NavLink
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700"
                }
              >
                Dashboard
              </NavLink>

            )}

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

                  <div className="w-12 h-12 rounded-full overflow-hidden bg-blue-600 flex items-center justify-center">

                    {user.photoURL ? (

                      <img
                        src={user.photoURL}
                        alt={user.name}
                        className="w-full h-full object-cover"
                      />

                    ) : (

                      <span className="text-white font-bold">
                        {user.name.charAt(0).toUpperCase()}
                      </span>

                    )}

                  </div>

                  <div>

                    <p className="font-semibold">
                      {user.name}
                    </p>

                    <p className="text-sm text-gray-500">
                      {user.email}
                    </p>

                    <p className="text-xs text-blue-600 capitalize">
                      {user.role}
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