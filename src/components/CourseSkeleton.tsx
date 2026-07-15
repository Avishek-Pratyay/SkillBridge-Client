const CourseSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow animate-pulse overflow-hidden">
      <div className="h-52 bg-gray-300"></div>

      <div className="p-5">
        <div className="h-6 w-3/4 bg-gray-300 rounded mb-4"></div>

        <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>

        <div className="h-4 w-5/6 bg-gray-200 rounded mb-5"></div>

        <div className="flex justify-between">
          <div className="h-5 w-16 bg-gray-300 rounded"></div>

          <div className="h-5 w-20 bg-gray-300 rounded"></div>
        </div>

        <div className="mt-6 h-10 w-full bg-gray-300 rounded-xl"></div>
      </div>
    </div>
  );
};

export default CourseSkeleton;