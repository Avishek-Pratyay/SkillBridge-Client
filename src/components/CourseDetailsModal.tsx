import { useEffect, useState } from "react";
import { getCourseDetails } from "../services/paymentService";

type Props = {
  courseId: string;
  open: boolean;
  onClose: () => void;
};

const CourseDetailsModal = ({
  courseId,
  open,
  onClose,
}: Props) => {
  const [loading, setLoading] = useState(false);

  const [course, setCourse] = useState<any>(null);
useEffect(() => {
  if (open && courseId) {
    loadCourse();
  }
}, [open, courseId]);

  const loadCourse = async () => {
    try {
      setLoading(true);

      const res =
        await getCourseDetails(courseId);

      setCourse(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center p-5">

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">

        {/* Header */}

        <div className="flex justify-between items-center border-b p-6">

          <h2 className="text-3xl font-bold">

            Course Details

          </h2>

 <button
  onClick={() => {
    setCourse(null);
    onClose();
  }}
  className="text-2xl hover:text-red-500"
>
  ✕
</button>

        </div>

        {loading ? (

          <div className="p-10 text-center">

            Loading...

          </div>

        ) : (

          <div className="p-8">

           <div className="border-b pb-6">

  <h2 className="text-3xl font-bold text-slate-800">
    {course?.title}
  </h2>

  <p className="text-gray-500 mt-2">
    Instructor Analytics
  </p>

</div>
<div className="grid md:grid-cols-2 gap-6 mt-8">

  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-7 text-white shadow">

    <p className="text-blue-100">
      Total Students
    </p>

    <h2 className="text-5xl font-bold mt-3">
      {course?.totalStudents}
    </h2>

  </div>

  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-7 text-white shadow">

    <p className="text-green-100">
      Total Revenue
    </p>

    <h2 className="text-5xl font-bold mt-3">
      ${course?.totalRevenue}
    </h2>

  </div>

</div>

<h3 className="text-2xl font-bold mt-10 mb-6">
  Student List
</h3>

{!course ? null : course.students.length === 0 ? (

  <div className="text-center py-14">

  <div className="text-6xl">
    🎓
  </div>

  <h3 className="text-2xl font-bold mt-5">

    No Students Yet

  </h3>

  <p className="text-gray-500 mt-2">

    Students will appear here after purchasing this course.

  </p>

</div>

) : (

  <div className="space-y-4">

    {course.students.map(
                  (
                    student: any,
                    index: number
                  ) => (
<div
  key={index}
  className="flex justify-between items-center p-5 border rounded-2xl hover:bg-slate-50 transition"
>

  <div className="flex items-center gap-4">

    <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">

      {student.name?.charAt(0).toUpperCase()}

    </div>

    <div>

      <h3 className="font-bold text-lg">

        {student.name}

      </h3>

      <p className="text-gray-500">

        {student.email}

      </p>

    </div>

  </div>

  <div className="text-right">

    <p className="text-green-600 font-bold">

      Enrolled

    </p>

  </div>

</div>
                  )
                )}

              </div>

            )}

          </div>

        )}

      </div>

    </div>
  );
};

export default CourseDetailsModal;