import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import api from "../../services/api";
import { getCourse } from "../../services/courseService";
import { useNavigate } from "react-router-dom";
type Course = {
  _id: string;
  title: string;
  image: string;
  price: number;
};

const Checkout = () => {
  const { id } = useParams();
const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  
  const [course, setCourse] =
    useState<Course | null>(null);

  const [clientSecret, setClientSecret] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await getCourse(id!);

      setCourse(res.data);

      const paymentRes = await api.post(
        "/payments/create-payment-intent",
        {
          courseId: id,
        }
      );

      setClientSecret(
        paymentRes.data.clientSecret
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

const handlePayment = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  if (!stripe || !elements || !clientSecret || !course) {
    return;
  }

  const card = elements.getElement(CardElement);

  if (!card) {
    return;
  }

  try {

    const result =
      await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card,
          },
        }
      );


    if (result.error) {

      alert(result.error.message);

      return;

    }


if (
  result.paymentIntent.status === "succeeded"
) {

  await api.post(
    "/payments/confirm",
    {
      courseId: course._id,
      paymentIntentId: result.paymentIntent.id,
      amount: course.price,
    }
  );

  navigate("/payment-success");
}


  } catch (error) {

    console.log(error);

    alert(
      "Payment failed"
    );

  }
};

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h2 className="text-3xl font-bold">
          Loading...
        </h2>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-slate-100 py-14">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">

        {/* Left */}

        <div className="bg-white rounded-3xl shadow-xl p-8">

          {course && (
            <>
              <img
                src={course.image}
                alt={course.title}
                className="rounded-2xl h-72 w-full object-cover"
              />

              <h2 className="text-3xl font-bold mt-6">
                {course.title}
              </h2>

              <h3 className="text-2xl text-blue-600 font-bold mt-4">
                ${course.price}
              </h3>
            </>
          )}

        </div>

        {/* Right */}

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            Secure Checkout
          </h2>

          <form
            onSubmit={handlePayment}
            className="space-y-8"
          >

            <div className="border rounded-xl p-5">

              <CardElement />

            </div>

            <button
              disabled={!stripe || !clientSecret}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold"
            >
              Pay ${course?.price}
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default Checkout;