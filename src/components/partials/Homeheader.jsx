import React, { useState, useEffect } from "react";

function Homeheader() {
 
  const slides = [
    { image: "/images/slider-1.jpg" },
    { image: "/images/slider-2.jpg" },
    { image: "/images/slider-3.jpg" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, [slides.length]);

  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

 
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="lg:mt-24 md:mt-20 mt-16 relative ">
    
      <div
        className="bg-cover bg-center w-full h-[200px] md:h-[300px] lg:h-[500px] transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      ></div>

         <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-[#002054]" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Homeheader;
