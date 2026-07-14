import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <section className="min-h-screen bg-slate-100 flex items-center justify-center px-5">

      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-12 text-center">

        <div className="text-7xl mb-6">
          🎉
        </div>

        <h1 className="text-4xl font-bold text-green-600">

          Payment Successful!

        </h1>

        <p className="text-gray-600 text-lg mt-5 leading-8">

          Congratulations! You have successfully enrolled in your course.

          <br />

          Your payment has been confirmed and your course is now available in
          your dashboard.

        </p>

        {/* Success Card */}

        <div className="mt-10 bg-green-50 rounded-2xl p-8 border border-green-200">

          <h2 className="text-2xl font-bold text-green-700">

            ✅ Enrollment Complete

          </h2>

          <p className="text-gray-600 mt-3">

            You can start learning immediately from your student dashboard.

          </p>

        </div>

        {/* Buttons */}

        <div className="grid md:grid-cols-2 gap-5 mt-10">

          <Link
            to="/dashboard"
            className="bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition"
          >
            Go to Dashboard
          </Link>

          <Link
            to="/explore"
            className="bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold transition"
          >
            Browse More Courses
          </Link>

        </div>

      </div>

    </section>
  );
};

export default PaymentSuccess;