import React, { useState, useEffect, useRef } from "react";
import Hero from "../../Components/Hero/Hero";
import MasaiMaraSafari from '../../assets/Mara-Safari.webp';
import AmboseliSafari from '../../assets/Amboseli-Safari.jpg';
import SamburuSafari from '../../assets/Samburuafari.jpg';

const safariPackages = [
  {
    title: "Classic Masai Mara Safari",
    description: "Experience the Big Five in the world-renowned Masai Mara Game Reserve, famous for the Great Migration.",
    image: MasaiMaraSafari,
    price: "KES 45,000",
    duration: "3 Days",
    details: [
      "Game drives with experienced guides",
      "Optional hot air balloon safari",
      "Accommodation in luxury or budget lodges",
    ],
  },
  {
    title: "Amboseli Elephant Safari",
    description: "Get up-close with majestic elephants at the foot of Mt. Kilimanjaro in Amboseli National Park.",
    image: AmboseliSafari,
    price: "KES 30,000",
    duration: "2 Days",
    details: [
      "Panoramic views of Mt. Kilimanjaro",
      "Visit to Maasai cultural villages",
      "Ideal for photography lovers",
    ],
  },
  {
    title: "Samburu Wilderness Safari",
    description: "Discover rare wildlife species and cultural experiences in the scenic Samburu region.",
    image: SamburuSafari,
    price: "KES 50,000",
    duration: "3 Days",
    details: [
      "Spot the Samburu Five (Grevy's zebra, Gerenuk, etc.)",
      "Guided nature walks",
      "Riverside lodge accommodation",
    ],
  },
];

const SafariPackages = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Header */}
      <section
        ref={contentRef}
        className="relative bg-cover bg-center h-72 text-white flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero-safari-packages.jpg')" }}
      >
        <div className="bg-primary_yellow p-8 rounded">
          <h1 className="text-4xl font-bold text-center">Safari Packages</h1>
          <p className="text-center mt-2 text-lg">
            Explore Kenya's wild beauty with our curated safari experiences.
          </p>
        </div>
      </section>

      {/* Safari Packages Grid */}
      <section className="py-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {safariPackages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition duration-300 ease-in-out"
          >
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{pkg.description}</p>
              <p className="text-sm text-gray-800 mb-2"><strong>Price:</strong> {pkg.price}</p>
              <p className="text-sm text-gray-800 mb-4"><strong>Duration:</strong> {pkg.duration}</p>

              <button
                onClick={() => toggleDetails(index)}
                className="text-primary_yellow font-semibold hover:underline focus:outline-none"
              >
                {expandedIndex === index ? "Show Less" : "View Details"}
              </button>

              {expandedIndex === index && (
                <ul className="mt-4 text-sm text-gray-700 bg-yellow-50 p-3 rounded-lg">
                  {pkg.details.map((item, i) => (
                    <li key={i} className="mb-1">• {item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="bg-pink-50 text-primary_yellow text-center py-10">
        <h2 className="text-2xl font-bold">Looking for a Custom Safari?</h2>
        <p className="mt-2">Let us help you design a tailor-made safari adventure just for you.</p>
        <a
          href="/contact"
          className="mt-4 inline-block bg-white text-primary_yellow font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default SafariPackages;