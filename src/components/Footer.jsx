import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-auto px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6 mb-2">
        <a
          href="https://wa.me/9545193719"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-green-400 transition"
        >
          <FaWhatsapp size={22} className="sm:size-24" />
          <span className="text-sm sm:text-base">WhatsApp</span>
        </a>
        <a
          href="https://www.instagram.com/aakruti.design"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-pink-400 transition"
        >
          <FaInstagram size={22} className="sm:size-24" />
          <span className="text-sm sm:text-base">Instagram</span>
        </a>
      </div>
      <p className="text-xs sm:text-sm">
        © {new Date().getFullYear()} Aakruti Design and Buildcon. All Rights
        Reserved.
      </p>
    </footer>
  );
};

export default Footer;
