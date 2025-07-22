import React from "react";
import { Star, Users, Award, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative bg-custom-gradient text-white py-20">
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Bright Sparks School
            </h1>
            <p className="text-2xl mb-4 font-medium text-blue-100">
              Learners Today, Leaders Tomorrow
            </p>
            <p className="text-lg mb-8 text-blue-100 leading-relaxed">
              Providing quality education from early childhood to secondary
              levels since 2010. We nurture young minds in a caring, inclusive
              environment with individualized attention and a comprehensive
              curriculum including CBC, Islamic Studies, and CRE.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Apply Now
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <Star className="w-8 h-8 mb-3 text-yellow-300" />
              <h3 className="font-semibold mb-2">15+ Years</h3>
              <p className="text-sm text-blue-100">Of Educational Excellence</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <Users className="w-8 h-8 mb-3 text-green-300" />
              <h3 className="font-semibold mb-2">Multiple Branches</h3>
              <p className="text-sm text-blue-100">Pangani & Parklands</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <Award className="w-8 h-8 mb-3 text-orange-300" />
              <h3 className="font-semibold mb-2">CBC Curriculum</h3>
              <p className="text-sm text-blue-100">Modern Education Approach</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <BookOpen className="w-8 h-8 mb-3 text-purple-300" />
              <h3 className="font-semibold mb-2">Holistic Learning</h3>
              <p className="text-sm text-blue-100">
                Academic & Character Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
