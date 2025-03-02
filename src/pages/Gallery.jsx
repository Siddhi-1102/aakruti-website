import React, { useState } from "react";

const images = [
  "/images/building1.jpg",
  "/images/building2.jpg",
  "/images/house1.jpg",
  "/images/house2.jpg",
  "/images/house5.jpeg",
  "/images/house6.jpeg",
  "/images/house7.jpeg",
  "/images/house8.jpeg",
  "/images/house9.jpeg",
  "/images/house10.jpeg",
  "/images/house11.jpeg",
  "/images/house12.jpeg",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Gallery</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore our latest designs and projects.
        </p>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-semibold">
                View Full Image
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Image View */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <button
            className="absolute top-6 right-6 text-white text-4xl font-bold cursor-pointer z-50 hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
