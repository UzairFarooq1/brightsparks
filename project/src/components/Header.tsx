import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-lg">
      {/* Top bar with contact info */}
      <div className="bg-skyish text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>Pangani: +254 746656600</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>Parklands: +254 798 672239</span>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>info@brightsparks.ac.ke</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              src="../public/brightsparks.jpg"
              alt="Bright Sparks Logo"
              className="w-50 h-20  mr-3"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Bright Sparks School
              </h1>
              <p className="text-sm text-gray-600 italic">
                Learners Today, Leaders Tomorrow
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link
                to="/"
                className={`font-medium transition-colors ${
                  isActive("/")
                    ? "text-skyish"
                    : "text-gray-700 hover:text-skyish"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`font-medium transition-colors ${
                  isActive("/about")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/curriculum"
                className={`font-medium transition-colors ${
                  isActive("/curriculum")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Curriculum
              </Link>
            </li>
            <li>
              <Link
                to="/branches"
                className={`font-medium transition-colors ${
                  isActive("/branches")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Branches
              </Link>
            </li>
            <li>
              <Link
                to="/activities"
                className={`font-medium transition-colors ${
                  isActive("/activities")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Activities
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`font-medium transition-colors ${
                  isActive("/contact")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-2 border-t pt-4">
            <li>
              <Link
                to="/"
                className={`block py-2 transition-colors ${
                  isActive("/")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block py-2 transition-colors ${
                  isActive("/about")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/curriculum"
                className={`block py-2 transition-colors ${
                  isActive("/curriculum")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={toggleMenu}
              >
                Curriculum
              </Link>
            </li>
            <li>
              <Link
                to="/branches"
                className={`block py-2 transition-colors ${
                  isActive("/branches")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={toggleMenu}
              >
                Branches
              </Link>
            </li>
            <li>
              <Link
                to="/activities"
                className={`block py-2 transition-colors ${
                  isActive("/activities")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={toggleMenu}
              >
                Activities
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-2 transition-colors ${
                  isActive("/contact")
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
