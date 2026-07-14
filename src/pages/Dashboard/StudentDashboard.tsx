import {
  useEffect,
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

import useAuth from "../../hooks/useAuth";

import {
  getMyEnrollments,
  getMyPayments,
} from "../../services/paymentService";

const StudentDashboard = () => {

  const { user } = useAuth();

  const [courses, setCourses] = useState<any[]>([]);
  const [payments, setPayments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {

      const courseRes =
        await getMyEnrollments();

      const paymentRes =
        await getMyPayments();

      setCourses(courseRes.data);

      setPayments(paymentRes.data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }
  };

  const totalSpent =
    payments.reduce(
      (sum, payment) => sum + Number(payment.amount),
      0
    );

  return (

    <section className="bg-slate-100 min-h-screen py-12">

      <div className="max-w-7xl mx-auto px-5">

        {/* Welcome */}

        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-3xl p-10 shadow-xl">

          <h1 className="text-4xl font-bold">

            Welcome Back 👋

          </h1>

          <p className="mt-3 text-lg">

            {user?.email}

          </p>

          <p className="mt-2 opacity-90">

            Continue your learning journey.

          </p>

        </div>

        {/* Statistics */}

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white rounded-2xl p-8 text-center shadow">

            <div className="text-5xl mb-3">
              🎓
            </div>

            <h2 className="text-gray-500">

              Enrolled Courses

            </h2>

            <p className="text-4xl font-bold text-blue-600 mt-3">

              {loading ? "..." : courses.length}

            </p>

          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow">

            <div className="text-5xl mb-3">
              💳
            </div>

            <h2 className="text-gray-500">

              Total Spent

            </h2>

            <p className="text-4xl font-bold text-green-600 mt-3">

              {loading ? "..." : `$${totalSpent}`}

            </p>

          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow">

            <div className="text-5xl mb-3">
              ⭐
            </div>

            <h2 className="text-gray-500">

              Status

            </h2>

            <p className="text-3xl font-bold text-purple-600 mt-3">

              Active

            </p>

          </div>

        </div>

        {/* My Enrolled Courses */}

        <div className="bg-white rounded-3xl shadow p-10 mt-10">

          <h2 className="text-3xl font-bold mb-8">

            My Enrolled Courses 🎓

          </h2>

          {loading ? (

            <div className="text-center py-10">

              Loading...

            </div>

          ) : courses.length === 0 ? (

            <div className="text-center py-10">

              <div className="text-6xl mb-4">
                📚
              </div>

              <h3 className="text-2xl font-bold">

                No Courses Enrolled Yet

              </h3>

              <p className="text-gray-500 mt-3">

                Browse courses and start learning today.

              </p>

              <Link
                to="/explore"
                className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
              >

                Explore Courses

              </Link>

            </div>

          ) : (

            <div className="space-y-5">

              {courses.map((course) => (

<div
  key={course._id}
  className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col lg:flex-row justify-between items-center gap-6 hover:shadow-lg transition"
>

  <div className="flex items-center gap-5">

    <img
      src={course.image}
      alt={course.title}
      className="w-28 h-20 rounded-xl object-cover"
    />

    <div>

      <h3 className="text-xl font-bold">

        {course.title}

      </h3>

      <p className="text-gray-500 mt-1">

        {course.category}

      </p>
      <div className="mt-3">

  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">

    Progress: 0%

  </span>

</div>

      <p className="text-yellow-500 mt-2">

        ⭐ {course.rating}

      </p>

    </div>

  </div>

  <Link
    to={`/course/${course._id}`}
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
  >

    View C →

  </Link>

</div>

              ))}

            </div>

          )}

        </div>

        {/* Payment History */}

        <div className="bg-white rounded-3xl shadow p-10 mt-10">

          <h2 className="text-3xl font-bold mb-8">

            Payment History 💳

          </h2>

          {loading ? (

            <div className="text-center py-10">

              Loading...

            </div>

          ) : payments.length === 0 ? (

            <p className="text-gray-500">

              No payment history found.

            </p>

          ) : (

            <div className="overflow-x-auto rounded-xl border">

  <table className="min-w-full">

    <thead className="bg-blue-600 text-white">

      <tr>

        <th className="text-left px-6 py-4">

          Course

        </th>

        <th className="text-center px-6 py-4">

          Amount

        </th>

        <th className="text-center px-6 py-4">

          Date

        </th>

        <th className="text-center px-6 py-4">

          Status

        </th>

      </tr>

    </thead>

    <tbody>

      {payments.map((payment) => (

        <tr
          key={payment._id}
          className="border-b hover:bg-slate-50"
        >

          <td className="px-6 py-5 font-semibold">

            {payment.courseTitle}

          </td>

          <td className="text-center text-green-600 font-bold">

            ${payment.amount}

          </td>

          <td className="text-center text-gray-500">

            {new Date(
              payment.paidAt
            ).toLocaleDateString()}

          </td>

          <td className="text-center">

            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">

              Paid

            </span>

          </td>

        </tr>

      ))}

    </tbody>

  </table>

</div>

          )}

        </div>

      </div>

    </section>

  );

};

export default StudentDashboard;