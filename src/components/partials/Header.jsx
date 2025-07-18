import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <nav className="bg-black fixed top-0 w-full z-50 shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold bg-gradient-to-r from-red-500 via-black-500 to-red-950 bg-clip-text text-transparent"
          >
            LRR.
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-red-500 transition duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-red-500 transition duration-300 font-medium"
            >
              About
            </Link>
            <Link
              to="/education"
              className="text-gray-300 hover:text-red-500 transition duration-300 font-medium"
            >
              Education
            </Link>
            <Link
              to="/projects"
              className="text-gray-300 hover:text-red-500 transition duration-300 font-medium"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-red-500 transition duration-300 font-medium"
            >
              Contact
            </Link>

            <Link
              to="/"
              className="ml-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-1.5 px-4 rounded transition"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-zinc-900 px-6 pb-6">
            <ul className="space-y-4 text-white mt-4">
              <li>
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-red-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-red-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/education"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-red-500"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-red-500"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-red-500"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/letstalk"
                  className="inline-block bg-red-600 text-white font-medium py-2 px-4 rounded hover:bg-red-700 mt-2"
                >
                  Let's Talk
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
