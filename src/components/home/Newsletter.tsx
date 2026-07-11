const Newsletter = () => {

  return (
    <section className="bg-blue-600 py-20">

      <div className="max-w-5xl mx-auto px-6 text-center text-white">

        <h2 className="text-4xl font-bold">
          Stay Updated With SkillBridge
        </h2>

        <p className="mt-4 text-blue-100">
          Subscribe to receive new courses and learning updates.
        </p>


        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">

          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 rounded-xl text-black w-full md:w-96"
          />

          <button
            className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold"
          >
            Subscribe
          </button>

        </div>


      </div>

    </section>
  );
};


export default Newsletter;