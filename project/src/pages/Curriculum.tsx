import React from "react";
import { GraduationCap, BookOpenText, Users, Baby } from "lucide-react";
import { motion } from "framer-motion";

const Curriculum = () => {
  const stages = [
    {
      icon: Baby,
      title: "Kindergarten",
      description:
        "A nurturing environment for young learners to develop foundational skills through play, exploration, and creativity.",
      ageRange: "Ages 3 - 5",
      grades: "Playgroup - PP2",
    },
    {
      icon: BookOpenText,
      title: "Primary School",
      description:
        "Solid academic foundation in literacy, numeracy, science, and social skills aligned with the CBE curriculum for Grades 1 to 6.",
      ageRange: "Ages 6 - 11",
      grades: "Grade 1 - Grade 6",
    },
    {
      icon: Users,
      title: "Junior Secondary School",
      description:
        "Intermediate stage focusing on broad-based learning, problem-solving, and preparation for career paths, covering Grades 7 to 9.",
      ageRange: "Ages 12 - 14",
      grades: "Grade 7 - Grade 9",
    },
    {
      icon: GraduationCap,
      title: "Senior Secondary School",
      description:
        "Specialized academic tracks and career-focused education for students in Grade 10 as part of the new CBE framework.",
      ageRange: "Ages 15+",
      grades: "Grade 10",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="bg-custom-gradient text-white py-20"
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Curriculum</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Bright Sparks School follows Kenya's Competency-Based Curriculum
            (CBC) designed to equip learners with the skills, knowledge, and
            values they need to succeed in the 21st century.
          </p>
        </div>
      </motion.section>

      {/* Curriculum Levels */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Curriculum Levels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our school delivers holistic and age-appropriate learning
              experiences from early childhood all the way to senior secondary
              school.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: {
                    opacity: 0,
                    x: index % 2 === 0 ? -60 : 60,
                    y: 40,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: { type: "spring", stiffness: 60, damping: 18 },
                  },
                }}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow text-center"
              >
                <stage.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {stage.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{stage.ageRange}</p>
                <p className="text-sm text-gray-700 font-medium mb-4">
                  {stage.grades}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-custom-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Explore the Future of Learning
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Empower your child with 21st-century skills through our CBC-aligned
            curriculum. Enroll today and be part of a transformative learning
            experience.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
            Enroll Now
          </button>
        </div>
      </section>
    </motion.div>
  );
};

export default Curriculum;
