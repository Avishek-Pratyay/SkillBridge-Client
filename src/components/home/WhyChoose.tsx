const WhyChoose = () => {
  const features = [
    {
      title: "Expert Instructors",
      description:
        "Learn from experienced professionals who teach practical skills.",
      icon: "👨‍🏫",
    },
    {
      title: "Practical Projects",
      description:
        "Build real-world projects and improve your professional portfolio.",
      icon: "🚀",
    },
    {
      title: "Flexible Learning",
      description:
        "Access courses anytime and learn at your own comfortable pace.",
      icon: "⏰",
    },
    {
      title: "Career Growth",
      description:
        "Develop skills that help you achieve your career goals.",
      icon: "📈",
    },
  ];

  return (
    <section className="bg-slate-50 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Why Choose SkillBridge?
          </h2>

          <p className="text-gray-600 mt-4">
            Everything you need to learn, grow and succeed.
          </p>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl duration-300"
            >

              <div className="text-5xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChoose;