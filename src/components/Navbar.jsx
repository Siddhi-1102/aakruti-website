import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">Aakruti Design and Buildcon</h1>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
        </li>
        <li>
          <Link to="/gallery" className="hover:text-gray-300">
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
