import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa6';
import woman1 from "../../assets/woman1.webp";
import woman2 from "../../assets/woma2.webp";
import woman3 from "../../assets/woman3.jpeg";
import man2 from "../../assets/man1.webp";
import man1 from "../../assets/man2.webp";

const testimonies = [
  {
    id: 1,
    rating: 5,
    image: woman1,
    name: "Emily Thompson",
    content: "A safari so wild, yet full of grace, East Africa is my favorite place!"
  },
  {
    id: 2,
    rating: 4,
    image: man1,
    name: "James Carter",
    content: "From Kenya's plains to Zanzibar's shore, every moment left me wanting more!"
  },
  {
    id: 3,
    rating: 5,
    image: woman2,
    name: "Sophia Martinez",
    content: "Adventures high, adventures deep, memories made that I will keep!"
  },
  {
    id: 4,
    rating: 4,
    image: man2,
    name: "Liam Anderson",
    content: "Through Rwanda’s hills and Uganda’s streams, this tour was beyond my dreams!"
  },
  {
    id: 5,
    rating: 5,
    image: woman3,
    name: "Olivia Bennett",
    content: "From dawn till dusk, pure delight, Africa’s magic feels so right!"
  }
];

const Testimonials = () => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='md:mx-[2em] my-[2em] md:my-[4em]'>
      <div className="p-8">
        <div className='flex flex-col justify-center sm:flex-col items-center'>
          <h1 className='lg:text-5xl text-4xl flex font-bold '>
            TRAVEL<span className='text-primary_yellow font-light ml-2'>REVIEWS</span>
          </h1>
          <h2 className="text-2xl  text-center text-gray-600 mb-8">
            What our travelers say
          </h2>
        </div>
        <Slider {...settings}>
          {testimonies.map((testimony) => (
            <div key={testimony.id} className="p-4">
              <div className="bg-white hover:bg-primary_blue hover:bg-primary_yellow hover:cursor-pointer hover:duration-300 hover:text-white p-8 rounded-md shadow-md">
                <div className='flex'>
                  <FaQuoteLeft size={30} className='bg-primary_blue hover:text-primary_blue text-white p-2 rounded-full' />
                  <p className="md:text-xl mb-4 ml-3 border-b-2 pb-6">{testimony.content}</p>
                </div>
                <div className='flex'>
                  <div>
                    <img src={testimony.image} alt={testimony.name} className='w-[50px] h-[50px] object-cover rounded-full' />
                  </div>
                  <div className='ml-2'>
                    <p className="text-primary1 font-bold">{testimony.name}</p>
                    <div className="flex my-1 hover:text-white">
                      {Array(testimony.rating).fill().map((_, index) => (
                        <FaStar key={index} className="text-primary_yellow hover:text-white" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
