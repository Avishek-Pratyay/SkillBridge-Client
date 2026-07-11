import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const Statistics = () => {

  const data = [
    {
      name: "Courses",
      value: 500,
    },
    {
      name: "Students",
      value: 10000,
    },
    {
      name: "Instructors",
      value: 200,
    },
    {
      name: "Success",
      value: 95,
    },
  ];


  return (
    <section className="max-w-7xl mx-auto py-20 px-6">

      <div className="text-center mb-12">

        <h2 className="text-4xl font-bold">
          Our Learning Statistics
        </h2>

        <p className="text-gray-600 mt-4">
          Numbers that represent our growing learning community.
        </p>

      </div>


      <div className="bg-white rounded-2xl shadow-lg p-6">

        <ResponsiveContainer width="100%" height={350}>

          <BarChart data={data}>

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="value"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>


    </section>
  );
};


export default Statistics;