import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg">
      {/* Top Contact Bar */}
      <div className="bg-skyish text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center flex-wrap">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>Pangani: +254 746 656600</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <span>Parklands: +254 798 672239</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            <span>info@brightsparks.ac.ke</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/brightsparks.jpg"
              alt="Bright Sparks Logo"
              className="w-20 h-20 object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Bright Sparks School
              </h1>
              <p className="text-sm italic text-gray-600">
                Learners Today, Leaders Tomorrow
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Curriculum", path: "/curriculum" },
              { name: "Branches", path: "/branches" },
              { name: "Activities", path: "/activities" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-skyish"
                      : "text-gray-700 hover:text-skyish"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
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

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-2 border-t pt-4">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Curriculum", path: "/curriculum" },
              { name: "Branches", path: "/branches" },
              { name: "Activities", path: "/activities" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={toggleMenu}
                  className={`block py-2 transition-colors ${
                    isActive(item.path)
                      ? "text-skyish"
                      : "text-gray-700 hover:text-skyish"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
