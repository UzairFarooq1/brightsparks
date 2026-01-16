import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

import brightvid from "/assets/brightvid.mp4";
import happy from "/assets/graduation.jpg";
import computer from "/assets/computer.jpg";
import classroom from "/assets/class.jpg";
import unity from "/assets/unity.jpg";
import campus from "/assets/campus.jpg";

const Home = () => {
  const cards = [
    {
      img: computer,
      title: "Quality Education",
      desc: "CBE curriculum empowering students with computer skills",
      link: "/curriculum",
      color: "blue",
    },
    {
      img: classroom,
      title: "Modern Campuses",
      desc: "Branches in Pangani & Parklands with modern facilities.",
      link: "/branches",
      color: "green",
    },
    {
      img: unity,
      title: "Beyond Academics",
      desc: "Sports, arts, coding & unique programs like horse riding.",
      link: "/activities",
      color: "orange",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-20 h-[90vh] md:h-[85vh] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={brightvid}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10" />

        <div className="container mx-auto px-4 relative z-20 flex flex-col md:flex-row items-center gap-8 md:gap-12 h-full justify-center">
          <div className="text-center md:text-left max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
              Bright Sparks School
            </h1>
            <p className="text-xl sm:text-2xl mb-4 font-medium text-blue-100">
              Learners Today, Leaders Tomorrow
            </p>
            <p className="text-base sm:text-lg mb-6 text-blue-100">
              Providing quality education from early childhood to secondary
              levels since 2010. We nurture young minds in a caring, inclusive
              environment with individualized attention and a comprehensive
              curriculum including CBE, Islamic Studies, and CRE.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link
                to="/contact"
                className="bg-[#14b3ed] hover:bg-[#12a3d8] px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                Apply Now <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="hidden md:block max-w-md">
            <img
              src={happy}
              alt="Happy students"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="container mx-auto px-4 text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Bright Sparks School?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We provide a comprehensive education that prepares students for
            success in academics, character development, and life skills.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 px-4"
        >
          {cards.map(({ img, title, desc, link, color }, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: {
                  opacity: 0,
                  x: i % 2 === 0 ? -60 : 60,
                  y: 40,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                  y: 0,
                  transition: { type: "spring", stiffness: 60, damping: 18 },
                },
              }}
              className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-xl"
            >
              <img src={img} alt={title} className="w-full h-48 object-cover" />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 mb-4">{desc}</p>
                <Link
                  to={link}
                  className={`text-${color}-600 hover:text-${color}-700 font-semibold inline-flex items-center`}
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 bg-custom-gradient text-white">
        <img
          src="/assets/family.jpg"
          alt="School family"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
        />
        <div className="relative z-10 container mx-auto text-center px-4">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Join Our School Family?
          </h3>
          <p className="text-lg sm:text-xl mb-8 text-blue max-w-2xl mx-auto">
            Contact us today to learn more about admissions and schedule a visit
            to our campus.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </Link>
            <a
              href="tel:+254746656600"
              className="border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
