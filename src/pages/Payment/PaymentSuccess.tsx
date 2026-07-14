import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-100 px-4">

      <div className="bg-white rounded-3xl shadow-xl p-12 text-center max-w-lg w-full">

        <div className="text-7xl mb-6">
          ✅
        </div>

        <h1 className="text-4xl font-bold text-gray-800">
          Payment Successful
        </h1>

        <p className="text-gray-500 mt-5 leading-8">
          Congratulations! You have successfully enrolled in this course.
          You can now start learning immediately from your dashboard.
        </p>

        <div className="mt-10 space-y-4">

          <Link
            to="/dashboard"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
          >
            Go to Dashboard
          </Link>

          <Link
            to="/explore"
            className="block w-full border border-blue-600 text-blue-600 hover:bg-blue-50 py-4 rounded-xl font-semibold transition"
          >
            Explore More Courses
          </Link>

        </div>

      </div>

    </section>
  );
};

export default PaymentSuccess;