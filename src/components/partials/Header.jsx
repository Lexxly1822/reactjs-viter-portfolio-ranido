import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <nav className="bg-gradient-to-r from-black to-blue-700  absolute shadow-lg w-full z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="text-2xl font-bold bg-gradient-to-r from-blue-50 to-purple-500 bg-clip-text text-transparent  drop-shadow-lg"
              >
                Leslier.
              </Link>
            </div>

            {/* Navigation */}
            <div className="hidden md:flex space-x-6">
              <Link
                to="/"
                className=" text-pink-200  hover:text-purple-500 transition duration-300 font-medium"
              >
                Home
              </Link>
              <Link
                to="/about me"
                className="text-pink-200 hover:text-purple-300 transition duration-300 font-medium"
              >
                About Me
              </Link>
              <Link
                to="/education"
                className="text-pink-200 hover:text-purple-300 transition duration-300 font-medium"
              >
                Education
              </Link>
              <Link
                to="/education"
                className="text-pink-200 hover:text-purple-300 transition duration-300 font-medium"
              >
                Certification
              </Link>
              <Link
                to="/contact"
                className="text-pink-200 hover:text-purple-300 transition duration-300 font-medium"
              >
                Contact
              </Link>
              <div className="">
                <button className=" rounded bg-blue-600 text-white font-bold py-1 px-2">
                  Let's Talk
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
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
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 bg-gray-900 bg-opacity-90 rounded-lg p-4">
              <Link
                to="/"
                className="block text-white hover:bg-blue-700 px-3 py-2 rounded transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/"
                className="block text-white hover:bg-blue-700 px-3 py-2 rounded transition"
                onClick={() => setIsOpen(false)}
              >
                About Me
              </Link>
              <Link
                to="/"
                className="block text-white hover:bg-blue-700 px-3 py-2 rounded transition"
                onClick={() => setIsOpen(false)}
              >
                Education
              </Link>
              <Link
                to="/"
                className="block text-white hover:bg-blue-700 px-3 py-2 rounded transition"
                onClick={() => setIsOpen(false)}
              >
                Certification
              </Link>
              <Link
                to="/"
                className="block text-white hover:bg-blue-700 px-3 py-2 rounded transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
