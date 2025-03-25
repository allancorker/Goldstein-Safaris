import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight, FaCentercode, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import lion from '../../assets/lion.jpeg';
import mountain from '../../assets/mountain.jpeg';
import beach from '../../assets/beach.webp';
import riftValley from '../../assets/riftvalley.jpeg'; 
import { TiMessages } from "react-icons/ti";

const Hero = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    {
      image: lion,
      title: "Unforgettable Safaris in East Africa",
      description: "Explore the Big Five in Kenya and Tanzania.",
    },
    {
      image: mountain,
      title: "Climb East African Mountains",
      description: "Experience Africa’s highest peak.",
    },
    {
      image: beach,
      title: "Relax at East African Beaches",
      description: "Crystal clear waters and white sand await you.",
    },
    {
      image: riftValley, 
      title: "Discover the Great Rift Valley",
      description: "Marvel at breathtaking landscapes, lakes, and wildlife in this natural wonder of East Africa.",
    },
  ];

  return (
    <div className="relative w-full h-[80vh]">
     
      <button
        className="absolute top-1/2 left-4 z-10 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <FaArrowLeft size={24} />
      </button>

      <button
        className="absolute top-1/2 right-4 z-10 text-white bg-black bg-opacity-50 p-3 rounded-full hover:bg-opacity-75 transition"
        onClick={() => sliderRef.current.slickNext()}
      >
        <FaArrowRight size={24} />
      </button>
      <div className="absolute top-1/3 left-4 z-10 text-white bg-black bg-opacity-50 flex rounded-2xl flex-col gap-2 p-2">
        <FaFacebook className="hover:text-blue-500 cursor-pointer"/>
        <FaInstagram className="hover:text-pink-500 cursor-pointer"/>
        <FaTiktok className="hover:text-gray-500 cursor-pointer"/>
      </div>

      <div className="absolute bottom-1 right-4 z-10 text-white animate-bounce flex flex-col gap-2 ">
        <p className="flex justify-center items-center gap-2">
          <span className="bg-primary_yellow rounded-md text-white py-1 px-2 text-[11px] cursor-pointer">Request a Quote</span>
          <TiMessages className="hover:text-gray-200 cursor-pointer bg-primary_yellow p-2 rounded-full" size={50}/></p>
        
        
      </div>

      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[80vh] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center px-4">
              <h1 className="text-4xl md:text-5xl font-bold">{slide.title}</h1>
              <p className="text-lg md:text-2xl mt-2">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
