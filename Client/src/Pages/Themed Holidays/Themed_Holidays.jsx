import React, { useState } from "react";
import Hero from "../../Components/Hero/Hero";
import BeachHoliday from '../../assets/Beach_Holiday.jpg';
import HoneymoonEscape from '../../assets/Honeymoon-Escape.jpg';
import AdventureHoliday from '../../assets/Adveture-Holiday.webp';

const themedHolidays = [
  {
    title: "Tropical Beach Retreat",
    description: "Relax on Kenya’s coast with white sandy beaches, turquoise waters, and luxury resorts.",
    image: BeachHoliday,
    price: "KES 50,000",
    duration: "4 Days",
    details: [
      "All-inclusive beach resort stay",
      "Dhow cruise and seafood dinner",
      "Snorkeling or diving adventures",
    ],
  },
  {
    title: "Romantic Honeymoon Getaway",
    description: "Celebrate love with a romantic escape to the most scenic and serene locations in Kenya.",
    image: HoneymoonEscape,
    price: "KES 70,000",
    duration: "5 Days",
    details: [
      "Private candle-lit dinners",
      "Luxury suites & spa experiences",
      "Custom romantic surprises",
    ],
  },
  {
    title: "Adventure Seeker's Holiday",
    description: "Perfect for thrill-seekers - hike, zip-line, raft and explore nature across Kenya's top adventure spots.",
    image: AdventureHoliday,
    price: "KES 65,000",
    duration: "5 Days",
    details: [
      "White water rafting & zip-lining",
      "Forest canopy walks",
      "Mountain hiking experiences",
    ],
  },
];

const ThemedHolidays = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Page Header */}
      <section
        className="relative bg-cover bg-center h-72 text-white flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero-themed-holidays.jpg')" }}
      >
        <div className="bg-primary_yellow p-8 rounded">
          <h1 className="text-4xl font-bold text-center">Themed Holidays</h1>
          <p className="text-center mt-2 text-lg">
            Whether it's romance, relaxation, or adventure — we have something for everyone.
          </p>
        </div>
      </section>

      {/* Themed Holidays Grid */}
      <section className="py-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {themedHolidays.map((pkg, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition duration-300 ease-in-out">
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
        <h2 className="text-2xl font-bold">Need a Personalized Holiday?</h2>
        <p className="mt-2">Let us plan a themed getaway that fits your dreams and desires.</p>
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

export default ThemedHolidays;