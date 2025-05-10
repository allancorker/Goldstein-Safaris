import React, { useState } from "react";
import Hero from "../../Components/Hero/Hero";
import NairobiTour from "../../assets/NairobiToour.webp";
import HellsGate from "../../assets/Hells-Gate.jpg";
import LakeNaivasha from "../../assets/Lake-Naivasha.jpg";
import Kiambethu_Tea from "../../assets/Kiambethu_Tea.png";
import Ol_Pejeta from "../../assets/Ol-Pejeta-Conservancy.jpg";
import Ngong_Hills from "../../assets/Ngong-Hiking.jpg"

const localPackages = [
  {
    title: "Nairobi City Day Tour",
    description:
      "Explore the bustling capital including Nairobi National Park, Giraffe Centre, and Karen Blixen Museum.",
    image: NairobiTour,
    price: "From KES 6,500 per person",
    duration: "Full Day (Approx. 8 hours)",
    details:
      "Includes hotel pickup, entrance fees, bottled water, and professional guide services. Ideal for solo travelers, couples, or small groups looking for a taste of Nairobi in one day.",
  },
  {
    title: "Hell's Gate Adventure",
    description:
      "Cycle through dramatic gorges, hike past cliffs, and enjoy natural hot springs at Hell's Gate National Park.",
    image: HellsGate,
    price: "From KES 4,800 per person",
    duration: "Day Trip (Approx. 7 hours)",
    details:
      "Package includes transport, park fees, bike rental, and picnic lunch. Great for adventure seekers. Optional visit to Olkaria Spa (extra cost).",
  },
  {
    title: "Lake Naivasha Escape",
    description:
      "Unwind with a boat ride, bird watching, and visits to nearby attractions like Crescent Island.",
    image: LakeNaivasha,
    price: "From KES 5,500 per person",
    duration: "Day Trip (Approx. 8 hours)",
    details:
      "Includes return transport, boat ride, park entry, and snacks. Perfect for nature lovers. Great opportunity to see hippos and birds up close.",
  },
  {
    title: "Kiambethu Tea Farm Tour",
    description: "Step into colonial history and enjoy fresh air, tea tasting, and scenic garden walks at Limuru's famous tea estate.",
    image: Kiambethu_Tea,
    price: "Ksh 4,500 per person (inclusive of lunch and guided tour).",
    duration: "Half-day (Approx. 5 hours)",
    details: "Learn about tea production and colonial history from one of Kenya's oldest tea farms. Enjoy a peaceful walk through indigenous forest and gardens. Tea tasting session and a delicious farm-to-table lunch included"
  },
  {
    title: "Ol Pejeta Conservancy Day Trip",
    description: "Visit East Africa's largest black rhino sanctuary, meet the last two northern white rhinos, and enjoy a game drive.",
    image: Ol_Pejeta,
    price: "From Ksh 9,000 per person (inclusive of transport, park fees, and lunch).",
    duration: "Full-day (approx. 8-10 hours)",
    details: "Explore a premier wildlife conservancy in Laikipia, Home to the Big Five and the last two northern white rhinos. Optional activities include chimpanzee sanctuary visit, game drives, and lunch at Morani's"
  },
  {
    title: "Ngong Hills Hiking Experience",
    description: "Trek along the rolling ridges of Ngong Hills with breathtaking views and a refreshing outdoor adventure close to Nairobi.",
    image: Ngong_Hills,
    price: "From Ksh 2,000 per person ",
    duration: "Half-day (approx. 4-6 hours)",
    details: "Popular hiking trail just outside Nairobi, Sweeping views of the Great Rift Valley and city skyline. Ideal for nature lovers and outdoor enthusiasts. Package includes transport, park fees, and a picnic lunch."
  }  
];

const LocalPackages = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDetails = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Intro Header */}
      <section
        className="relative bg-cover bg-center h-72 text-white flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero-local-packages.jpg')" }}
      >
        <div className="bg-primary_yellow p-8 rounded">
          <h1 className="text-4xl font-bold text-center">
            Discover Local Adventures
          </h1>
          <p className="text-center mt-2 text-lg">
            Enjoy exciting day trips and weekend getaways within Kenya, curated
            for unforgettable local experiences.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {localPackages.map((pkg, index) => (
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

              {expandedIndex === index && (
                <div className="bg-yellow-50 text-gray-700 p-3 rounded mb-4 text-sm border border-yellow-200">
                  <p className="mb-1">
                    <strong>Duration:</strong> {pkg.duration}
                  </p>
                  <p className="mb-1">
                    <strong>Price:</strong> {pkg.price}
                  </p>
                  <p>{pkg.details}</p>
                </div>
              )}

              <button
                onClick={() => toggleDetails(index)}
                className="text-primary_yellow font-semibold hover:underline focus:outline-none"
              >
                {expandedIndex === index ? "Show Less" : "View Details"}
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="bg-pink-50 text-primary_yellow text-center py-10">
        <h2 className="text-2xl font-bold">Looking for Custom Packages?</h2>
        <p className="mt-2">
          Let us tailor a local experience just for you. Reach out and let’s
          plan together.
        </p>
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

export default LocalPackages;
