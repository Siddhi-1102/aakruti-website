import React from "react";
import {
  FaTools,
  FaBuilding,
  FaDraftingCompass,
  FaHome,
  FaRedo,
} from "react-icons/fa";

const About = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/about-hero.jpg')" }}
    >
      <div className="absolute inset-0  bg-opacity-50"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* About Us Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
          <p className="text-lg text-gray-900 mt-4 max-w-3xl mx-auto">
            Aakruti Design and Buildcon is a trusted name in architectural
            design and construction led by <strong>Satyam Chavan</strong>, a
            skilled civil engineer. We specialize in creating modern, durable,
            and sustainable buildings tailored to client needs.
          </p>
        </div>

        {/* Founder Section */}
        <div className="mt-12 bg-gray-800 bg-opacity-80 p-6 sm:p-8 rounded-xl shadow-md">
          <h3 className="text-3xl font-semibold text-white text-center">
            Meet Our Founder
          </h3>
          <p className="text-gray-300 text-center mt-4">
            <strong>Satyam Chavan</strong> is the visionary behind Aakruti
            Design and Buildcon. With a passion for innovative architecture and
            structural design, he has successfully completed numerous
            residential and commercial projects. His expertise ensures that
            every project meets high standards of quality and aesthetics.
          </p>
        </div>

        {/* Expertise Section with Icons */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-gray-900 text-center">
            Our Expertise
          </h3>
          <p className="text-gray-900 text-center mt-2">
            Our services cover a wide range of architectural and construction
            solutions:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {/* Expertise Cards */}
            <div className="flex flex-col items-center bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-lg text-center">
              <FaDraftingCompass className="text-blue-400 text-5xl" />
              <h4 className="text-xl font-semibold text-white mt-4">
                Architectural Planning
              </h4>
              <p className="text-gray-300 mt-2">
                Custom home & building designs tailored to modern and
                traditional styles.
              </p>
            </div>

            <div className="flex flex-col items-center bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-lg text-center">
              <FaBuilding className="text-blue-400 text-5xl" />
              <h4 className="text-xl font-semibold text-white mt-4">
                Residential & Commercial Construction
              </h4>
              <p className="text-gray-300 mt-2">
                Full construction services from planning to execution.
              </p>
            </div>

            <div className="flex flex-col items-center bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-lg text-center">
              <FaTools className="text-blue-400 text-5xl" />
              <h4 className="text-xl font-semibold text-white mt-4">
                Structural Engineering
              </h4>
              <p className="text-gray-300 mt-2">
                Ensuring buildings meet safety & durability standards.
              </p>
            </div>

            <div className="flex flex-col items-center bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-lg text-center">
              <FaHome className="text-blue-400 text-5xl" />
              <h4 className="text-xl font-semibold text-white mt-4">
                Modern House Planning
              </h4>
              <p className="text-gray-300 mt-2">
                Creating energy-efficient, aesthetic homes.
              </p>
            </div>

            <div className="flex flex-col items-center bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-lg text-center">
              <FaRedo className="text-blue-400 text-5xl" />
              <h4 className="text-xl font-semibold text-white mt-4">
                Renovation & Remodeling
              </h4>
              <p className="text-gray-300 mt-2">
                Upgrading spaces to match modern living standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
