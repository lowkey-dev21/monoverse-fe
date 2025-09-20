"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

// FAQ data
const faqItems = [
  {
    question: "What is Monoverse?",
    answer:
      "Monoverse is a revolutionary learning platform that combines cinematic course experiences with AI tutoring. We create immersive educational content with professional production quality, personalized learning paths, and accredited certification options.",
  },
  {
    question: "Can I access all courses with one account?",
    answer:
      "Yes! Monoverse operates a unified system, so you only need one login for everything. Your subscription gives you access to our entire library of cinematic courses, AI tutoring tools, and community features.",
  },
  {
    question:
      "How does Monoverse&apos;s AI Tutor differ from other learning assistants?",
    answer:
      "Our AI Tutors are specially designed for educational support with course-specific knowledge. They provide personalized guidance, answer questions in real-time, offer feedback on your projects, and adapt to your learning style over time. Unlike generic AI, Monoverse tutors understand the context of your specific course.",
  },
  {
    question: "Is Monoverse free to use?",
    answer:
      "Monoverse offers several subscription tiers including a free basic plan with limited access to our library. Premium plans unlock our complete course catalog, AI tutoring features, certification options, and community resources. Check our pricing page for current plans and special offers.",
  },
  {
    question:
      "What makes Monoverse&apos;s courses different from other platforms?",
    answer:
      "Monoverse courses feature cinematic production quality with interactive elements, professional visuals, and engaging storytelling. Our courses aren&apos;t just videos - they&apos;re immersive experiences designed with cognitive science principles to maximize retention and engagement.",
  },
  {
    question: "How do I get a certificate after completing a course?",
    answer:
      "Certificates are automatically issued upon successful completion of course requirements, including all assessments and projects. For accredited certificates, additional verification steps may be required. All certificates are digitally verifiable and can be shared directly to your LinkedIn profile or downloaded as PDFs.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Open the second item by default (index 1)

  const toggleItem = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close if already open
    } else {
      setOpenIndex(index); // Open the clicked item
    }
  };

  return (
    <section className="py-16 mx-auto ">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-dmsans mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about Monoverse and our learning
            experiences
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-200 py-6 transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.question}
                </h3>
                <span className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-primary" />
                  ) : (
                    <Plus className="h-5 w-5 text-gray-500" />
                  )}
                </span>
              </button>
              <div
                className={`mt-3 transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 pb-4">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? We&apos;re here to help.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
