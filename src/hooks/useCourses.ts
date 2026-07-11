import { useEffect, useState } from "react";
import axiosInstance from "../services/axios";
import { Course } from "../types/course";

const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("/courses")
      .then((res) => {
        setCourses(res.data.data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return {
    courses,
    loading,
  };
};

export default useCourses;