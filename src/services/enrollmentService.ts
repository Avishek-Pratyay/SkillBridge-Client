import api from "./api";
import { getToken } from "../utils/token";

export const enrollCourse = async (courseId: string) => {
  const token = getToken();

  const res = await api.post(
    "/enrollments",
    { courseId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

export const getMyEnrollments = async () => {
  const token = getToken();

  const res = await api.get(
    "/enrollments/my-enrollments",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};