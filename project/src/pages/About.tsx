import React from "react";
import {
  Heart,
  Target,
  Shield,
  Lightbulb,
  Users,
  Award,
  Clock,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing new ideas and approaches in education.",
    },
    {
      icon: Heart,
      title: "Partnerships",
      description: "Collaborating with families and communities.",
    },
    {
      icon: Target,
      title: "Inclusivity",
      description: "Providing an open and welcoming environment for all.",
    },
    {
      icon: Shield,
      title: "Intellectual Curiosity",
      description: "Encouraging a love for learning and exploration.",
    },
  ];

  const achievements = [
    { icon: Clock, number: "15+", label: "Years of Excellence" },
    { icon: Users, number: "500+", label: "Happy Students" },
    { icon: Award, number: "50+", label: "Awards Won" },
    { icon: MapPin, number: "3", label: "Branch Locations" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="relative bg-custom-gradient text-white py-20 overflow-hidden"
      >
        <img
          src="https://source.unsplash.com/1600x900/?school,classroom"
          alt="School Environment"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative container mx-auto px-4 text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Bright Sparks School
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Founded in 2010, we have been dedicated to providing quality
            education and nurturing young minds for over 15 years across our
            multiple branches in Kenya.
          </p>
        </div>
      </motion.section>

      {/* Guiding Principles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                At Bright Sparks School, we are committed to creating a
                welcoming and inclusive environment for students of all
                backgrounds and to nurture students who Lead, Think and Advocate
                for Self, Community and Nation.
              </p>
              <div className="bg-skyish text-white p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-2">Our Motto</h3>
                <p className="text-xl italic">
                  "Learners Today, Leaders Tomorrow"
                </p>
              </div>
            </div>
            <img
              src="/assets/graduation.jpg"
              alt="Students Learning"
              className="rounded-lg shadow-md w-full h-auto object-cover hidden md:block"
            />
          </div>

          {/* Vision */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="/assets/storytelling.jpg"
              alt="School Vision"
              className="rounded-lg shadow-md w-full h-auto object-cover hidden md:block"
            />
            <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Our Vision
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                To be the leading educational institution in Kenya...
              </p>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Why Choose Us?
              </h4>
              <ul className="space-y-3">
                {[
                  "Over 15 years of educational experience",
                  "Multiple convenient branch locations",
                  "Modern facilities and secure learning environment",
                  "Diverse extracurricular activities",
                  "CBE curriculum with religious education",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape our students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
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
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <value.icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Achievements
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment and your trust.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-custom-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-1">
                  {achievement.number}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {achievement.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 bg-custom-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              From humble beginnings to a trusted institution.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "2010 - Foundation",
                text: "Bright Sparks School was founded with a vision to provide quality education that combines academic excellence with character development.",
              },
              {
                title: "2015 - Expansion",
                text: "Opened our second branch in Parklands, extending our reach and serving more families across Nairobi.",
              },
              {
                title: "2024 - Excellence",
                text: "Today, we continue to grow and innovate, maintaining our commitment to nurturing tomorrow's leaders.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-blue-100">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
