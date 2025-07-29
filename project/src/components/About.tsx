import React from 'react';
import { Heart, Target, Shield, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Nurturing Environment",
      description: "We provide a caring, inclusive atmosphere where every child feels valued and supported in their learning journey."
    },
    {
      icon: Target,
      title: "Individualized Attention",
      description: "Our dedicated teachers focus on each student's unique needs and potential to help them excel academically and personally."
    },
    {
      icon: Shield,
      title: "Character Development",
      description: "We instill strong moral values and character traits that prepare students to become responsible leaders of tomorrow."
    },
    {
      icon: Lightbulb,
      title: "Academic Excellence",
      description: "Our proven track record of academic achievement demonstrates our commitment to educational excellence and student success."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Bright Sparks School</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded in 2010, Bright Sparks School has been dedicated to providing quality education 
            and nurturing young minds for over 15 years across our multiple branches in Kenya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Bright Sparks School, we are committed to creating a welcoming and inclusive 
              environment for students of all backgrounds. Our mission is to provide quality 
              education from early childhood to secondary levels, emphasizing both academic 
              excellence and character development.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We believe in building authentic and culturally-responsive relationships between 
              children and mentors, fostering sustained engagement within schools and communities. 
              Our comprehensive approach ensures that every student receives the individualized 
              attention they need to reach their full potential.
            </p>
            <div className="bg-blue-600 text-white p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Our Motto</h4>
              <p className="text-lg">"Learners Today, Leaders Tomorrow"</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-600">Over 15 years of educational experience</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-600">Multiple convenient branch locations</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-600">Modern facilities and secure learning environment</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-600">Diverse extracurricular activities</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                <span className="text-gray-600">CBE curriculum with religious education</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;