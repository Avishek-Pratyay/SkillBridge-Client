const Categories = () => {
  const categories = [
    {
      title: "Web Development",
      description: "Learn React, Node.js, TypeScript and modern web technologies.",
      icon: "💻",
    },
    {
      title: "Data Science",
      description: "Master data analysis, Python, AI and machine learning.",
      icon: "📊",
    },
    {
      title: "UI/UX Design",
      description: "Create beautiful and user-friendly digital experiences.",
      icon: "🎨",
    },
    {
      title: "Digital Marketing",
      description: "Learn SEO, branding and online marketing strategies.",
      icon: "📢",
    },
    {
      title: "Cyber Security",
      description: "Understand security, networking and protection methods.",
      icon: "🔐",
    },
    {
      title: "Mobile Development",
      description: "Build Android and cross-platform mobile applications.",
      icon: "📱",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-20 px-6">

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Explore Learning Categories
        </h2>

        <p className="text-gray-600 mt-4">
          Choose the right path and develop skills that help you grow.
        </p>
      </div>


      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {categories.map((category) => (
          <div
            key={category.title}
            className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 duration-300"
          >

            <div className="text-5xl mb-5">
              {category.icon}
            </div>

            <h3 className="text-2xl font-bold">
              {category.title}
            </h3>

            <p className="text-gray-600 mt-3">
              {category.description}
            </p>

            <button className="mt-6 text-blue-600 font-semibold">
              Explore Courses →
            </button>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Categories;