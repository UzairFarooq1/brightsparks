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

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Nurturing Environment",
      description:
        "We provide a caring, inclusive atmosphere where every child feels valued and supported in their learning journey.",
    },
    {
      icon: Target,
      title: "Individualized Attention",
      description:
        "Our dedicated teachers focus on each student's unique needs and potential to help them excel academically and personally.",
    },
    {
      icon: Shield,
      title: "Character Development",
      description:
        "We instill strong moral values and character traits that prepare students to become responsible leaders of tomorrow.",
    },
    {
      icon: Lightbulb,
      title: "Academic Excellence",
      description:
        "Our proven track record of academic achievement demonstrates our commitment to educational excellence and student success.",
    },
  ];

  const achievements = [
    { icon: Clock, number: "15+", label: "Years of Excellence" },
    { icon: Users, number: "500+", label: "Happy Students" },
    { icon: Award, number: "50+", label: "Awards Won" },
    { icon: MapPin, number: "3", label: "Branch Locations" },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-custom-gradient text-white py-20 overflow-hidden">
        <img
          src="https://source.unsplash.com/1600x900/?school,classroom"
          alt="School Environment"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative container mx-auto px-4 text-center z-10">
          <h1 className="text-5xl font-bold mb-6">
            About Bright Sparks School
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Founded in 2010, we have been dedicated to providing quality
            education and nurturing young minds for over 15 years across our
            multiple branches in Kenya.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                At Bright Sparks School, we are committed to creating a
                welcoming and inclusive environment for students of all
                backgrounds. Our mission is to provide quality education from
                early childhood to secondary levels, emphasizing both academic
                excellence and character development.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                We believe in building authentic and culturally-responsive
                relationships between children and mentors, fostering sustained
                engagement within schools and communities.
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
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="/assets/storytelling.jpg"
              alt="School Vision"
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Our Vision
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                To be the leading educational institution in Kenya, recognized
                for excellence in academic achievement, character development,
                and holistic student growth.
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
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape the
              character of our students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and the trust
              parents place in us.
            </p>
          </div>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
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

      {/* History */}
      <section className="py-20 bg-custom-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              From humble beginnings to becoming one of Kenya's trusted
              educational institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "2010 - Foundation",
                text: "Bright Sparks School was founded with a vision to provide quality education that combines academic excellence with character development.",
              },
              {
                title: "2015 - Expansion",
                text: "Opened our second branch in Parklands, extending our reach and serving more families across Nairobi with our quality education.",
              },
              {
                title: "2024 - Excellence",
                text: "Today, we continue to grow and innovate, maintaining our commitment to nurturing tomorrow's leaders with modern facilities and proven methods.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 p-8 rounded-lg backdrop-blur-sm"
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-blue-100">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
