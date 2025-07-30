import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Curriculum", path: "/curriculum" },
    { name: "Branches", path: "/branches" },
    { name: "Activities", path: "/activities" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-skyish text-white text-sm py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex gap-4 flex-wrap justify-center sm:justify-start">
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

      {/* Main Nav */}
      <nav className="container mx-auto px-4 py-4 relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 flex-wrap sm:flex-nowrap"
          >
            <img
              src="/assets/brightsparks.jpg"
              alt="Bright Sparks Logo"
              className="w-16 h-16 object-contain rounded-full flex-shrink-0"
            />
            <div className="min-w-[150px]">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                Bright Sparks School
              </h1>
              <p className="text-xs sm:text-sm italic text-gray-600">
                Learners Today, Leaders Tomorrow
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
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
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-2 bg-white shadow rounded-lg p-4 absolute top-full left-0 w-full z-40">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={toggleMenu}
                  className={`block py-2 px-2 rounded transition-colors ${
                    isActive(item.path)
                      ? "text-skyish font-semibold"
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
