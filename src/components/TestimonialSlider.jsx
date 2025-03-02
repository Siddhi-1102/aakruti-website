import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    quote: "Amazing work! My dream home became a reality.",
    author: "Client A",
  },
  {
    quote: "Professional and skilled team. The best construction service ever!",
    author: "Client B",
  },
  {
    quote:
      "Aakruti Design and Buildcon exceeded my expectations with their attention to detail.",
    author: "Client C",
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 px-4">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md text-center"
          >
            <p className="text-gray-700 italic">"{item.quote}"</p>
            <h4 className="mt-4 text-gray-900 font-semibold">
              - {item.author}
            </h4>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
