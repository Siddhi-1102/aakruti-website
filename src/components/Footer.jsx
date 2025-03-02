import React from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-auto">
      <div className="flex justify-center space-x-6 mb-2">
        <a
          href="https://wa.me/9545193719"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-green-400 transition"
        >
          <FaWhatsapp size={20} />
          <span>WhatsApp</span>
        </a>
        <a
          href="https://www.instagram.com/aakruti.design"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-pink-400 transition"
        >
          <FaInstagram size={20} />
          <span>Instagram</span>
        </a>
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} Aakruti Design and Buildcon. All Rights
        Reserved.
      </p>
    </footer>
  );
};

export default Footer;
