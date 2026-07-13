import {  useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import { registerUser } from "../../services/authService";
const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setError("");

  const form = e.currentTarget;
  const formData = new FormData(form);

  const name = (formData.get("name") as string) || "";
  const email = (formData.get("email") as string) || "";
  const photoURL = (formData.get("photoURL") as string) || "";
  const password = (formData.get("password") as string) || "";
  const confirmPassword =
    (formData.get("confirmPassword") as string) || "";
    const role =
  (formData.get("role") as string) || "student";

  if (!name || !email || !password) {
    setError("Please fill all required fields.");
    return;
  }

  if (password.length < 6) {
    setError("Password must be at least 6 characters.");
    return;
  }

  if (password !== confirmPassword) {
    setError("Passwords do not match.");
    return;
  }

  setLoading(true);

  try {
    await registerUser({
      name,
      email,
      password,
      photoURL,
      role,
    });

    Swal.fire({
      icon: "success",
      title: "Registration Successful!",
      text: "Please login to continue.",
      timer: 2000,
      showConfirmButton: false,
    });

    navigate("/login");
} catch (err) {
  let message = "Something went wrong.";

  if (axios.isAxiosError(err)) {
    message =
      err.response?.data?.message ??
      "Something went wrong.";
  }

  Swal.fire({
    icon: "error",
    title: "Registration Failed",
    text: message,
  });
} finally {
    setLoading(false);
  }
};

  return (
    <section className="min-h-screen bg-slate-100 flex items-center justify-center px-6 py-10">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* Left Side */}
        <div className="hidden lg:flex bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-12 flex-col justify-center">

          <h2 className="text-5xl font-bold mb-6">
            Join SkillBridge
          </h2>

          <p className="text-lg leading-8 text-blue-100">
            Learn new skills, discover amazing courses and build your career
            with professional instructors.
          </p>

        </div>

        {/* Right Side */}
        <div className="p-10">

          <h2 className="text-3xl font-bold text-center mb-8">
            Create Account
          </h2>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-xl px-4 py-3"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-xl px-4 py-3"
              required
            />

            <input
              name="photoURL"
              type="text"
              placeholder="Photo URL (Optional)"
              className="w-full border rounded-xl px-4 py-3"
            />
            <div>

  <label className="block mb-3 font-semibold text-gray-700">
    Register As
  </label>

  <div className="grid grid-cols-2 gap-4">

    <label className="border rounded-xl p-4 cursor-pointer hover:border-blue-500 transition">

      <input
        type="radio"
        name="role"
        value="student"
        defaultChecked
        className="mr-2"
      />

      <span className="font-semibold">
        Student
      </span>

      <p className="text-sm text-gray-500 mt-2">
        Browse, enroll and learn from courses.
      </p>

    </label>

    <label className="border rounded-xl p-4 cursor-pointer hover:border-blue-500 transition">

      <input
        type="radio"
        name="role"
        value="instructor"
        className="mr-2"
      />

      <span className="font-semibold">
        Instructor
      </span>

      <p className="text-sm text-gray-500 mt-2">
        Create and manage your own courses.
      </p>

    </label>

  </div>

</div>

            {/* Password */}
            <div className="relative">

              <input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full border rounded-xl px-4 py-3"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-4"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>

            </div>

            {/* Confirm Password */}
            <div className="relative">

              <input
                name="confirmPassword"
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                className="w-full border rounded-xl px-4 py-3"
                required
              />

              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-4 top-4"
              >
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </button>

            </div>

            {error && (
              <p className="text-red-500 text-sm">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="text-gray-500 text-sm">OR</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <button
              type="button"
              onClick={() =>
                Swal.fire({
                  icon: "info",
                  title: "Coming Soon",
                  text: "Google Login will be added later.",
                })
              }
              className="w-full border rounded-xl py-3 flex justify-center items-center gap-3 hover:bg-gray-100"
            >
              <FaGoogle className="text-red-500" />
              Continue with Google
            </button>

            <p className="text-center text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 font-semibold"
              >
                Login
              </Link>
            </p>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Register;