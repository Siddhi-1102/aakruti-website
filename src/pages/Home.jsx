import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/construction-hero.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-opacity-60"></div>
        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 animate-fadeIn">
          <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg shadow-lg transition-transform duration-700 hover:scale-105">
            <h1 className="text-6xl md:text-8xl font-bold text-yellow-400 drop-shadow-lg animate-slideUp">
              Aakruti Design and Buildcon
            </h1>
            <p className="text-xl md:text-3xl mt-6 text-blue-300 animate-slideUp">
              Bringing Your Dream Projects to Life
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto py-16 px-6 text-center animate-fadeIn bg-white bg-opacity-90 rounded-lg shadow-lg my-12">
        <h2 className="text-3xl font-semibold text-gray-800">
          Welcome to Aakruti Design and Buildcon
        </h2>
        <p className="mt-6 text-gray-600">
          Led by expert civil engineer <strong>Satyam Chavan</strong>, we
          specialize in architectural designs and house construction, bringing
          your dream projects to reality.
        </p>
      </div>

      {/* Services Section */}
      <div className="bg-gray-100 py-16 animate-fadeIn bg-opacity-90 rounded-lg shadow-lg my-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-12 mt-10">
            <div className="p-8 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold">House Construction</h3>
              <p className="text-gray-600 mt-4">
                Quality homes built with precision.
              </p>
            </div>
            <div className="p-8 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold">Architectural Design</h3>
              <p className="text-gray-600 mt-4">
                Custom designs tailored to your needs.
              </p>
            </div>
            <div className="p-8 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold">Renovation & Remodeling</h3>
              <p className="text-gray-600 mt-4">
                Transforming spaces with expert craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="max-w-6xl mx-auto py-16 px-6 text-center animate-fadeIn bg-white bg-opacity-90 rounded-lg shadow-lg my-12">
        <h2 className="text-3xl font-semibold text-gray-800">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-12 mt-10">
          <img
            src="/images/building1.jpg"
            alt="Project 1"
            className="rounded-lg shadow-md hover:scale-105 transition-transform"
          />
          <img
            src="/images/building2.jpg"
            alt="Project 2"
            className="rounded-lg shadow-md hover:scale-105 transition-transform"
          />
          <img
            src="/images/house1.jpg"
            alt="Project 3"
            className="rounded-lg shadow-md hover:scale-105 transition-transform"
          />
        </div>
      </div>

      {/* Testimonials Section with Swiper.js */}
      <div className="bg-gray-100 py-16 animate-fadeIn bg-opacity-90 rounded-lg shadow-lg my-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            What Our Clients Say
          </h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="mt-10"
          >
            <SwiperSlide>
              <div className="p-8 bg-white shadow-lg rounded-lg">
                <p className="text-gray-600">
                  "Amazing work! My dream home became a reality. Highly
                  recommended!"
                </p>
                <h3 className="mt-6 text-xl font-semibold">- Client A</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-8 bg-white shadow-lg rounded-lg">
                <p className="text-gray-600">
                  "Professional and skilled team. The best construction service
                  ever!"
                </p>
                <h3 className="mt-6 text-xl font-semibold">- Client B</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-8 bg-white shadow-lg rounded-lg">
                <p className="text-gray-600">
                  "Excellent craftsmanship and timely completion. Truly
                  satisfied!"
                </p>
                <h3 className="mt-6 text-xl font-semibold">- Client C</h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-16 text-center animate-fadeIn bg-white bg-opacity-90 rounded-lg shadow-lg my-12">
        <h2 className="text-3xl font-semibold text-gray-800">
          Let's Build Something Great!
        </h2>
        <p className="text-gray-600 mt-6">
          Contact us today to discuss your next project.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-transform hover:scale-105"
        >
          Get a Free Consultation
        </a>
      </div>
    </div>
  );
};

export default Home;
