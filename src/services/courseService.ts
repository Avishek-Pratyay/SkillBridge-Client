import api from "./api";
import { getToken } from "../utils/token";

export interface CourseData {
  title: string;
  category: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  rating: number;
}

export const addCourse = async (course: CourseData) => {
  const token = getToken();

  const res = await api.post("/courses", course, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export const getCourses = async (
  search = "",
  category = "",
  sort = ""
) => {
  const res = await api.get("/courses", {
    params: {
      search,
      category,
      sort,
    },
  });

  return res.data;
};

export const getCourse = async (id: string) => {
  const res = await api.get(`/courses/${id}`);
  return res.data;
};

export const getMyCourses = async () => {
  const token = getToken();

  const res = await api.get("/courses/my-courses", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
export const deleteCourse = async (id: string) => {
  const token = getToken();

  const res = await api.delete(`/courses/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export const updateCourse = async (
  id: string,
  course: CourseData
) => {
  const token = getToken();

  const res = await api.put(`/courses/${id}`, course, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};
export const getDashboardStats = async () => {
  const token = getToken();

  const res = await api.get("/courses/my-courses", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};