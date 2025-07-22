import React from 'react';
import { MapPin, Phone, Clock, Star } from 'lucide-react';

const Branches = () => {
  const branches = [
    {
      name: "Pangani Branch",
      address: "Pamba Road, Pangani",
      phone: "+254 746656600",
      experience: "Over 15 years of experience",
      established: "Main Branch",
      features: [
        "Modern computer lab",
        "Science laboratory",
        "Library & reading room",
        "Sports facilities",
        "Secure playground"
      ]
    },
    {
      name: "Parklands Branch",
      address: "Parklands, Nairobi",
      phone: "+254 798 672239",
      experience: "14 years of operation",
      established: "Established Branch",
      features: [
        "Digital learning center",
        "Art & craft studio",
        "Multi-purpose hall",
        "Outdoor learning spaces",
        "Safe transport access"
      ]
    },
    {
      name: "Ngao Road Branch",
      address: "Ngao Road, Nairobi",
      phone: "+254 746656600",
      experience: "Growing campus",
      established: "Expanding Location",
      features: [
        "Modern classrooms",
        "Interactive whiteboards",
        "Student lounge",
        "Parent waiting area",
        "Accessible facilities"
      ]
    }
  ];

  return (
    <section id="branches" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Branches</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bright Sparks School operates multiple branches across Nairobi, each offering 
            the same high-quality education and nurturing environment our students deserve.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white p-6">
                <h3 className="text-2xl font-bold mb-2">{branch.name}</h3>
                <div className="flex items-center mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-blue-100">{branch.address}</span>
                </div>
                <div className="flex items-center mb-2">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-blue-100">{branch.phone}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-blue-100">{branch.experience}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  <span className="text-gray-700 font-semibold">{branch.established}</span>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Facilities & Features</h4>
                <ul className="space-y-2">
                  {branch.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                  Contact This Branch
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Visit Our Campuses</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Each of our branches offers modern facilities, experienced teachers, and a 
                safe learning environment. We invite you to visit and see firsthand the 
                quality education and care we provide to our students.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Schedule a Visit
                </button>
                <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Download Brochure
                </button>
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Operating Hours</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span className="font-semibold">7:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="font-semibold">8:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branches;