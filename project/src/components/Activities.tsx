import React from 'react';
import { Code2, FolderRoot as Football, Palette, Music, Zap, Gamepad2 } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      icon: Code2,
      title: "Coding & Technology",
      description: "Students learn programming fundamentals, web development, and digital literacy skills to prepare them for the future.",
      age: "Ages 8+",
      schedule: "Mon, Wed, Fri"
    },
    {
      icon: Football,
      title: "Football",
      description: "Develop teamwork, coordination, and sportsmanship through regular football training and inter-school competitions.",
      age: "All Ages",
      schedule: "Tue, Thu"
    },
    {
      icon: Gamepad2,
      title: "Skating",
      description: "Fun skating lessons that improve balance, coordination, and confidence while providing excellent physical exercise.",
      age: "Ages 6+",
      schedule: "Weekends"
    },
    {
      icon: Zap,
      title: "Horse Riding",
      description: "Unique equestrian program that builds confidence, responsibility, and creates a special bond between students and horses.",
      age: "Ages 10+",
      schedule: "Saturdays"
    },
    {
      icon: Palette,
      title: "Arts & Crafts",
      description: "Creative expression through painting, drawing, sculpture, and various craft projects that enhance fine motor skills.",
      age: "All Ages",
      schedule: "Daily"
    },
    {
      icon: Music,
      title: "Music & Drama",
      description: "Musical instruments, choir, and drama performances that build confidence and showcase student talents.",
      age: "All Ages",
      schedule: "Mon, Wed, Fri"
    }
  ];

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Extracurricular Activities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond academics, we offer diverse extracurricular activities that help students 
            discover their talents, build confidence, and develop important life skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {activities.map((activity, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <activity.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">{activity.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{activity.description}</p>
              <div className="flex justify-between items-center">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {activity.age}
                </span>
                <span className="text-gray-500 text-sm">{activity.schedule}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Sports Excellence</h3>
            <p className="text-orange-100 mb-6">
              Our sports programs promote physical fitness, teamwork, and healthy competition. 
              Students participate in inter-school tournaments and develop athletic skills.
            </p>
            <ul className="space-y-2 text-orange-100">
              <li>• Professional sports coaching</li>
              <li>• Inter-school competitions</li>
              <li>• Physical fitness programs</li>
              <li>• Team building activities</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Creative Arts</h3>
            <p className="text-purple-100 mb-6">
              Nurture creativity and artistic expression through various art forms. Students 
              explore their talents and showcase their work in school exhibitions and performances.
            </p>
            <ul className="space-y-2 text-purple-100">
              <li>• Art exhibitions and showcases</li>
              <li>• Musical performances</li>
              <li>• Drama and theatre productions</li>
              <li>• Creative writing workshops</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-100 p-8 rounded-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Activity Benefits</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xl">95%</span>
                </div>
                <p className="text-gray-600 font-semibold">Student Participation</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xl">20+</span>
                </div>
                <p className="text-gray-600 font-semibold">Different Activities</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xl">15+</span>
                </div>
                <p className="text-gray-600 font-semibold">Awards Won</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-xl">100%</span>
                </div>
                <p className="text-gray-600 font-semibold">Fun Guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;