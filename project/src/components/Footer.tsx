import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center mb-4">
              <div>
                <h3 className="text-xl font-bold">Bright Sparks School</h3>
              </div>
            </div>
            <p className="text-gray-400 mb-4 italic">
              "Learners Today, Leaders Tomorrow"
            </p>
            <p className="text-gray-400 mb-4">
              Providing quality education and nurturing young minds since 2010.
              Excellence in education, character development, and holistic
              growth.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
              <Youtube className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/curriculum"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Curriculum
                </Link>
              </li>
              <li>
                <Link
                  to="/branches"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Branches
                </Link>
              </li>
              <li>
                <Link
                  to="/activities"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Activities
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Programs</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">
                  Early Childhood Development
                </span>
              </li>
              <li>
                <span className="text-gray-400">Primary Education</span>
              </li>
              <li>
                <span className="text-gray-400">Secondary Education</span>
              </li>
              <li>
                <span className="text-gray-400">CBE Curriculum</span>
              </li>
              <li>
                <span className="text-gray-400">Islamic Studies</span>
              </li>
              <li>
                <span className="text-gray-400">
                  Christian Religious Education
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                <div>
                  <p className="text-gray-400">Pangani: Pamba Road</p>
                  <p className="text-gray-400">Parklands, Nairobi</p>
                  <p className="text-gray-400">Ngao Road, Nairobi</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-green-400 mr-3" />
                <div>
                  <p className="text-gray-400">+254 746656600 (Pangani)</p>
                  <p className="text-gray-400">+254 798 672239 (Parklands)</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-orange-400 mr-3" />
                <p className="text-gray-400">info@brightspark.ac.ke</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Bright Sparks School. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Admission Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
