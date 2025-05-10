import React, { useEffect, useRef } from "react";
import Hero from "../../Components/Hero/Hero";
import Masai_Mara from "../../assets/Safari-Masai-Mara.jpg";
import Diani_Beach from "../../assets/Diani-Beach.jpg";
import Mt_Kenya from "../../assets/Mt-Kenya.jpg";
import Karura_Forest from "../../assets/Karura-Forest-scaled.jpg";
import Nairobi_City from "../../assets/Nairobi-City.jpg";
import Kanunga_Waterfalls from "../../assets/Kanunga-Falls.jpg";

const destinations = [
  {
    name: "Maasai Mara",
    description:
      "Witness the Great Migration and breathtaking wildlife in Kenya's most iconic reserve.",
    image: Masai_Mara,
    slug: "maasai-mara",
  },
  {
    name: "Diani Beach",
    description:
      "Relax on pristine white sands with turquoise waters along Kenya's southern coast.",
    image: Diani_Beach,
    slug: "diani-beach",
  },
  {
    name: "Mount Kenya",
    description:
      "Adventure awaits at Kenya's highest mountain with hiking, climbing, and scenic beauty.",
    image: Mt_Kenya,
    slug: "mount-kenya",
  },
  {
    name: "Karura Forest",
    description:
      "Escape to the green heart of Nairobi for serene nature trails, waterfalls, caves, and picnic spots in this urban forest haven.",
    image: Karura_Forest,
    slug: "karura-forest",
  },
  {
    name: "Nairobi City",
    description:
      "Discover the vibrant pulse of Kenya's capital with its rich culture, historic landmarks, bustling markets, and dynamic nightlife.",
    image: Nairobi_City,
    slug: "https://nairobi.go.ke/",
  },
  {
    name: "Kanunga Waterfalls",
    description:
      "Unwind in nature's tranquility at Kanunga Waterfalls – a hidden gem with scenic views, lush greenery, and refreshing cascades.",
    image: Kanunga_Waterfalls,
    slug: "kanunga-waterfalls",
  },
];

const DestinationsP = () => {
  const destinationSectionRef = useRef(null);

  useEffect(() => {
    // Scroll to destination section on page load
    destinationSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div>
      {/* Hero section */}
      <Hero />

      {/* Header Section */}
      <section
        ref={destinationSectionRef}
        className="relative bg-cover bg-center h-72 text-white flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero-destinations.jpg')" }}
      >
        <div className="bg-primary_yellow p-8 rounded">
          <h1 className="text-4xl font-bold text-center">
            Explore Our Top Destinations
          </h1>
          <p className="text-center mt-2 text-lg">
            From African savannahs to serene coastal escapes, your next
            adventure awaits.
          </p>
        </div>
      </section>

      {/* Destination Cards Grid */}
      <section className="py-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((place, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 hover:shadow-lg ease-in-out duration-300"
          >
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
              <p className="text-sm text-gray-600 mb-4">
                {place.description}
              </p>
              <a
                href={`${place.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary_yellow font-semibold hover:underline"
              >
                Explore
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="bg-pink-50 text-primary_yellow text-center py-10">
        <h2 className="text-2xl font-bold">Not sure where to go?</h2>
        <p className="mt-2">
          Let us help you find the perfect destination tailored just for you.
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

export default DestinationsP;