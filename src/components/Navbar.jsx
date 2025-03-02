import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white py-4 px-6">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">Aakruti Design and Buildcon</h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`md:flex md:space-x-6 ${
          isOpen ? "block" : "hidden"
        } md:block text-center mt-4 md:mt-0`}
      >
        <li className="py-2 md:py-0">
          <Link
            to="/"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
        </li>
        <li className="py-2 md:py-0">
          <Link
            to="/about"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </li>
        <li className="py-2 md:py-0">
          <Link
            to="/gallery"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
        </li>
        <li className="py-2 md:py-0">
          <Link
            to="/contact"
            className="hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
