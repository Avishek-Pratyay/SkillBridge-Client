import { useState } from "react";

const FAQ = () => {

  const [open, setOpen] = useState<number | null>(null);

  const questions = [
    {
      question: "What is SkillBridge?",
      answer:
        "SkillBridge is an online learning platform where students can learn professional skills through quality courses.",
    },
    {
      question: "Are the courses beginner friendly?",
      answer:
        "Yes. Our courses are designed for beginners as well as experienced learners.",
    },
    {
      question: "Can I learn at my own pace?",
      answer:
        "Yes. You can access courses anytime and continue learning according to your schedule.",
    },
    {
      question: "How can I become an instructor?",
      answer:
        "You can apply as an instructor and share your knowledge with SkillBridge learners.",
    },
  ];


  return (
    <section className="max-w-5xl mx-auto py-20 px-6">

      <div className="text-center mb-12">

        <h2 className="text-4xl font-bold">
          Frequently Asked Questions
        </h2>

        <p className="text-gray-600 mt-4">
          Find answers to common questions about our platform.
        </p>

      </div>


      <div className="space-y-4">

        {questions.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6"
          >

            <button
              onClick={() =>
                setOpen(open === index ? null : index)
              }
              className="w-full flex justify-between items-center text-left font-semibold text-lg"
            >

              {item.question}

              <span>
                {open === index ? "-" : "+"}
              </span>

            </button>


            {open === index && (
              <p className="text-gray-600 mt-4">
                {item.answer}
              </p>
            )}

          </div>

        ))}

      </div>

    </section>
  );
};

export default FAQ;