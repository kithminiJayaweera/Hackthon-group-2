import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
  faUsers,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

const InnovationSection: React.FC = () => {
  const features = [
    {
      icon: faGraduationCap,
      title: "Future-Driven Curriculum",
      description:
        "Stay ahead with courses continually updated to match fast-changing global tech trends.",
    },
    {
      icon: faBriefcase,
      title: "Industry-Integrated Learning",
      description:
        "Stay ahead with courses continually updated to match fast-changing global tech trends.",
    },
    {
      icon: faUsers,
      title: "Flexible Learning Tracks",
      description:
        "From foundational programs to advanced specializations, choose a pathway that fits your goals and grows with you.",
    },
    {
      icon: faRocket,
      title: "Earn While You Learn",
      description:
        "Gain hands-on experience, mentorship, and income as you build your career through our unique Work, Learn, Earn model.",
    },
    {
      icon: faRocket,
      title: "Earn While You Learn",
      description:
        "Gain hands-on experience, mentorship, and income as you build your career through our unique Work, Learn, Earn model.",
    },
  ];

  return (
    <section className="max-w-[1920px] mx-auto text-center py-16 px-6">
      {/* Section Header */}
      <h2 className="text-4xl font-bold mb-4 text-white">Certix Student Life Experience</h2>
      <p className="text-white w-full mx-auto mb-12">
      At Certix Institute, student life is deeply integrated with real-world innovation, hands-on learning, and career development. Your classroom is a company, your peers are collaborators, and your journey is both educational and entrepreneurial.
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#111] text-white rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300 shadow-lg"
          >
            <div className="flex justify-center items-center mb-4 text-white">
              <FontAwesomeIcon icon={feature.icon} size="2x" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InnovationSection;
