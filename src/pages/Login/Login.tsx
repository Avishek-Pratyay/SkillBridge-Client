import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    const form = e.currentTarget;

    const email = (form.email as HTMLInputElement).value;
    const password = (form.password as HTMLInputElement).value;

    const success = await login(email, password);

    if (success) {
      navigate("/");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

        <div className="text-center">

          <div className="w-20 h-20 mx-auto rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
            S
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mt-6">
            Welcome Back
          </h1>

          <p className="text-gray-500 mt-2">
            Sign in to continue learning with SkillBridge.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          <div>

            <label className="block mb-2 font-medium text-gray-700">
              Email Address
            </label>

            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
            />

          </div>

          <div>

            <div className="flex justify-between mb-2">

              <label className="font-medium text-gray-700">
                Password
              </label>

              <button
                type="button"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot Password?
              </button>

            </div>

            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition"
            />

          </div>

          {error && (
            <div className="bg-red-100 border border-red-300 text-red-600 rounded-xl px-4 py-3 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition duration-300"
          >
            Login
          </button>

        </form>

        <div className="mt-8 text-center text-gray-600">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Register
          </Link>

        </div>

        <div className="mt-4 text-center">

          <Link
            to="/"
            className="text-gray-500 hover:text-blue-600 transition"
          >
            ← Back to Home
          </Link>

        </div>

      </div>

    </section>
  );
};

export default Login;