import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

import {
  getCourse,
  updateCourse,
} from "../../services/courseService";

type CourseData = {
  title: string;
  category: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  rating: number;
};

const UpdateCourse = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  const [course, setCourse] = useState<CourseData>({
    title: "",
    category: "",
    image: "",
    shortDescription: "",
    fullDescription: "",
    price: 0,
    rating: 0,
  });

  useEffect(() => {
    loadCourse();
  }, []);

  const loadCourse = async () => {
    try {
      setLoading(true);

      const res = await getCourse(id!);

      setCourse(res.data);
    } catch {
      Swal.fire({
        icon: "error",
        title: "Course not found",
      });

      navigate("/manage-courses");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setCourse((prev) => ({
      ...prev,
      [name]:
        name === "price" || name === "rating"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setSaving(true);

      await updateCourse(id!, course);

      Swal.fire({
        icon: "success",
        title: "Course Updated Successfully!",
        timer: 1800,
        showConfirmButton: false,
      });

      navigate("/manage-courses");
    } catch {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-2xl font-bold">
        Loading Course...
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-slate-100 py-10 px-6">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8">

          <h1 className="text-4xl font-bold">
            Update Course
          </h1>

          <p className="mt-2 text-blue-100">
            Edit your course information below.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="p-8 space-y-6"
        >

                    {/* Course Title */}

          <div>

            <label className="font-semibold block mb-2">
              Course Title
            </label>

            <input
              type="text"
              name="title"
              value={course.title}
              onChange={handleChange}
              required
              className="w-full border rounded-xl px-4 py-3 focus:ring-4 focus:ring-blue-200 outline-none"
            />

          </div>

          {/* Category */}

          <div>

            <label className="font-semibold block mb-2">
              Category
            </label>

            <select
              name="category"
              value={course.category}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 focus:ring-4 focus:ring-blue-200 outline-none"
            >

              <option>Web Development</option>
              <option>Programming</option>
              <option>Design</option>
              <option>Marketing</option>
              <option>Business</option>
              <option>Photography</option>

            </select>

          </div>

          {/* Image URL */}

          <div>

            <label className="font-semibold block mb-2">
              Course Image URL
            </label>

            <input
              type="text"
              name="image"
              value={course.image}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 focus:ring-4 focus:ring-blue-200 outline-none"
            />

          </div>

          {/* Image Preview */}

          {course.image && (

            <div>

              <label className="font-semibold block mb-2">
                Image Preview
              </label>

              <img
                src={course.image}
                alt="Course"
                className="w-full h-64 object-cover rounded-2xl border"
              />

            </div>

          )}

          {/* Short Description */}

          <div>

            <label className="font-semibold block mb-2">
              Short Description
            </label>

            <textarea
              rows={3}
              name="shortDescription"
              value={course.shortDescription}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 focus:ring-4 focus:ring-blue-200 outline-none"
            />

          </div>

          {/* Full Description */}

          <div>

            <label className="font-semibold block mb-2">
              Full Description
            </label>

            <textarea
              rows={6}
              name="fullDescription"
              value={course.fullDescription}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 focus:ring-4 focus:ring-blue-200 outline-none"
            />
          </div>

          {/* Price & Rating */}

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="font-semibold block mb-2">
                Price ($)
              </label>

              <input
                type="number"
                name="price"
                value={course.price}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              />

            </div>

            <div>

              <label className="font-semibold block mb-2">
                Rating
              </label>

              <input
                type="number"
                min="0"
                max="5"
                step="0.1"
                name="rating"
                value={course.rating}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-3"
              />

            </div>

          </div>  

                    {/* Buttons */}

          <div className="flex flex-col sm:flex-row gap-4 pt-6">

            <button
              type="submit"
              disabled={saving}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
            >
              {saving ? "Updating..." : "Update Course"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/manage-courses")}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-xl transition"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </section>
  );
};

export default UpdateCourse;