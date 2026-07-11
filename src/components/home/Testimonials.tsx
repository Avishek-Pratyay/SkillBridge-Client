const Testimonials = () => {

  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Frontend Developer",
      review:
        "SkillBridge helped me improve my React skills and build real projects.",
      avatar:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Rahim Hasan",
      role: "Software Engineer",
      review:
        "The courses are practical and easy to follow. I learned many industry skills.",
      avatar:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Nusrat Jahan",
      role: "UI/UX Designer",
      review:
        "The design courses helped me create better user experiences.",
      avatar:
        "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];


  return (
    <section className="bg-slate-50 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold">
            What Our Students Say
          </h2>

          <p className="text-gray-600 mt-4">
            Thousands of learners are growing their careers with SkillBridge.
          </p>

        </div>


        <div className="grid md:grid-cols-3 gap-8">


          {testimonials.map((item) => (

            <div
              key={item.name}
              className="bg-white rounded-2xl shadow-lg p-8"
            >

              <p className="text-gray-600">
                "{item.review}"
              </p>


              <div className="flex items-center gap-4 mt-6">

                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />


                <div>

                  <h3 className="font-bold">
                    {item.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>

                </div>

              </div>


            </div>

          ))}


        </div>


      </div>

    </section>
  );
};


export default Testimonials;