import api from "../../services/api";
import { useRef, useState } from "react";
import type { FormEvent } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../../firebase/firebase";import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { login,googleLogin, } = useAuth();
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();
  const [error, setError] = useState("");

  const emailRef = useRef<HTMLInputElement>(null);
const passwordRef = useRef<HTMLInputElement>(null);

const fillDemo = (
  email: string,
  password: string
) => {
  if (emailRef.current)
    emailRef.current.value = email;

  if (passwordRef.current)
    passwordRef.current.value = password;
};
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
const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(
      auth,
      provider
    );

    const googleUser = result.user;

    const res = await api.post(
      "/auth/google-login",
      {
        name: googleUser.displayName,
        email: googleUser.email,
        photoURL: googleUser.photoURL,
      }
    );

googleLogin(res.data);

navigate("/");

  } catch (error) {
    console.log(error);
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
  ref={emailRef}
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
  ref={passwordRef}
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
          <div className="relative py-3">

  <div className="absolute inset-0 flex items-center">
    <div className="w-full border-t"></div>
  </div>

  <div className="relative flex justify-center">
    <span className="bg-white px-4 text-gray-500 text-sm">
      Demo Accounts
    </span>
  </div>

</div>

<div className="grid grid-cols-2 gap-4">

  <button
    type="button"
    onClick={() =>
      fillDemo(
        "student@skillbridge.com",
        "123456"
      )
    }
    className="border rounded-xl py-3 font-semibold hover:bg-blue-50 transition"
  >
    🎓 Demo Student
  </button>

  <button
    type="button"
    onClick={() =>
      fillDemo(
        "instructor@skillbridge.com",
        "123456"
      )
    }
    className="border rounded-xl py-3 font-semibold hover:bg-green-50 transition"
  >
    👨‍🏫 Demo Instructor
  </button>

</div>

<button
  type="button"
  onClick={handleGoogleLogin}
  className="w-full mt-5 border border-gray-300 hover:border-blue-600 hover:bg-blue-50 py-3 rounded-xl font-semibold transition flex items-center justify-center gap-3"
>
  <img
    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
    className="w-5 h-5"
  />

  Continue with Google
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