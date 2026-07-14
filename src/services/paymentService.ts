import api from "./api";


export const getMyEnrollments = async()=>{

const res =
await api.get(
"/payments/my-enrollments"
);


return res.data;

};
export const checkEnrollment = async (
  courseId: string
) => {
  const res = await api.get(
    `/payments/check-enrollment/${courseId}`
  );

  return res.data;
};


export const getMyPayments = async()=>{


const res =
await api.get(
"/payments/my-payments"
);


return res.data;

};