import React from "react";
import { BookOpen, Users, Heart, Zap } from "lucide-react";

const Curriculum = () => {
  const curriculumFeatures = [
    {
      icon: BookOpen,
      title: "CBE",
      description:
        "We follow Kenya's modern CBE framework, focusing on developing competencies and skills rather than just knowledge acquisition.",
      subjects: [
        "Mathematics",
        "English",
        "Kiswahili",
        "Science",
        "Social Studies",
        "Creative Arts",
      ],
    },
    {
      icon: Heart,
      title: "Islamic Studies",
      description:
        "Comprehensive Islamic education covering Quran, Hadith, Islamic history, and moral teachings for our Muslim students.",
      subjects: [
        "Quran Recitation",
        "Islamic History",
        "Arabic Language",
        "Islamic Ethics",
        "Fiqh",
      ],
    },
    {
      icon: Users,
      title: "Christian Religious Education (CRE)",
      description:
        "Biblical studies and Christian values education to nurture spiritual growth and moral development.",
      subjects: [
        "Bible Studies",
        "Christian Ethics",
        "Church History",
        "Christian Living",
        "Prayer & Worship",
      ],
    },
    {
      icon: Zap,
      title: "Life Skills & Character Development",
      description:
        "Essential life skills and character building programs that prepare students for real-world challenges.",
      subjects: [
        "Leadership Skills",
        "Critical Thinking",
        "Communication",
        "Problem Solving",
        "Digital Literacy",
      ],
    },
  ];

  return (
    <section id="curriculum" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Curriculum
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive, well-rounded curriculum that combines academic
            excellence with character development and spiritual growth for all
            students.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {curriculumFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start mb-6">
                <feature.icon className="w-8 h-8 text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {feature.subjects.map((subject, subIndex) => (
                  <span
                    key={subIndex}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white p-8 rounded-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Education Levels We Offer
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                From early childhood development to secondary education, we
                provide continuous learning pathways for students at every stage
                of their educational journey.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold mb-2">Early Childhood</h4>
                <p className="text-sm text-blue-100">Ages 3-6</p>
              </div>
              <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold mb-2">Primary Education</h4>
                <p className="text-sm text-blue-100">Grades 1-8</p>
              </div>
              <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold mb-2">Secondary Education</h4>
                <p className="text-sm text-blue-100">Forms 1-4</p>
              </div>
              <div className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold mb-2">Special Programs</h4>
                <p className="text-sm text-blue-100">Remedial & Gifted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
