import React from "react";
import {
  Code2,
  FolderRoot as Football,
  Palette,
  Music,
  Zap,
  Gamepad2,
  Trophy,
  Users,
  Clock,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

const Activities = () => {
  const activities = [
    {
      icon: Code2,
      title: "Coding & Technology",
      description:
        "Students learn programming fundamentals, web development, and digital literacy skills to prepare them for the future.",
      age: "Ages 8+",
      schedule: "Mon, Wed, Fri",
      level: "Beginner to Advanced",
      benefits: [
        "Problem-solving skills",
        "Logical thinking",
        "Future career preparation",
      ],
    },
    {
      icon: Football,
      title: "Football",
      description:
        "Develop teamwork, coordination, and sportsmanship through regular football training and inter-school competitions.",
      age: "All Ages",
      schedule: "Tue, Thu",
      level: "All Levels",
      benefits: ["Physical fitness", "Teamwork", "Discipline"],
    },
    {
      icon: Gamepad2,
      title: "Skating",
      description:
        "Fun skating lessons that improve balance, coordination, and confidence while providing excellent physical exercise.",
      age: "Ages 6+",
      schedule: "Weekends",
      level: "Beginner to Intermediate",
      benefits: [
        "Balance & coordination",
        "Confidence building",
        "Physical fitness",
      ],
    },
    {
      icon: Zap,
      title: "Horse Riding",
      description:
        "Unique equestrian program that builds confidence, responsibility, and creates a special bond between students and horses.",
      age: "Ages 10+",
      schedule: "Saturdays",
      level: "Beginner to Advanced",
      benefits: ["Confidence", "Responsibility", "Animal care"],
    },
    {
      icon: Palette,
      title: "Arts & Crafts",
      description:
        "Creative expression through painting, drawing, sculpture, and various craft projects that enhance fine motor skills.",
      age: "All Ages",
      schedule: "Daily",
      level: "All Levels",
      benefits: ["Creativity", "Fine motor skills", "Self-expression"],
    },
    {
      icon: Music,
      title: "Music & Drama",
      description:
        "Musical instruments, choir, and drama performances that build confidence and showcase student talents.",
      age: "All Ages",
      schedule: "Mon, Wed, Fri",
      level: "Beginner to Advanced",
      benefits: ["Confidence", "Public speaking", "Artistic expression"],
    },
  ];

  const achievements = [
    { icon: Trophy, number: "15+", label: "Awards Won" },
    { icon: Users, number: "95%", label: "Student Participation" },
    { icon: Star, number: "20+", label: "Different Activities" },
    { icon: Clock, number: "100%", label: "Fun Guaranteed" },
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
          <h1 className="text-5xl font-bold mb-6">
            Extracurricular Activities
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Beyond academics, we offer diverse extracurricular activities that
            help students discover their talents, build confidence, and develop
            important life skills.
          </p>
        </div>
      </motion.section>

      {/* Activities Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Activity Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each activity is designed to complement academic learning while
              fostering personal growth and skill development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
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
                className="bg-gray-50 p-6 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100"
              >
                <activity.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {activity.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {activity.description}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Age Group:</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                      {activity.age}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Schedule:</span>
                    <span className="text-gray-700 font-medium">
                      {activity.schedule}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Level:</span>
                    <span className="text-gray-700 font-medium">
                      {activity.level}
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">
                    Key Benefits:
                  </h4>
                  <ul className="space-y-1">
                    {activity.benefits.map((benefit, bIndex) => (
                      <li key={bIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2"></div>
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Activity Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our activities are organized into different categories to ensure
              comprehensive development of all students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-skyish text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Sports & Physical Activities
              </h3>
              <p className="text-orange-100 mb-6">
                Our sports programs promote physical fitness, teamwork, and
                healthy competition. Students participate in inter-school
                tournaments and develop athletic skills.
              </p>
              <ul className="space-y-2 text-orange-100">
                <li>• Professional sports coaching</li>
                <li>• Inter-school competitions</li>
                <li>• Physical fitness programs</li>
                <li>• Team building activities</li>
                <li>• Individual skill development</li>
                <li>• Health and wellness education</li>
              </ul>
            </div>

            <div className="bg-pinky text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Creative Arts & Technology
              </h3>
              <p className="text-purple-100 mb-6">
                Nurture creativity and artistic expression through various art
                forms and modern technology. Students explore their talents and
                showcase their work in exhibitions and performances.
              </p>
              <ul className="space-y-2 text-purple-100">
                <li>• Art exhibitions and showcases</li>
                <li>• Musical performances</li>
                <li>• Drama and theatre productions</li>
                <li>• Technology workshops</li>
                <li>• Creative writing programs</li>
                <li>• Digital media projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Activity Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence in extracurricular activities is
              reflected in our students' achievements and participation rates.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-custom-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2">
                  {achievement.number}
                </h3>
                <p className="text-gray-600 font-medium">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-custom-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Join Our Activity Programs
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Give your child the opportunity to explore their interests, develop
            new skills, and make lasting friendships through our diverse
            activity programs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Register for Activities
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Download Activity Schedule
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Activities;
