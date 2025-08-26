import React from "react";
import {
  MapPin,
  Phone,
  Clock,
  Star,
  Users,
  Award,
  Building,
} from "lucide-react";
import { motion } from "framer-motion";

const Branches = () => {
  const branches = [
    {
      name: "Pangani Branch",
      address: "Pamba Road, Pangani",
      phone: "+254 746656600",
      experience: "Over 15 years of experience",
      established: "Main Branch",
      description:
        "Our flagship campus with state-of-the-art facilities and the most experienced staff.",
      features: [
        "Modern computer lab",
        "Science laboratory",
        "Library & reading room",
        "Sports facilities",
        "Secure playground",
        "Administrative offices",
      ],
      highlights: [
        { icon: Users, text: "300+ Students" },
        { icon: Award, text: "15+ Awards" },
        { icon: Building, text: "3-Story Building" },
      ],
    },
    {
      name: "Parklands Branch",
      address: "Parklands, Nairobi",
      phone: "+254 798 672239",
      experience: "Growing campus",
      established: "Established Branch",
      description:
        "Modern campus serving the Parklands community with excellent facilities and programs.",
      features: [
        "Digital learning center",
        "Art & craft studio",
        "Multi-purpose hall",
        "Outdoor learning spaces",
        "Safe transport access",
        "Parent waiting area",
      ],
      highlights: [
        { icon: Users, text: "250+ Students" },
        { icon: Award, text: "10+ Awards" },
        { icon: Building, text: "Modern Facilities" },
      ],
    },
    {
      name: "Ngao Road Branch",
      address: "Ngao Road, Nairobi",
      phone: "+254 798 672239",
      experience: "3 years of operation",
      established: "Expanding Location",
      description:
        "Our newest branch offering modern amenities and innovative learning environments.",
      features: [
        "Modern classrooms",
        "Interactive whiteboards",
        "Student lounge",
        "Parent consultation rooms",
        "Accessible facilities",
        "Parking area",
      ],
      highlights: [
        { icon: Users, text: "150+ Students" },
        { icon: Award, text: "Growing Recognition" },
        { icon: Building, text: "New Infrastructure" },
      ],
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
          <h1 className="text-5xl font-bold mb-6">Our Branches</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Bright Sparks School operates multiple branches across Nairobi, each
            offering the same high-quality education and nurturing environment
            our students deserve.
          </p>
        </div>
      </motion.section>

      {/* Branches Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {branches.map((branch, index) => (
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
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-custom-gradient text-white p-6">
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
                    <span className="text-gray-700 font-semibold">
                      {branch.established}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {branch.description}
                  </p>

                  <div className="grid grid-cols-3 gap-2 mb-6">
                    {branch.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="text-center">
                        <highlight.icon className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                        <p className="text-xs text-gray-600">
                          {highlight.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-lg font-semibold text-gray-800 mb-3">
                    Facilities & Features
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {branch.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                    Contact This Branch
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Visit Our Campuses
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Each of our branches offers modern facilities, experienced
                teachers, and a safe learning environment. We invite you to
                visit and see firsthand the quality education and care we
                provide to our students.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our campuses are strategically located across Nairobi to serve
                families in different areas while maintaining the same high
                standards of education and care that Bright Sparks School is
                known for.
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
            <div className="space-y-6">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <Clock className="w-6 h-6 text-blue-600 mr-3" />
                  Operating Hours
                </h3>
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

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Transportation
                </h3>
                <p className="text-gray-600 mb-3">
                  All our branches are easily accessible by public transport and
                  have designated parking areas for parents.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-600 text-sm">
                      School transport available
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-600 text-sm">
                      Safe drop-off zones
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-600 text-sm">
                      Secure parking facilities
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-custom-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Visit?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact any of our branches to schedule a visit and see why parents
            trust Bright Sparks School with their children's education.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+254746656600"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Pangani Branch
            </a>
            <a
              href="tel:+254798672239"
              className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Parklands Branch
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Branches;
