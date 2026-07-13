import api from "./api";

export const registerUser = async (user: {
  name: string;
  email: string;
  password: string;
  photoURL?: string;
  role: "student" | "instructor";
}) => {
  const res = await api.post("/auth/register", user);
  return res.data;
};

export const loginUser = async (user: {
  email: string;
  password: string;
}) => {
  const res = await api.post("/auth/login", user);
  return res.data;
};