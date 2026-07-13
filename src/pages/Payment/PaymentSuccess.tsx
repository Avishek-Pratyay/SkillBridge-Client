const PaymentSuccess = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-10 rounded-3xl shadow-xl text-center">

        <div className="text-7xl mb-5">
          ✅
        </div>

        <h1 className="text-4xl font-bold">
          Payment Successful
        </h1>

        <p className="mt-4 text-gray-600">
          Thank you for purchasing this course.
        </p>

      </div>
    </section>
  );
};

export default PaymentSuccess;